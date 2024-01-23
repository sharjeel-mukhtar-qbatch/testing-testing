import '../../utils/store_page.css';

import { Provider } from 'react-redux';
import React from 'react';
import StorePageMain from './components/StorePageMain';
import { createRoot } from 'react-dom/client';
import { otherUrlCheck } from '../../utils/constants';
import store from '../store/store';

const getStoreStatus = async () => {
  try {
    if (document?.getElementById('ah-stores-custom-sidebar') === null) {
      let { registered_stores_by_arbitrage: registeredStoresByArbitrage } = await chrome.storage.local.get([ 'registered_stores_by_arbitrage' ]);

      let currentUrl, desiredHash, stores, hostName;

      if (registeredStoresByArbitrage === undefined) {
        let registeredStoresByArbitrage = await chrome.runtime.sendMessage({ getAllStoresDataByArbitrage: true });

        await chrome.storage.local.set({ registered_stores_by_arbitrage: registeredStoresByArbitrage });
      }

      currentUrl = window.location.href;
      hostName = window.location.hostname;
      stores = registeredStoresByArbitrage?.stores;

      const matcher = txt => currentUrl.includes(txt);

      if (stores !== undefined && !matcher('amazon') && !otherUrlCheck.some(matcher)) {
        desiredHash = stores.find(store => hostName.includes(store.domain));

        if (desiredHash !== undefined) {
          await chrome.storage.local.set({ store_container_is_appended: true });
          return desiredHash;
        }
      }
    }
    return false;
  } catch (error) {
    console.log('Error in store page: ', error);

    return false;
  }
};

export async function addingArbitrageToStorePage () {
  const isStorePage = await getStoreStatus();

  if (!isStorePage) return;

  const { store_log_in_status: storeLogInStatus } = await chrome.storage.local.get([ 'store_log_in_status' ]);
  const headerText = await getLoginCurrentStatus();

  const container = document.createElement('div');
  const documentBody = document.getElementsByTagName('body')[0];

  container.id = 'ah-stores-custom-sidebar'; // Set a unique ID for the container
  documentBody.id = 'ah-stores-document-body';

  documentBody.prepend(container);
  createRoot(container).render(
    <Provider store={store}>
      <StorePageMain storeData={isStorePage} storeLogInStatus={storeLogInStatus} headerText={headerText} />
    </Provider>,
  );
}

export async function getLoginCurrentStatus () {
  const { apiKeyResponse: api_key_response } = await chrome.storage.local.get([ 'apiKeyResponse' ]);
  const { apiKey } = await chrome.storage.local.get([ 'apiKey' ]);

  if (api_key_response) {
    // api key present
    const response = await chrome.runtime.sendMessage({
      checkApiKeyValidation: true,
      apiKey,
    });

    if (response.license) {
      return 'API Key Info';
    } else {
      return 'Login to Arbitrage Extension';
    }
  } else {
    return 'Login to Arbitrage Extension';
  }
}
