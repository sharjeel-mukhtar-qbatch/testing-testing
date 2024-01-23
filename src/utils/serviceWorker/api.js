import { setLocalStorage, updateCompartmentPositions } from './storage';

export async function getAPIResponse (formDataValues, asins = null, mainServerAPICheck = false) {
  let { arbitrage_authenticate_api: apiEndpoint, arbitrage_authenticate_api_fallback: appEndpoint } = await chrome.storage.local.get([
    'arbitrage_authenticate_api',
    'arbitrage_authenticate_api_fallback',
  ]);

  if (!apiEndpoint) {
    await setLocalStorage();
    ({ arbitrage_authenticate_api: apiEndpoint, arbitrage_authenticate_api_fallback: appEndpoint } = await chrome.storage.local.get([
      'arbitrage_authenticate_api',
      'arbitrage_authenticate_api_fallback',
    ]));
  }

  const formData = new FormData();

  Object.entries(formDataValues).forEach(([ key, value ]) => formData.append(key, value));

  if (asins) for (const asin of asins) formData.append('asins[]', asin);

  const requestOptions = { method: 'POST', body: formData, redirect: 'follow' };

  let res;

  if (mainServerAPICheck) res = await makeRequest(appEndpoint, requestOptions);

  if (!res) res = (await makeRequest(apiEndpoint, requestOptions)) || (await makeRequest(appEndpoint, requestOptions));

  return res;
}

export async function makeRequest (endpoint, requestOptions) {
  try {
    const controller = new AbortController();

    requestOptions.signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), 10000);

    let res = await fetch(endpoint, requestOptions);

    clearTimeout(timeoutId);

    return await res.json();
  } catch (error) {
    console.log('Api Url Invalid Response: ', error);
  }
}

export async function checkApiKey (key) {
  try {
    const { auth_key: authKey } = await chrome.storage.local.get([ 'auth_key' ]);

    const formDataValues = { action: 'api_key_check', authKey, apiKey: key };

    let response = await getAPIResponse(formDataValues);

    if (response.license) {
      const { apiKeyResponse: apiKeyResponse } = await chrome.storage.local.get([ 'apiKeyResponse' ]);

      await chrome.storage.local.set({ apiKeyResponse: response, apiKey: key, keyExpired: false });

      if (apiKeyResponse) {
        // to set accordian positions
        const { compartmentPositions: positions } = await chrome.storage.local.get([ 'compartmentPositions' ]);

        (Object.keys(apiKeyResponse.access)[0] != Object.keys(response.access)[0] || !positions) && updateCompartmentPositions();
      } else updateCompartmentPositions();
    } else {
      const { apiKey: apiKey } = await chrome.storage.local.get([ 'apiKey' ]);

      if (apiKey) {
        await chrome.storage.local.set({ keyExpired: true, key_validated: false });
      }
      await chrome.storage.local.set({ apiKeyResponse: null, apiKey: null });
    }
    return response;
  } catch (error) {
    console.log('Error in api_key_check call', error);
  }
}

export async function fetchReverseSearchData (asins, market, mainServerAPICheck) {
  try {
    if (asins) {
      let { auth_key: authKey } = (await chrome.storage.local.get([ 'auth_key' ])) || decodeURIComponent(atob(import.meta.env.VITE_AUTH_KEY));
      const { apiKey } = await chrome.storage.local.get([ 'apiKey' ]);

      const formDataValues = { action: 'reverse_search', authKey, market, apiKey };
      let response = await getAPIResponse(formDataValues, asins, mainServerAPICheck);

      response = await checkAPIResult(response, apiKey);

      return response;
    }
  } catch (error) {
    console.log('Error in fetching Reverse Search Data', error);
  }
}

export async function fetchProductInfoData (asins, market, marketplace, mainServerAPICheck, BSR, category, salePrice) {
  try {
    if (asins) {
      let { auth_key: authKey } = (await chrome.storage.local.get([ 'auth_key' ])) || decodeURIComponent(atob(import.meta.env.VITE_AUTH_KEY));
      const { apiKey } = await chrome.storage.local.get([ 'apiKey' ]);

      let formDataValues = { action: 'reverse_search', authKey, market, apiKey, marketplace};
      if (BSR && /\d/.test(BSR)) formDataValues["BSR"] = BSR;
      if (category) {
        formDataValues["category"] = category;
        formDataValues["salePrice"] = salePrice;
      }


      let response = await getAPIResponse(formDataValues, asins, mainServerAPICheck);

      response = await checkAPIResult(response, apiKey);

      return response;
    }
  } catch (error) {
    console.log('Error in fetching Reverse Search Data', error);
  }
}

async function checkAPIResult (response, apiKey) {
  try {
    response.license_status.license
      ? await chrome.storage.local.set({ apiKeyResponse: response.license_status, apiKey, keyExpired: false })
      : await chrome.storage.local.set({ apiKeyResponse: null, apiKey: null, keyExpired: true });
  } catch (error) {
    return 'response_null';
  }

  return response;
}

export async function getOffersForDetailPage (apiEndpoint) {
  const requestOptions = { method: 'GET', redirect: 'follow' };

  try {
    const res = await fetch(apiEndpoint, requestOptions);
    if (res.status === 200) return await res.text();
    else return undefined
  } catch (error) {
    console.log('Api apiEndpoint Invalid Response:', error);
    return undefined
  }
}
