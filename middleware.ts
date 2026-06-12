import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/keystatic')) return NextResponse.next();

  // Allow the custom login page
  if (pathname === '/keystatic/login') return NextResponse.next();

  const session = request.cookies.get('ks-admin-session');
  if (!session?.value) {
    const loginUrl = new URL('/keystatic/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/keystatic/:path*'],
};
