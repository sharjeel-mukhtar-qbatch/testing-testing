import { calculationAccordingToTheTier } from './commons';

export function calculateProductTierUS (productData, dimensionalWeight) {
  let productTier = 'N/A';

  let productTierWeight = Math.max(productData.unitWeight, dimensionalWeight);

  let [ shortestSide, medianSide, longestSide ] = [ Math.floor(productData.height * 100) / 100, Math.floor(productData.width * 100) / 100, Math.floor(productData.length * 100) / 100 ];

  let lengthPlusGirth = longestSide + (shortestSide + medianSide) * 2;

  if (productData.unitWeight <= 1 && longestSide <= 15 && medianSide <= 12 && shortestSide <= 0.75) productTier = 'Small standard';
  else if (productTierWeight <= 20 && longestSide <= 18 && medianSide <= 14 && shortestSide <= 8) productTier = 'Large standard';
  else if (productTierWeight <= 70 && longestSide <= 60 && medianSide <= 30 && lengthPlusGirth <= 130) productTier = 'Small oversize';
  else if (productTierWeight <= 150 && longestSide <= 108 && lengthPlusGirth <= 130) productTier = 'Medium oversize';
  else if (productTierWeight <= 150 && longestSide <= 108 && lengthPlusGirth > 130 && lengthPlusGirth <= 165) productTier = 'Large oversize';
  else if (productData.unitWeight > 150 || productTierWeight > 150 || longestSide > 108 || lengthPlusGirth > 165) productTier = 'Special oversize';

  return productTier;
}

export function calculateFulfilmentFeeUS (productTier, productData, dimensionalWeight, fulfilmentFeeDistribution) {
  let fulfilmentFees = 0;
  let feesValues = 0;

  let shippingWeight = parseFloat(Math.max(productData.unitWeight, dimensionalWeight).toFixed(2));

  const weight = [ 'Small standard', 'Special oversize' ].includes(productTier) ? productData.unitWeight : shippingWeight;

  if ([ 'Small standard', 'Large standard' ].includes(productTier)) {
    const isApparelProducts = fulfilmentFeeDistribution['apparelProductsCategory'].includes(productData.productCategory);

    feesValues = fulfilmentFeeDistribution[isApparelProducts ? 'apperalProducts' : 'myProducts'][productTier];
  } else if (productTier.includes('oversize')) feesValues = fulfilmentFeeDistribution['overSizedProduct'][productTier];

  fulfilmentFees = parseFloat(calculationAccordingToTheTier(fulfilmentFees, feesValues, weight, productTier).toFixed(2));

  return fulfilmentFees;
}

export function calculateClosingFeeUS (productCategory, fulfilmentFeeDistribution) {
  let fees = 0;
  let closingFeeProductCategory = fulfilmentFeeDistribution['closingFeeProductCategory'];
  let closingFeeValue = fulfilmentFeeDistribution['variableClosingFeeUS'];

  if (productCategory) {
    for (let i = 0; i < closingFeeProductCategory.length; i++) {
      if (closingFeeProductCategory[i]?.match(productCategory) || productCategory?.match(closingFeeProductCategory[i])) fees = closingFeeValue;

      if (fees) break;
    }
  }
  return fees;
}

export function calculateMaxCostUS (profitCalculatorData) {
  const totalFee = profitCalculatorData.totalFee;

  let minROi = (profitCalculatorData.salePrice - totalFee) / (1 + profitCalculatorData.minROI / 100);
  let minProfit = profitCalculatorData.salePrice - totalFee - profitCalculatorData.minProfit;

  return Math.min(minROi, minProfit).toFixed(2);
}
