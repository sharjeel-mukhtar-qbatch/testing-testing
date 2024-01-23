import { d as detailPageDropDownsKeysIds, o as otherUrlCheck, l as listPageUrlCheck, a as detailPageUrlCheck } from "./assets/chunk-constants.js";
import { l as lodashExports } from "./assets/chunk-lodash.js";
async function setLocalStorage() {
  let response = await getAllDataHash();
  await chrome.storage.local.set({
    ...lodashExports.pick(
      response.websites.amazon,
      "detail_page_asin",
      "page_not_found",
      "detail_page_subcontainer",
      "list_page_container",
      "list_page_grid_container",
      "list_page_subcontainer",
      "detail_page_middle_container"
    ),
    ...lodashExports.pick(response.urls, "arbitrage_authenticate_api", "arbitrage_reverse_search", "arbitrage_authenticate_api_fallback", "arbitrage_reverse_search_fallback", "arbitrage_website"),
    ...lodashExports.pick(response.profitCalculator, "vat_flat_rate"),
    auth_key: decodeURIComponent(atob(response.auth_key)),
    fulfilment_fee_distribution: response.profitCalculator,
    fulfilment_fee_distribution_xpaths: response.productDetailsPageXpath,
    profit_calculator_drop_down: true,
    pricing_and_offerings_drop_down: false,
    reverse_search_drop_down: false,
    google_shopping_drop_down: false
  });
}
const updateCompartmentPositions = () => {
  let positionHash = {};
  for (let i = 0; i < detailPageDropDownsKeysIds.length; i++)
    positionHash[detailPageDropDownsKeysIds[i]] = i;
  chrome.storage.local.set({ compartmentPositions: positionHash });
};
async function getStoreByArbitrageApi() {
  try {
    const { auth_key: authKey } = await chrome.storage.local.get(["auth_key"]);
    const formDataValues = { action: "get_supported_stores", authKey };
    let response = await getAPIResponse(formDataValues);
    return response;
  } catch (error) {
    console.log("Error in fetching get_supported_stores", error);
  }
}
async function getAllDataHash() {
  const params = { headers: { "Content-Type": "application/json" }, method: "GET" };
  const apiURL = "https://api.ahonline.top/private/extension/extension_config.json";
  const appURL = "https://app.arbitragehero.com/private/extension/extension_config.json";
  let response = await makeRequest(apiURL, params) || await makeRequest(appURL, params);
  return response;
}
async function getAPIResponse(formDataValues, asins = null, mainServerAPICheck = false) {
  let { arbitrage_authenticate_api: apiEndpoint, arbitrage_authenticate_api_fallback: appEndpoint } = await chrome.storage.local.get([
    "arbitrage_authenticate_api",
    "arbitrage_authenticate_api_fallback"
  ]);
  if (!apiEndpoint) {
    await setLocalStorage();
    ({ arbitrage_authenticate_api: apiEndpoint, arbitrage_authenticate_api_fallback: appEndpoint } = await chrome.storage.local.get([
      "arbitrage_authenticate_api",
      "arbitrage_authenticate_api_fallback"
    ]));
  }
  const formData = new FormData();
  Object.entries(formDataValues).forEach(([key, value]) => formData.append(key, value));
  if (asins)
    for (const asin of asins)
      formData.append("asins[]", asin);
  const requestOptions = { method: "POST", body: formData, redirect: "follow" };
  let res;
  if (mainServerAPICheck)
    res = await makeRequest(appEndpoint, requestOptions);
  if (!res)
    res = await makeRequest(apiEndpoint, requestOptions) || await makeRequest(appEndpoint, requestOptions);
  return res;
}
async function makeRequest(endpoint, requestOptions) {
  try {
    const controller = new AbortController();
    requestOptions.signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    let res = await fetch(endpoint, requestOptions);
    clearTimeout(timeoutId);
    return await res.json();
  } catch (error) {
    console.log("Api Url Invalid Response: ", error);
  }
}
async function checkApiKey(key) {
  try {
    const { auth_key: authKey } = await chrome.storage.local.get(["auth_key"]);
    const formDataValues = { action: "api_key_check", authKey, apiKey: key };
    let response = await getAPIResponse(formDataValues);
    if (response.license) {
      const { apiKeyResponse } = await chrome.storage.local.get(["apiKeyResponse"]);
      await chrome.storage.local.set({ apiKeyResponse: response, apiKey: key, keyExpired: false });
      if (apiKeyResponse) {
        const { compartmentPositions: positions } = await chrome.storage.local.get(["compartmentPositions"]);
        (Object.keys(apiKeyResponse.access)[0] != Object.keys(response.access)[0] || !positions) && updateCompartmentPositions();
      } else
        updateCompartmentPositions();
    } else {
      const { apiKey } = await chrome.storage.local.get(["apiKey"]);
      if (apiKey) {
        await chrome.storage.local.set({ keyExpired: true, key_validated: false });
      }
      await chrome.storage.local.set({ apiKeyResponse: null, apiKey: null });
    }
    return response;
  } catch (error) {
    console.log("Error in api_key_check call", error);
  }
}
async function fetchReverseSearchData(asins, market, mainServerAPICheck) {
  try {
    if (asins) {
      let { auth_key: authKey } = await chrome.storage.local.get(["auth_key"]) || decodeURIComponent(atob("ZmQxNjA2MjAtYmQzYy0xY2M0LTMxOWUtYzU1Nzg2YjFiYjlj"));
      const { apiKey } = await chrome.storage.local.get(["apiKey"]);
      const formDataValues = { action: "reverse_search", authKey, market, apiKey };
      let response = await getAPIResponse(formDataValues, asins, mainServerAPICheck);
      response = await checkAPIResult(response, apiKey);
      return response;
    }
  } catch (error) {
    console.log("Error in fetching Reverse Search Data", error);
  }
}
async function fetchProductInfoData(asins, market, marketplace, mainServerAPICheck, BSR, category, salePrice) {
  try {
    if (asins) {
      let { auth_key: authKey } = await chrome.storage.local.get(["auth_key"]) || decodeURIComponent(atob("ZmQxNjA2MjAtYmQzYy0xY2M0LTMxOWUtYzU1Nzg2YjFiYjlj"));
      const { apiKey } = await chrome.storage.local.get(["apiKey"]);
      let formDataValues = { action: "reverse_search", authKey, market, apiKey, marketplace };
      if (BSR && /\d/.test(BSR))
        formDataValues["BSR"] = BSR;
      if (category) {
        formDataValues["category"] = category;
        formDataValues["salePrice"] = salePrice;
      }
      let response = await getAPIResponse(formDataValues, asins, mainServerAPICheck);
      response = await checkAPIResult(response, apiKey);
      return response;
    }
  } catch (error) {
    console.log("Error in fetching Reverse Search Data", error);
  }
}
async function checkAPIResult(response, apiKey) {
  try {
    response.license_status.license ? await chrome.storage.local.set({ apiKeyResponse: response.license_status, apiKey, keyExpired: false }) : await chrome.storage.local.set({ apiKeyResponse: null, apiKey: null, keyExpired: true });
  } catch (error) {
    return "response_null";
  }
  return response;
}
async function getOffersForDetailPage(apiEndpoint) {
  const requestOptions = { method: "GET", redirect: "follow" };
  try {
    const res = await fetch(apiEndpoint, requestOptions);
    if (res.status === 200)
      return await res.text();
    else
      return void 0;
  } catch (error) {
    console.log("Api apiEndpoint Invalid Response:", error);
    return void 0;
  }
}
async function fetchDetailPageOffersAndGoogleShopping(apiEndpoint, tabIdOfCurrentWindow, offersCheck = false) {
  if (offersCheck) {
    let offerData = await getOffersForDetailPage(apiEndpoint);
    if (offerData)
      return offerData;
  }
  try {
    const window = await chrome.windows.create({ url: apiEndpoint, focused: false });
    chrome.windows.update(window.id, { width: 0, height: 0 });
    const tab = await chrome.tabs.query({ windowId: window.id });
    await new Promise((resolve) => setTimeout(resolve, 5e3));
    await chrome.storage.local.get("TabIdsForBackgroundWindows", async (result) => {
      if (result.TabIdsForBackgroundWindows) {
        result.TabIdsForBackgroundWindows[`${tabIdOfCurrentWindow}`] = window.id;
        await chrome.storage.local.set({ TabIdsForBackgroundWindows: result.TabIdsForBackgroundWindows });
      } else {
        await chrome.storage.local.set({ TabIdsForBackgroundWindows: { tabIdOfCurrentWindow: window.id } });
      }
    });
    if (tab && tab.length > 0) {
      const result = await chrome.scripting.executeScript({ target: { tabId: tab[0].id }, function: () => {
        return document.body.innerHTML;
      } });
      if (result && result[0]) {
        chrome.windows.remove(window.id).catch((err) => console.log("Error While Closing Window", err));
        return result[0].result;
      } else
        await chrome.windows.remove(window.id).catch((err) => console.log("Error While Closing Window", err));
    } else
      await chrome.windows.remove(window.id).catch((err) => console.log("Error While Closing Window", err));
    await onTabRemove(tabIdOfCurrentWindow);
  } catch (error) {
    console.log("Error in fetching detail page Google Shopping data.", error);
  }
}
async function onTabRemove(tabId, checkForListener = false) {
  try {
    await chrome.storage.local.get("TabIdsForBackgroundWindows", async (result) => {
      if (result.TabIdsForBackgroundWindows) {
        if (result.TabIdsForBackgroundWindows[`${tabId}`]) {
          if (checkForListener)
            chrome.windows.remove(result.TabIdsForBackgroundWindows[`${tabId}`]).catch((err) => console.log("Error While Closing Window", err));
          delete result.TabIdsForBackgroundWindows[`${tabId}`];
          await chrome.storage.local.set({ TabIdsForBackgroundWindows: result.TabIdsForBackgroundWindows });
        }
      }
    });
  } catch (error) {
    console.log("On remove listener error");
  }
}
function amazonUrls(marketplace) {
  const amazonDomain = "https://www.amazon.";
  const domainMapping = { US: "com", JP: "co.jp", UK: "co.uk" };
  const getDomain = (suffix) => amazonDomain + suffix + "/";
  if (["CA", "DE", "ES", "FR", "IN", "IT", "NL"].some((suffix) => suffix === marketplace))
    return getDomain(marketplace.toLowerCase());
  return getDomain(domainMapping[marketplace] || domainMapping.UK);
}
function getAllowedMarketplaceUrls(apiKeyResponse) {
  if (!apiKeyResponse)
    return;
  const allowedUrls = [];
  const marketplaces = apiKeyResponse.markets;
  for (const marketplace of marketplaces)
    allowedUrls.push(amazonUrls(marketplace));
  return allowedUrls;
}
const injectAmazonPageCSS = (tabId) => chrome.scripting.insertCSS({ target: { tabId }, files: ["assets/main.css"] });
const injectScript = (tabId, intervalId, scriptName) => chrome.tabs.sendMessage(tabId, { message: scriptName, intervalId }).catch((error) => {
  if (error.message !== "Could not establish connection. Receiving end does not exist.")
    console.log(error);
});
const loadingMessage = (tabId, name) => chrome.tabs.sendMessage(tabId, { message: name, loader: false }).catch((error) => {
  if (error.message !== "Could not establish connection. Receiving end does not exist.")
    console.log(error);
});
chrome.runtime.onInstalled.addListener(async () => {
  if (navigator.onLine) {
    await setLocalStorage();
    let registeredStoresByArbitrage = await getStoreByArbitrageApi();
    await chrome.storage.local.set({ registered_stores_by_arbitrage: registeredStoresByArbitrage });
  }
});
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  var _a, _b;
  const amazonDomainPattern = /^(https?:\/\/)?(www\.)?amazon\.[a-z.]+/i;
  if (navigator.onLine) {
    const matcher = (txt) => tab.url.includes(txt);
    const { apiKey, apiKeyResponse } = await chrome.storage.local.get(["apiKey", "apiKeyResponse"]);
    const { store_container_is_appended: isStorePageAppend } = await chrome.storage.local.get(["store_container_is_appended"]);
    if (changeInfo.status === "complete" && isStorePageAppend && !otherUrlCheck.some(matcher)) {
      chrome.scripting.insertCSS({ target: { tabId }, files: ["assets/main.css"] });
      injectScript(tabId, -1, "store_page_app");
    }
    if (!(apiKey && (apiKeyResponse == null ? void 0 : apiKeyResponse.license) && ((apiKeyResponse == null ? void 0 : apiKeyResponse.access.all) || ((_a = apiKeyResponse == null ? void 0 : apiKeyResponse.access) == null ? void 0 : _a.reverse_search))))
      return;
    if (!((_b = getAllowedMarketplaceUrls(apiKeyResponse)) == null ? void 0 : _b.some(matcher)))
      return;
    if (amazonDomainPattern.test(tab.url) && [...listPageUrlCheck, ...detailPageUrlCheck].some(matcher) && !otherUrlCheck.some(matcher)) {
      if (changeInfo.status !== "complete") {
        let intervalId = null;
        injectAmazonPageCSS(tabId);
        if (listPageUrlCheck.some(matcher) && !detailPageUrlCheck.some(matcher))
          intervalId = setInterval(() => injectScript(tabId, intervalId, "amazon_list_page_app"), 400);
        else if (detailPageUrlCheck.some(matcher))
          intervalId = setInterval(() => injectScript(tabId, intervalId, "product_detail_page_app"), 400);
        return;
      }
      if (changeInfo.status === "complete") {
        await chrome.storage.local.set({ tab_url: tab.url });
        if (listPageUrlCheck.some(matcher) && !detailPageUrlCheck.some(matcher))
          loadingMessage(tabId, "amazon_list_page_loader");
        else if (detailPageUrlCheck.some(matcher))
          loadingMessage(tabId, "product_detail_page_loader");
      }
    }
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.reverseSearch) {
    (async () => sendResponse(await fetchReverseSearchData(message.asin, message.market, message == null ? void 0 : message.mainServerAPICheck)))();
    return true;
  }
  if (message.productInfo) {
    (async () => sendResponse(await fetchProductInfoData(message.asin, message.market, message == null ? void 0 : message.marketplace, message == null ? void 0 : message.mainServerAPICheck, message == null ? void 0 : message.bsr, message == null ? void 0 : message.category, message == null ? void 0 : message.salePrice)))();
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
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => sendResponse(tabs[0].url));
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
async function myAsyncInterval(interval, callback) {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, interval));
    await callback();
  }
}
myAsyncInterval(24 * 60 * 60 * 1e3, async () => {
  const result = await new Promise((resolve) => chrome.storage.local.get("apiKey", resolve));
  const key = result.apiKey;
  if (key) {
    await checkApiKey(key);
  }
});
myAsyncInterval(2 * 60 * 60 * 1e3, async () => {
  let registeredStoresByArbitrage = await getStoreByArbitrageApi();
  if (registeredStoresByArbitrage) {
    await chrome.storage.local.set({
      registered_stores_by_arbitrage: registeredStoresByArbitrage
    });
  }
});
myAsyncInterval(2 * 60 * 60 * 1e3, async () => {
  await setLocalStorage();
});
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 2e4);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
