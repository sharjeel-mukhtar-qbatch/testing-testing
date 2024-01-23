export const getReverseSearch = (asins, marketplace, mainServerAPICheck = false) => chrome.runtime.sendMessage({ reverseSearch: true, asin: asins, mainServerAPICheck, market: marketplace });

export const getProductInfo = (asins, market, marketplace, mainServerAPICheck = false, category = null, bsr = null, salePrice = 0) =>
  chrome.runtime.sendMessage({ productInfo: true, asin: asins, mainServerAPICheck, market, marketplace, bsr, category, salePrice });

export const getAsinByXpath = path => document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Xpath function to the element of specific place in document with using ORDERED_NODE_SNAPSHOT_TYPE
export const getElementByXpath = path => document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Get the currency tag with using the domain
export function getSymbolAndMarket (domain) {
  const domainMappings = {
    com: { symbol: '$', market: 1, value: 'US' },
    'co.uk': { symbol: '£', market: 2, value: 'UK' },
    de: { symbol: '€', market: 3, value: 'DE' },
    fr: { symbol: '€', market: 4, value: 'FR' },
    'co.jp': { symbol: '¥', market: 5, value: 'JP' },
    ca: { symbol: '$', market: 6, value: 'CA' },
    it: { symbol: '€', market: 8, value: 'IT' },
    es: { symbol: '€', market: 9, value: 'ES' },
    in: { symbol: '₹', market: 10, value: 'IN' },
  };

  const { symbol, market, value } = domainMappings[domain] || domainMappings['co.uk'];

  return [ symbol, market, value ];
}

export const sendMessageForOffersAndGoogleShopping = (url, checkForOffers) => chrome.runtime.sendMessage({ detailPageOffers: true, urlEndpoint: url, offersCheck: checkForOffers });
