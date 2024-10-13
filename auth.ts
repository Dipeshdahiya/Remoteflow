import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            id: "credentials",
            name: 'Credentials',
            credentials: {
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                try {

                    const name = credentials?.name as string;
                    const email = credentials.email as string | undefined;
                    const password = credentials.password as string | undefined;

                    if (!email || !password) {
                        throw new CredentialsSignin("Please provide both email & password");
                    }

                    const existingUser = await prisma.user.findUnique({
                        where: {
                            email
                        }
                    })

                    if (existingUser) {
                        const ismatched = existingUser.password == password
                        console.log('ismatched:-', ismatched)
                        if (ismatched) {
                            return existingUser;
                        } else {
                            throw new CredentialsSignin("Invalid credentials");
                        }

                    } else {
                        const newUser = await prisma.user.create({
                            data: {
                                name,
                                email,
                                password
                            }
                        });

                        return newUser
                    }



                } catch (error: any) {
                    console.log(error.message, 'error from NextAuth authorize')
                    throw new CredentialsSignin(error.message);
                }
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
        }),
    ],
    pages: {
        signIn: '/sign-in',
    },
    callbacks: {
        signIn: async ({ user, account }) => {
            if (account?.provider === "google") {
                console.log('user from account', account)
                console.log('user from Google', user)
                try {
                    const { email, name, image, id } = user as { email: string | undefined, name: string, image: string, id: string };;
                    const existingUser = await prisma.user.findUnique({
                        where: {
                            email
                        }
                    })

                    if (existingUser) {
                        return true

                    } else {
                        if (!email) throw new CredentialsSignin("Email is required");

                        const newUser = await prisma.user.create({
                            data: {
                                name,
                                email,
                                googleId: id,
                            }
                        });

                        return true
                    }
                } catch (error) {
                    console.log(error, 'error while Signing in user by ', account?.provider)
                    throw new CredentialsSignin("Error while creating user");
                }
            }

        },

    },


})