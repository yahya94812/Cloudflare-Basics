export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const name = url.searchParams.get('name') || 'World';
    
    // Handle different routes
    if (url.pathname === '/') {
      return new Response(`Hello, ${name}!`, {
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    if (url.pathname === '/json') {
      return new Response(JSON.stringify({
        message: `Hello, ${name}!`,
        timestamp: new Date().toISOString()
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
};