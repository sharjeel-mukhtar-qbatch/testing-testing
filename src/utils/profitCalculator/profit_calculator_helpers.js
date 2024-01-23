import { calculateClosingFeeUK, calculateFulfilmentFeeUK, calculateMaxCostUK, calculateProductTierForLowFbaUK, calculateProductTierUK } from './uk_market_place';
import { calculateClosingFeeUS, calculateFulfilmentFeeUS, calculateMaxCostUS, calculateProductTierUS } from './us_market_place';
import { calculateLowFbaFee, calculateReferralFee, calculateStorageFee, calculateTotalFees } from './commons';
import { ukMarketPlace, usMarketPlace } from '../constants';

import { getOfferAndGoogleShoppingReferralAndFBA } from '../detail_offers_helpers';
import { setDetailPageProfitCalculatorData } from '../../content/store/detailPage/actionCreator';
import store from '../../content/store/store';

export const calculateProfitValues = async (data, oldProfitCalculatorData, marketplace, currencySymbol, productData, productFees, oldOffersData, oldGoogleShoppingData) => {
  const newFees = productFees;
  let newOffersData = oldOffersData;
  let newGoogleShoppings = oldGoogleShoppingData;
  let newData = { ...oldProfitCalculatorData, ...data };

  Object.keys(newData).map(key => (newData[key] = +newData[key]));

  if (data?.isFeeVatApplied != undefined || data?.vatSelect || data?.taxValue != undefined) data['totalFee'] = newData?.totalFee;
  else if (data?.salePrice != undefined) {
    newFees['referralFees'] = await getReferralFee(newData?.salePrice, productData?.productCategory, marketplace, currencySymbol);

    newData['fulfilmentFee'] = getAppliedFulfilmentFee(marketplace, newData?.salePrice, newFees);

    data['fulfilmentFee'] = newData['fulfilmentFee'];

    data['totalFee'] = calculateTotalFees(newData, newFees);
  } else if (data?.costPrice !== undefined) data['totalFee'] = newData?.totalFee;
  else if (data?.prepFee != undefined || data?.fulfilmentType !== undefined || data?.storageMonth) data['totalFee'] = calculateTotalFees(newData, newFees);
  else if (data?.minROI || data?.minProfit) {
    data['maxCost'] = marketplace === usMarketPlace ? calculateMaxCostUS(newData) : calculateMaxCostUK(newData);

    await chrome.storage.local.set({ min_roi_value: data?.minROI, min_Profit_value: data?.minProfit });
  }

  if (data?.totalFee != undefined) {
    newData.totalFee = +data['totalFee'];

    if (data?.costPrice === undefined) data['maxCost'] = marketplace === usMarketPlace ? calculateMaxCostUS(newData) : calculateMaxCostUK(newData);

    data = { ...data, ...calculateProfitAndRoi(newData, marketplace) };
    data['profitMargin'] = calculateProfitMargin(data.profit, data.salePrice ?? oldProfitCalculatorData?.salePrice);

    let vatForBreak = marketplace === usMarketPlace ? 0 : newData['vatSelect'];

    if (!newData.isFeeVatApplied && newData['vatSelect'] === 1) vatForBreak = 0;

    const totalFeeForBreak = +parseFloat(newData.totalFee - newFees.referralFees[0] - newData.fulfilmentFee).toFixed(2);

    if (data.salePrice === undefined)
      data['breakEven'] = await breakevenSalePrice(
        totalFeeForBreak,
        newData?.costPrice,
        newFees.referralFees[2],
        vatForBreak,
        newData.vatTax,
        newData.vatTaxFlatRate,
        newFees.fulfilmentFee,
        newFees.lowPriceFBA,
        marketplace,
        productData?.productCategory,
      );

    newOffersData['FBA'] = await getOfferAndGoogleShoppingReferralAndFBA(oldOffersData['FBA'], newData, newFees, marketplace);
    newOffersData['AMZ'] = await getOfferAndGoogleShoppingReferralAndFBA(oldOffersData['AMZ'], newData, newFees, marketplace);
    newOffersData['FBM'] = await getOfferAndGoogleShoppingReferralAndFBA(oldOffersData['FBM'], newData, newFees, marketplace);
    newGoogleShoppings = await getOfferAndGoogleShoppingReferralAndFBA(oldGoogleShoppingData, newData, newFees, marketplace, null, false);
  }

  store.dispatch(setDetailPageProfitCalculatorData(data, newFees, newOffersData, newGoogleShoppings));
};

export const getReferralFee = async (salePrice, productCategory, marketplace, currencySymbol) => {
  const { fulfilment_fee_distribution: fulfilmentFeeDistribution } = await chrome.storage.local.get([ 'fulfilment_fee_distribution' ]);

  const referralFees = calculateReferralFee(
    productCategory,
    salePrice,
    fulfilmentFeeDistribution[marketplace === usMarketPlace ? 'referralFeePercentagesWithCategory' : marketplace === ukMarketPlace && 'referralFeeUKPercentagesWithCategory'],
    fulfilmentFeeDistribution['NonPortionCategoriesUSUK'],
    fulfilmentFeeDistribution['PortionCategoriesUSUK'],
    currencySymbol,
  );

  return referralFees;
};

export const getAppliedFulfilmentFee = (marketplace, salePrice, productFees) =>
  marketplace === usMarketPlace ? (salePrice < 10 ? productFees.lowPriceFBA : productFees.fulfilmentFee) : salePrice <= 10 ? productFees.lowPriceFBA : productFees.fulfilmentFee;

export const getFulfilmentText = (marketplace, lowFbaProductTier, salePrice, currencySymbol) => {
  const isLowFBA = marketplace === usMarketPlace ? (salePrice < 10 ? true : false) : salePrice <= 10 ? true : false;

  if (isLowFBA)
    if (lowFbaProductTier === 'N/A') return { title: 'The size of item exceeds low FBA criteria. So, Standard FBA will be applied.', label: 'Fulfilment Fee' };
    else return { title: `Low-Price FBA enabled on sale price less than 10. Products with sale price less than ${currencySymbol} 10 will be charged at reduced rate.`, label: 'Low-Price FBA Fee' };
  else return { title: `It is Standard FBA on sale price greater${marketplace === usMarketPlace ? ' or equal' : ''} than 10.`, label: 'Fulfilment Fee' };
};

export const profitCalculatorCalculations = (productData, profitCalculatorData, fulfilmentFeeDistribution, marketplace, currencySymbol, itemTitle) => {
  const volume = calculateVolume(productData.length, productData.height, productData.width);

  productData['volume'] = volume;

  if (marketplace === usMarketPlace) return profitCalculatorUSCalculations(productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol, itemTitle);
  else return profitCalculatorUKCalculations(productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol);
};

export const profitCalculatorUSCalculations = (productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol, itemTitle) => {
  const dimensionalWeight = productData.volume / 139;

  const productTier = calculateProductTierUS(productData, dimensionalWeight);
  let fulfilmentFee = calculateFulfilmentFeeUS(productTier, productData, dimensionalWeight, fulfilmentFeeDistribution);
  let lowPriceFBA = calculateLowFbaFee(productTier, productData, dimensionalWeight, fulfilmentFeeDistribution, fulfilmentFee, 'outOfBoundlowFbaFeeForUS', usMarketPlace);
  const storageFee = calculateStorageFee(productData.volume, productTier, fulfilmentFeeDistribution['storageFeeRangesByMonths']);
  const closingFee = calculateClosingFeeUS(productData.productCategory, fulfilmentFeeDistribution);

  const referralFees = calculateReferralFee(
    productData?.productCategory,
    profitCalculatorData?.salePrice,
    fulfilmentFeeDistribution['referralFeePercentagesWithCategory'],
    fulfilmentFeeDistribution['NonPortionCategoriesUSUK'],
    fulfilmentFeeDistribution['PortionCategoriesUSUK'],
    currencySymbol,
  );
  const productCategory = productData?.productCategory;

  const extraFulfilmentCategory = [ 'Battery', 'battery', 'batteries', 'Batteries', 'Rechargeable', 'rechargeable', 'Wireless', 'wireless' ];

  if (
    (productCategory.includes('phone') || productCategory.includes('Phones') || productCategory === 'Electronics' || productCategory === 'Electronic') &&
    extraFulfilmentCategory.some(category => itemTitle.includes(category))
  ) {
    fulfilmentFee += 0.11;
    lowPriceFBA += 0.11;
  }

  return { fulfilmentFee, lowPriceFBA, storageFee, referralFees, closingFee, productTier, lowFbaProductTier: productTier };
};

export const profitCalculatorUKCalculations = (productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol) => {
  const dimensionalWeight = ((productData.volume * Math.pow(2.54, 3)) / 5000) * 2.205;

  const productTier = calculateProductTierUK(productData, dimensionalWeight);
  const lowFbaProductTier = calculateProductTierForLowFbaUK(productData);
  const fulfilmentFee = calculateFulfilmentFeeUK(productData?.unitWeight, dimensionalWeight, productTier, fulfilmentFeeDistribution['fulfillmentFeeHashForUk']);
  const closingFee = calculateClosingFeeUK(productData?.productCategory, fulfilmentFeeDistribution);

  // UK market place act differently in if LowFBA tier is N/A
  const lowPriceFBA =
    lowFbaProductTier === 'N/A'
      ? fulfilmentFee
      : calculateLowFbaFee(lowFbaProductTier, productData, dimensionalWeight, fulfilmentFeeDistribution, fulfilmentFee, 'outOfBoundlowFbaFeeForUK', ukMarketPlace);

  const storageFee = calculateStorageFee(productData.volume, productTier, fulfilmentFeeDistribution['storageFeeRangesByMonthsForUK']);

  const referralFees = calculateReferralFee(
    productData?.productCategory,
    profitCalculatorData?.salePrice,
    fulfilmentFeeDistribution['referralFeeUKPercentagesWithCategory'],
    fulfilmentFeeDistribution['NonPortionCategoriesUSUK'],
    fulfilmentFeeDistribution['PortionCategoriesUSUK'],
    currencySymbol,
  );

  return { fulfilmentFee, lowPriceFBA, storageFee, referralFees, closingFee, productTier, lowFbaProductTier };
};

export function calculateProfitAndRoi (profitCalculatorData, marketplace) {
  let taxValue = (marketplace === ukMarketPlace ? calculateProductVatDue(profitCalculatorData) : (profitCalculatorData.taxValue / 100) * profitCalculatorData.salePrice).toFixed(2);

  let calculateProfit = Math.floor((profitCalculatorData.salePrice - profitCalculatorData.costPrice - profitCalculatorData.totalFee - taxValue) * 100) / 100;

  let calculateRoi = null;

  if (parseFloat(+profitCalculatorData.costPrice)) calculateRoi = Math.floor(parseFloat((calculateProfit / profitCalculatorData.costPrice) * 100) * 100) / 100;

  calculateProfit = parseFloat(calculateProfit.toFixed(2));
  return { profit: calculateProfit, ROI: calculateRoi, vatFees: taxValue };
}

export function calculateProductVatDue (profitCalculatorData) {
  let vatDueTaxValue = 0;

  if (profitCalculatorData.vatSelect === 0) return 0;

  if (profitCalculatorData.vatSelect == 2) {
    const taxPercentage = profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax);

    vatDueTaxValue = profitCalculatorData.salePrice * taxPercentage - profitCalculatorData.costPrice * taxPercentage;
  } else if (profitCalculatorData.vatSelect == 3) vatDueTaxValue = profitCalculatorData.salePrice * (profitCalculatorData.vatTaxFlatRate / 100);
  else if (profitCalculatorData.isFeeVatApplied) {
    let totalFee = profitCalculatorData.totalFee;

    vatDueTaxValue = totalFee * (profitCalculatorData.vatTax / 100);
  }

  return vatDueTaxValue;
}

export const calculateVolume = (length, height, width) => length * height * width;

export function calculateProfitMargin (profit, salePrice) {
  let profitMargin = null;

  if (!salePrice) return null;

  profitMargin = ((profit / salePrice) * 100).toFixed(2);

  return profitMargin;
}

export async function breakevenSalePrice (totalFee, costPrice, referralFeePercentage, vatSelect, vatPercentage, flatRate, fulfilment, lowFBA, marketplace, productCategory) {
  let breakevenSalePriceValue;

  let isLowFBA = false;

  totalFee += fulfilment;
  let referralPercentageValue = referralFeePercentage;

  if ([ 2, 1 ].includes(vatSelect))
    breakevenSalePriceValue = (totalFee * (vatPercentage / 100) + totalFee + costPrice) / (1 - referralPercentageValue / 100 - (referralPercentageValue / 100) * (vatPercentage / 100));
  else if (vatSelect === 3) breakevenSalePriceValue = (totalFee + costPrice) / (1 - referralPercentageValue / 100 - flatRate / 100);
  else if (vatSelect == 0) breakevenSalePriceValue = (totalFee + costPrice) / (1 - referralPercentageValue / 100);

  if (marketplace === usMarketPlace && lowFBA != null) {
    if (breakevenSalePriceValue - 0.77 < 10) {
      breakevenSalePriceValue = await breakevenSalePrice(totalFee - fulfilment, costPrice, referralFeePercentage, vatSelect, vatPercentage, flatRate, lowFBA, null, marketplace, productCategory);
      isLowFBA = true;
    }
  } else if (marketplace === ukMarketPlace && lowFBA != null) {
    if (breakevenSalePriceValue - 0.37 <= 10) {
      breakevenSalePriceValue = await breakevenSalePrice(totalFee - fulfilment, costPrice, referralFeePercentage, vatSelect, vatPercentage, flatRate, lowFBA, null, marketplace, productCategory);
      isLowFBA = true;
    }
  }

  const newReferralPercentage = (await getReferralFee(breakevenSalePriceValue, productCategory, marketplace, '1'))[2];

  if (newReferralPercentage != referralFeePercentage)
    breakevenSalePriceValue = await breakevenSalePrice(
      totalFee - fulfilment,
      costPrice,
      newReferralPercentage,
      vatSelect,
      vatPercentage,
      flatRate,
      isLowFBA ? lowFBA : fulfilment,
      isLowFBA ? null : lowFBA,
      marketplace,
      productCategory,
    );

  return breakevenSalePriceValue;
}
