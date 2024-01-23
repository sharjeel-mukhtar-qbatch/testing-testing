import React, { useEffect, useState } from 'react';

import EmptyData from '../../../commons/EmptyData';
import RenderIf from '../../../commons/RenderIf';
import { googleShoppingBaseUrl } from '../../../utils/constants';
import { isNull } from 'lodash';
import { useSelector } from 'react-redux';

const DetailPageGoogleShopping = () => {
  const { googleShoppingData, currencySymbol } = useSelector(state => state.DetailPage);
  const [ domain, setDomain ] = useState('');
  const getEmptyDataMessage = () => {
    if (googleShoppingData?.length === 0) return 'Results not found';
    return false;
  };

  useEffect(() => {
    const urlObj = new URL(window.location.href);

    setDomain(urlObj.hostname.split('amazon.').pop());
  }, []);

  return (
    <>
      <div className="scroll-offers-accordion">
        <RenderIf
          isTrue={!getEmptyDataMessage()}
          fallback={
            <div className="py-2">
              <EmptyData message={getEmptyDataMessage()} />
            </div>
          }
        >
          {googleShoppingData?.map((hash, index) => {
            let sellerUrl = hash.googleShoppingSeller?.split(domain + '/url')?.[1];

            sellerUrl = googleShoppingBaseUrl + domain + '/url' + sellerUrl || '';

            return (
              <>
                <div className="px-2">
                  <div className="ah-google-shopping-results">
                    <img className="ah-google-shopping-img" src={hash.googleShoppingImage} alt="product-img" max-width="30px" max-height="30px"></img>
                    <div
                      style={{
                        width: '100%',
                      }}
                    >
                      <p className="ah-google-shopping-results-title ah-detail-page-title-ellipse" title={hash.googleShoppingTitle}>
                        {hash.googleShoppingTitle}
                      </p>
                      <div className="row g-0">
                        <div className="col-6 py-1">
                          <div className="ah-google-shopping-inner-text-wrapper">
                            <span className="ah-google-shopping-inner-text-light">Price:</span>
                            <span className="ah-google-shopping-inner-text" title={currencySymbol + parseFloat(hash?.salePrice).toFixed(2)}>
                              {currencySymbol}
                              {parseFloat(hash.salePrice).toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="col-6 py-1">
                          <div className="ah-google-shopping-inner-text-wrapper pe-0">
                            <span className="ah-google-shopping-inner-text-light">Profit:</span>
                            <span className="ah-google-shopping-inner-text">
                              <span style={{ color: hash.profit === 0 || isNull(hash.profit) ? '' : hash.profit > 0 ? 'green' : 'red' }} title={currencySymbol + parseFloat(hash?.profit).toFixed(2)}>
                                {currencySymbol}
                                {parseFloat(hash?.profit).toFixed(2)}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="ah-google-shopping-inner-text-wrapper pb-0">
                            <span className="ah-google-shopping-inner-text-light">Seller:</span>
                            <span style={{ paddingBottom: '2px' }} className="ah-google-shopping-inner-text" title={hash.googleShoppingSellerName}>
                              <a href={sellerUrl} target="_blank" rel="noopener noreferrer" >
                                {hash.googleShoppingSellerName}
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="ah-google-shopping-inner-text-wrapper pe-0 pb-0">
                            <span className="ah-google-shopping-inner-text-light">ROI:</span>
                            <span className="ah-google-shopping-inner-text">
                              <span style={{ color: hash.ROI === 0 || isNull(hash.ROI) ? '' : hash.ROI > 0 ? 'green' : 'red' }} title={(parseFloat(hash?.ROI).toFixed(2) === 'NaN' ? '∞' : parseFloat(hash?.ROI).toFixed(2)) + " %"}>
                                {parseFloat(hash?.ROI).toFixed(2) === 'NaN' ? '∞' : parseFloat(hash?.ROI).toFixed(2)} %
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
              </>
            );
          })}
        </RenderIf>
      </div>
    </>
  );
};

export default DetailPageGoogleShopping;
