
// create middleware function


import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const auth = async () => {
  const cookie = cookies()
  const token = cookie.get('accessToken') || cookie.get('next-auth.session-token') as  string | undefined
  if (!token) {
    return {error: 'No token, authorization denied' }
  }

  return {user: token}
}

const protectedRoutes = [
  '/workspace',
  '/contact-sales',
  '/communnity',
  '/api'
]


export default async function middleware(req: NextRequest) {
  const { user, error } = await auth()
  const isLoggedIn = !!user

  console.log("Route:- ",req.nextUrl.pathname)
  console.log("isLoggedIn:- ", isLoggedIn)

  const isProtectedRoute = protectedRoutes.includes(req.nextUrl.pathname)

  if(req.nextUrl.pathname === '/sign-in') {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/workspace', req.nextUrl))
    }
    return NextResponse.next()
  }

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
  }

  return NextResponse.next();
}
