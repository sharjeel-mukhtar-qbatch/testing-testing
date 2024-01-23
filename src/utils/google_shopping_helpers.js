import { sendMessageForOffersAndGoogleShopping } from './arbitrage_element_functions';
import { valueFromStringRegEx } from '../utils/constants';
import { setDetailPageData } from '../content/store/detailPage/actionCreator';
import store from '../content/store/store';
import { getOfferAndGoogleShoppingReferralAndFBA } from '../utils/detail_offers_helpers';

export async function getGoogleShoppingFromBackground (url, profitCalculatorData, productFees, marketplace, productCategory) {
  let  { fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths } = await chrome.storage.local.get([ 'fulfilment_fee_distribution_xpaths' ]);

  try {
    let detailPageGoogleShoppingResponse = await sendMessageForOffersAndGoogleShopping(url, false);
    const parser = new DOMParser();
    const offersDocument = parser.parseFromString(detailPageGoogleShoppingResponse, 'text/html');

    let googleShoppingData =  await getGoogleShoppingData(offersDocument || [], fulfilmentFeeDistributionXPaths["GoogleShoppingPaths"], profitCalculatorData, productFees, marketplace, productCategory)

    store.dispatch(setDetailPageData({ googleShoppingData: googleShoppingData, googleShoppingSuccess: true , googleShoppingLoading: false }));
  } catch (error) {
    store.dispatch(setDetailPageData({ googleShoppingData: [], googleShoppingSuccess: false , googleShoppingLoading: false }));
  }
}

async function getGoogleShoppingData (offersDocument, detailPageOffersXpath, profitCalculatorData, productFees, marketplace, productCategory) {
  let googleShoppingDataArray = [];

  for ( let i = 0; i < detailPageOffersXpath["allGoogleShopping"].length; i++ ) if (offersDocument.querySelectorAll(detailPageOffersXpath["allGoogleShopping"][i]).length > 0) offersDocument = offersDocument.querySelectorAll(detailPageOffersXpath["allGoogleShopping"][i]);
  if (offersDocument?.length > 0) {
    let loopCount = detailPageOffersXpath["defaultNumberOfShopping"];

    if (offersDocument?.length <= detailPageOffersXpath["defaultNumberOfShopping"]) loopCount = offersDocument?.length;
    for ( let i = 0; i < loopCount; i++ ) {
      googleShoppingDataArray.push (await getDataByXpathsForGoogleShopping (offersDocument[i], detailPageOffersXpath));
    }
  }
  googleShoppingDataArray = await getOfferAndGoogleShoppingReferralAndFBA(googleShoppingDataArray, profitCalculatorData, productFees, marketplace, productCategory, false);

  return googleShoppingDataArray;
}

async function getDataByXpathsForGoogleShopping (offersDocument, detailPageOffersXpath) {
  let dataHash = { googleShoppingImage: undefined, googleShoppingTitle: undefined, salePrice: undefined, googleShoppingSeller: undefined, googleShoppingSellerName: undefined };

  for ( let i = 0; i < detailPageOffersXpath["maxCount"]; i++ ) {
    if (!dataHash.googleShoppingImage && detailPageOffersXpath["googleShoppingImage"][i] !== undefined) dataHash.googleShoppingImage = offersDocument?.querySelector(detailPageOffersXpath["googleShoppingImage"][i])?.src;
    if (!dataHash.googleShoppingTitle && detailPageOffersXpath["googleShoppingTitle"][i] !== undefined) dataHash.googleShoppingTitle = offersDocument?.querySelector(detailPageOffersXpath["googleShoppingTitle"][i])?.textContent;
    if (!dataHash.salePrice && detailPageOffersXpath["googleShoppingSalePrice"][i] !== undefined) dataHash.salePrice = parseFloat(offersDocument?.querySelector(detailPageOffersXpath["googleShoppingSalePrice"][i])?.textContent?.replace(/,/g, '')?.match(valueFromStringRegEx));
    if (!dataHash.googleShoppingSeller && detailPageOffersXpath["googleShoppingSeller"][i] !== undefined) dataHash.googleShoppingSeller = offersDocument?.querySelector(detailPageOffersXpath["googleShoppingSeller"][i])?.href;
    if (!dataHash.googleShoppingSellerName && detailPageOffersXpath["googleShoppingSellerName"][i] !== undefined) {
      dataHash.googleShoppingSellerName = offersDocument?.querySelector(detailPageOffersXpath["googleShoppingSellerName"][i])?.innerHTML;
      if (dataHash.googleShoppingSellerName.includes('</style>')) dataHash.googleShoppingSellerName = dataHash.googleShoppingSellerName?.split('</style>')?.[1];
    }
  }
  return dataHash;
}
