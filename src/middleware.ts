import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url } = context;

  // Block dev-components routes in production
  if (url.pathname.startsWith('/dev-components/')) {
    // Check if in production environment
    if (import.meta.env.PROD) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }

    // In development, add security headers to prevent indexing
    const response = await next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  return next();
};
