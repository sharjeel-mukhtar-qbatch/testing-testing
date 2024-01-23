function amazonUrls (marketplace) {
  const amazonDomain = 'https://www.amazon.';
  const domainMapping = { US: 'com', JP: 'co.jp', UK: 'co.uk' };

  const getDomain = suffix => amazonDomain + suffix + '/';

  if ([ 'CA', 'DE', 'ES', 'FR', 'IN', 'IT', 'NL' ].some(suffix => suffix === marketplace)) return getDomain(marketplace.toLowerCase());
  return getDomain(domainMapping[marketplace] || domainMapping.UK);
}

export function getAllowedMarketplaceUrls (apiKeyResponse) {
  if (!apiKeyResponse) return;

  const allowedUrls = [];
  const marketplaces = apiKeyResponse.markets;

  for (const marketplace of marketplaces) allowedUrls.push(amazonUrls(marketplace));

  return allowedUrls;
}

export const injectAmazonPageCSS = tabId => chrome.scripting.insertCSS({ target: { tabId }, files: [ 'assets/main.css' ] });

export const injectScript = (tabId, intervalId, scriptName) =>
  chrome.tabs.sendMessage(tabId, { message: scriptName, intervalId: intervalId }).catch(error => {
    if (error.message !== 'Could not establish connection. Receiving end does not exist.') console.log(error);
  });

export const loadingMessage = (tabId, name) =>
  chrome.tabs.sendMessage(tabId, { message: name, loader: false }).catch(error => {
    if (error.message !== 'Could not establish connection. Receiving end does not exist.') console.log(error);
  });
