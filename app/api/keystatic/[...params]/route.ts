import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

export const dynamic = 'force-dynamic';

const { GET: ksGET, POST } = makeRouteHandler({ config });
export { POST };

export async function GET(request: Request, context: { params: Promise<{ params: string[] }> }) {
  const response = await ksGET(request, context);

  // Keystatic's githubLogin doesn't request `repo` scope, so the token can't
  // commit. Intercept the redirect to GitHub OAuth and inject scope=repo.
  if (response.status === 307 || response.status === 302) {
    const location = response.headers.get('location');
    if (location?.includes('github.com/login/oauth/authorize')) {
      const authUrl = new URL(location);
      authUrl.searchParams.set('scope', 'repo');
      const newHeaders = new Headers(response.headers);
      newHeaders.set('location', authUrl.toString());
      return new Response(null, { status: response.status, headers: newHeaders });
    }
  }

  return response;
}
