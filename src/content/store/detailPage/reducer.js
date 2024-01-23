import * as types from './actionTypes';

const initialState = {
  loading: true,
  headerData: null,
  productInfo: null,
  asin: null,
  currencySymbol: null,
  marketplace: null,
  productData: null,
  profitCalculatorData: null,
  productFees: null,
  offersData: {},
  offersDataSuccess: null,
  offersDataLoading: true,
  success: null,
  domain: null,
  reverseSearchData: [],
  reverseSearchLoading: false,
  reverseSearchSuccess: null,
  googleShoppingLoading: true,
  googleShoppingData: [],
  googleShoppingSuccess: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case types.DETAIL_PAGE_LOADER_CHANGE:
    return { ...state, loading: payload.loader };
  case types.SET_DETAIL_PAGE_DATA:
    return { ...state, ...payload };
  case types.RESET_DETAIL_PAGE_DATA:
    return {  ...state, ...payload, loading: state.loading, asin: state.asin, reverseSearchLoading: state.reverseSearchLoading, googleShoppingLoading: state.googleShoppingLoading };
  case types.SET_DETAIL_PAGE_PROFIT_CALCULATOR_DATA:
    return {
      ...state,
      profitCalculatorData: { ...state.profitCalculatorData, ...payload.profitCalculatorData },
      productFees: { ...state.productFees, ...payload.productFees },
      offersData: payload.offersData,
      googleShoppingData: payload.googleShoppingData,
    };
  case types.UPDATE_REFERRAL_FEE:
    return { ...state, productFees: { ...state.productFees, ...payload } };

  default:
    return state;
  }
};
