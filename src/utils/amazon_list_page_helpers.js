import { getElementByXpath, getReverseSearch, getSymbolAndMarket } from './arbitrage_element_functions';

import { setReverseSearchData } from '../content/store/listPage/actionCreator';
import store from '../content/store/store';

export const getItemElementsAndData = async () => {
  const { list_page_container: listPageContainerPath, list_page_grid_container: listPageGridContainerPath } = await chrome.storage.local.get([ 'list_page_container', 'list_page_grid_container' ]);

  // Making one array of the total elements
  const totalElements = listPageContainerPath.concat(listPageGridContainerPath);

  // Loop for listing items in the Amazon document in form of table.
  for (const element of totalElements) {
    const elementDoc = getElementByXpath(element);

    if (elementDoc.snapshotLength > 0 && elementDoc.snapshotItem(0)) return await getAppendingTable(elementDoc);
  }
};

async function getAppendingTable (listPageItems) {
  let currentUrl;
  const tabUrl = window.location.href;

  currentUrl = tabUrl || (await chrome.runtime.sendMessage({ currentUrl: true }));

  const { list_page_subcontainer: listPageSubContainerPaths } = await chrome.storage.local.get([ 'list_page_subcontainer' ]);

  try {
    const asinArray = [];
    const productDocArray = [];
    const productDataArray = [];

    for (let i = 0; i < listPageItems.snapshotLength; i++) {
      const pageItem = listPageItems.snapshotItem(i);
      const asinAttribute = pageItem.attributes['data-asin'].nodeValue;
      const productTitle = pageItem.querySelectorAll('h2 > a > span')[0].textContent;
      let productDoc;

      for (const listPageSubContainerPath of listPageSubContainerPaths) {
        productDoc = pageItem.querySelector(listPageSubContainerPath);
        if (productDoc) break;
      }

      productDataArray.push({ productTitle });
      productDocArray.push(productDoc);
      asinArray.push(asinAttribute);
    }

    return [ productDocArray, asinArray, productDataArray, currentUrl ];
  } catch (error) {
    console.log('Error in Search page', error.message);
  }
}

export const fetchReverseSearchData = async (asinArray, currentURL) => {
  try {
    store.dispatch(setReverseSearchData({}, null, null));

    const urlObj = new URL(currentURL);
    const hostname = urlObj.hostname;
    const domain = hostname.split('amazon.').pop();
    const [ currencySymbol, marketplace ] = getSymbolAndMarket(domain);

    const urlParams = new URL(currentURL).searchParams;

    let mainServerAPICheck = urlParams.get('use_main_server') === 'true';

    const response = await getReverseSearch(asinArray, marketplace, mainServerAPICheck);

    if (response?.success && response?.license) store.dispatch(setReverseSearchData(response.products, currencySymbol, response.success));
    else store.dispatch(setReverseSearchData({}, null, false));
  } catch (error) {
    console.log('Error in Search page', error.message);
    store.dispatch(setReverseSearchData({}, null, false));
  }
};
