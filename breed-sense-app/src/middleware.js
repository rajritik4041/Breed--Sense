import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" ||  path === "/" || path === "/signup";

  const token = request.cookies.get("token")?.value || '';

  // Already logged in → cannot go to login/signup
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // Not logged in → cannot access private pages
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Prevent caching so back button never loads old page
  const response = NextResponse.next();
  response.headers.set("Cache-Control", "no-store, must-revalidate");

  return response;
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
