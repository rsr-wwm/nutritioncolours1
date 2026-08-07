(function() {
  const botRegex = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|lighthouse/i;
  const isBot = botRegex.test(navigator.userAgent);
  if (isBot) {
    window.__IS_SEARCH_CRAWER__ = true;
    console.log('Crawl agent detected. Activating Crawl Shield.');
  }
})();
window.IS_BOT = /bot|crawler|spider|crawling|slurp|lighthouse|headless/i.test(navigator.userAgent);
window.partytown = {
  lib: '/~partytown/',
  forward: ['dataLayer.push']
};
