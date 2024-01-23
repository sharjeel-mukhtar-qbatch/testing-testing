import { poundsToKg, ukMarketPlace, usMarketPlace, valueFromStringRegEx } from '../constants';

function getProductCategoryName (searchCategory, totalCategoriesArray) {
  if (!totalCategoriesArray || !searchCategory) return '';

  return totalCategoriesArray?.find(category => category.includes(searchCategory)) || '';
}

export function calculateExtraCharge (weight, extraWeightLimit, price, extraChargeUnitWeight, onHalf = false) {
  if (weight > extraWeightLimit) {
    const extraWeight = (weight - extraWeightLimit) * (onHalf ? 2 : 1) * extraChargeUnitWeight;

    return Math.ceil(extraWeight) * parseFloat(price);
  }
  return 0;
}

export function calculateLowFbaFee (productTier, productData, dimensionalWeight, fulfilmentFeeDistribution, fulfilmentFee, outOfBoundFBAFee, marketplace) {
  const isApparelProducts = fulfilmentFeeDistribution['apparelProductsCategory'].includes(productData.productCategory);

  let feesValues = undefined;

  if (marketplace === ukMarketPlace) feesValues = fulfilmentFeeDistribution['lowFBAFeeHashForUk']?.[productTier];
  else if (marketplace === usMarketPlace) feesValues = fulfilmentFeeDistribution[isApparelProducts ? 'lowFBAFeesApperal' : 'lowFBAFeesItemsHash']?.[productTier];
  // feesValues will be undefined only when productTier is out of bound
  if (!feesValues) return fulfilmentFee - fulfilmentFeeDistribution[outOfBoundFBAFee];

  let lowPriceFBA = 0;

  let shippingWeight = marketplace === ukMarketPlace ? productData.unitWeight : parseFloat(Math.max(productData.unitWeight, dimensionalWeight).toFixed(2));

  const weight = [ 'Small standard', 'Special oversize' ].includes(productTier) ? productData.unitWeight : shippingWeight;

  lowPriceFBA = parseFloat(calculationAccordingToTheTier(lowPriceFBA, feesValues, weight, productTier, marketplace === ukMarketPlace ? poundsToKg : 1).toFixed(2));

  return lowPriceFBA;
}

export function calculationAccordingToTheTier (fulfilmentFees, feesValues, shippingWeight, productTier, extraChargeUnitWeight = 1) {
  if (productTier.includes('oversize')) {
    let [ lWeightLimit, uWeightLimit, basicFulfilment, extraPrice, extraWeightLimit ] = feesValues[0].match(valueFromStringRegEx);

    fulfilmentFees = parseFloat(basicFulfilment) + calculateExtraCharge(shippingWeight, extraWeightLimit, extraPrice, extraChargeUnitWeight);

    return fulfilmentFees;
  }

  for (const feesValue of feesValues) {
    let [ lWeightLimit, uWeightLimit, basicFulfilment, extraPrice ] = feesValue.match(valueFromStringRegEx);

    if (shippingWeight > parseFloat(lWeightLimit) && shippingWeight <= parseFloat(uWeightLimit)) {
      fulfilmentFees = parseFloat(basicFulfilment);
      if (parseFloat(extraPrice) > 0) fulfilmentFees += calculateExtraCharge(shippingWeight, lWeightLimit, extraPrice, extraChargeUnitWeight, true);

      break;
    }
  }
  return fulfilmentFees;
}

export function calculateStorageFee (itemVolume, productTier, storageFeeRateRanges) {
  let storageFee = 0;
  let cubicFeet = itemVolume / 1728;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const isOverSize = productTier.toLowerCase().includes('oversize');
  const storageFeeKey = isOverSize ? 'oversize' : 'standard';

  storageFee = currentMonth >= 0 && currentMonth <= 9 ? cubicFeet * storageFeeRateRanges[storageFeeKey]['jan_sep'] : cubicFeet * storageFeeRateRanges[storageFeeKey]['oct_dec'];

  return parseFloat(storageFee.toFixed(2));
}

export function calculateReferralFee (productCategory, salePrice, referralPercentageHash, nonPortionCategoriesList, portionCategoriesList, currencySymbol) {
  const portionCategory = getProductCategoryName(productCategory, portionCategoriesList);
  const nonPortionCategory = getProductCategoryName(productCategory, nonPortionCategoriesList);
  const isPortion = Boolean(portionCategory);
  const isNonPortion = Boolean(nonPortionCategory);

  productCategory = nonPortionCategory || portionCategory;
  let percentageOfCategory = referralPercentageHash[productCategory];

  let referralFees = 0;
  let referralFeePercentageText;
  let referralFeePercentage = 15;

  if (percentageOfCategory) {
    if (typeof percentageOfCategory === 'object') {
      let totalKeyPairs = Object.keys(percentageOfCategory);

      if (totalKeyPairs.length === 2) {
        let salePriceCheckValue = parseFloat(totalKeyPairs[0].match(valueFromStringRegEx));

        if (isPortion) [ referralFees, referralFeePercentageText, referralFeePercentage ] = referralFeeForPortions(percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol);
        else if (isNonPortion)
          [ referralFees, referralFeePercentageText, referralFeePercentage ] = referralFeeForNonPortions(percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol);
      } else if (totalKeyPairs.length === 4) {
        totalKeyPairs.sort((a, b) => percentageOfCategory[b] - percentageOfCategory[a]);

        [ referralFees, referralFeePercentageText, referralFeePercentage ] = referralFeeForFineArt(percentageOfCategory, salePrice, totalKeyPairs, currencySymbol);
      }
    } else {
      referralFees = percentageOfCategory * 0.01 * salePrice;
      referralFeePercentageText = `Referral: ${percentageOfCategory.toFixed(2)}%`;
      referralFeePercentage = percentageOfCategory;
    }
  }

  if (referralFees === 0 && referralPercentageHash['defaultPercentageForReferral'] && salePrice) {
    referralFees = referralPercentageHash['defaultPercentageForReferral'] * 0.01 * salePrice;
    referralFeePercentageText = `Referral: ${referralPercentageHash['defaultPercentageForReferral'].toFixed(2)}%`;
    referralFeePercentage = referralPercentageHash['defaultPercentageForReferral'];
  } else if (referralFees === 0 && salePrice) {
    referralFees = 15 * 0.01 * salePrice;
    referralFeePercentageText = 'Referral: 15.00%';
    referralFeePercentage = 15;
  }

  referralFees = parseFloat(referralFees.toFixed(2));

  return [ referralFees, referralFeePercentageText, referralFeePercentage ];
}

function referralFeeForPortions (percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol) {
  let msg = `Variable Referral Fee\nSale Price up to ${currencySymbol}${salePriceCheckValue}: ${percentageOfCategory[totalKeyPairs[0]].toFixed(2)}%`;
  let fees = 0;
  let percentage = 0;

  if (salePrice <= salePriceCheckValue) {
    fees = percentageOfCategory[totalKeyPairs[0]] * 0.01 * salePrice;
    percentage = percentageOfCategory[totalKeyPairs[0]];
  } else {
    fees += percentageOfCategory[totalKeyPairs[0]] * 0.01 * salePriceCheckValue;
    fees += percentageOfCategory[totalKeyPairs[1]] * 0.01 * (salePrice - salePriceCheckValue);
    msg += `\nSale Price above ${currencySymbol}${salePriceCheckValue}: ${percentageOfCategory[totalKeyPairs[1]].toFixed(2)}%`;

    percentage = totalKeyPairs[1];
  }

  return [ fees, msg, percentage ];
}

function referralFeeForNonPortions (percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol) {
  let msg = `Variable Referral Fee\nSale Price up to ${currencySymbol}${salePriceCheckValue}: `;
  let keyPair = salePrice <= salePriceCheckValue ? 0 : 1;
  let fees = percentageOfCategory[totalKeyPairs[keyPair]] * 0.01 * salePrice;

  msg += !keyPair
    ? `${percentageOfCategory[totalKeyPairs[keyPair]].toFixed(2)}%`
    : `${percentageOfCategory[totalKeyPairs[0]].toFixed(2)}%\nSale Price above ${currencySymbol}${salePriceCheckValue}: ${percentageOfCategory[totalKeyPairs[keyPair]].toFixed(2)}%`;

  return [ fees, msg, percentageOfCategory[totalKeyPairs[keyPair]] ];
}

function referralFeeForFineArt (percentageOfCategory, salePrice, totalKeyPairs, currencySymbol) {
  let msg = 'Variable Referral Fee';
  let fees = 0;
  let oldConditions = [];
  let percentage = 0;

  for (const keyPair of totalKeyPairs) {
    let condition = keyPair.match(valueFromStringRegEx).map(value => parseFloat(value));

    if (salePrice > condition[0] && condition[1] ? salePrice <= condition[1] : true) {
      let i = 0;
      let oldValuesSum = 0;

      for (; i < oldConditions.length; i++) {
        fees += percentageOfCategory[totalKeyPairs[i]] * 0.01 * (oldConditions[i] - oldValuesSum);
        msg += `\nSale Price up to ${currencySymbol + oldConditions[i]}: ${percentageOfCategory[totalKeyPairs[i]].toFixed(2)}%`;
        oldValuesSum += oldConditions[i];
      }

      fees += percentageOfCategory[totalKeyPairs[i]] * 0.01 * (salePrice - condition[0]);
      msg += `\nSale Price above ${currencySymbol + condition[0]}: ${percentageOfCategory[totalKeyPairs[i]].toFixed(2)}%`;

      percentage = totalKeyPairs[i];
      break;
    }
    oldConditions.push(condition[1]);
  }

  return [ fees, msg, percentage ];
}

export const calculateTotalFees = (profitCalculatorData, productFees) => {
  if (profitCalculatorData.fulfilmentType) return parseFloat((productFees.referralFees?.[0] + productFees.closingFee).toFixed(2));

  return parseFloat(
    profitCalculatorData.fulfilmentFee + productFees.storageFee * profitCalculatorData.storageMonth + productFees?.referralFees?.[0] + profitCalculatorData?.prepFee + productFees.closingFee,
  ).toFixed(2);
};
