import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useEffect, useState } from 'react';
import { fetchDetailPageData, fetchOffersOfDetailPage } from '../../../utils/product_detail_page_helpers';

import BaseRatingComponent from '../../../commons/BaseRatingComponent';
import ContactSupport from './ContactSupport';
import DetailPageDropDowns from './DetailPageDropDowns';
import DetailPageFooter from './DetailPageFooter';
import DetailPageHeader from './DetailPageHeader';
import DimensionsAndWeight from './DimensionsAndWeight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Loader from '../../../commons/Loader';
import ProductDetailPageMainGridHeader from './ProductDetailPageMainGridHeader';
import ProductDetailTiles from './ProductDetailTiles';
import RenderIf from '../../../commons/RenderIf';
import { detailPageDropDownsKeysIds } from '../../../utils/constants';
import { isNull } from 'lodash';
import { useSelector } from 'react-redux';

const ProductDetailPageMainGrid = ({ extensionPosition, handleClassName }) => {
  const [ compartmentPositions, setCompartmentPositions ] = useState(null);
  const [ apiKeyResponse, setApiKeyResponse ] = useState(null);
  const [ position ] = useState(extensionPosition);

  const { headerData, productInfo, asin, loading, success, profitCalculatorData, currencySymbol } = useSelector(state => state.DetailPage);

  const colorForProfitAndRoi = value => (value === 0 || isNull(value) ? '' : value > 0 ? 'green' : 'red');
  const profitAndRoi = [
    { title: 'Profit', value: currencySymbol + ' ' + (parseFloat(profitCalculatorData?.profit).toFixed(2) || 0), style: { color: colorForProfitAndRoi(profitCalculatorData?.profit) } },
    {
      title: 'ROI',
      value: ((parseFloat(profitCalculatorData?.ROI).toFixed(2) === 'NaN' ? '∞' : parseFloat(profitCalculatorData?.ROI).toFixed(2)) || 0) + ' %',
      colorCheck: true,
      style: { color: colorForProfitAndRoi(profitCalculatorData?.ROI) },
    },
    { title: 'Max cost', value: currencySymbol + ' ' + (parseFloat(profitCalculatorData?.maxCost).toFixed(2) || 0), style: { marginBottom: '4px' } },
  ];

  useEffect(() => {
    if (loading) return;

    if (success === null)
      fetchDetailPageData().then(res => {
        if (res) {
          const { domain, asinElement, marketplace, productFees, profitCalculatorData, productCategory } = res;

          fetchOffersOfDetailPage(domain, asinElement, marketplace, productFees, profitCalculatorData, productCategory);
        }
      });

    chrome.storage.local.get([ 'compartmentPositions' ]).then(response => {
      if (response.compartmentPositions === undefined) {
        const positionHash = {};

        for (let i = 0; i < detailPageDropDownsKeysIds.length; i++) positionHash[detailPageDropDownsKeysIds[i]] = i;

        chrome.storage.local.set({ compartmentPositions: positionHash });
        setCompartmentPositions(positionHash);
      } else setCompartmentPositions(response.compartmentPositions);
    });

    chrome.storage.local.get([ 'apiKeyResponse' ]).then(response => setApiKeyResponse(response.apiKeyResponse));
  }, [ loading ]);

  return (
    <div
      className="ah-detail-page-products-main"
      style={{
        position: 'relative',
        maxHeight: '100%',
        height: `${extensionPosition === 'side' || extensionPosition === 'middle' ? 'auto' : '100%'}`,
        width: `${extensionPosition === 'side' ? '276px' : '100%'}`,
      }}
    >
      <DetailPageHeader handleClassName={handleClassName} />
      <RenderIf
        isTrue={!loading && position && apiKeyResponse?.access && success !== null && compartmentPositions != null}
        fallback={
          <div style={{ height: extensionPosition === 'side' || extensionPosition === 'middle' ? '640px' : '100%' }}>
            <Loader />
          </div>
        }
      >
        <RenderIf
          isTrue={success}
          fallback={
            <div style={{ height: extensionPosition === 'side' || extensionPosition === 'middle' ? '640px' : '100%' }}>
              <ContactSupport />
            </div>
          }
        >
          <div style={{ overflowY: 'auto', maxHeight: `${extensionPosition === 'side' || extensionPosition === 'middle' ? '640px' : 'calc(100% - 67px)'}` }}>
            <div style={{ marginBottom: extensionPosition === 'side' || extensionPosition === 'middle' ? '30px' : '0%', width: '100%', padding: '8px 12px' }}>
              <RenderIf isTrue={headerData}>
                <ProductDetailPageMainGridHeader detailsResponse={productInfo} data={headerData} extensionPosition={extensionPosition} asin={asin} />
              </RenderIf>

              <BaseRatingComponent detailPage={true} detailsResponse={productInfo} />
              <hr className="hr my-1" />

              <DimensionsAndWeight />
              <hr className="hr my-1" />

              <ProductDetailTiles gridCols={profitAndRoi} />

              <DndProvider backend={HTML5Backend}>
                <DetailPageDropDowns compartmentPositions={compartmentPositions} setCompartmentPositions={setCompartmentPositions} apiAccessLevel={apiKeyResponse?.access} />
              </DndProvider>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              backgroundColor: '#F9F9FB',
              bottom: '-1px',
              borderBottom: '1px solid rgb(255 153 0 / 50%)',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
              left: 0,
              width: '100%',
              padding: '0px 9px 0px 9px',
            }}
          >
            <DetailPageFooter />
          </div>
        </RenderIf>
      </RenderIf>
    </div>
  );
};

export default ProductDetailPageMainGrid;
