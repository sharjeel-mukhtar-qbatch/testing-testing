import { checkApiKey, fetchProductInfoData, fetchReverseSearchData } from '../src/utils/serviceWorker/api';
import { detailPageUrlCheck, listPageUrlCheck, otherUrlCheck } from '../src/utils/constants';
import { fetchDetailPageOffersAndGoogleShopping, onTabRemove } from '../src/utils/serviceWorker/offers';
import { getAllDataHash, getStoreByArbitrageApi, setLocalStorage } from '../src/utils/serviceWorker/storage';
import { getAllowedMarketplaceUrls, injectAmazonPageCSS, injectScript, loadingMessage } from '../src/utils/serviceWorker/helpers';

chrome.runtime.onInstalled.addListener(async () => {
  if (navigator.onLine) {
    await setLocalStorage();
    let registeredStoresByArbitrage = await getStoreByArbitrageApi();

    await chrome.storage.local.set({ registered_stores_by_arbitrage: registeredStoresByArbitrage });
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const amazonDomainPattern = /^(https?:\/\/)?(www\.)?amazon\.[a-z.]+/i;

  if (navigator.onLine) {
    const matcher = txt => tab.url.includes(txt);
    const { apiKey: apiKey, apiKeyResponse: apiKeyResponse } = await chrome.storage.local.get([ 'apiKey', 'apiKeyResponse' ]);
    const { store_container_is_appended: isStorePageAppend } = await chrome.storage.local.get([ 'store_container_is_appended' ]);

    if (changeInfo.status === 'complete' && isStorePageAppend && !otherUrlCheck.some(matcher)) {
      chrome.scripting.insertCSS({ target: { tabId }, files: [ 'assets/main.css' ] });

      injectScript(tabId, -1, 'store_page_app');
    }

    if (!(apiKey && apiKeyResponse?.license && (apiKeyResponse?.access.all || apiKeyResponse?.access?.reverse_search))) return;

    if (!getAllowedMarketplaceUrls(apiKeyResponse)?.some(matcher)) return;

    if (amazonDomainPattern.test(tab.url) && [ ...listPageUrlCheck, ...detailPageUrlCheck ].some(matcher) && !otherUrlCheck.some(matcher)) {
      if (changeInfo.status !== 'complete') {
        let intervalId = null;

        injectAmazonPageCSS(tabId);
        if (listPageUrlCheck.some(matcher) && !detailPageUrlCheck.some(matcher)) intervalId = setInterval(() => injectScript(tabId, intervalId, 'amazon_list_page_app'), 400);
        else if (detailPageUrlCheck.some(matcher)) intervalId = setInterval(() => injectScript(tabId, intervalId, 'product_detail_page_app'), 400);

        return;
      }
      if (changeInfo.status === 'complete') {
        await chrome.storage.local.set({ tab_url: tab.url });

        if (listPageUrlCheck.some(matcher) && !detailPageUrlCheck.some(matcher)) loadingMessage(tabId, 'amazon_list_page_loader');
        else if (detailPageUrlCheck.some(matcher)) loadingMessage(tabId, 'product_detail_page_loader');
      }
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.reverseSearch) {
    (async () => sendResponse(await fetchReverseSearchData(message.asin, message.market, message?.mainServerAPICheck)))();
    return true;
  }

  if (message.productInfo) {
    (async () => sendResponse(await fetchProductInfoData(message.asin, message.market, message?.marketplace, message?.mainServerAPICheck, message?.bsr, message?.category, message?.salePrice)))();
    return true;
  }
  if (message.clear_interval) {
    clearInterval(message.intervalId);
    return true;
  }
  if (message.getAllDataByArbitrage) {
    (async () => {
      let response = await getAllDataHash();

      await chrome.storage.local.set({ fulfilment_fee_distribution: response.profitCalculator, fulfilment_fee_distribution_xpaths: response.productDetailsPageXpath });
      sendResponse(response);
    })();
    return true;
  }
  if (message.checkApiKeyValidation) {
    (async () => sendResponse(await checkApiKey(message.apiKey)))();
    return true;
  }
  if (message.currentUrl) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => sendResponse(tabs[0].url));
    return true;
  }
  if (message.getAllStoresDataByArbitrage) {
    (async () => {
      let registeredStoresByArbitrage = await getStoreByArbitrageApi();

      await chrome.storage.local.set({ registered_stores_by_arbitrage: registeredStoresByArbitrage });
      sendResponse(registeredStoresByArbitrage);
    })();
    return true;
  }

  if (message.detailPageOffers) {
    (async () => {
      const response = await fetchDetailPageOffersAndGoogleShopping(message.urlEndpoint, sender.tab.id, message.offersCheck);

      sendResponse(response);
    })();
    return true;
  }

});

chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => await onTabRemove(tabId, true));

async function myAsyncInterval (interval, callback) {
  while (true) {
    await new Promise(resolve => setTimeout(resolve, interval));
    await callback();
  }
}

myAsyncInterval(24 * 60 * 60 * 1000, async () => {
  const result = await new Promise(resolve => chrome.storage.local.get('apiKey', resolve));
  const key = result.apiKey;

  if (key) {
    await checkApiKey(key);
  }
});

myAsyncInterval(2 * 60 * 60 * 1000, async () => {
  let registeredStoresByArbitrage = await getStoreByArbitrageApi();

  if (registeredStoresByArbitrage) {
    await chrome.storage.local.set({
      registered_stores_by_arbitrage: registeredStoresByArbitrage,
    });
  }
});

myAsyncInterval(2 * 60 * 60 * 1000, async () => {
  await setLocalStorage();
});

const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20000);

chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
