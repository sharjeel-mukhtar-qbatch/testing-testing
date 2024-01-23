import { domainsSuffixes } from './constants';
import { getElementByXpath } from './arbitrage_element_functions';

export async function findContainerToAppendGridInto (xPaths) {
  let arbitrageDoc;

  for (const detailPageSubContainerPath of xPaths) {
    let rightSidebar = getElementByXpath(detailPageSubContainerPath);

    if (rightSidebar.snapshotLength > 0 && rightSidebar.snapshotItem(0)) {
      arbitrageDoc = rightSidebar.snapshotItem(0);
      break;
    }
  }

  return arbitrageDoc;
}

export function googleLinkAndGoogleShoppingLink (itemTitle, currentUrl) {
  let googleBaseUrlWithMarketplace = amazonMarketplaces(currentUrl);
  let formattedTitle = itemTitle.replace(/[^\w\s]/gi, '').toLowerCase();

  formattedTitle = formattedTitle.replace(/\s+/g, '+');
  let googleLinkUrl = googleBaseUrlWithMarketplace + 'search?q=' + formattedTitle;
  let googleShoppingLinkUrl = googleBaseUrlWithMarketplace + 'search?tbm=shop&q=' + formattedTitle;

  return [ googleLinkUrl, googleShoppingLinkUrl ];
}

function amazonMarketplaces (currentUrl) {
  let baseUrl = 'https://www.google';

  const defaultSuffix = '.co.uk/';

  const getBaseUrl = suffix => baseUrl + suffix;

  const foundDomain = domainsSuffixes.find(suffix => currentUrl.includes(suffix));

  return getBaseUrl(foundDomain ?? defaultSuffix);
}
