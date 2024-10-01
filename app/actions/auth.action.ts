"use server"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from "@/lib/prisma";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export const signin = async (email: string, password: string) => {

  if (!email || !password) {
    return ({ error: 'Please provide email and password' });
  }

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    return ({ error: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return ({ error: 'Invalid credentials' });
  }

  const payload = {
    user: {
      id: user.id
    }
  }

  if (!process.env.JWT_SECRET) {
    return ({ error: 'Developer Error:- JWT secret is not defined' });
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 36000
  });

  if (!token) {
    return ({ error: 'Developer Error:- JWT token is not generated' });
  }

  cookies().set({
    name: 'accessToken',
    value: token,
    httpOnly: true,
    path: '/',
    expires: new Date(Date.now() + 36000 * 1000)
  })

  return { success: user };
}

export const signUp = async (name: string, email: string, password: string) => {

  if (!name || !email || !password) {
    return ({ error: 'Please provide name, email and password' });
  }

  console.log("Email:- ", email, "Password:- ", password, "Name:- ", name)

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (user) {
    return ({ error: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  const payload = {
    user: {
      id: newUser.id
    }
  }

  if (!process.env.JWT_SECRET) {
    return ({ error: 'Developer Error:- JWT secret is not defined' });
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 36000
  });

  if (!token) {
    return ({ error: 'Developer Error:- JWT token is not generated' });
  }

  cookies().set({
    name: 'accessToken',
    value: token,
    httpOnly: true,
    path: '/',
    expires: new Date(Date.now() + 36000 * 1000)
  })

  return { success: newUser };
}

export const logout = async () => {
  const cookie = cookies()
  const token = cookie.get('accessToken') as string | undefined

  if(!token){
    redirect('/sign-in')
    return {error: 'No token, authorization denied' }
  }

  cookie.delete('accessToken')
  redirect('/sign-in')
}
