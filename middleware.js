import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/sign-in", origin));
  }

  
  if (
    token &&
    (pathname.startsWith("/auth/sign-in") ||
      pathname.startsWith("/auth/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", origin));
  }

  // Allow other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/(api|trpc)(.*)",
    "/dashboard(.*)",
    "/",
    "/auth/sign-in",
    "/auth/sign-up",
  ],
};
