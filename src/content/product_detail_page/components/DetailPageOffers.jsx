import React, { useEffect, useState } from 'react';
import { groupBy, head, isNull, last, pickBy, sortBy } from 'lodash';

import DetailPageInnerDropDowns from './DetailPageInnerDropDowns';
import EmptyData from '../../../commons/EmptyData';
import LowestOffer from './LowestOffer';
import OffersCheckBox from './OffersCheckBox';
import RenderIf from '../../../commons/RenderIf';
import { useSelector } from 'react-redux';

const DetailPageOffers = () => {
  const { offersData, currencySymbol } = useSelector(state => state.DetailPage);
  const offersDataOfFBAAndAWZ = offersData['FBA']?.concat(offersData['AMZ'])
  const [ isFBAChecked, setIsFBAChecked ] = offersDataOfFBAAndAWZ?.length > 0 ? useState(true) : useState(false); // useState(Boolean(offersDataOfFBAAndAWZ?.length));
  const [ isFBMChecked, setIsFBMChecked ] = offersData['FBM']?.length > 0 ? useState(true) : useState(false) ; // useState(!offersDataOfFBAAndAWZ?.length && Boolean(offersData['FBM']?.length));

  const getEmptyDataMessage = () => {
    const fba = offersDataOfFBAAndAWZ?.length;
    const fbm = offersData['FBM']?.length;

    if (!(fba || fbm)) return 'There are no Offers';

    if (!(isFBAChecked || isFBMChecked)) return 'Please select one of the above options';
    if (isFBAChecked && !fba && !isFBMChecked) return 'There are no FBA Offers';
    if (isFBMChecked && !fbm && !isFBAChecked) return 'There are no FBM Offers';

    return false;
  };

  return (
    <>
      <div className="scroll-offers-accordion">
        <div className="ah-offer-wrapper mb-2">
          <div>
            <LowestOffer title="BuyBox Offer Price" value={currencySymbol + ' ' + parseFloat(head(offersData['AMZ'])?.salePrice ?? 0).toFixed(2)} />
            <LowestOffer title="Low FBA Offer Price" value={currencySymbol + ' ' + parseFloat(head(offersData['FBA'])?.salePrice ?? 0).toFixed(2)} />
            <LowestOffer title="Low FBM Offer Price" value={currencySymbol + ' ' + parseFloat(head(offersData['FBM'])?.salePrice ?? 0).toFixed(2)} />
          </div>
        </div>
        <DetailPageInnerDropDowns id="offers" label="Offers" currencySymbol="" value={offersDataOfFBAAndAWZ?.length + offersData['FBM']?.length} precision={0}>
          <div className="ah-offer-wrapper">
            <div className="d-flex align-items-end gap-2 pb-2">
              <OffersCheckBox label="FBA" isChecked={isFBAChecked} setIsChecked={setIsFBAChecked} />
              <OffersCheckBox label="FBM" isChecked={isFBMChecked} setIsChecked={setIsFBMChecked} />
            </div>

            <RenderIf
              isTrue={!getEmptyDataMessage()}
              fallback={
                <div className="py-2">
                  <EmptyData message={getEmptyDataMessage()} />
                </div>
              }
            >
              <table className="table ah-offer-table">
                <thead className="table ah-offer-table">
                  <tr className="">
                    <th className="" scope="col">
                      Seller
                    </th>
                    <th className="" scope="col">
                      Price
                    </th>
                    <th className="" scope="col">
                      Profit
                    </th>
                    <th className="" scope="col">
                      ROI
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {sortBy([ ...(isFBAChecked ? offersDataOfFBAAndAWZ  : []), ...(isFBMChecked ? offersData['FBM'] : []) ], o => parseFloat(o.salePrice)).map((offer, index, offers) => {
                    return (
                      <tr className="ah_offers_table_rows ah-offers-fba-table-rows" style={{ borderBottom: index === offers.length - 1 ? 'none' : '1.5px solid #f0f0f0' }}>
                        <td>
                          <a className="" href={offer?.sellerIdLink} target="_blank" rel="noreferrer">
                            {offer?.fulfilmentType}
                          </a>
                        </td>
                        <td className="" id="offers_price_table_data">
                          {currencySymbol + parseFloat(offer.salePrice).toFixed(2)}
                        </td>
                        <td className={offer.profit > 0 ? 'ah-success-data' : 'ah-fail-data'} id="offers_profit_table_data">
                          {currencySymbol + parseFloat(offer?.profit).toFixed(2)}
                        </td>

                        <td className={offer.ROI === 0 || isNull(offer.ROI) ? '' : offer.ROI > 0 ? 'ah-success-data' : 'ah-fail-data'} id="offers_roi_table_data">
                          {parseFloat(offer?.ROI).toFixed(2) === 'NaN' ? '∞' : parseFloat(offer?.ROI).toFixed(2)} %
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </RenderIf>
          </div>
        </DetailPageInnerDropDowns>
      </div>
    </>
  );
};

export default DetailPageOffers;
