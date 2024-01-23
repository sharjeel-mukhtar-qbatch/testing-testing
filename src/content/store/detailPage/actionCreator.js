import * as types from './actionTypes';

import { merge } from 'lodash';

export const setDetailPageLoader = loader => ({ type: types.DETAIL_PAGE_LOADER_CHANGE, payload: { loader } });

export const setReferralFee = referralFees => ({ type: types.UPDATE_REFERRAL_FEE, payload: { referralFees } });

export const setDetailPageData = payload => {
  return {
  type: types.SET_DETAIL_PAGE_DATA,
  payload,
}};

export const resetDetailPageData = () => ({
  type: types.RESET_DETAIL_PAGE_DATA,
  payload: {
    ...[
      'headerData',
      'productInfo',
      'currencySymbol',
      'marketplace',
      'reverseSearchData',
      'productData',
      'profitCalculatorData',
      'productFees',
      'offersDataSuccess',
      'mainServerAPICheck',
      'reverseSearchData',
      'reverseSearchSuccess',
      'success',
      'domain',
      'googleShoppingSuccess',
    ].reduce((obj, key) => merge(obj, { [key]: null }), {}),
    offersData: {},
    offersDataLoading: true,
    googleShoppingLoading: true,
    googleShoppingData: [],
  },
});

export const setDetailPageProfitCalculatorData = (profitCalculatorData, productFees, offersData, googleShoppingData) => ({
  type: types.SET_DETAIL_PAGE_PROFIT_CALCULATOR_DATA,
  payload: { profitCalculatorData, productFees, offersData, googleShoppingData },
});
