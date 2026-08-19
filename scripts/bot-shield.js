(function() {
  // Comprehensive bot detection with classification
  const ua = navigator.userAgent;
  const uaLower = ua.toLowerCase();
  
  // Search engine crawlers (get ultra-light HTML)
  const searchCrawlerRegex = /googlebot|bingbot|duckduckbot|yandexbot|baiduspider|slurp|teoma|crawler|lighthouse/i;
  const isSearchCrawler = searchCrawlerRegex.test(ua);
  
  // AI/LLM crawlers (get token-optimized content)
  const aiCrawlerRegex = /gptbot|chatgpt-user|google-extended|perplexitybot|cohere-ai|anthropic-ai|claude-web|omgilibot|ccbot|bytespider/i;
  const isAiCrawler = aiCrawlerRegex.test(ua);
  
  // Social preview bots
  const socialBotRegex = /facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|telegrambot|whatsapp|pinterestbot/i;
  const isSocialBot = socialBotRegex.test(ua);
  
  // General bot detection
  const generalBotRegex = /bot|spider|crawling|headless|phantom|prerender|render|screenshot/i;
  const isGeneralBot = generalBotRegex.test(ua);
  
  // Set flags for the application to use
  if (isSearchCrawler) {
    window.__IS_SEARCH_CRAWLER__ = true;
    window.__CRAWLER_TYPE__ = 'search';
    console.log("[Crawl Shield] Search crawler detected. Serving ultra-light semantic HTML.");
  } else if (isAiCrawler) {
    window.__IS_SEARCH_CRAWLER__ = true;
    window.__CRAWLER_TYPE__ = 'ai';
    console.log("[Crawl Shield] AI crawler detected. Serving token-optimized content.");
  } else if (isSocialBot) {
    window.__IS_SOCIAL_BOT__ = true;
    window.__CRAWLER_TYPE__ = 'social';
    console.log("[Crawl Shield] Social preview bot detected. Serving rich preview content.");
  }
  
  // Legacy flag for backward compatibility
  window.IS_BOT = isGeneralBot;
})();
(function() {
  const botRegex = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|lighthouse/i;
  const isBot = botRegex.test(navigator.userAgent);
  if (isBot) {
    window.__IS_SEARCH_CRAWLER__ = true;
    console.log("Crawl agent detected. Activating Crawl Shield.");
  }
})();
// Early bot detection for crawl-budget CPU saving
window.IS_BOT = /bot|crawler|spider|crawling|slurp|lighthouse|headless/i.test(navigator.userAgent);
