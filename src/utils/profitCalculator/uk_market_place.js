import { poundsToKg, valueFromStringRegEx } from '../constants';

import { calculateExtraCharge } from './commons';

export function calculateProductTierUK (productData, dimensionalWeight) {
  let productTier = 'N/A';
  const productTierWeight = productData.unitWeight;

  let [ shortestSide, medianSide, longestSide ] = [ Math.floor(productData.height * 100) / 100, Math.floor(productData.width * 100) / 100, Math.floor(productData.length * 100) / 100 ];

  let lengthPlusGirth = longestSide + (shortestSide + medianSide) * 2;

  if (productTierWeight <= 0.1763 && longestSide <= 7.87 && medianSide <= 5.9 && shortestSide <= 0.3937) productTier = 'Small Envelope';
  else if (productTierWeight <= 1.014 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842) productTier = 'Standard Envelope';
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 1.5748) productTier = 'Large Envelope';
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 2.3622) productTier = 'Extra Large Envelope';
  else if (productTierWeight <= 8.597 && dimensionalWeight <= 8.597 && longestSide < 13.7795 && medianSide < 9.8425 && shortestSide < 4.7244) productTier = 'Small Parcel';
  else if (productTierWeight <= 26.23 && dimensionalWeight <= 26.23 && longestSide <= 17.71 && medianSide <= 13.38 && shortestSide <= 10.236) productTier = 'Standard Parcel';
  else if (productTierWeight < 3.88 && dimensionalWeight < 56.92 && longestSide <= 24.01 && medianSide <= 18.11 && shortestSide <= 18.11) productTier = 'Small Oversize';
  else if (productTierWeight < 65.6095 && dimensionalWeight < 190.4761 && longestSide <= 47.244 && medianSide <= 23.622 && shortestSide <= 23.622) productTier = 'Standard Oversize';
  else if (productTierWeight < 69.4456 && dimensionalWeight > 238.099 && longestSide > 47.244 && longestSide < 68.8976) productTier = 'Large Oversize';
  else if (productTierWeight > 69.4456 || lengthPlusGirth > 141.732283 || longestSide > 68.8976377) productTier = 'Special Oversize';
  else productTier = 'Special Oversize';

  return productTier;
}

export function calculateProductTierForLowFbaUK (productData) {
  let productTier = 'N/A';
  let productTierWeight = productData.unitWeight;
  let [ shortestSide, medianSide, longestSide ] = [ parseFloat(productData.height.toFixed(2)), parseFloat(productData.width.toFixed(2)), parseFloat(productData.length.toFixed(2)) ];

  if (productTierWeight <= 0.17637 && longestSide <= 7.87 && medianSide <= 5.9 && shortestSide <= 0.3937) productTier = 'Small Envelope';
  else if (productTierWeight <= 0.1322 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842) productTier = 'Standard Envelope';
  else if (productTierWeight <= 0.4629 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842) productTier = 'Standard Envelope';
  else if (productTierWeight <= 1.0141 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842) productTier = 'Standard Envelope';
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 1.5748) productTier = 'Large Envelope';
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 2.3622) productTier = 'Extra Large Envelope';
  else if (productTierWeight <= 0.3306 && longestSide <= 13.7795 && medianSide <= 9.8425 && shortestSide <= 4.7244) productTier = 'Small Parcel';
  else if (productTierWeight <= 0.8818 && longestSide <= 13.7795 && medianSide <= 9.8425 && shortestSide <= 4.7244) productTier = 'Small Parcel';

  return productTier;
}

export function calculateFulfilmentFeeUK (unitWeight, dimensionalWeight, productTier, fulfilmentFeeHashForUk) {
  const unitWeightTiers = [ 'Small Envelope', 'Standard Envelope', 'Large Envelope', 'Extra Large Envelope', 'Special Oversize' ];

  let fulfilmentFees = 0;

  let shippingWeight = Math.max(unitWeight, dimensionalWeight);
  let weight = unitWeightTiers.includes(productTier) ? unitWeight : shippingWeight;

  let feesValues = fulfilmentFeeHashForUk[productTier];

  weight = Math.floor(weight * 100) / 100;

  if (productTier.includes('Oversize')) {
    for (const feesValue of feesValues) {
      let values = feesValue.match(valueFromStringRegEx);

      if (weight > parseFloat(values[0]) && weight <= parseFloat(values[1])) fulfilmentFees = parseFloat(values[2]);
      else if (parseFloat(values[4]) !== 0 && fulfilmentFees === 0) fulfilmentFees = calculateExtraCharge(weight, values[4], values[3], poundsToKg) + parseFloat(values[2]);
    }
  } else {
    for (const feesValue of feesValues) {
      let values = feesValue.match(valueFromStringRegEx);

      if (weight > parseFloat(values[0]) && weight <= parseFloat(values[1])) {
        fulfilmentFees = parseFloat(values[2]);
        break;
      }
    }
  }

  return parseFloat(fulfilmentFees.toFixed(2));
}

export function calculateClosingFeeUK (productCategory, fulfilmentFeeDistribution) {
  let fees = 0;
  let closingFeeProductCategory = fulfilmentFeeDistribution['closingFeeProductCategory'];
  let closingFeeValue = fulfilmentFeeDistribution['variableClosingFeeUK'];
  let closingFeeValueForBooks = fulfilmentFeeDistribution['variableClosingFeeForBookInUK'];
  let closingFeeHashForBooks = fulfilmentFeeDistribution['varibaleClosingFeeHashForBooksInUK'];

  if (productCategory) {
    let ifFoundFees = 0;

    for (let j = 0; j < closingFeeHashForBooks.length; j++) {
      if (closingFeeHashForBooks[j]?.match(productCategory) || productCategory?.match(closingFeeHashForBooks[j])) ifFoundFees = closingFeeValueForBooks;

      if (ifFoundFees) break;
    }

    for (let i = 0; i < closingFeeProductCategory.length; i++) {
      if (closingFeeProductCategory[i]?.match(productCategory) || productCategory?.match(closingFeeProductCategory[i])) {
        fees = closingFeeValue;

        if (ifFoundFees !== 0) fees = ifFoundFees;

        if (fees) break;
      }
    }
  }
  return fees;
}

export function calculateMaxCostUK (profitCalculatorData) {
  let minROI = 0;
  let minProfit = 0;
  let totalFees = profitCalculatorData.totalFee;

  switch (parseInt(profitCalculatorData.vatSelect)) {
  case 2:
    minROI =
        ((profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax))) * 0.2 +
          (profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax)))) /
        (1 + profitCalculatorData.minROI / 100 + (profitCalculatorData.vatTax / 100) * (profitCalculatorData.minROI / 100));
    minProfit =
        (profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax)) - profitCalculatorData.minProfit) *
        (1 + profitCalculatorData.vatTax / 100);
    break;
  case 3:
    minROI = (profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTaxFlatRate / 100)) / (1 + profitCalculatorData.minROI / 100);
    minProfit = profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTaxFlatRate / 100) - profitCalculatorData.minProfit;
    break;
  case 1:
    if (profitCalculatorData.isFeeVatApplied) {
      minROI = (profitCalculatorData.salePrice - totalFees - totalFees * (profitCalculatorData.vatTax / 100)) / (1 + profitCalculatorData.minROI / 100);
      minProfit = profitCalculatorData.salePrice - totalFees - profitCalculatorData.minProfit - totalFees * (profitCalculatorData.vatTax / 100);
    } else {
      minROI = (profitCalculatorData.salePrice - totalFees) / (1 + profitCalculatorData.minROI / 100);
      minProfit = profitCalculatorData.salePrice - totalFees - profitCalculatorData.minProfit;
    }

    break;
  case 0:
    minROI = (profitCalculatorData.salePrice - totalFees) / (1 + profitCalculatorData.minROI / 100);
    minProfit = profitCalculatorData.salePrice - totalFees - profitCalculatorData.minProfit;

    break;
  }

  return Math.min(minROI, minProfit).toFixed(2);
}
