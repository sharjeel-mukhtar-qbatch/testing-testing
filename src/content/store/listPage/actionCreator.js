import * as types from './actionTypes';

export const setAsinArray = asinArray => ({ type: types.SET_ASIN_ARRAY, payload: { asinArray } });

export const setCurrentURL = currentURL => ({ type: types.SET_CURRENT_URL, payload: { currentURL } });

export const setListPageLoader = loader => ({ type: types.SET_LIST_PAGE_LOADER, payload: { loader } });

export const setReverseSearchData = (reverseSearchData, currencySymbol, success = null) => ({ type: types.FETCH_REVERSE_SEARCH_DATA, payload: { reverseSearchData, currencySymbol, success } });
