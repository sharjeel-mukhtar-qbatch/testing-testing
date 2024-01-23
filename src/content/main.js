import * as detailPageActions from './store/detailPage/actionCreator';
import * as listPageActions from './store/listPage/actionCreator';

import { AddElementIntoAmazonListPage } from './amazon_list_page/amazon_list_page_app';
import { AddElementIntoAmazonPage } from './product_detail_page/product_detail_page_app';
import { addingArbitrageToStorePage } from './store_page/store_page_app';
import store from './store/store';

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === 'product_detail_page_app') {
    chrome.runtime.sendMessage({
      clear_interval: true,
      intervalId: request.intervalId,
    });

    AddElementIntoAmazonPage();
  } else if (request.message === 'amazon_list_page_app') {
    chrome.runtime.sendMessage({
      clear_interval: true,
      intervalId: request.intervalId,
    });
    AddElementIntoAmazonListPage();
  } else if (request.message === 'store_page_app') addingArbitrageToStorePage();

  request.message === 'product_detail_page_loader' && store.dispatch(detailPageActions.setDetailPageLoader(request.loader));

  request.message === 'amazon_list_page_loader' && store.dispatch(listPageActions.setListPageLoader(request.loader));
});
