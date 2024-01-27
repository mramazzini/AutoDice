import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./app/utils/auth";

const protectedRoutes = ["/dashboard"];

export default async function middleware(req: NextRequest) {
  const isAuthenticated = verifyToken(req);
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
