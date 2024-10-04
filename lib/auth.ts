import { PrismaClient } from "@prisma/client";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const prisma = new PrismaClient();

export const NEXT_AUTH_CONFIG = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id;

        const payload = {
          user: {
            id: user.id,
          },
        };
        const accessToken = jwt.sign(
          payload,
          process.env.JWT_SECRET || "mysecretkey",
          {
            expiresIn: 36000,
          }
        );

        token.accessToken = accessToken;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.uid;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  events: {
    signIn: async ({ user, account }: any) => {
      const email = user.email;
      const name = user.name;

      if (account.provider === "google") {
        const googleId = account.providerAccountId;

        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email,
              name,
              googleId,
            },
          });
        } else {
          await prisma.user.update({
            where: { email },
            data: {
              googleId,
              name,
            },
          });
        }
      } else if (account.provider === "github") {
        const githubId = account.providerAccountId;

        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email,
              name,
              githubId,
            },
          });
        } else {
          await prisma.user.update({
            where: { email },
            data: {
              githubId,
              name,
            },
          });
        }
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      if (!process.env.JWT_SECRET) {
        console.error("JWT NOT FOUND");
        return;
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 36000,
      });

      const cookie = serialize("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 36000,
        path: "/",
      });

      console.log("Token created on sign-in:", token);
    },
  },
};
