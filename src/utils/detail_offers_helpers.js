import { buyBoxOffersXPathKeys, offersXPathsKeys, ukMarketPlace, ukMarketPlaceId, usMarketPlaceId, valueFromStringRegEx } from './constants';
import { calculateProfitAndRoi, getAppliedFulfilmentFee, getReferralFee } from './profitCalculator/profit_calculator_helpers';
import { getElementByXpath, sendMessageForOffersAndGoogleShopping } from './arbitrage_element_functions';

import { calculateTotalFees } from './profitCalculator/commons';

export async function getOffersFromDetailPage (domain, asinElement, detailPageOffersXpath, marketplace) {
  let pricesAndFulfilmentChannel = [];

  const currentMarketPlaceId = marketplace === ukMarketPlace ? ukMarketPlaceId : usMarketPlaceId;

  try {
    for (let i = 1; i <= 2; i++) {
      const url = getOffersURL(domain, asinElement, i);

      let offersContainer = await getOffersFromBackground(url, detailPageOffersXpath);

      if (offersContainer?.snapshotLength > 0) {
        for (let j = 0; j < offersContainer.snapshotLength; j++) {
          let snapshotData = offersContainer.snapshotItem(j);

          pricesAndFulfilmentChannel.push(await getOfferValuesByXPaths(snapshotData, detailPageOffersXpath, offersXPathsKeys, domain, currentMarketPlaceId));
        }
      } else break;
    }
    pricesAndFulfilmentChannel = await buyBoxFbaOffer(detailPageOffersXpath, pricesAndFulfilmentChannel, domain, currentMarketPlaceId);
    return pricesAndFulfilmentChannel;
  } catch (error) {
    console.log('Error in detail page offers: ', error);
  }
}

async function getOffersFromBackground (url, detailPageOffersXpath) {
  let detailPageOffersResponse = await sendMessageForOffersAndGoogleShopping(url, true);
  const parser = new DOMParser();
  const offersDocument = parser.parseFromString(detailPageOffersResponse, 'text/html');

  for (const xPath of detailPageOffersXpath['offersXpath']) {
    let detailPageOffersData = offersDocument.evaluate(xPath, offersDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    if (detailPageOffersData?.snapshotLength > 0) return detailPageOffersData;
  }

  return null;
}

async function getSellerIdFromOffer (url, domain, currentMarketPlaceId) {
  try {
    const urlObject = new URL(url);
    const queryParams = urlObject.searchParams;
    let [ sellerId, nodeId ] = queryParams.getAll('seller', 'node');

    if (sellerId) return `https://www.amazon.${domain}/s?i=merchant-items&me=${sellerId}&marketplaceID=${currentMarketPlaceId}`;
    else if (nodeId) return `https://www.amazon.${domain}/Warehouse-Deals/b?ie=UTF8&node=${nodeId}`;
    else return '';
  } catch (error) {
    return '';
  }
}

export async function buyBoxFbaOffer (detailPageOffersXpath, pricesAndFulfilmentChannel, domain, currentMarketPlaceId) {
  let snapshotData;

  for (const xPath of detailPageOffersXpath['buyBoxOffer']) if (!snapshotData && xPath !== undefined) snapshotData = getElementByXpath(xPath).snapshotItem(0);

  if (snapshotData) pricesAndFulfilmentChannel?.push(await getOfferValuesByXPaths(snapshotData, detailPageOffersXpath, buyBoxOffersXPathKeys, domain, currentMarketPlaceId, true));

  return pricesAndFulfilmentChannel;
}

const getOffersURL = (domain, asinElement, index) =>
  `https://www.amazon.${domain}/gp/product/ajax/ref=${
    index === 1 ? 'dp_aod_ALL_mbc' : `aod_page_${index}`
  }?asin=${asinElement}&m=&qid=&smid=&sourcecustomerorglistid=&sourcecustomerorglistitemid=&sr=&pc=dp${index === 1 ? '' : `&isonlyrenderofferlist=true&pageno=${index}`}&experienceId=aodAjaxMain`;

const getOfferValuesByXPaths = async (snapshotData, detailPageOffersXpath, xpathKeys, domain, currentMarketPlaceId, offersCheckForAWZ = false) => {
  let salePrice, fulfilmentType, sellerListPageUrl;

  for (let k = 0; k < detailPageOffersXpath['offersPathMaxCount']; k++) {
    if (!salePrice && detailPageOffersXpath[xpathKeys.price][k] !== undefined)
      salePrice = parseFloat(snapshotData.querySelectorAll(detailPageOffersXpath[xpathKeys.price][k])[0]?.innerHTML?.replace(/,/g, '')?.match(valueFromStringRegEx)) || 0;

    if (!fulfilmentType && detailPageOffersXpath[xpathKeys.fulfilmentType][k] !== undefined)
      fulfilmentType = offersCheckForAWZ === true ? 'AMZ' : (snapshotData.querySelector(detailPageOffersXpath[xpathKeys.fulfilmentType][k])?.innerHTML?.trim()?.toLowerCase()?.includes('amazon') ? 'FBA' : 'FBM') || null;

    if (!sellerListPageUrl && detailPageOffersXpath[xpathKeys.sellerId][k] !== undefined)
      sellerListPageUrl = (await getSellerIdFromOffer(snapshotData.querySelector(detailPageOffersXpath[xpathKeys.sellerId][k])?.href, domain, currentMarketPlaceId)) || null;
  }

  return { salePrice, fulfilmentType, sellerIdLink: sellerListPageUrl };
};

export const getOfferAndGoogleShoppingReferralAndFBA = async (offersArray, profitCalculatorData, productFees, marketplace = null, productCategory = null, offersCheck = true) => {
  const offersData = [];

  if (!offersArray) return [];

  for (const offer of offersArray) {
    let offerReferral, offerFulfilment;

    if (productCategory != null) {
      offerReferral = await getReferralFee(offer.salePrice, productCategory, marketplace, '');
      offerFulfilment = getAppliedFulfilmentFee(marketplace, offer.salePrice, productFees);
      offerReferral.pop();
    } else {
      offerReferral = offer?.offerReferral;
      offerFulfilment = offer?.offerFulfilment;
    }

    const totalFee = calculateTotalFees({ ...profitCalculatorData, salePrice: offer?.salePrice, fulfilmentFee: offerFulfilment }, { ...productFees, referralFees: offerReferral });
    const { profit, ROI } = offersCheck ? calculateProfitAndRoi({ ...profitCalculatorData, totalFee: totalFee, fulfilmentFee: offerFulfilment, salePrice: offer?.salePrice }, marketplace) : calculateProfitAndRoi({ ...profitCalculatorData, costPrice: offer?.salePrice }, marketplace);

    offersData.push({ ...offer, offerReferral, offerFulfilment, totalFee, profit, ROI });
  }

  return offersData;
};
