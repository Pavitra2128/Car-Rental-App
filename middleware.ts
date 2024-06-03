import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/[[...rest]]' // Ensure this matches your catch-all route
  ],
};