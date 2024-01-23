import '../../utils/amazon_pages.css';

import { Provider, useSelector } from 'react-redux';
import { fetchReverseSearchData, getItemElementsAndData } from '../../utils/amazon_list_page_helpers';

import BaseRatingComponent from '../../commons/BaseRatingComponent';
import Footer from '../../commons/Footer';
import GoogleLinks from '../../commons/GoogleLinks';
import Loader from '../../commons/Loader';
import React from 'react';
import RenderIf from '../../commons/RenderIf';
import ReverseSearchTable from '../../commons/ReverseSearchTable';
import { createRoot } from 'react-dom/client';
import { getElementByXpath } from '../../utils/arbitrage_element_functions';
import i18n from '../../utils/I18NextConfig';
import { setCurrentURL } from '../store/listPage/actionCreator';
import { sortBy } from 'lodash';
import store from '../store/store';

function ArbitrageItem ({ itemData, asin }) {
  const { loader, reverseSearchData, currentURL, success, currencySymbol } = useSelector(state => state.ListPage);

  return (
    <>
      <RenderIf
        isTrue={!loader && success !== null}
        fallback={
          <div className="arbitrage-content">
            <Loader outerClass="ah-search-page-loader" />
            <Footer imageSize="50px" />
          </div>
        }
      >
        <RenderIf isTrue={reverseSearchData[asin]}>
          <div className="arbitrage-content">
            <BaseRatingComponent asin={asin} detailsResponse={reverseSearchData[asin]} />
            <GoogleLinks itemTitle={itemData?.productTitle} currentUrl={currentURL} />
            <RenderIf isTrue={reverseSearchData[asin]?.products}>
              <ReverseSearchTable stores={sortBy(reverseSearchData[asin]?.products, o => parseFloat(o.price))} currencySymbol={currencySymbol} />
            </RenderIf>
            <Footer imageSize="50px" />
          </div>
        </RenderIf>
      </RenderIf>
    </>
  );
}

export function AddElementIntoAmazonListPage () {
  let length = null;

  const intervalId = setInterval(async () => {
    try {
      const listPageData = await getItemElementsAndData();

      if (!listPageData) throw Error('List Page Snapshot elements not found');

      const [ listItemsDoc, asinArray, itemsData, currentUrl ] = listPageData;

      if (listItemsDoc.length === length) {
        clearInterval(intervalId);
        addingArbitrageMainGridToDetailPage(listItemsDoc, asinArray, itemsData, currentUrl);
      }

      length = listItemsDoc.length;
    } catch (error) {
      const noResultXpath = '//div[contains(@class, "-no-results")]';

      if (error.message === 'List Page Snapshot elements not found') {
        if (getElementByXpath(noResultXpath).snapshotItem(0)) clearInterval(intervalId);
      } else console.log('Error in List Page App', error);
    }
  }, 1000);
}

async function addingArbitrageMainGridToDetailPage (listItemsDoc, asinArray, itemsData, currentUrl) {
  let language = document.getElementsByTagName('html')[0].lang;

  language = language.split('-');
  language[1] = language[1]?.toUpperCase();

  i18n.changeLanguage(language.join('-'));

  store.dispatch(setCurrentURL(currentUrl));

  let scriptInjectionCount = 0;

  for (let index = 0; index < listItemsDoc.length; index++) {
    const container = document.createElement('div');

    container.id = `arbitrage-extension-item-${asinArray[index]}`;

    if (listItemsDoc[index].lastChild.id !== container.id) {
      scriptInjectionCount++;
      listItemsDoc[index].append(container);
    }

    createRoot(container).render(
      <Provider store={store}>
        <div style={{ maxWidth: '276px' }}>
          <ArbitrageItem itemData={itemsData[index]} asin={asinArray[index]} />
        </div>
      </Provider>,
    );
  }

  scriptInjectionCount && fetchReverseSearchData(asinArray, currentUrl);
}
