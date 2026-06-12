import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const validUsername = process.env.KEYSTATIC_USERNAME;
  const validPassword = process.env.KEYSTATIC_PASSWORD;
  const githubToken = process.env.KEYSTATIC_GITHUB_TOKEN;

  if (!validUsername || !validPassword || !githubToken) {
    return NextResponse.json({ error: 'CMS not configured' }, { status: 500 });
  }

  if (username !== validUsername || password !== validPassword) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  };

  // Keystatic reads this cookie for all GitHub API calls — no OAuth needed
  response.cookies.set('keystatic-gh-access-token', githubToken, cookieOptions);
  response.cookies.set('ks-admin-session', '1', cookieOptions);

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('keystatic-gh-access-token', '', { maxAge: 0, path: '/' });
  response.cookies.set('ks-admin-session', '', { maxAge: 0, path: '/' });
  return response;
}
