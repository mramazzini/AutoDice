import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './app/utils/auth';

const protectedRoutes = ['/dashboard', '/character-creator'];

export async function middleware(req: NextRequest) {
  const isAuthenticated = await verifyToken();

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
