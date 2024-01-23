import '../../utils/amazon_pages.css';

import React, { useState } from 'react';
import { resetDetailPageData, setDetailPageData } from '../store/detailPage/actionCreator';

import Draggable from 'react-draggable';
import ProductDetailPageMainGrid from './components/ProductDetailPageMainGrid';
import { Provider } from 'react-redux';
import { Resizable } from 're-resizable';
import { createRoot } from 'react-dom/client';
import { findContainerToAppendGridInto } from '../../utils/helpers';
import { getElementByXpath } from '../../utils/arbitrage_element_functions';
import { getProductAsin } from '../../utils/product_detail_page_helpers';
import i18n from '../../utils/I18NextConfig';
import store from '../store/store';

const DraggableComponent = ({ extensionPosition }) => {
  const [ size, setSize ] = useState({ width: 276, height: 500 });

  return (
    <div>
      <Draggable handle=".handle">
        <Resizable
          size={{ width: size.width, height: size.height }}
          minWidth={285}
          maxWidth={500}
          maxHeight={800}
          minHeight={257}
          onResizeStop={(e, direction, ref, d) => {
            e.preventDefault();
            e.stopPropagation();
            setSize({
              width: size.width + d.width,
              height: size.height + d.height,
            });
          }}
        >
          <div style={{ height: '100%', width: '100%' }}>
            <ProductDetailPageMainGrid handleClassName="handle" extensionPosition={extensionPosition} />
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
};

export async function AddElementIntoAmazonPage (resetState = true) {
  let intervalCount = 0;
  const maxCount = 5;
  const id = setInterval(async () => {
    try {
      let arbitrageDoc = null;

      let extensionPositionDock, detailPageMiddleContainer, detailPageSubContainerXPaths, pageNotFoundXpath;

      try {
        let { extensionPosition } = await chrome.storage.local.get([ 'extensionPosition' ]);
        const { detail_page_middle_container, detail_page_subcontainer, page_not_found } = await chrome.storage.local.get([
          'detail_page_middle_container',
          'detail_page_subcontainer',
          'page_not_found',
        ]);

        pageNotFoundXpath = page_not_found;
        extensionPositionDock = extensionPosition;
        detailPageMiddleContainer = detail_page_middle_container;
        detailPageSubContainerXPaths = detail_page_subcontainer;
      } catch (error) {
        chrome.storage.local.set({ extensionPosition: 'draggable' });
        clearInterval(id);
        return;
      }

      if (intervalCount === maxCount) {
        chrome.storage.local.set({ extensionPosition: 'draggable' });
        clearInterval(id);
      }

      if (!extensionPositionDock) chrome.storage.local.set({ extensionPositionDock: 'side' });

      extensionPositionDock = extensionPositionDock ?? 'side';

      if (extensionPositionDock === 'side') arbitrageDoc = await findContainerToAppendGridInto(detailPageSubContainerXPaths);
      else if (extensionPositionDock === 'middle') arbitrageDoc = await findContainerToAppendGridInto(detailPageMiddleContainer ?? detailPageSubContainerXPaths);
      else {
        if (pageNotFoundXpath) {
          const pageNotFound = getElementByXpath(pageNotFoundXpath);

          if (pageNotFound.snapshotLength) return clearInterval(id);
        }

        arbitrageDoc = document.getElementsByTagName('body')[0];
      }

      if (arbitrageDoc) {
        clearInterval(id);
        addingArbitrageMainGridToDetailPage(arbitrageDoc, extensionPositionDock, resetState);
      }
      intervalCount++;
    } catch (error) {
      clearInterval(id);
    }
  }, 500);
}

const getComponentToRender = position => {
  if (position === 'draggable') return <DraggableComponent extensionPosition={position} />;

  return <ProductDetailPageMainGrid extensionPosition={position} />;
};

async function addingArbitrageMainGridToDetailPage (arbitrageDoc, position, resetState = true) {
  let language = document.getElementsByTagName('html')[0].lang;

  language = language.split('-');
  language[1] = language[1]?.toUpperCase();

  i18n.changeLanguage(language.join('-'));

  let container = document.createElement('div');

  container.id = 'arbitrage-extension-grid'; // Set a unique ID for the container

  container.className = `ah-detail-page-${position}`;
  const asin = await getProductAsin(window.location.href);

  if (asin === undefined) return;

  if (arbitrageDoc.firstChild.id === container.id || document.getElementById('arbitrage-extension-grid')) {
    if (asin !== store.getState().DetailPage.asin) {
      container = document.getElementById('arbitrage-extension-grid');
    } else return;
  }

  store.dispatch(setDetailPageData({ asin: asin }));

  if (arbitrageDoc.tagName === 'BODY') arbitrageDoc.className = `ah-detail-page-${position}-document-body`;
  else document.getElementsByTagName('BODY')[0].className = '';

  resetState && store.dispatch(resetDetailPageData());

  arbitrageDoc.prepend(container);

  createRoot(container).render(<Provider store={store}>{getComponentToRender(position)}</Provider>);
}
