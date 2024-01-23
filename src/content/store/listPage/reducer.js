import * as types from './actionTypes';

const initialState = {
  loader: true,
  success: null,
  reverseSearchData: {},
  asinArray: [],
  currencySymbol: null,
  currentURL: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case types.SET_ASIN_ARRAY:
    return { ...state, asinArray: payload.asinArray };
  case types.SET_CURRENT_URL:
    return { ...state, currentURL: payload.currentURL };
  case types.FETCH_REVERSE_SEARCH_DATA:
    return { ...state, reverseSearchData: payload.reverseSearchData, success: payload.success, currencySymbol: payload.currencySymbol };
  case types.SET_LIST_PAGE_LOADER:
    return { ...state, loader: payload.loader };

  default:
    return state;
  }
};
