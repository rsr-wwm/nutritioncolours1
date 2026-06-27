/**
 * Cloudflare Edge Worker: Content Negotiation for AI Bots & LLM Crawlers
 * 
 * This worker intercepts incoming requests. If the request is from a known AI bot,
 * it transparently redirects or rewrites the request to serve a token-optimized 
 * markdown or JSON feed version, saving crawler energy and origin bandwidth.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('user-agent') || '';
    
    // List of common AI bot user-agent substrings
    const aiBots = [
      'gptbot',
      'chatgpt-user',
      'google-extended',
      'perplexitybot',
      'cohere-ai',
      'anthropic-ai',
      'claude-web',
      'omgilibot',
      'facebookbot'
    ];
    
    const isAiBot = aiBots.some(bot => userAgent.toLowerCase().includes(bot));
    
    // Content negotiation rules
    if (isAiBot) {
      console.log(`[AI Bot Detected] User-Agent: ${userAgent} | Requesting: ${url.pathname}`);
      
      // 1. Route main HTML pages to the plain-text documentation
      if (url.pathname === '/' || url.pathname === '/plans' || url.pathname === '/about' || url.pathname === '/knowledge') {
        url.pathname = '/llms.txt';
        return fetch(new Request(url.toString(), request));
      }
      
      // 2. Redirect dataset requests to the structured feed
      if (url.pathname === '/data' || url.pathname === '/data/') {
        url.pathname = '/data/clinical-feed.json';
        return fetch(new Request(url.toString(), request));
      }
    }
    
    // Standard pass-through for humans and friendly search bots (Googlebot, Bingbot, etc.)
    return fetch(request);
  }
};
