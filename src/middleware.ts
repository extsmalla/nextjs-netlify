import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;


  const response = NextResponse.next();

  if (!url.pathname.includes('en-us')) {
    // redirect to the same path with /en-us prefix with absoulte url
    return NextResponse.redirect(`${url.origin}/en-us${url.pathname}`)

  }

  return response;
}