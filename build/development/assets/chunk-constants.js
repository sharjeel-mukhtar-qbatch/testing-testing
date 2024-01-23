var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
const domainsSuffixes = [".com/", ".ca/", ".co.jp/", ".co.uk/", ".de/", ".es/", ".fr/", ".in/", ".it/", ".nl/"];
const marketplacesSuffixes = ["US", "CA", "JP", "UK", "DE", "ES", "FR", "IN", "IT", "NL"];
const listPageUrlCheck = ["/b", "/s"];
const detailPageUrlCheck = ["/gp", "/dp", "/DP"];
const otherUrlCheck = ["/stores/", "chrome://", "sellercentral", "sell.amazon"];
const valueFromStringRegEx = /[+-]?\d+(\.\d+)?/g;
const googleShoppingBaseUrl = "https://www.google.";
const usMarketPlace = 1;
const ukMarketPlace = 2;
const usMarketPlaceId = "ATVPDKIKX0DER";
const ukMarketPlaceId = "A1F83G8C2ARO7P";
const detailPageDropDownsKeysIds = ["profit_calculator", "pricing_and_offerings", "reverse_search", "google_shopping"];
const poundsToKg = 0.45359237;
const initialMinROI = 25;
const initialMinProfit = 3;
const weightUnitValues = {
  ounces: 16,
  gram: 454,
  g: 454,
  grams: 454,
  kilograms: 0.453592,
  kilogram: 0.453592,
  kg: 0.453592,
  kgs: 0.453592,
  mg: 453592.37,
  mgs: 453592.37,
  milligrams: 453592.37,
  milligram: 453592.37
};
const dimensionsUnitValues = {
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
  m: 39.3701
};
const offersXPathsKeys = { price: "offersPrice", fulfilmentType: "OffersFulfilmentChannel", sellerId: "sellerIdXpath" };
const buyBoxOffersXPathKeys = { price: "buyBoxSalePrice", fulfilmentType: "buyBoxFulfillment", sellerId: "buyBoxSeller" };
export {
  detailPageUrlCheck as a,
  domainsSuffixes as b,
  getDefaultExportFromCjs as c,
  detailPageDropDownsKeysIds as d,
  commonjsGlobal as e,
  usMarketPlace as f,
  getAugmentedNamespace as g,
  offersXPathsKeys as h,
  ukMarketPlaceId as i,
  usMarketPlaceId as j,
  buyBoxOffersXPathKeys as k,
  listPageUrlCheck as l,
  initialMinROI as m,
  initialMinProfit as n,
  otherUrlCheck as o,
  poundsToKg as p,
  dimensionsUnitValues as q,
  marketplacesSuffixes as r,
  googleShoppingBaseUrl as s,
  ukMarketPlace as u,
  valueFromStringRegEx as v,
  weightUnitValues as w
};
