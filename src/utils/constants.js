export const domainsSuffixes = [ '.com/', '.ca/', '.co.jp/', '.co.uk/', '.de/', '.es/', '.fr/', '.in/', '.it/', '.nl/' ];

export const marketplacesSuffixes = [ 'US', 'CA', 'JP', 'UK', 'DE', 'ES', 'FR', 'IN', 'IT', 'NL' ];

export const listPageUrlCheck = [ '/b', '/s' ];

export const detailPageUrlCheck = [ '/gp', '/dp', '/DP' ];

export const otherUrlCheck = [ '/stores/', 'chrome://', 'sellercentral', 'sell.amazon' ];

export const valueFromStringRegEx = /[+-]?\d+(\.\d+)?/g;

export const googleShoppingBaseUrl = 'https://www.google.';

export const usMarketPlace = 1;
export const ukMarketPlace = 2;

export const usMarketPlaceId = 'ATVPDKIKX0DER';
export const ukMarketPlaceId = 'A1F83G8C2ARO7P';

export const detailPageDropDownsKeysIds = [ 'profit_calculator', 'pricing_and_offerings', 'reverse_search', 'google_shopping' ];

export const poundsToKg = 0.45359237;

export const initialMinROI = 25;

export const initialMinProfit = 3;

export const weightUnitValues = {
  ounces: 16,
  gram: 454,
  g: 454,
  grams: 454,
  kilograms: 0.453592,
  kilogram: 0.453592,
  kg: 0.453592,
  kgs: 0.453592,
  mg: 453_592.37,
  mgs: 453_592.37,
  milligrams: 453_592.37,
  milligram: 453_592.37,
};

export const dimensionsUnitValues = {
  milimeters: 1 / 25.4,
  mm: 1 / 25.4,
  centimeters: 1 / 2.54,
  centimeter: 1 / 2.54,
  cm: 1 / 2.54,
  feets: 12,
  feet: 12,
  ft: 12,
  meters: 39.3701,
  meter: 39.3701,
  m: 39.3701,
};

export const offersXPathsKeys = { price: 'offersPrice', fulfilmentType: 'OffersFulfilmentChannel', sellerId: 'sellerIdXpath' };
export const buyBoxOffersXPathKeys = { price: 'buyBoxSalePrice', fulfilmentType: 'buyBoxFulfillment', sellerId: 'buyBoxSeller' };
