import React, { useEffect } from 'react';

import DetailPageGoogleShopping from './DetailPageGoogleShopping';
import DetailPageOffers from './DetailPageOffers';
import DropDown from './DropDown';
import Loader from '../../../commons/Loader';
import ProfitCalculator from './ProfitCalculator';
import RenderIf from '../../../commons/RenderIf';
import ReverseSearchTable from '../../../commons/ReverseSearchTable';
import { getGoogleShoppingFromBackground } from '../../../utils/google_shopping_helpers';
import { googleLinkAndGoogleShoppingLink } from '../../../utils/helpers';
import { sortBy } from 'lodash';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const DetailPageDropDowns = ({ compartmentPositions, setCompartmentPositions, apiAccessLevel }) => {
  const {
    reverseSearchData,
    currencySymbol,
    reverseSearchLoading,
    offersDataLoading,
    googleShoppingLoading,
    headerData,
    googleShoppingSuccess,
    marketplace,
    productFees,
    profitCalculatorData,
    productData,
  } = useSelector(state => state.DetailPage);

  const { t } = useTranslation();
  const handleChangePosition = async (dragId, dropId) => {
    const updatedPositions = { ...compartmentPositions, [dragId]: compartmentPositions[dropId], [dropId]: compartmentPositions[dragId] };

    chrome.storage.local.set({ compartmentPositions: updatedPositions });
    setCompartmentPositions(updatedPositions);
  };

  const getStyle = () => ({ borderBottom: '2px solid #F0F0F0' });

  useEffect(() => {
    // if (reverseSearchLoading && reverseSearchSuccess === null) fetchReverseSearch(asin, marketplace, currencySymbol, mainServerAPICheck);
  }, []);

  useEffect(() => {
    if (googleShoppingSuccess === null)
      getGoogleShoppingFromBackground(
        googleLinkAndGoogleShoppingLink(headerData?.productTitle, headerData.currentUrl)?.[1],
        profitCalculatorData,
        productFees,
        marketplace,
        productData?.productCategory,
      );
  }, []);

  return (
    <div className="d-flex flex-column accordion product-accordion" id="sortable">
      <RenderIf isTrue={apiAccessLevel?.all || apiAccessLevel?.reverse_search}>
        <div className={`order-${compartmentPositions?.reverse_search}`} style={getStyle()}>
          <DropDown id="reverse_search" collapseId="Two" title={t('Reverse Search')} handleChangePosition={handleChangePosition}>
            <div className="accordion-body profit-list pb-0 pt-0">
              <div className="arbitrage-content border-0 m-0">
                <RenderIf isTrue={!reverseSearchLoading} fallback={<Loader />}>
                  <ReverseSearchTable stores={sortBy(reverseSearchData?.products, o => parseFloat(o.price))} currencySymbol={currencySymbol} />
                </RenderIf>
              </div>
            </div>
          </DropDown>
        </div>
      </RenderIf>

      <RenderIf isTrue={apiAccessLevel?.all}>
        <div className={`order-${compartmentPositions?.profit_calculator}`} style={getStyle()}>
          <DropDown id="profit_calculator" collapseId="One" title={t('Profit Calculator')} handleChangePosition={handleChangePosition}>
            <div className="accordion-body profit-list pb-0">
              <ProfitCalculator />
            </div>
          </DropDown>
        </div>
      </RenderIf>

      <RenderIf isTrue={apiAccessLevel?.all}>
        <div className={`order-${compartmentPositions?.pricing_and_offerings}`} style={getStyle()}>
          <DropDown id="pricing_and_offerings" collapseId="Three" title={t('Pricing & Offers')} handleChangePosition={handleChangePosition}>
            <div className="accordion-body profit-list pb-0 pt-0">
              <RenderIf
                isTrue={!offersDataLoading}
                fallback={
                  <div style={{ height: '150px' }}>
                    <Loader />
                  </div>
                }
              >
                <DetailPageOffers />
              </RenderIf>
            </div>
          </DropDown>
        </div>
      </RenderIf>

      <RenderIf isTrue={apiAccessLevel?.all}>
        <div className={`order-${compartmentPositions?.google_shopping}`} style={getStyle()}>
          <DropDown id="google_shopping" collapseId="Four" title={t('Google Shopping Results')} handleChangePosition={handleChangePosition}>
            <div className="accordion-body profit-list pb-0 pt-0">
              <RenderIf
                isTrue={!googleShoppingLoading}
                fallback={
                  <div style={{ height: '150px' }}>
                    <Loader />
                  </div>
                }
              >
                <DetailPageGoogleShopping />
              </RenderIf>
            </div>
          </DropDown>
        </div>
      </RenderIf>
    </div>
  );
};

export default DetailPageDropDowns;
