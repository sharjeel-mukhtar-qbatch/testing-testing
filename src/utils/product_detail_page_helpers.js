import {
  breakevenSalePrice,
  calculateProfitAndRoi,
  calculateProfitMargin,
  calculateProfitValues,
  getAppliedFulfilmentFee,
  getReferralFee,
  profitCalculatorCalculations,
} from './profitCalculator/profit_calculator_helpers';
import { dimensionsUnitValues, domainsSuffixes, initialMinProfit, initialMinROI, marketplacesSuffixes, usMarketPlace, valueFromStringRegEx, weightUnitValues } from './constants';
import { filter, groupBy, minBy, pick, sortBy, uniqBy, values } from 'lodash';
import { getAsinByXpath, getElementByXpath, getProductInfo, getReverseSearch, getSymbolAndMarket } from './arbitrage_element_functions';
import { getOfferAndGoogleShoppingReferralAndFBA, getOffersFromDetailPage } from './detail_offers_helpers';

import { calculateMaxCostUK } from './profitCalculator/uk_market_place';
import { calculateMaxCostUS } from './profitCalculator/us_market_place';
import { calculateTotalFees } from './profitCalculator/commons.js';
import { setDetailPageData } from '../content/store/detailPage/actionCreator';
import store from '../content/store/store';

export const fetchDetailPageData = async () => {
  let vatTaxFlatRate;
  let currencySymbol, asinElement, marketplace, arbitrageDoc, marketplaceValue;

  let {
    fulfilment_fee_distribution: fulfilmentFeeDistribution,
    fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths,
    vat_flat_rate: vatFlatRates,
    detail_page_subcontainer: detailPageSubContainerPath,
    min_roi_value: minRoi,
    min_Profit_value: minProfit,
  } = await chrome.storage.local.get([ 'fulfilment_fee_distribution', 'fulfilment_fee_distribution_xpaths', 'vat_flat_rate', 'min_roi_value', 'min_Profit_value', 'detail_page_subcontainer' ]);

  if (
    [
      fulfilmentFeeDistribution,
      fulfilmentFeeDistributionXPaths,
      vatFlatRates,
      ...values(
        pick(fulfilmentFeeDistribution, [
          'variableClosingFeeUK',
          'variableClosingFeeForBookInUK',
          'varibaleClosingFeeHashForBooksInUK',
          'variableClosingFeeUS',
          'NonPortionCategoriesUSUK',
          'PortionCategoriesUSUK',
        ]),
      ),
    ].some(x => !x)
  ) {
    let response = await chrome.runtime.sendMessage({ getAllDataByArbitrage: true });

    vatTaxFlatRate = response.profitCalculator.vat_flat_rate;
    fulfilmentFeeDistribution = response.profitCalculator;
    fulfilmentFeeDistributionXPaths = response.productDetailsPageXpath;
    await chrome.storage.local.set({ fulfilment_fee_distribution: fulfilmentFeeDistribution, fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths, vat_flat_rate: vatTaxFlatRate });
  }

  let { vat_flat_rate: vatFlatRate } = await chrome.storage.local.get([ 'vat_flat_rate' ]);

  vatTaxFlatRate = parseFloat(vatFlatRate);
  let [ currentUrl, domain ] = await getPageDomain();

  [ currencySymbol, marketplace, marketplaceValue ] = getSymbolAndMarket(domain);

  try {
    asinElement = await getProductAsin(currentUrl);

    if (!asinElement) throw Error('Asin Element is Undefined');

    const productCategory = getProductCategory(fulfilmentFeeDistributionXPaths);

    const productBSR = getProductBSR(fulfilmentFeeDistributionXPaths);

    const salePrice = getProductSalePrice(currentUrl, fulfilmentFeeDistributionXPaths);

    const urlParams = new URL(currentUrl).searchParams;
    let mainServerAPICheck = urlParams.get('use_main_server') === 'true';

    const response = await getProductInfo([ asinElement ], marketplace, marketplaceValue, mainServerAPICheck, productCategory === '' ? null : productCategory, productBSR, salePrice);

    if (response?.license_status && response?.license_status?.license == true) {
      let detailsResponse = {
        bsr: response?.products?.[asinElement]?.bsr,
        bsr_percentage: response?.products?.[asinElement]?.bsr_percentage,
        dimensions: response?.products?.[asinElement]?.dimensions,
        sales: response?.products?.[asinElement]?.sales,
        responseCategory: response?.products?.[asinElement]?.category,
      };
      let reverseSearchData = { products: response?.products?.[asinElement]?.products };
      const [ itemTitle, productData, profitCalculatorData ] = getValuesFromUrlAndByXPaths(currentUrl, fulfilmentFeeDistributionXPaths, asinElement, response);

      productData['productCategory'] = productCategory;
      profitCalculatorData['vatTaxFlatRate'] = vatTaxFlatRate;
      profitCalculatorData['storageMonth'] = 0;
      profitCalculatorData['fulfilmentType'] = false;
      profitCalculatorData['vatSelect'] = profitCalculatorData?.vatRegistered ? 2 : 1;
      profitCalculatorData['minROI'] = minRoi || initialMinROI;
      profitCalculatorData['minProfit'] = minProfit || initialMinProfit;

      let productFees = profitCalculatorCalculations(productData, profitCalculatorData, fulfilmentFeeDistribution, marketplace, currencySymbol, itemTitle);

      profitCalculatorData['fulfilmentFee'] = getAppliedFulfilmentFee(marketplace, profitCalculatorData?.salePrice, productFees);
      profitCalculatorData['totalFee'] = calculateTotalFees(profitCalculatorData, productFees);

      let vatForBreak = marketplace === usMarketPlace ? 0 : profitCalculatorData['vatSelect'];

      if (!profitCalculatorData.isFeeVatApplied && profitCalculatorData['vatSelect'] === 1) vatForBreak = 0;
      const totalFeeForBreak = profitCalculatorData.totalFee - productFees.referralFees[0] - profitCalculatorData.fulfilmentFee;

      profitCalculatorData.breakEven = await breakevenSalePrice(
        totalFeeForBreak,
        profitCalculatorData.costPrice,
        productFees.referralFees[2],
        vatForBreak,
        profitCalculatorData.vatTax,
        profitCalculatorData.vatTaxFlatRate,
        productFees?.fulfilmentFee,
        productFees?.lowPriceFBA,
        marketplace,
        productData?.productCategory,
      );

      profitCalculatorData['maxCost'] = marketplace === usMarketPlace ? calculateMaxCostUS(profitCalculatorData) : calculateMaxCostUK(profitCalculatorData);

      const result = calculateProfitAndRoi(profitCalculatorData, marketplace);

      profitCalculatorData['profit'] = result.profit;
      profitCalculatorData['ROI'] = result.ROI;
      profitCalculatorData['vatFees'] = result.vatFees;

      const profitMargin = calculateProfitMargin(result.profit, salePrice);

      profitCalculatorData['profitMargin'] = profitMargin;

      const headerData = {
        productTitle: itemTitle,
        imageXpath: fulfilmentFeeDistributionXPaths['productDetailPageImage'],
        currentUrl: currentUrl,
      };

      store.dispatch(
        setDetailPageData({
          headerData,
          productInfo: detailsResponse,
          asin: asinElement,
          currencySymbol,
          marketplace,
          productData,
          profitCalculatorData,
          productFees,
          reverseSearchData,
          mainServerAPICheck,
          success: true,
          domain,
        }),
      );

      return { domain, asinElement, marketplace, productFees, profitCalculatorData, productCategory };
    } else {
      store.dispatch(setDetailPageData({ success: false }));
    }
  } catch (error) {
    console.log('Error in Detail page: ', error.message);
    store.dispatch(setDetailPageData({ success: false }));
  }
};

export const fetchOffersOfDetailPage = async (domain, asinElement, marketplace, productFees, profitCalculatorData, productCategory) => {
  try {
    let { fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths } = await chrome.storage.local.get([ 'fulfilment_fee_distribution_xpaths' ]);
    let offersData = uniqBy(await getOffersFromDetailPage(domain, asinElement, fulfilmentFeeDistributionXPaths['detailPageoffersXpath'], marketplace), element =>
      [ element.salePrice + '_' + element.fulfilmentType ].join('_'),
    );

    offersData = filter(offersData, offer => offer.salePrice !== 0);
    offersData = sortBy(offersData, o => parseFloat(o.salePrice));
    offersData = groupBy(offersData, 'fulfilmentType');
    offersData['FBA'] = await getOfferAndGoogleShoppingReferralAndFBA(offersData['FBA'], profitCalculatorData, productFees, marketplace, productCategory);
    offersData['AMZ'] = await getOfferAndGoogleShoppingReferralAndFBA(offersData['AMZ'], profitCalculatorData, productFees, marketplace, productCategory);
    offersData['FBM'] = await getOfferAndGoogleShoppingReferralAndFBA(offersData['FBM'], profitCalculatorData, productFees, marketplace, productCategory);
    store.dispatch(setDetailPageData({ offersData: offersData, offersDataSuccess: true, offersDataLoading: false }));
  } catch (error) {
    store.dispatch(setDetailPageData({ offersData: {}, offersDataSuccess: false, offersDataLoading: false }));
  }
};

export async function fetchReverseSearch (asin, marketplace, currencySymbol, mainServerAPICheck) {
  try {
    const response = await getReverseSearch([ asin ], marketplace, mainServerAPICheck);

    if (response?.license_status && response?.license_status?.license == true) {
      const reverseSearchData = response?.products[asin];

      let { profitCalculatorData, productData, productFees, offersData } = store.getState().DetailPage;
      let costPrice = profitCalculatorData?.costPrice;

      if (!costPrice) costPrice = Math.floor(parseFloat((minBy(reverseSearchData?.products, v => parseFloat(v.price))?.price ?? 0) * 100)) / 100;

      calculateProfitValues({ costPrice }, profitCalculatorData, marketplace, currencySymbol, productData, productFees, offersData);
      store.dispatch(setDetailPageData({ reverseSearchData, reverseSearchSuccess: true, reverseSearchLoading: false }));
    }

    store.dispatch(setDetailPageData({ reverseSearchSuccess: false, reverseSearchLoading: false }));
  } catch (error) {
    store.dispatch(setDetailPageData({ reverseSearchSuccess: false, reverseSearchLoading: false }));
  }
}

export async function getPageDomain () {
  const tabUrl = window.location.href;
  const { tab_url: urlStore } = await chrome.storage.local.get([ 'tab_url' ]);

  let currentUrl = tabUrl || urlStore || (await chrome.runtime.sendMessage({ currentUrl: true }));

  const urlObj = new URL(currentUrl);
  const hostname = urlObj.hostname;
  const domain = hostname.split('amazon.').pop();

  return [ currentUrl, domain ];
}

export async function getProductAsin (currentUrl) {
  const { detail_page_asin: detailPageAsinPath } = await chrome.storage.local.get([ 'detail_page_asin' ]);
  let asinElement, asinFromUrl;

  if (currentUrl.includes('/dp') || currentUrl.includes('/gp/product')) {
    const regex = /\/(?:dp|product)\/([A-Za-z0-9]+)/;
    const match = currentUrl.match(regex);

    asinFromUrl = match ? match[1] : null;
  }

  if (asinFromUrl && asinFromUrl?.length >= 8 && asinFromUrl?.length <= 10) {
    return asinFromUrl;
  }

  for (let i = 0; i < detailPageAsinPath.length; i++) {
    let element = getAsinByXpath(detailPageAsinPath[i]);

    if (element) {
      asinElement = element.textContent.trim().replace(/\s/g, '').replace(String.fromCharCode(8206), '');
      break;
    }
  }

  return asinElement;
}

function splitDimensions (itemDimension) {
  return itemDimension.match(valueFromStringRegEx);
}

function getProductValue (xPathOfValue, isSalePriceValue = false) {
  if (xPathOfValue !== undefined && !isSalePriceValue) {
    let response = getElementByXpath(xPathOfValue).snapshotItem(0);

    if (response) return response.textContent.trim();
  }

  if (xPathOfValue !== undefined && isSalePriceValue) {
    let response = getElementByXpath(xPathOfValue);

    let salePrice = [];

    for (let i = 0; i < response.snapshotLength; i++) {
      let item = response.snapshotItem(i).textContent.trim();

      item = item.toLowerCase();
      if (!item.includes('count')) salePrice.push(item);
    }

    return salePrice[0] ?? '';
  }

  return '';
}

const getValueFromQueryParams = (params, attrs) => {
  for (const attr of attrs) {
    const value = params.get(attr);

    if (value) return parseFloat(value);
  }

  return '';
};

const getProductCategory = productDetailsXpath => {
  let productCategory = '';

  for (const categoryXpath of productDetailsXpath['itemCategory']) {
    if (productCategory === '' && categoryXpath !== undefined) {
      let productCategoryResponse = getElementByXpath(categoryXpath).snapshotItem(0);

      if (productCategoryResponse !== null) {
        if (productCategoryResponse.childNodes.length !== 0) {
          let elements = productCategoryResponse?.childNodes;

          for (let i = 0; i < productCategoryResponse.childNodes.length; i++) {
            if (elements[i].nodeName === 'A') {
              const text = productCategoryResponse.textContent.trim();
              const regex = /in\s(.*?)\s\(/;
              const match = text.match(regex);

              productCategory = (match && match[1]) || '';
            }
          }
        } else productCategory = productCategoryResponse.textContent.trim();
        if (productCategory === '‹') productCategory = '';
      }
    } else break;
  }

  return productCategory;
};

const getProductBSR = productDetailsXpath => {
  let bsr = null;

  if (productDetailsXpath['itemBSR'])
    for (const bsrXpath of productDetailsXpath['itemBSR']) {
      const xPathResult = getElementByXpath(bsrXpath);

      if (bsr) break;

      if (xPathResult.snapshotLength) {
        bsr = parseFloat(xPathResult.snapshotItem(0).textContent.trim().split(' ')[0].replace('#', '').replace(',', ''));
      }
    }

  return bsr;
};

export function getProductSalePrice (currentUrl, productDetailsXpath) {
  const urlParams = new URL(currentUrl).searchParams;
  let salePrice = '';

  const salePriceAttrs = [ 'ah_price', 'sas_sale_price', 'bbp-sellprice' ];

  salePrice = getValueFromQueryParams(urlParams, salePriceAttrs);

  for (let i = 0; i < productDetailsXpath['maxCount']; i++) {
    if (!salePrice) {
      salePrice = getProductValue(productDetailsXpath['salePrice'][i], true);
      if (salePrice.includes('option')) {
        let pricesArray = salePrice.split('option');

        salePrice = pricesArray[pricesArray.length - 1].trim();
      }

      if (salePrice) {
        salePrice = salePrice.replace(/,/g, '');
        salePrice = parseFloat(salePrice.match(valueFromStringRegEx));
        if (salePrice === 0) salePrice = undefined;
      }
    }
  }
  if (checkValue(salePrice)) salePrice = 0;

  return salePrice;
}
const checkValue = value => value === '' || value === undefined || Number.isNaN(value);

export function getValuesFromUrlAndByXPaths (currentUrl, productDetailsXpath, asin, response) {
  let [ salePrice, costPrice, itemDimension, unitWeight, itemTitle ] = Array(6).fill('');
  let [ prepFee, taxValue, vatTax ] = Array(4).fill(0);
  let [ vatRegistered, isFeeExcludesVat ] = Array(2).fill(false);

  let detailsResponse = response?.products[asin];

  if (detailsResponse?.dimensions) {
    if (detailsResponse?.dimensions.length && detailsResponse?.dimensions.width && detailsResponse?.dimensions.height)
      itemDimension = detailsResponse?.dimensions.length + 'X' + detailsResponse?.dimensions.width + 'X' + detailsResponse?.dimensions.height + ' milimeters';

    if (detailsResponse?.dimensions.weight) unitWeight = detailsResponse?.dimensions.weight + ' grams';
  }

  const urlParams = new URL(currentUrl).searchParams;

  const costPriceAttrs = [ 'ah_cost', 'sas_cost_price', 'bbp-buyprice' ];

  costPrice = getValueFromQueryParams(urlParams, costPriceAttrs);

  for (let i = 0; i < productDetailsXpath['maxCount']; i++) {
    if (!itemDimension) itemDimension = getProductValue(productDetailsXpath['itemDimension'][i]);

    if (!unitWeight) unitWeight = getProductValue(productDetailsXpath['itemWeight'][i]);

    if (!itemTitle) itemTitle = getProductValue(productDetailsXpath['itemTitle'][i]);
  }

  if (checkValue(costPrice)) costPrice = Math.floor(parseFloat((minBy(detailsResponse?.products, v => parseFloat(v.price))?.price ?? 0) * 100)) / 100;
  salePrice = getProductSalePrice(currentUrl, productDetailsXpath);

  if (checkValue(itemDimension)) itemDimension = [];

  [ prepFee, taxValue, vatTax, vatRegistered, isFeeExcludesVat ] = setLicenseStatusResponse(response, currentUrl);

  if (vatTax === 0) vatTax = 20;

  if (itemDimension.length > 0) if (splitDimensions(itemDimension).length > 3) unitWeight = itemDimension.split(';')[1];

  itemDimension = itemDimensionOfProduct(itemDimension); // shortest length, median length and the longest length sequence.
  unitWeight = itemWeightVariations(unitWeight);

  return [
    itemTitle,
    { length: itemDimension[2], width: itemDimension[1], height: itemDimension[0], unitWeight },
    { salePrice, costPrice, prepFee, taxValue, vatTax, vatRegistered, isFeeVatApplied: !isFeeExcludesVat },
  ];
}

export function itemDimensionOfProduct (itemDimension) {
  if (itemDimension.length === 0) return [ 0, 0, 0 ];
  else {
    itemDimension = itemDimension.toLowerCase();

    const unit = Object.keys(dimensionsUnitValues)
      .sort((a, b) => b.length - a.length)
      .find(unit => itemDimension.includes(unit));

    itemDimension = itemDimension.match(valueFromStringRegEx);
    if (unit) itemDimension = itemDimension.map(value => parseFloat(value) * dimensionsUnitValues[unit]);
    else itemDimension = itemDimension.map(value => parseFloat(value));

    if (itemDimension.length !== 3) for (let i = itemDimension.length; i <= 3; i++) itemDimension.push(0);

    let dimensionsArray = itemDimension.sort((a, b) => a - b);

    return dimensionsArray;
  }
}

export function itemWeightVariations (unitWeight) {
  if (Number.isNaN(unitWeight.match(valueFromStringRegEx)) || unitWeight.match(valueFromStringRegEx) === null) {
    unitWeight = 0;
    return unitWeight;
  }
  let weightValue = parseFloat(unitWeight.match(valueFromStringRegEx).join(''));

  unitWeight = unitWeight.toLowerCase();

  const unitValue =
    weightUnitValues[
      Object.keys(weightUnitValues)
        .sort((a, b) => b.length - a.length)
        .find(unit => unitWeight.includes(unit))
    ];

  unitWeight = weightValue / (unitValue ?? 1);

  return unitWeight;
}

function setLicenseStatusResponse (response, currentUrl) {
  let valuesArray, responseObject;

  const foundDomainIndex = domainsSuffixes.findIndex(x => currentUrl.includes(x));
  const foundMarketPlace = marketplacesSuffixes[foundDomainIndex];

  if (foundDomainIndex && foundMarketPlace) responseObject = response.license_status[foundMarketPlace];

  // api response setting for prep, tax, vat
  valuesArray = [ parseFloat(responseObject?.prep), parseFloat(responseObject?.tax), parseFloat(responseObject?.vat), responseObject?.vat_registered, responseObject?.is_fee_excludes_vat ];

  for (let i = 0; i < valuesArray?.length; i++) if (valuesArray[i] === undefined || Number.isNaN(valuesArray[i])) valuesArray[i] = i > 2 ? false : 0;

  return valuesArray;
}
