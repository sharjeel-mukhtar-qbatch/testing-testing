import { getAPIResponse, makeRequest } from './api';

import { detailPageDropDownsKeysIds } from '../constants';
import { pick } from 'lodash';

export async function setLocalStorage () {
  let response = await getAllDataHash();

  await chrome.storage.local.set({
    ...pick(
      response.websites.amazon,
      'detail_page_asin',
      'page_not_found',
      'detail_page_subcontainer',
      'list_page_container',
      'list_page_grid_container',
      'list_page_subcontainer',
      'detail_page_middle_container',
    ),
    ...pick(response.urls, 'arbitrage_authenticate_api', 'arbitrage_reverse_search', 'arbitrage_authenticate_api_fallback', 'arbitrage_reverse_search_fallback', 'arbitrage_website'),
    ...pick(response.profitCalculator, 'vat_flat_rate'),
    auth_key: decodeURIComponent(atob(response.auth_key)),
    fulfilment_fee_distribution: response.profitCalculator,
    fulfilment_fee_distribution_xpaths: response.productDetailsPageXpath,
    profit_calculator_drop_down: true,
    pricing_and_offerings_drop_down: false,
    reverse_search_drop_down: false,
    google_shopping_drop_down: false,
  });
}

export const updateCompartmentPositions = () => {
  let positionHash = {};

  for (let i = 0; i < detailPageDropDownsKeysIds.length; i++) positionHash[detailPageDropDownsKeysIds[i]] = i;

  chrome.storage.local.set({ compartmentPositions: positionHash });
};

// getStoreByArbitrageApi stores data
export async function getStoreByArbitrageApi () {
  try {
    const { auth_key: authKey } = await chrome.storage.local.get([ 'auth_key' ]);

    const formDataValues = { action: 'get_supported_stores', authKey };

    let response = await getAPIResponse(formDataValues);

    return response;
  } catch (error) {
    console.log('Error in fetching get_supported_stores', error);
  }
}

export async function getAllDataHash () {
  const params = { headers: { 'Content-Type': 'application/json' }, method: 'GET' };

  const apiURL = 'https://api.ahonline.top/private/extension/extension_config.json';
  const appURL = 'https://app.arbitragehero.com/private/extension/extension_config.json';

  let response = (await makeRequest(apiURL, params)) || (await makeRequest(appURL, params));

  return response;
}
