import { l as lodashExports } from "./chunk-lodash.js";
import { r as reactExports, a as reactDomExports, j as jsx, R as RenderIf, b as jsxs, c as createRoot, F as Fragment, d as React$1, A as APIValidationMain } from "./chunk-client.js";
import { b as domainsSuffixes, g as getAugmentedNamespace, c as getDefaultExportFromCjs, e as commonjsGlobal, u as ukMarketPlace, f as usMarketPlace, v as valueFromStringRegEx, p as poundsToKg, h as offersXPathsKeys, i as ukMarketPlaceId, j as usMarketPlaceId, k as buyBoxOffersXPathKeys, m as initialMinROI, n as initialMinProfit, q as dimensionsUnitValues, w as weightUnitValues, r as marketplacesSuffixes, s as googleShoppingBaseUrl, d as detailPageDropDownsKeysIds, o as otherUrlCheck } from "./chunk-constants.js";
const DETAIL_PAGE_LOADER_CHANGE = "DETAIL_PAGE_LOADER_CHANGE";
const SET_DETAIL_PAGE_DATA = "SET_DETAIL_PAGE_DATA";
const SET_DETAIL_PAGE_PROFIT_CALCULATOR_DATA = "SET_DETAIL_PAGE_PROFIT_CALCULATOR_DATA";
const UPDATE_REFERRAL_FEE = "UPDATE_REFERRAL_FEE";
const RESET_DETAIL_PAGE_DATA = "RESET_DETAIL_PAGE_DATA";
const setDetailPageLoader = (loader) => ({ type: DETAIL_PAGE_LOADER_CHANGE, payload: { loader } });
const setDetailPageData = (payload) => {
  return {
    type: SET_DETAIL_PAGE_DATA,
    payload
  };
};
const resetDetailPageData = () => ({
  type: RESET_DETAIL_PAGE_DATA,
  payload: {
    ...[
      "headerData",
      "productInfo",
      "currencySymbol",
      "marketplace",
      "reverseSearchData",
      "productData",
      "profitCalculatorData",
      "productFees",
      "offersDataSuccess",
      "mainServerAPICheck",
      "reverseSearchData",
      "reverseSearchSuccess",
      "success",
      "domain",
      "googleShoppingSuccess"
    ].reduce((obj, key) => lodashExports.merge(obj, { [key]: null }), {}),
    offersData: {},
    offersDataLoading: true,
    googleShoppingLoading: true,
    googleShoppingData: []
  }
});
const setDetailPageProfitCalculatorData = (profitCalculatorData, productFees, offersData, googleShoppingData) => ({
  type: SET_DETAIL_PAGE_PROFIT_CALCULATOR_DATA,
  payload: { profitCalculatorData, productFees, offersData, googleShoppingData }
});
const FETCH_REVERSE_SEARCH_DATA = "FETCH_REVERSE_SEARCH_DATA";
const SET_ASIN_ARRAY = "SET_ASIN_ARRAY";
const SET_LIST_PAGE_LOADER = "SET_LIST_PAGE_LOADER";
const SET_CURRENT_URL = "SET_CURRENT_URL";
const setCurrentURL = (currentURL) => ({ type: SET_CURRENT_URL, payload: { currentURL } });
const setListPageLoader = (loader) => ({ type: SET_LIST_PAGE_LOADER, payload: { loader } });
const setReverseSearchData = (reverseSearchData, currencySymbol, success = null) => ({ type: FETCH_REVERSE_SEARCH_DATA, payload: { reverseSearchData, currencySymbol, success } });
const amazon_pages = "";
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$2 = reactExports;
function h$4(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$3 = "function" === typeof Object.is ? Object.is : h$4, l$3 = e$2.useState, m$3 = e$2.useEffect, n$4 = e$2.useLayoutEffect, p$4 = e$2.useDebugValue;
function q$4(a2, b2) {
  var d2 = b2(), f2 = l$3({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$4(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$4(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$3(function() {
    r$4(c2) && g2({ inst: c2 });
    return a2(function() {
      r$4(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$4(d2);
  return d2;
}
function r$4(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$3(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$4(a2, b2) {
  return b2();
}
var u$3 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$4 : q$4;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$2.useSyncExternalStore ? e$2.useSyncExternalStore : u$3;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$3 = reactExports, n$3 = shimExports;
function p$3(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$3 = "function" === typeof Object.is ? Object.is : p$3, r$3 = n$3.useSyncExternalStore, t$3 = h$3.useRef, u$2 = h$3.useEffect, v$3 = h$3.useMemo, w$2 = h$3.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$3(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$3(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$3(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r$3(a2, c2[0], c2[1]);
  u$2(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$2(d2);
  return d2;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  var _gT$ContextKey;
  if (!reactExports.createContext)
    return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
  let realContext = contextMap.get(reactExports.createContext);
  if (!realContext) {
    realContext = reactExports.createContext(null);
    contextMap.set(reactExports.createContext, realContext);
  }
  return realContext;
}
const ReactReduxContext = /* @__PURE__ */ getContext();
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = reactExports.useContext(context);
    return contextValue;
  };
}
const useReduxContext = /* @__PURE__ */ createReduxContextHook();
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector2(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = void 0,
      noopCheck = void 0
    } = typeof equalityFnOrOptions === "function" ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;
    const {
      store: store2,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext$1();
    reactExports.useRef(true);
    const wrappedSelector = reactExports.useCallback({
      [selector.name](state) {
        const selected = selector(state);
        return selected;
      }
    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store2.getState, getServerState || store2.getState, wrappedSelector, equalityFn);
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = "function" === typeof Symbol && Symbol.for, c$2 = b$2 ? Symbol.for("react.element") : 60103, d$2 = b$2 ? Symbol.for("react.portal") : 60106, e$1 = b$2 ? Symbol.for("react.fragment") : 60107, f$2 = b$2 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$2 ? Symbol.for("react.profiler") : 60114, h$2 = b$2 ? Symbol.for("react.provider") : 60109, k$2 = b$2 ? Symbol.for("react.context") : 60110, l$2 = b$2 ? Symbol.for("react.async_mode") : 60111, m$2 = b$2 ? Symbol.for("react.concurrent_mode") : 60111, n$2 = b$2 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$2 ? Symbol.for("react.suspense") : 60113, q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120, r$2 = b$2 ? Symbol.for("react.memo") : 60115, t$2 = b$2 ? Symbol.for("react.lazy") : 60116, v$2 = b$2 ? Symbol.for("react.block") : 60121, w$1 = b$2 ? Symbol.for("react.fundamental") : 60117, x$1 = b$2 ? Symbol.for("react.responder") : 60118, y$1 = b$2 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$2:
          case m$2:
          case e$1:
          case g$2:
          case f$2:
          case p$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case n$2:
              case t$2:
              case r$2:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$2:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$2;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$2;
reactIs_production_min$1.Element = c$2;
reactIs_production_min$1.ForwardRef = n$2;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$2;
reactIs_production_min$1.Memo = r$2;
reactIs_production_min$1.Portal = d$2;
reactIs_production_min$1.Profiler = g$2;
reactIs_production_min$1.StrictMode = f$2;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$2;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$2;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$2;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$2;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t$2;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r$2;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$2;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$2;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$2;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e$1 || a2 === m$2 || a2 === g$2 || a2 === f$2 || a2 === p$2 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$2 || a2.$$typeof === r$2 || a2.$$typeof === h$2 || a2.$$typeof === k$2 || a2.$$typeof === n$2 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y$1 || a2.$$typeof === v$2);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$1.exports = reactIs_production_min$1;
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$1 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$1 = Symbol.for("react.suspense"), n$1 = Symbol.for("react.suspense_list"), p$1 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t$1 = Symbol.for("react.offscreen"), u$1;
u$1 = Symbol.for("react.module.reference");
function v$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$1:
          case e:
          case m$1:
          case n$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case h$1:
              case l$1:
              case q$1:
              case p$1:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h$1;
reactIs_production_min.ContextProvider = g$1;
reactIs_production_min.Element = b$1;
reactIs_production_min.ForwardRef = l$1;
reactIs_production_min.Fragment = d$1;
reactIs_production_min.Lazy = q$1;
reactIs_production_min.Memo = p$1;
reactIs_production_min.Portal = c$1;
reactIs_production_min.Profiler = f$1;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m$1;
reactIs_production_min.SuspenseList = n$1;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v$1(a2) === h$1;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v$1(a2) === g$1;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$1;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v$1(a2) === l$1;
};
reactIs_production_min.isFragment = function(a2) {
  return v$1(a2) === d$1;
};
reactIs_production_min.isLazy = function(a2) {
  return v$1(a2) === q$1;
};
reactIs_production_min.isMemo = function(a2) {
  return v$1(a2) === p$1;
};
reactIs_production_min.isPortal = function(a2) {
  return v$1(a2) === c$1;
};
reactIs_production_min.isProfiler = function(a2) {
  return v$1(a2) === f$1;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v$1(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v$1(a2) === m$1;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v$1(a2) === n$1;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d$1 || a2 === f$1 || a2 === e || a2 === m$1 || a2 === n$1 || a2 === t$1 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$1 || a2.$$typeof === p$1 || a2.$$typeof === g$1 || a2.$$typeof === h$1 || a2.$$typeof === l$1 || a2.$$typeof === u$1 || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v$1;
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
function Provider({
  store: store2,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  noopCheck = "once"
}) {
  const contextValue = reactExports.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      noopCheck
    };
  }, [store2, serverState, stabilityCheck, noopCheck]);
  const previousState = reactExports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
setBatch(reactDomExports.unstable_batchedUpdates);
const getReverseSearch = (asins, marketplace, mainServerAPICheck = false) => chrome.runtime.sendMessage({ reverseSearch: true, asin: asins, mainServerAPICheck, market: marketplace });
const getProductInfo = (asins, market, marketplace, mainServerAPICheck = false, category = null, bsr = null, salePrice = 0) => chrome.runtime.sendMessage({ productInfo: true, asin: asins, mainServerAPICheck, market, marketplace, bsr, category, salePrice });
const getAsinByXpath = (path) => document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
const getElementByXpath = (path) => document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
function getSymbolAndMarket(domain) {
  const domainMappings = {
    com: { symbol: "$", market: 1, value: "US" },
    "co.uk": { symbol: "£", market: 2, value: "UK" },
    de: { symbol: "€", market: 3, value: "DE" },
    fr: { symbol: "€", market: 4, value: "FR" },
    "co.jp": { symbol: "¥", market: 5, value: "JP" },
    ca: { symbol: "$", market: 6, value: "CA" },
    it: { symbol: "€", market: 8, value: "IT" },
    es: { symbol: "€", market: 9, value: "ES" },
    in: { symbol: "₹", market: 10, value: "IN" }
  };
  const { symbol, market, value } = domainMappings[domain] || domainMappings["co.uk"];
  return [symbol, market, value];
}
const sendMessageForOffersAndGoogleShopping = (url, checkForOffers) => chrome.runtime.sendMessage({ detailPageOffers: true, urlEndpoint: url, offersCheck: checkForOffers });
const initialState$1 = {
  loading: true,
  headerData: null,
  productInfo: null,
  asin: null,
  currencySymbol: null,
  marketplace: null,
  productData: null,
  profitCalculatorData: null,
  productFees: null,
  offersData: {},
  offersDataSuccess: null,
  offersDataLoading: true,
  success: null,
  domain: null,
  reverseSearchData: [],
  reverseSearchLoading: false,
  reverseSearchSuccess: null,
  googleShoppingLoading: true,
  googleShoppingData: [],
  googleShoppingSuccess: null
};
const DetailPage = (state = initialState$1, { type, payload }) => {
  switch (type) {
    case DETAIL_PAGE_LOADER_CHANGE:
      return { ...state, loading: payload.loader };
    case SET_DETAIL_PAGE_DATA:
      return { ...state, ...payload };
    case RESET_DETAIL_PAGE_DATA:
      return { ...state, ...payload, loading: state.loading, asin: state.asin, reverseSearchLoading: state.reverseSearchLoading, googleShoppingLoading: state.googleShoppingLoading };
    case SET_DETAIL_PAGE_PROFIT_CALCULATOR_DATA:
      return {
        ...state,
        profitCalculatorData: { ...state.profitCalculatorData, ...payload.profitCalculatorData },
        productFees: { ...state.productFees, ...payload.productFees },
        offersData: payload.offersData,
        googleShoppingData: payload.googleShoppingData
      };
    case UPDATE_REFERRAL_FEE:
      return { ...state, productFees: { ...state.productFees, ...payload } };
    default:
      return state;
  }
};
const initialState = {
  loader: true,
  success: null,
  reverseSearchData: {},
  asinArray: [],
  currencySymbol: null,
  currentURL: null
};
const ListPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ASIN_ARRAY:
      return { ...state, asinArray: payload.asinArray };
    case SET_CURRENT_URL:
      return { ...state, currentURL: payload.currentURL };
    case FETCH_REVERSE_SEARCH_DATA:
      return { ...state, reverseSearchData: payload.reverseSearchData, success: payload.success, currencySymbol: payload.currencySymbol };
    case SET_LIST_PAGE_LOADER:
      return { ...state, loader: payload.loader };
    default:
      return state;
  }
};
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2)
    return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof(i2))
      return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : String(i2);
}
function _defineProperty$1(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$1(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer2 = reducers[key];
    var initialState2 = reducer2(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer2(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer2 = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer2(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store2 = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store2.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store2.dispatch);
      return _objectSpread2(_objectSpread2({}, store2), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$1(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return void 0 === e2 && (e2 = false), y(n2) || r$1(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g(n2) {
  O(n2), n2.p.forEach(S), n2.p = null;
}
function O(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (g(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), g(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2, v2) {
  if (r$1(c2)) {
    var p2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r$1(p2))
      return;
    e2.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e2.h.D && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
function R(e2) {
  return r$1(e2) || n(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = D(r2, c2), u2.I = false;
    } else
      e3 = D(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function F() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q];
        if (s3 ? s3.t !== a3 : !c(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, R: {}, l: r2, t: n2, k: i2, o: null, g: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r$1(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.R, c2 = t4.i;
          if (4 === c2)
            i(o4, function(r3) {
              r3 !== Q && (void 0 !== e3[r3] || u(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k(t4)));
            }), i(e3, function(n4) {
              void 0 !== o4[n4] || u(o4, n4) || (f2[n4] = false, k(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), void 0 === f2[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e2 = p(n2);
  if (!u(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e2 = I(p(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.O = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e3), s2 = N(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g(c2) : O(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw g(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e3.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r$1(e3) && (e3 = R(e3));
    var i3 = w(this), o2 = N(this, e3, void 0);
    return o2[Q].C = true, O(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q];
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r$1(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un();
an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
const thunkMiddleware = thunk;
var __extends$2 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
var MiddlewareArray = (
  /** @class */
  function(_super) {
    __extends$2(MiddlewareArray2, _super);
    function MiddlewareArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray2, Symbol.species, {
      get: function() {
        return MiddlewareArray2;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray2;
  }(Array)
);
var EnhancerArray = (
  /** @class */
  function(_super) {
    __extends$2(EnhancerArray2, _super);
    function EnhancerArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, EnhancerArray2.prototype);
      return _this;
    }
    Object.defineProperty(EnhancerArray2, Symbol.species, {
      get: function() {
        return EnhancerArray2;
      },
      enumerable: false,
      configurable: true
    });
    EnhancerArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray2;
  }(Array)
);
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  options.actionCreatorCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer2 = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer2 === "function") {
    rootReducer = reducer2;
  } else if (isPlainObject(reducer2)) {
    rootReducer = combineReducers(reducer2);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
  var storeEnhancers = defaultEnhancers;
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(defaultEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id = "";
  var i2 = size;
  while (i2--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = (
  /** @class */
  function() {
    function RejectWithValue2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue2;
  }()
);
var FulfillWithMeta = (
  /** @class */
  function() {
    function FulfillWithMeta2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta2;
  }()
);
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
(function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var AC = typeof AbortController !== "undefined" ? AbortController : (
      /** @class */
      function() {
        function class_1() {
          this.signal = {
            aborted: false,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return false;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        class_1.prototype.abort = function() {
        };
        return class_1;
      }()
    );
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                  if (!isThenable(conditionResult))
                    return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
var promise;
typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
  return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
F();
const reducer = combineReducers({ DetailPage, ListPage });
const store = configureStore({ reducer });
const getItemElementsAndData = async () => {
  const { list_page_container: listPageContainerPath, list_page_grid_container: listPageGridContainerPath } = await chrome.storage.local.get(["list_page_container", "list_page_grid_container"]);
  const totalElements = listPageContainerPath.concat(listPageGridContainerPath);
  for (const element of totalElements) {
    const elementDoc = getElementByXpath(element);
    if (elementDoc.snapshotLength > 0 && elementDoc.snapshotItem(0))
      return await getAppendingTable(elementDoc);
  }
};
async function getAppendingTable(listPageItems) {
  let currentUrl;
  const tabUrl = window.location.href;
  currentUrl = tabUrl || await chrome.runtime.sendMessage({ currentUrl: true });
  const { list_page_subcontainer: listPageSubContainerPaths } = await chrome.storage.local.get(["list_page_subcontainer"]);
  try {
    const asinArray = [];
    const productDocArray = [];
    const productDataArray = [];
    for (let i2 = 0; i2 < listPageItems.snapshotLength; i2++) {
      const pageItem = listPageItems.snapshotItem(i2);
      const asinAttribute = pageItem.attributes["data-asin"].nodeValue;
      const productTitle = pageItem.querySelectorAll("h2 > a > span")[0].textContent;
      let productDoc;
      for (const listPageSubContainerPath of listPageSubContainerPaths) {
        productDoc = pageItem.querySelector(listPageSubContainerPath);
        if (productDoc)
          break;
      }
      productDataArray.push({ productTitle });
      productDocArray.push(productDoc);
      asinArray.push(asinAttribute);
    }
    return [productDocArray, asinArray, productDataArray, currentUrl];
  } catch (error) {
    console.log("Error in Search page", error.message);
  }
}
const fetchReverseSearchData = async (asinArray, currentURL) => {
  try {
    store.dispatch(setReverseSearchData({}, null, null));
    const urlObj = new URL(currentURL);
    const hostname = urlObj.hostname;
    const domain = hostname.split("amazon.").pop();
    const [currencySymbol, marketplace] = getSymbolAndMarket(domain);
    const urlParams = new URL(currentURL).searchParams;
    let mainServerAPICheck = urlParams.get("use_main_server") === "true";
    const response = await getReverseSearch(asinArray, marketplace, mainServerAPICheck);
    if ((response == null ? void 0 : response.success) && (response == null ? void 0 : response.license))
      store.dispatch(setReverseSearchData(response.products, currencySymbol, response.success));
    else
      store.dispatch(setReverseSearchData({}, null, false));
  } catch (error) {
    console.log("Error in Search page", error.message);
    store.dispatch(setReverseSearchData({}, null, false));
  }
};
const ProductDetail = ({ value, title, precision }) => /* @__PURE__ */ jsx(RenderIf, { isTrue: value, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "title", children: [
  /* @__PURE__ */ jsx("span", { className: "ah-custom-label", children: title }),
  /* @__PURE__ */ jsx("span", { className: "value", children: value === "N/A" ? value : parseFloat(value).toFixed(precision) })
] }) }) });
function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[0] === "string")
      args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
}
const alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (typeof args[0] === "string" && alreadyWarned[args[0]])
    return;
  if (typeof args[0] === "string")
    alreadyWarned[args[0]] = /* @__PURE__ */ new Date();
  warn(...args);
}
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb();
    };
    i18n.on("initialized", initialized);
  }
};
function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
}
function loadLanguages(i18n, lng, ns, cb) {
  if (typeof ns === "string")
    ns = [ns];
  ns.forEach((n2) => {
    if (i18n.options.ns.indexOf(n2) < 0)
      i18n.options.ns.push(n2);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
}
function oldI18nextHasLoadedNamespace(ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const lng = i18n.languages[0];
  const fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  const lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === "cimode")
    return true;
  const loadNotPending = (l2, n2) => {
    const loadState = i18n.services.backendConnector.state[`${l2}|${n2}`];
    return loadState === -1 || loadState === 2;
  };
  if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns))
    return false;
  if (i18n.hasResourceBundle(lng, ns))
    return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages)
    return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
    return true;
  return false;
}
function hasLoadedNamespace(ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce("i18n.languages were undefined or empty", i18n.languages);
    return true;
  }
  const isNewerI18next = i18n.options.ignoreJSONStructure !== void 0;
  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns))
        return false;
    }
  });
}
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const unescapeHtmlEntity = (m2) => htmlEntities[m2];
const unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
let defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape
};
function setDefaults() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
}
function getDefaults() {
  return defaultOptions;
}
let i18nInstance;
function setI18n(instance2) {
  i18nInstance = instance2;
}
function getI18n() {
  return i18nInstance;
}
const initReactI18next = {
  type: "3rdParty",
  init(instance2) {
    setDefaults(instance2.options.react);
    setI18n(instance2);
  }
};
const I18nContext = reactExports.createContext();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns])
        this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const usePrevious = (value, ignore) => {
  const ref = reactExports.useRef();
  reactExports.useEffect(() => {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
function useTranslation(ns) {
  let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports.useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces)
    i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    warnOnce("You will need to pass in an i18next instance by using initReactI18next");
    const notReadyT = (k2, optsOrDefaultValue) => {
      if (typeof optsOrDefaultValue === "string")
        return optsOrDefaultValue;
      if (optsOrDefaultValue && typeof optsOrDefaultValue === "object" && typeof optsOrDefaultValue.defaultValue === "string")
        return optsOrDefaultValue.defaultValue;
      return Array.isArray(k2) ? k2[k2.length - 1] : k2;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react && i18n.options.react.wait !== void 0)
    warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i18nOptions = {
    ...getDefaults(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === "string" ? [namespaces] : namespaces || ["translation"];
  if (i18n.reportNamespaces.addUsedNamespaces)
    i18n.reportNamespaces.addUsedNamespaces(namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n2) => hasLoadedNamespace(n2, i18n, i18nOptions));
  function getT() {
    return i18n.getFixedT(props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  }
  const [t2, setT] = reactExports.useState(getT);
  let joinedNS = namespaces.join();
  if (props.lng)
    joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = reactExports.useRef(true);
  reactExports.useEffect(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, () => {
          if (isMounted.current)
            setT(getT);
        });
      } else {
        loadNamespaces(i18n, namespaces, () => {
          if (isMounted.current)
            setT(getT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getT);
    }
    function boundReset() {
      if (isMounted.current)
        setT(getT);
    }
    if (bindI18n && i18n)
      i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n)
      i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (bindI18n && i18n)
        bindI18n.split(" ").forEach((e2) => i18n.off(e2, boundReset));
      if (bindI18nStore && i18n)
        bindI18nStore.split(" ").forEach((e2) => i18n.store.off(e2, boundReset));
    };
  }, [i18n, joinedNS]);
  const isInitial = reactExports.useRef(true);
  reactExports.useEffect(() => {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }
    isInitial.current = false;
  }, [i18n, keyPrefix]);
  const ret = [t2, i18n, ready];
  ret.t = t2;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready)
    return ret;
  if (!ready && !useSuspense)
    return ret;
  throw new Promise((resolve) => {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, () => resolve());
    } else {
      loadNamespaces(i18n, namespaces, () => resolve());
    }
  });
}
const BaseRatingComponent = ({ asin, detailsResponse }) => {
  const { t: t2 } = useTranslation();
  const bsrAndPercentage = (detailsResponse == null ? void 0 : detailsResponse.bsr) >= 1e8 || !/\d/.test(detailsResponse == null ? void 0 : detailsResponse.bsr) ? ["N/A", "N/A"] : [detailsResponse == null ? void 0 : detailsResponse.bsr, detailsResponse == null ? void 0 : detailsResponse.bsr_percentage];
  return /* @__PURE__ */ jsxs("div", { className: "ah-product", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "ah-custom-label ah-custom-h6 d-block", children: "ASIN" }),
      /* @__PURE__ */ jsxs("span", { className: "text-black ah-custom-font-light ah-custom-h6", children: [
        " ",
        asin,
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ah-product-details", children: [
      /* @__PURE__ */ jsx(ProductDetail, { value: bsrAndPercentage[0], title: "BSR ", precision: 0 }),
      /* @__PURE__ */ jsx(ProductDetail, { value: bsrAndPercentage[1], title: "BSR% ", precision: 4 }),
      /* @__PURE__ */ jsx(ProductDetail, { value: detailsResponse == null ? void 0 : detailsResponse.max_cost, title: t2("Max cost "), precision: 2 })
    ] })
  ] });
};
const Footer = ({ imageSize, children }) => {
  const arbitrageLogo = "./assets/images/arbitrageLogo.png";
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "ah-content-footer", children: [
    /* @__PURE__ */ jsx("div", { children }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxs("span", { className: "poweredBy", children: [
        t2("Powered by"),
        ":"
      ] }),
      /* @__PURE__ */ jsx("a", { href: "https://arbitragehero.com/", target: "_blank", rel: "noreferrer", style: { height: "15px" }, children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(arbitrageLogo), width: imageSize }) })
    ] })
  ] });
};
async function findContainerToAppendGridInto(xPaths) {
  let arbitrageDoc;
  for (const detailPageSubContainerPath of xPaths) {
    let rightSidebar = getElementByXpath(detailPageSubContainerPath);
    if (rightSidebar.snapshotLength > 0 && rightSidebar.snapshotItem(0)) {
      arbitrageDoc = rightSidebar.snapshotItem(0);
      break;
    }
  }
  return arbitrageDoc;
}
function googleLinkAndGoogleShoppingLink(itemTitle, currentUrl) {
  let googleBaseUrlWithMarketplace = amazonMarketplaces(currentUrl);
  let formattedTitle = itemTitle.replace(/[^\w\s]/gi, "").toLowerCase();
  formattedTitle = formattedTitle.replace(/\s+/g, "+");
  let googleLinkUrl = googleBaseUrlWithMarketplace + "search?q=" + formattedTitle;
  let googleShoppingLinkUrl = googleBaseUrlWithMarketplace + "search?tbm=shop&q=" + formattedTitle;
  return [googleLinkUrl, googleShoppingLinkUrl];
}
function amazonMarketplaces(currentUrl) {
  let baseUrl = "https://www.google";
  const defaultSuffix = ".co.uk/";
  const getBaseUrl = (suffix) => baseUrl + suffix;
  const foundDomain = domainsSuffixes.find((suffix) => currentUrl.includes(suffix));
  return getBaseUrl(foundDomain ?? defaultSuffix);
}
const GoogleLinks = ({ itemTitle, currentUrl, fontSize }) => {
  const googleImageTagString = "./assets/icons/ah-new-google-icon.svg";
  const TagImageTagString = "./assets/icons/ah-new-google-tag-icon.svg";
  const { t: t2 } = useTranslation();
  const [googleAndGoogleShoppingLink, setGoogleAndGoogleShoppingLink] = reactExports.useState([null, null]);
  reactExports.useEffect(() => {
    setGoogleAndGoogleShoppingLink(googleLinkAndGoogleShoppingLink(itemTitle, currentUrl));
  }, []);
  return /* @__PURE__ */ jsx(RenderIf, { isTrue: itemTitle, children: /* @__PURE__ */ jsxs("div", { style: { alignItems: "center", fontSize: `${fontSize || "15px"}`, gap: "5px", paddingBottom: "7px", fontWeight: "bold", display: "flex" }, children: [
    /* @__PURE__ */ jsxs("span", { className: "ah-custom-label ah-custom-h6 pb-0", children: [
      t2("Search"),
      ":"
    ] }),
    /* @__PURE__ */ jsx("a", { href: googleAndGoogleShoppingLink == null ? void 0 : googleAndGoogleShoppingLink[0], style: { maxHeight: "15px" }, target: "_blank", id: "google_anchor_tag", rel: "noreferrer", title: "Google Search Results", children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(googleImageTagString), alt: "google" }) }),
    /* @__PURE__ */ jsx("a", { href: googleAndGoogleShoppingLink == null ? void 0 : googleAndGoogleShoppingLink[1], style: { maxHeight: "15px" }, id: "google_shopping_anchor_tag", target: "_blank", rel: "noreferrer", title: "Google Shopping Results", children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(TagImageTagString), alt: "tag" }) })
  ] }) });
};
const Loader = ({ outerClass }) => /* @__PURE__ */ jsx("div", { className: outerClass ?? "ah-detail-page-data", children: /* @__PURE__ */ jsx("div", { className: "ah-common-loader" }) });
const EmptyData = ({ message = "Results not found" }) => {
  const noConnectionSVG = "./assets/icons/no-connection.svg";
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column  align-items-center ", children: [
    /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(noConnectionSVG), alt: "item", width: "250px", height: "45px" }),
    /* @__PURE__ */ jsx("span", { style: { fontWeight: "bold", color: "darkgrey", display: "flex", justifyContent: "center", paddingTop: "10px" }, children: t2(message) })
  ] });
};
const ReverseSearchTable = ({ stores, currencySymbol }) => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsx(RenderIf, { isTrue: stores == null ? void 0 : stores.length, fallback: /* @__PURE__ */ jsx(EmptyData, {}), children: /* @__PURE__ */ jsxs("table", { className: "ah-reverse-search-content-table", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { children: t2("Image") }),
      /* @__PURE__ */ jsx("th", { children: t2("Store") }),
      /* @__PURE__ */ jsx("th", { id: "price-header", children: t2("Price") })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: stores == null ? void 0 : stores.map((store2, index) => {
      const url = new URL(store2 == null ? void 0 : store2.url);
      return /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("img", { src: store2 == null ? void 0 : store2.image, style: { maxWidth: "40px", maxHeight: "40px", objectFit: "contain" } }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("a", { href: url.href, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsx("img", { height: "10", width: "10", src: `https://www.google.com/s2/favicons?domain=${url.hostname}` }),
          url.host.replace(/^www\./i, "")
        ] }) }),
        /* @__PURE__ */ jsxs("td", { children: [
          currencySymbol + " ",
          (Math.floor(parseFloat(store2 == null ? void 0 : store2.price) * 100) / 100).toFixed(2)
        ] })
      ] }, index);
    }) })
  ] }) }) });
};
const Overview = "Overview";
const Cost = "Cost";
const Price = "Price";
const Profit = "Profit";
const ROI = "ROI";
const Image = "Image";
const Store = "Store";
const german = {
  Overview,
  "Search on": "Search on",
  "Profit Calculator": "Profit Calculator",
  "Pricing & Offers": "Pricing & Offers",
  Cost,
  Price,
  "Prep Fee": "Prep Fee",
  "Storage Months": "Storage Months",
  "VAT Scheme": "VAT Scheme",
  "Not Applicable": "Not Applicable",
  "Not Registered": "Not Registered",
  "VAT Registered": "VAT Registered",
  "Flat Rate": "Flat Rate",
  "Fulfilment Type": "Fulfilment Type",
  "Low-Price FBA": "Low-Price FBA",
  "VAT On Fees": "VAT On Fees",
  Profit,
  "Profit Margin": "Profit Margin",
  ROI,
  "Maximum Cost": "Maximum Cost",
  "Min.ROI": "Min.ROI",
  "Min.Profit": "Min.Profit",
  "Total Fees": "Total Fees",
  "Fulfilment Fee": "Fulfilment Fee",
  "Referral Fee": "Referral Fee",
  "Variable Closing Fee": "Variable Closing Fee",
  "Storage Fee": "Storage Fee",
  "Reverse Search": "Reverse Search",
  Image,
  Store,
  "Tax Due": "Tax Due",
  "Powered by": "Powered by",
  "Please Contact Support!": "Please Contact Support!",
  "Results not found": "Results not found",
  "Max cost: ": "Max cost: ",
  "It is standard FBA as Low-Price FBA is not enabled": "It is standard FBA as Low-Price FBA is not enabled",
  "Select for how many months you want to store inventory in Amazon's warehouse": "Select for how many months you want to store inventory in Amazon's warehouse",
  "This is the Low-Price FBA rate. Products with sale price less than £10 will be charged at reduced rate.": "This is the Low-Price FBA rate. Products with sale price less than £10 will be charged at reduced rate."
};
const consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    if (console && console[type])
      console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug)
      return null;
    if (typeof args[0] === "string")
      args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();
class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      this.observers[event] = this.observers[event] || [];
      this.observers[event].push(listener);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event])
      return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event] = this.observers[event].filter((l2) => l2 !== listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = [].concat(this.observers[event]);
      cloned.forEach((observer) => {
        observer(...args);
      });
    }
    if (this.observers["*"]) {
      const cloned = [].concat(this.observers["*"]);
      cloned.forEach((observer) => {
        observer.apply(observer, [event, ...args]);
      });
    }
  }
}
function defer() {
  let res;
  let rej;
  const promise2 = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise2.resolve = res;
  promise2.reject = rej;
  return promise2;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy(a2, s2, t2) {
  a2.forEach((m2) => {
    if (s2[m2])
      t2[m2] = s2[m2];
  });
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf("###") > -1 ? key.replace(/###/g, ".") : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  const stack = typeof path !== "string" ? [].concat(path) : path.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    const key = cleanKey(stack.shift());
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}
function setPath(object, path, newValue) {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path, Object);
  obj[k2] = newValue;
}
function pushPath(object, path, newValue, concat) {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path, Object);
  obj[k2] = obj[k2] || [];
  if (concat)
    obj[k2] = obj[k2].concat(newValue);
  if (!concat)
    obj[k2].push(newValue);
}
function getPath(object, path) {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path);
  if (!obj)
    return void 0;
  return obj[k2];
}
function getPathWithDefaults(data, defaultData, key) {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, (s2) => _entityMap[s2]);
  }
  return data;
}
const chars = [" ", ",", "?", "!", ";"];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c2) => nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0);
  if (possibleChars.length === 0)
    return true;
  const r2 = new RegExp(`(${possibleChars.map((c2) => c2 === "?" ? "\\?" : c2).join("|")})`);
  let matched = !r2.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r2.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path])
    return obj[path];
  const paths = path.split(keySeparator);
  let current = obj;
  for (let i2 = 0; i2 < paths.length; ++i2) {
    if (!current)
      return void 0;
    if (typeof current[paths[i2]] === "string" && i2 + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i2]] === void 0) {
      let j2 = 2;
      let p2 = paths.slice(i2, i2 + j2).join(keySeparator);
      let mix = current[p2];
      while (mix === void 0 && paths.length > i2 + j2) {
        j2++;
        p2 = paths.slice(i2, i2 + j2).join(keySeparator);
        mix = current[p2];
      }
      if (mix === void 0)
        return void 0;
      if (mix === null)
        return null;
      if (path.endsWith(p2)) {
        if (typeof mix === "string")
          return mix;
        if (p2 && typeof mix[p2] === "string")
          return mix[p2];
      }
      const joinedPath = paths.slice(i2 + j2).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i2]];
  }
  return current;
}
function getCleanedCode(code) {
  if (code && code.indexOf("_") > 0)
    return code.replace("_", "-");
  return code;
}
class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path = [lng, ns];
    if (key && typeof key !== "string")
      path = path.concat(key);
    if (key && typeof key === "string")
      path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
    }
    const result = getPath(this.data, path);
    if (result || !ignoreJSONStructure || typeof key !== "string")
      return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key)
      path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent)
      this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m2 in resources) {
      if (typeof resources[m2] === "string" || Object.prototype.toString.apply(resources[m2]) === "[object Array]")
        this.addResource(lng, ns, m2, resources[m2], {
          silent: true
        });
    }
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false
    };
    let path = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent)
      this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns)
      ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === "v1")
      return {
        ...{},
        ...this.getResource(lng, ns)
      };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n2 = data && Object.keys(data) || [];
    return !!n2.find((v2) => data[v2] && Object.keys(data[v2]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      if (this.processors[processor])
        value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng)
      this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key === void 0 || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0)
      nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m2 = key.match(this.interpolator.nestingRegexp);
      if (m2 && m2.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
        namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object")
      options = {
        ...options
      };
    if (!options)
      options = {};
    if (keys === void 0 || keys === null)
      return "";
    if (!Array.isArray(keys))
      keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r2;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r2;
      }
      if (keySeparator) {
        const resTypeIsArray = resType === "[object Array]";
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m2 in res) {
          if (Object.prototype.hasOwnProperty.call(res, m2)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m2}`;
            copy2[m2] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy2[m2] === deepKey)
              copy2[m2] = res[m2];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
      res = res.join(joinArrays);
      if (res)
        res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : "";
      const defaultValue = options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res)
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i2 = 0; i2 < fallbackLngs.length; i2++) {
            lngs.push(fallbackLngs[i2]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l2, k2, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l2, namespace, k2, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l2, namespace, k2, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l2, namespace, k2, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              this.pluralResolver.getSuffixes(language, options).forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
        res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== "v1") {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation)
        this.interpolator.init({
          ...options,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...options.interpolation
            }
          }
        });
      const skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && typeof options.replace !== "string" ? options.replace : options;
      if (this.options.interpolation.defaultVariables)
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft)
          options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res)
        options.lng = resolved.usedLng;
      if (options.nest !== false)
        res = this.interpolator.nest(res, function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
            return null;
          }
          return _this.translate(...args, key);
        }, options);
      if (options.interpolation)
        this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
    if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === "string")
      keys = [keys];
    keys.forEach((k2) => {
      if (this.isValidLookup(found))
        return;
      const extracted = this.extractFromKey(k2, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS)
        namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found))
          return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found))
            return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling)
              pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource)
      return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && typeof options.replace !== "string";
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return null;
    const p2 = code.split("-");
    if (p2.length === 2)
      return null;
    p2.pop();
    if (p2[p2.length - 1].toLowerCase() === "x")
      return null;
    return this.formatLanguageCode(p2.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return code;
    const p2 = code.split("-");
    return this.formatLanguageCode(p2[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === "string" && code.indexOf("-") > -1) {
      const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p2 = code.split("-");
      if (this.options.lowerCaseLng) {
        p2 = p2.map((part) => part.toLowerCase());
      } else if (p2.length === 2) {
        p2[0] = p2[0].toLowerCase();
        p2[1] = p2[1].toUpperCase();
        if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
          p2[1] = capitalize(p2[1].toLowerCase());
      } else if (p2.length === 3) {
        p2[0] = p2[0].toLowerCase();
        if (p2[1].length === 2)
          p2[1] = p2[1].toUpperCase();
        if (p2[0] !== "sgn" && p2[2].length === 2)
          p2[2] = p2[2].toUpperCase();
        if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
          p2[1] = capitalize(p2[1].toLowerCase());
        if (specialCases.indexOf(p2[2].toLowerCase()) > -1)
          p2[2] = capitalize(p2[2].toLowerCase());
      }
      return p2.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes)
      return null;
    let found;
    codes.forEach((code) => {
      if (found)
        return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
        found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found)
          return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly))
          return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
            return;
          if (supportedLng.indexOf(lngOnly) === 0)
            return supportedLng;
        });
      });
    }
    if (!found)
      found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks)
      return [];
    if (typeof fallbacks === "function")
      fallbacks = fallbacks(code);
    if (typeof fallbacks === "string")
      fallbacks = [fallbacks];
    if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
      return fallbacks;
    if (!code)
      return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found)
      found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found)
      found = fallbacks[this.formatLanguageCode(code)];
    if (!found)
      found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found)
      found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c2) => {
      if (!c2)
        return;
      if (this.isSupportedCode(c2)) {
        codes.push(c2);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c2}`);
      }
    };
    if (typeof code === "string" && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly")
        addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
        addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly")
        addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === "string") {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0)
        addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}
let sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: function(n2) {
    return Number(n2 > 1);
  },
  2: function(n2) {
    return Number(n2 != 1);
  },
  3: function(n2) {
    return 0;
  },
  4: function(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  5: function(n2) {
    return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : n2 == 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5);
  },
  6: function(n2) {
    return Number(n2 == 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2);
  },
  7: function(n2) {
    return Number(n2 == 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  8: function(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 != 8 && n2 != 11 ? 2 : 3);
  },
  9: function(n2) {
    return Number(n2 >= 2);
  },
  10: function(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4);
  },
  11: function(n2) {
    return Number(n2 == 1 || n2 == 11 ? 0 : n2 == 2 || n2 == 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3);
  },
  12: function(n2) {
    return Number(n2 % 10 != 1 || n2 % 100 == 11);
  },
  13: function(n2) {
    return Number(n2 !== 0);
  },
  14: function(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 == 3 ? 2 : 3);
  },
  15: function(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
  },
  16: function(n2) {
    return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 !== 0 ? 1 : 2);
  },
  17: function(n2) {
    return Number(n2 == 1 || n2 % 10 == 1 && n2 % 100 != 11 ? 0 : 1);
  },
  18: function(n2) {
    return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : 2);
  },
  19: function(n2) {
    return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3);
  },
  20: function(n2) {
    return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2);
  },
  21: function(n2) {
    return Number(n2 % 100 == 1 ? 1 : n2 % 100 == 2 ? 2 : n2 % 100 == 3 || n2 % 100 == 4 ? 3 : 0);
  },
  22: function(n2) {
    return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : (n2 < 0 || n2 > 10) && n2 % 10 == 0 ? 2 : 3);
  }
};
const nonIntlVersions = ["v1", "v2", "v3"];
const intlVersions = ["v4"];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  const rules = {};
  sets.forEach((set) => {
    set.lngs.forEach((l2) => {
      rules[l2] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        return new Intl.PluralRules(getCleanedCode(code), {
          type: options.ordinal ? "ordinal" : "cardinal"
        });
      } catch (err) {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    return rule.numbers.map((number) => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return "";
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = "plural";
      } else if (suffix === 1) {
        suffix = "";
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === "v1") {
      if (suffix === 1)
        return "";
      if (typeof suffix === "number")
        return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === "v2") {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}
function deepFindWithDefaults(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && typeof key === "string") {
    path = deepFind(data, key, keySeparator);
    if (path === void 0)
      path = deepFind(defaultData, key, keySeparator);
  }
  return path;
}
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation)
      options.interpolation = {
        escapeValue: true
      };
    const iOpts = options.interpolation;
    this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
    this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
    this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
    this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options)
      this.init(this.options);
  }
  resetRegExp() {
    const regexpStr = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(regexpStr, "g");
    const regexpUnescapeStr = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
    const nestingRegexpStr = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function regexSafe(val) {
      return val.replace(/\$/g, "$$$$");
    }
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p2 = key.split(this.formatSeparator);
      const k2 = p2.shift().trim();
      const f2 = p2.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k2, this.options.keySeparator, this.options.ignoreJSONStructure), f2, lng, {
        ...options,
        ...data,
        interpolationkey: k2
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === "string" ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (typeof value !== "string" && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    function handleHasOptions(key, inheritedOptions) {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0)
        return key;
      const c2 = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c2[1]}`;
      key = c2[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions)
          clonedOptions = {
            ...inheritedOptions,
            ...clonedOptions
          };
      } catch (e2) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
        return `${key}${sep}${optionsString}`;
      }
      delete clonedOptions.defaultValue;
      return key;
    }
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r2 = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r2.shift();
        formatters = r2;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && typeof value !== "string")
        return value;
      if (typeof value !== "string")
        value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v2, f2) => this.format(v2, f2, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}
function parseFormatStr(formatStr) {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p2 = formatStr.split("(");
    formatName = p2[0].toLowerCase().trim();
    const optStr = p2[1].substring(0, p2[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (!opt)
          return;
        const [key, ...rest] = opt.split(":");
        const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val;
        if (val === "false")
          formatOptions[key.trim()] = false;
        if (val === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val))
          formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  const cache = {};
  return function invokeFormatter(val, lng, options) {
    const key = lng + JSON.stringify(options);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    const result = formats.reduce((mem, f2) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f2);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l2, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}
function removePending(q2, name) {
  if (q2.pending[name] !== void 0) {
    delete q2.pending[name];
    q2.pendingCount--;
  }
}
class Connector extends EventEmitter {
  constructor(backend, store2, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store2;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0)
          ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0)
            pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0)
            pending[name] = true;
          if (toLoad[name] === void 0)
            toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0)
            toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces)
        toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s2 = name.split("|");
    const lng = s2[0];
    const ns = s2[1];
    if (err)
      this.emit("failedLoading", lng, ns, err);
    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }
    this.state[name] = err ? -1 : 2;
    const loaded = {};
    this.queue.forEach((q2) => {
      pushPath(q2.loaded, [lng], ns);
      removePending(q2, name);
      if (err)
        q2.errors.push(err);
      if (q2.pendingCount === 0 && !q2.done) {
        Object.keys(q2.loaded).forEach((l2) => {
          if (!loaded[l2])
            loaded[l2] = {};
          const loadedKeys = q2.loaded[l2];
          if (loadedKeys.length) {
            loadedKeys.forEach((n2) => {
              if (loaded[l2][n2] === void 0)
                loaded[l2][n2] = true;
            });
          }
        });
        q2.done = true;
        if (q2.errors.length) {
          q2.callback(q2.errors);
        } else {
          q2.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q2) => !q2.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length)
      return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r2 = fc(lng, ns);
        if (r2 && typeof r2.then === "function") {
          r2.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r2);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (typeof languages === "string")
      languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length)
        callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s2 = name.split("|");
    const lng = s2[0];
    const ns = s2[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err)
        this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data)
        this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "")
      return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r2;
          if (fc.length === 5) {
            r2 = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r2 = fc(languages, namespace, key, fallbackValue);
          }
          if (r2 && typeof r2.then === "function") {
            r2.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r2);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0])
      return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      let ret = {};
      if (typeof args[1] === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (typeof args[2] === "object" || typeof args[3] === "object") {
        const options = args[3] || args[2];
        Object.keys(options).forEach((key) => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: (value, format, lng, options) => value,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function noop() {
}
function bindMemberFunctions(inst) {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === "string") {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== "v1") {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject)
        return null;
      if (typeof ClassOrObject === "function")
        return new ClassOrObject();
      return ClassOrObject;
    }
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== "undefined") {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s2 = this.services;
      s2.logger = baseLogger;
      s2.resourceStore = this.store;
      s2.languageUtils = lu;
      s2.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s2.formatter = createClassOnDemand(formatter);
        s2.formatter.init(s2, this.options);
        this.options.interpolation.format = s2.formatter.format.bind(s2.formatter);
      }
      s2.interpolator = new Interpolator(this.options);
      s2.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s2.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s2.resourceStore, s2, this.options);
      s2.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s2.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s2.languageDetector.init)
          s2.languageDetector.init(s2, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s2.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s2.i18nFormat.init)
          s2.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m2) => {
        if (m2.init)
          m2.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback)
      callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev")
        this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        if (this.isInitialized && !this.initializedStoreOnce)
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone)
          this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language === "string" ? language : this.language;
    if (typeof language === "function")
      usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng)
          return;
        if (lng === "cimode")
          return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l2) => {
          if (l2 === "cimode")
            return;
          if (toLoad.indexOf(l2) < 0)
            toLoad.push(l2);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l2) => append(l2));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach((l2) => append(l2));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
        if (!e2 && !this.resolvedLanguage && this.language)
          this.setResolvedLanguage(this.language);
        usedCallback(e2);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (!lngs)
      lngs = this.languages;
    if (!ns)
      ns = this.options.ns;
    if (!callback)
      callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l2) {
    if (!l2 || !this.languages)
      return;
    if (["cimode", "dev"].indexOf(l2) > -1)
      return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1)
        continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l2) => {
      this.language = l2;
      this.languages = this.services.languageUtils.toResolveHierarchy(l2);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l2);
    };
    const done = (err, l2) => {
      if (l2) {
        setLngProps(l2);
        this.translator.changeLanguage(l2);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l2);
        this.logger.log("languageChanged", l2);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback)
        callback(err, function() {
          return _this2.t(...arguments);
        });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector)
        lngs = [];
      const l2 = typeof lngs === "string" ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l2) {
        if (!this.language) {
          setLngProps(l2);
        }
        if (!this.translator.language)
          this.translator.changeLanguage(l2);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage)
          this.services.languageDetector.cacheUserLanguage(l2);
      }
      this.loadResources(l2, (err) => {
        done(err, l2);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k2) => `${options.keyPrefix}${keySeparator}${k2}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === "string") {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l2, n2) => {
      const loadState = this.services.backendConnector.state[`${l2}|${n2}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0)
        return preResult;
    }
    if (this.hasResourceBundle(lng, ns))
      return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    if (typeof ns === "string")
      ns = [ns];
    ns.forEach((n2) => {
      if (this.options.ns.indexOf(n2) < 0)
        this.options.ns.push(n2);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === "string")
      lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0);
    if (!newLngs.length) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng)
      lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng)
      return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore)
      delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m2) => {
      clone[m2] = this[m2];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
instance.use(initReactI18next).init({
  resources: {
    "de-DE": { translation: german }
  },
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});
function ArbitrageItem({ itemData, asin }) {
  var _a, _b;
  const { loader, reverseSearchData, currentURL, success, currencySymbol } = useSelector((state) => state.ListPage);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    RenderIf,
    {
      isTrue: !loader && success !== null,
      fallback: /* @__PURE__ */ jsxs("div", { className: "arbitrage-content", children: [
        /* @__PURE__ */ jsx(Loader, { outerClass: "ah-search-page-loader" }),
        /* @__PURE__ */ jsx(Footer, { imageSize: "50px" })
      ] }),
      children: /* @__PURE__ */ jsx(RenderIf, { isTrue: reverseSearchData[asin], children: /* @__PURE__ */ jsxs("div", { className: "arbitrage-content", children: [
        /* @__PURE__ */ jsx(BaseRatingComponent, { asin, detailsResponse: reverseSearchData[asin] }),
        /* @__PURE__ */ jsx(GoogleLinks, { itemTitle: itemData == null ? void 0 : itemData.productTitle, currentUrl: currentURL }),
        /* @__PURE__ */ jsx(RenderIf, { isTrue: (_a = reverseSearchData[asin]) == null ? void 0 : _a.products, children: /* @__PURE__ */ jsx(ReverseSearchTable, { stores: lodashExports.sortBy((_b = reverseSearchData[asin]) == null ? void 0 : _b.products, (o2) => parseFloat(o2.price)), currencySymbol }) }),
        /* @__PURE__ */ jsx(Footer, { imageSize: "50px" })
      ] }) })
    }
  ) });
}
function AddElementIntoAmazonListPage() {
  let length = null;
  const intervalId = setInterval(async () => {
    try {
      const listPageData = await getItemElementsAndData();
      if (!listPageData)
        throw Error("List Page Snapshot elements not found");
      const [listItemsDoc, asinArray, itemsData, currentUrl] = listPageData;
      if (listItemsDoc.length === length) {
        clearInterval(intervalId);
        addingArbitrageMainGridToDetailPage$1(listItemsDoc, asinArray, itemsData, currentUrl);
      }
      length = listItemsDoc.length;
    } catch (error) {
      const noResultXpath = '//div[contains(@class, "-no-results")]';
      if (error.message === "List Page Snapshot elements not found") {
        if (getElementByXpath(noResultXpath).snapshotItem(0))
          clearInterval(intervalId);
      } else
        console.log("Error in List Page App", error);
    }
  }, 1e3);
}
async function addingArbitrageMainGridToDetailPage$1(listItemsDoc, asinArray, itemsData, currentUrl) {
  var _a;
  let language = document.getElementsByTagName("html")[0].lang;
  language = language.split("-");
  language[1] = (_a = language[1]) == null ? void 0 : _a.toUpperCase();
  instance.changeLanguage(language.join("-"));
  store.dispatch(setCurrentURL(currentUrl));
  let scriptInjectionCount = 0;
  for (let index = 0; index < listItemsDoc.length; index++) {
    const container = document.createElement("div");
    container.id = `arbitrage-extension-item-${asinArray[index]}`;
    if (listItemsDoc[index].lastChild.id !== container.id) {
      scriptInjectionCount++;
      listItemsDoc[index].append(container);
    }
    createRoot(container).render(
      /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx("div", { style: { maxWidth: "276px" }, children: /* @__PURE__ */ jsx(ArbitrageItem, { itemData: itemsData[index], asin: asinArray[index] }) }) })
    );
  }
  scriptInjectionCount && fetchReverseSearchData(asinArray, currentUrl);
}
var cjs = { exports: {} };
var Draggable$2 = {};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim2(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim2.isRequired = shim2;
  function getShim() {
    return shim2;
  }
  var ReactPropTypes = {
    array: shim2,
    bigint: shim2,
    bool: shim2,
    func: shim2,
    number: shim2,
    object: shim2,
    string: shim2,
    symbol: shim2,
    any: shim2,
    arrayOf: getShim,
    element: shim2,
    elementType: shim2,
    instanceOf: getShim,
    node: shim2,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes.exports;
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t2 = 0; t2 < e2.length; t2++)
        e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e2)
        e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e2 = arguments[f2++]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const clsx_m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx,
  default: clsx
}, Symbol.toStringTag, { value: "Module" }));
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(clsx_m);
var domFns = {};
var shims = {};
Object.defineProperty(shims, "__esModule", {
  value: true
});
shims.dontSetMe = dontSetMe;
shims.findInArray = findInArray;
shims.int = int;
shims.isFunction = isFunction;
shims.isNum = isNum;
function findInArray(array, callback) {
  for (let i2 = 0, length = array.length; i2 < length; i2++) {
    if (callback.apply(callback, [array[i2], i2, array]))
      return array[i2];
  }
}
function isFunction(func) {
  return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
}
function isNum(num) {
  return typeof num === "number" && !isNaN(num);
}
function int(a2) {
  return parseInt(a2, 10);
}
function dontSetMe(props, propName, componentName) {
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}
var getPrefix$1 = {};
Object.defineProperty(getPrefix$1, "__esModule", {
  value: true
});
getPrefix$1.browserPrefixToKey = browserPrefixToKey;
getPrefix$1.browserPrefixToStyle = browserPrefixToStyle;
getPrefix$1.default = void 0;
getPrefix$1.getPrefix = getPrefix;
const prefixes = ["Moz", "Webkit", "O", "ms"];
function getPrefix() {
  var _window$document;
  let prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window === "undefined")
    return "";
  const style = (_window$document = window.document) === null || _window$document === void 0 || (_window$document = _window$document.documentElement) === null || _window$document === void 0 ? void 0 : _window$document.style;
  if (!style)
    return "";
  if (prop in style)
    return "";
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    if (browserPrefixToKey(prop, prefixes[i2]) in style)
      return prefixes[i2];
  }
  return "";
}
function browserPrefixToKey(prop, prefix) {
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}
function browserPrefixToStyle(prop, prefix) {
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}
function kebabToTitleCase(str) {
  let out = "";
  let shouldCapitalize = true;
  for (let i2 = 0; i2 < str.length; i2++) {
    if (shouldCapitalize) {
      out += str[i2].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i2] === "-") {
      shouldCapitalize = true;
    } else {
      out += str[i2];
    }
  }
  return out;
}
getPrefix$1.default = getPrefix();
Object.defineProperty(domFns, "__esModule", {
  value: true
});
domFns.addClassName = addClassName;
domFns.addEvent = addEvent;
domFns.addUserSelectStyles = addUserSelectStyles;
domFns.createCSSTransform = createCSSTransform;
domFns.createSVGTransform = createSVGTransform;
domFns.getTouch = getTouch;
domFns.getTouchIdentifier = getTouchIdentifier;
domFns.getTranslation = getTranslation;
domFns.innerHeight = innerHeight;
domFns.innerWidth = innerWidth;
domFns.matchesSelector = matchesSelector;
domFns.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
domFns.offsetXYFromParent = offsetXYFromParent;
domFns.outerHeight = outerHeight;
domFns.outerWidth = outerWidth;
domFns.removeClassName = removeClassName;
domFns.removeEvent = removeEvent;
domFns.removeUserSelectStyles = removeUserSelectStyles;
var _shims$2 = shims;
var _getPrefix = _interopRequireWildcard$1(getPrefix$1);
function _getRequireWildcardCache$1(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache$1 = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard$1(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$1(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
let matchesSelectorFunc = "";
function matchesSelector(el, selector) {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims$2.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(method) {
      return (0, _shims$2.isFunction)(el[method]);
    });
  }
  if (!(0, _shims$2.isFunction)(el[matchesSelectorFunc]))
    return false;
  return el[matchesSelectorFunc](selector);
}
function matchesSelectorAndParentsTo(el, selector, baseNode) {
  let node = el;
  do {
    if (matchesSelector(node, selector))
      return true;
    if (node === baseNode)
      return false;
    node = node.parentNode;
  } while (node);
  return false;
}
function addEvent(el, event, handler, inputOptions) {
  if (!el)
    return;
  const options = {
    capture: true,
    ...inputOptions
  };
  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent("on" + event, handler);
  } else {
    el["on" + event] = handler;
  }
}
function removeEvent(el, event, handler, inputOptions) {
  if (!el)
    return;
  const options = {
    capture: true,
    ...inputOptions
  };
  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent("on" + event, handler);
  } else {
    el["on" + event] = null;
  }
}
function outerHeight(node) {
  let height = node.clientHeight;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims$2.int)(computedStyle.borderTopWidth);
  height += (0, _shims$2.int)(computedStyle.borderBottomWidth);
  return height;
}
function outerWidth(node) {
  let width = node.clientWidth;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims$2.int)(computedStyle.borderLeftWidth);
  width += (0, _shims$2.int)(computedStyle.borderRightWidth);
  return width;
}
function innerHeight(node) {
  let height = node.clientHeight;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims$2.int)(computedStyle.paddingTop);
  height -= (0, _shims$2.int)(computedStyle.paddingBottom);
  return height;
}
function innerWidth(node) {
  let width = node.clientWidth;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims$2.int)(computedStyle.paddingLeft);
  width -= (0, _shims$2.int)(computedStyle.paddingRight);
  return width;
}
function offsetXYFromParent(evt, offsetParent, scale) {
  const isBody = offsetParent === offsetParent.ownerDocument.body;
  const offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  const x2 = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  const y2 = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x2,
    y: y2
  };
}
function createCSSTransform(controlPos, positionOffset) {
  const translation = getTranslation(controlPos, positionOffset, "px");
  return {
    [(0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default)]: translation
  };
}
function createSVGTransform(controlPos, positionOffset) {
  const translation = getTranslation(controlPos, positionOffset, "");
  return translation;
}
function getTranslation(_ref, positionOffset, unitSuffix) {
  let {
    x: x2,
    y: y2
  } = _ref;
  let translation = "translate(".concat(x2).concat(unitSuffix, ",").concat(y2).concat(unitSuffix, ")");
  if (positionOffset) {
    const defaultX = "".concat(typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix);
    const defaultY = "".concat(typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }
  return translation;
}
function getTouch(e2, identifier) {
  return e2.targetTouches && (0, _shims$2.findInArray)(e2.targetTouches, (t2) => identifier === t2.identifier) || e2.changedTouches && (0, _shims$2.findInArray)(e2.changedTouches, (t2) => identifier === t2.identifier);
}
function getTouchIdentifier(e2) {
  if (e2.targetTouches && e2.targetTouches[0])
    return e2.targetTouches[0].identifier;
  if (e2.changedTouches && e2.changedTouches[0])
    return e2.changedTouches[0].identifier;
}
function addUserSelectStyles(doc) {
  if (!doc)
    return;
  let styleEl = doc.getElementById("react-draggable-style-el");
  if (!styleEl) {
    styleEl = doc.createElement("style");
    styleEl.type = "text/css";
    styleEl.id = "react-draggable-style-el";
    styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
    styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
  }
  if (doc.body)
    addClassName(doc.body, "react-draggable-transparent-selection");
}
function removeUserSelectStyles(doc) {
  if (!doc)
    return;
  try {
    if (doc.body)
      removeClassName(doc.body, "react-draggable-transparent-selection");
    if (doc.selection) {
      doc.selection.empty();
    } else {
      const selection = (doc.defaultView || window).getSelection();
      if (selection && selection.type !== "Caret") {
        selection.removeAllRanges();
      }
    }
  } catch (e2) {
  }
}
function addClassName(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}
function removeClassName(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), "g"), "");
  }
}
var positionFns = {};
Object.defineProperty(positionFns, "__esModule", {
  value: true
});
positionFns.canDragX = canDragX;
positionFns.canDragY = canDragY;
positionFns.createCoreData = createCoreData;
positionFns.createDraggableData = createDraggableData;
positionFns.getBoundPosition = getBoundPosition;
positionFns.getControlPosition = getControlPosition;
positionFns.snapToGrid = snapToGrid;
var _shims$1 = shims;
var _domFns$1 = domFns;
function getBoundPosition(draggable, x2, y2) {
  if (!draggable.props.bounds)
    return [x2, y2];
  let {
    bounds
  } = draggable.props;
  bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
  const node = findDOMNode(draggable);
  if (typeof bounds === "string") {
    const {
      ownerDocument
    } = node;
    const ownerWindow = ownerDocument.defaultView;
    let boundNode;
    if (bounds === "parent") {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }
    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    const boundNodeEl = boundNode;
    const nodeStyle = ownerWindow.getComputedStyle(node);
    const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
    bounds = {
      left: -node.offsetLeft + (0, _shims$1.int)(boundNodeStyle.paddingLeft) + (0, _shims$1.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims$1.int)(boundNodeStyle.paddingTop) + (0, _shims$1.int)(nodeStyle.marginTop),
      right: (0, _domFns$1.innerWidth)(boundNodeEl) - (0, _domFns$1.outerWidth)(node) - node.offsetLeft + (0, _shims$1.int)(boundNodeStyle.paddingRight) - (0, _shims$1.int)(nodeStyle.marginRight),
      bottom: (0, _domFns$1.innerHeight)(boundNodeEl) - (0, _domFns$1.outerHeight)(node) - node.offsetTop + (0, _shims$1.int)(boundNodeStyle.paddingBottom) - (0, _shims$1.int)(nodeStyle.marginBottom)
    };
  }
  if ((0, _shims$1.isNum)(bounds.right))
    x2 = Math.min(x2, bounds.right);
  if ((0, _shims$1.isNum)(bounds.bottom))
    y2 = Math.min(y2, bounds.bottom);
  if ((0, _shims$1.isNum)(bounds.left))
    x2 = Math.max(x2, bounds.left);
  if ((0, _shims$1.isNum)(bounds.top))
    y2 = Math.max(y2, bounds.top);
  return [x2, y2];
}
function snapToGrid(grid, pendingX, pendingY) {
  const x2 = Math.round(pendingX / grid[0]) * grid[0];
  const y2 = Math.round(pendingY / grid[1]) * grid[1];
  return [x2, y2];
}
function canDragX(draggable) {
  return draggable.props.axis === "both" || draggable.props.axis === "x";
}
function canDragY(draggable) {
  return draggable.props.axis === "both" || draggable.props.axis === "y";
}
function getControlPosition(e2, touchIdentifier, draggableCore) {
  const touchObj = typeof touchIdentifier === "number" ? (0, _domFns$1.getTouch)(e2, touchIdentifier) : null;
  if (typeof touchIdentifier === "number" && !touchObj)
    return null;
  const node = findDOMNode(draggableCore);
  const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns$1.offsetXYFromParent)(touchObj || e2, offsetParent, draggableCore.props.scale);
}
function createCoreData(draggable, x2, y2) {
  const isStart = !(0, _shims$1.isNum)(draggable.lastX);
  const node = findDOMNode(draggable);
  if (isStart) {
    return {
      node,
      deltaX: 0,
      deltaY: 0,
      lastX: x2,
      lastY: y2,
      x: x2,
      y: y2
    };
  } else {
    return {
      node,
      deltaX: x2 - draggable.lastX,
      deltaY: y2 - draggable.lastY,
      lastX: draggable.lastX,
      lastY: draggable.lastY,
      x: x2,
      y: y2
    };
  }
}
function createDraggableData(draggable, coreData) {
  const scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}
function cloneBounds(bounds) {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}
function findDOMNode(draggable) {
  const node = draggable.findDOMNode();
  if (!node) {
    throw new Error("<DraggableCore>: Unmounted during event!");
  }
  return node;
}
var DraggableCore$2 = {};
var log$1 = {};
Object.defineProperty(log$1, "__esModule", {
  value: true
});
log$1.default = log;
function log() {
}
Object.defineProperty(DraggableCore$2, "__esModule", {
  value: true
});
DraggableCore$2.default = void 0;
var React = _interopRequireWildcard(reactExports);
var _propTypes = _interopRequireDefault(propTypesExports);
var _reactDom = _interopRequireDefault(reactDomExports);
var _domFns = domFns;
var _positionFns = positionFns;
var _shims = shims;
var _log = _interopRequireDefault(log$1);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
const eventsFor = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let dragEventFor = eventsFor.mouse;
let DraggableCore$1 = class DraggableCore extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "dragging", false);
    _defineProperty(this, "lastX", NaN);
    _defineProperty(this, "lastY", NaN);
    _defineProperty(this, "touchIdentifier", null);
    _defineProperty(this, "mounted", false);
    _defineProperty(this, "handleDragStart", (e2) => {
      this.props.onMouseDown(e2);
      if (!this.props.allowAnyClick && typeof e2.button === "number" && e2.button !== 0)
        return false;
      const thisNode = this.findDOMNode();
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error("<DraggableCore> not mounted on DragStart!");
      }
      const {
        ownerDocument
      } = thisNode;
      if (this.props.disabled || !(e2.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e2.target, this.props.handle, thisNode) || this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e2.target, this.props.cancel, thisNode)) {
        return;
      }
      if (e2.type === "touchstart")
        e2.preventDefault();
      const touchIdentifier = (0, _domFns.getTouchIdentifier)(e2);
      this.touchIdentifier = touchIdentifier;
      const position = (0, _positionFns.getControlPosition)(e2, touchIdentifier, this);
      if (position == null)
        return;
      const {
        x: x2,
        y: y2
      } = position;
      const coreEvent = (0, _positionFns.createCoreData)(this, x2, y2);
      (0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
      (0, _log.default)("calling", this.props.onStart);
      const shouldUpdate = this.props.onStart(e2, coreEvent);
      if (shouldUpdate === false || this.mounted === false)
        return;
      if (this.props.enableUserSelectHack)
        (0, _domFns.addUserSelectStyles)(ownerDocument);
      this.dragging = true;
      this.lastX = x2;
      this.lastY = y2;
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, this.handleDragStop);
    });
    _defineProperty(this, "handleDrag", (e2) => {
      const position = (0, _positionFns.getControlPosition)(e2, this.touchIdentifier, this);
      if (position == null)
        return;
      let {
        x: x2,
        y: y2
      } = position;
      if (Array.isArray(this.props.grid)) {
        let deltaX = x2 - this.lastX, deltaY = y2 - this.lastY;
        [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
        if (!deltaX && !deltaY)
          return;
        x2 = this.lastX + deltaX, y2 = this.lastY + deltaY;
      }
      const coreEvent = (0, _positionFns.createCoreData)(this, x2, y2);
      (0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
      const shouldUpdate = this.props.onDrag(e2, coreEvent);
      if (shouldUpdate === false || this.mounted === false) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch (err) {
          const event = document.createEvent("MouseEvents");
          event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          this.handleDragStop(event);
        }
        return;
      }
      this.lastX = x2;
      this.lastY = y2;
    });
    _defineProperty(this, "handleDragStop", (e2) => {
      if (!this.dragging)
        return;
      const position = (0, _positionFns.getControlPosition)(e2, this.touchIdentifier, this);
      if (position == null)
        return;
      let {
        x: x2,
        y: y2
      } = position;
      if (Array.isArray(this.props.grid)) {
        let deltaX = x2 - this.lastX || 0;
        let deltaY = y2 - this.lastY || 0;
        [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
        x2 = this.lastX + deltaX, y2 = this.lastY + deltaY;
      }
      const coreEvent = (0, _positionFns.createCoreData)(this, x2, y2);
      const shouldContinue = this.props.onStop(e2, coreEvent);
      if (shouldContinue === false || this.mounted === false)
        return false;
      const thisNode = this.findDOMNode();
      if (thisNode) {
        if (this.props.enableUserSelectHack)
          (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }
      (0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
      this.dragging = false;
      this.lastX = NaN;
      this.lastY = NaN;
      if (thisNode) {
        (0, _log.default)("DraggableCore: Removing handlers");
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
      }
    });
    _defineProperty(this, "onMouseDown", (e2) => {
      dragEventFor = eventsFor.mouse;
      return this.handleDragStart(e2);
    });
    _defineProperty(this, "onMouseUp", (e2) => {
      dragEventFor = eventsFor.mouse;
      return this.handleDragStop(e2);
    });
    _defineProperty(this, "onTouchStart", (e2) => {
      dragEventFor = eventsFor.touch;
      return this.handleDragStart(e2);
    });
    _defineProperty(this, "onTouchEnd", (e2) => {
      dragEventFor = eventsFor.touch;
      return this.handleDragStop(e2);
    });
  }
  componentDidMount() {
    this.mounted = true;
    const thisNode = this.findDOMNode();
    if (thisNode) {
      (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
        passive: false
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    const thisNode = this.findDOMNode();
    if (thisNode) {
      const {
        ownerDocument
      } = thisNode;
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
      (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
        passive: false
      });
      if (this.props.enableUserSelectHack)
        (0, _domFns.removeUserSelectStyles)(ownerDocument);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var _this$props, _this$props2;
    return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.nodeRef) === null || _this$props2 === void 0 ? void 0 : _this$props2.current : _reactDom.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ React.cloneElement(React.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
DraggableCore$2.default = DraggableCore$1;
_defineProperty(DraggableCore$1, "displayName", "DraggableCore");
_defineProperty(DraggableCore$1, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(props, propName) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error("Draggable's offsetParent must be a DOM Node.");
    }
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});
_defineProperty(DraggableCore$1, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  disabled: false,
  enableUserSelectHack: true,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "DraggableCore", {
    enumerable: true,
    get: function() {
      return _DraggableCore.default;
    }
  });
  exports.default = void 0;
  var React2 = _interopRequireWildcard2(reactExports);
  var _propTypes2 = _interopRequireDefault2(propTypesExports);
  var _reactDom2 = _interopRequireDefault2(reactDomExports);
  var _clsx = _interopRequireDefault2(require$$3);
  var _domFns2 = domFns;
  var _positionFns2 = positionFns;
  var _shims2 = shims;
  var _DraggableCore = _interopRequireDefault2(DraggableCore$2);
  var _log2 = _interopRequireDefault2(log$1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _getRequireWildcardCache2(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache2 = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard2(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache2(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _defineProperty2(obj, key, value) {
    key = _toPropertyKey2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  class Draggable2 extends React2.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(_ref, _ref2) {
      let {
        position
      } = _ref;
      let {
        prevPropsPosition
      } = _ref2;
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log2.default)("Draggable: getDerivedStateFromProps %j", {
          position,
          prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: {
            ...position
          }
        };
      }
      return null;
    }
    constructor(props) {
      super(props);
      _defineProperty2(this, "onDragStart", (e2, coreData) => {
        (0, _log2.default)("Draggable: onDragStart: %j", coreData);
        const shouldStart = this.props.onStart(e2, (0, _positionFns2.createDraggableData)(this, coreData));
        if (shouldStart === false)
          return false;
        this.setState({
          dragging: true,
          dragged: true
        });
      });
      _defineProperty2(this, "onDrag", (e2, coreData) => {
        if (!this.state.dragging)
          return false;
        (0, _log2.default)("Draggable: onDrag: %j", coreData);
        const uiData = (0, _positionFns2.createDraggableData)(this, coreData);
        const newState = {
          x: uiData.x,
          y: uiData.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: x2,
            y: y2
          } = newState;
          newState.x += this.state.slackX;
          newState.y += this.state.slackY;
          const [newStateX, newStateY] = (0, _positionFns2.getBoundPosition)(this, newState.x, newState.y);
          newState.x = newStateX;
          newState.y = newStateY;
          newState.slackX = this.state.slackX + (x2 - newState.x);
          newState.slackY = this.state.slackY + (y2 - newState.y);
          uiData.x = newState.x;
          uiData.y = newState.y;
          uiData.deltaX = newState.x - this.state.x;
          uiData.deltaY = newState.y - this.state.y;
        }
        const shouldUpdate = this.props.onDrag(e2, uiData);
        if (shouldUpdate === false)
          return false;
        this.setState(newState);
      });
      _defineProperty2(this, "onDragStop", (e2, coreData) => {
        if (!this.state.dragging)
          return false;
        const shouldContinue = this.props.onStop(e2, (0, _positionFns2.createDraggableData)(this, coreData));
        if (shouldContinue === false)
          return false;
        (0, _log2.default)("Draggable: onDragStop: %j", coreData);
        const newState = {
          dragging: false,
          slackX: 0,
          slackY: 0
        };
        const controlled = Boolean(this.props.position);
        if (controlled) {
          const {
            x: x2,
            y: y2
          } = this.props.position;
          newState.x = x2;
          newState.y = y2;
        }
        this.setState(newState);
      });
      this.state = {
        // Whether or not we are currently dragging.
        dragging: false,
        // Whether or not we have been dragged before.
        dragged: false,
        // Current transform x and y.
        x: props.position ? props.position.x : props.defaultPosition.x,
        y: props.position ? props.position.y : props.defaultPosition.y,
        prevPropsPosition: {
          ...props.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: false
      };
      if (props.position && !(props.onDrag || props.onStop)) {
        console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
      }
    }
    componentDidMount() {
      if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
    componentWillUnmount() {
      this.setState({
        dragging: false
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var _this$props$nodeRef$c, _this$props;
      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 || (_this$props = _this$props.nodeRef) === null || _this$props === void 0 ? void 0 : _this$props.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom2.default.findDOMNode(this);
    }
    render() {
      const {
        axis,
        bounds,
        children,
        defaultPosition,
        defaultClassName,
        defaultClassNameDragging,
        defaultClassNameDragged,
        position,
        positionOffset,
        scale,
        ...draggableCoreProps
      } = this.props;
      let style = {};
      let svgTransform = null;
      const controlled = Boolean(position);
      const draggable = !controlled || this.state.dragging;
      const validPosition = position || defaultPosition;
      const transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, _positionFns2.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, _positionFns2.canDragY)(this) && draggable ? this.state.y : validPosition.y
      };
      if (this.state.isElementSVG) {
        svgTransform = (0, _domFns2.createSVGTransform)(transformOpts, positionOffset);
      } else {
        style = (0, _domFns2.createCSSTransform)(transformOpts, positionOffset);
      }
      const className = (0, _clsx.default)(children.props.className || "", defaultClassName, {
        [defaultClassNameDragging]: this.state.dragging,
        [defaultClassNameDragged]: this.state.dragged
      });
      return /* @__PURE__ */ React2.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ React2.cloneElement(React2.Children.only(children), {
        className,
        style: {
          ...children.props.style,
          ...style
        },
        transform: svgTransform
      }));
    }
  }
  exports.default = Draggable2;
  _defineProperty2(Draggable2, "displayName", "Draggable");
  _defineProperty2(Draggable2, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ..._DraggableCore.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: _propTypes2.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: _propTypes2.default.oneOfType([_propTypes2.default.shape({
      left: _propTypes2.default.number,
      right: _propTypes2.default.number,
      top: _propTypes2.default.number,
      bottom: _propTypes2.default.number
    }), _propTypes2.default.string, _propTypes2.default.oneOf([false])]),
    defaultClassName: _propTypes2.default.string,
    defaultClassNameDragging: _propTypes2.default.string,
    defaultClassNameDragged: _propTypes2.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    }),
    positionOffset: _propTypes2.default.shape({
      x: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
      y: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: _shims2.dontSetMe,
    style: _shims2.dontSetMe,
    transform: _shims2.dontSetMe
  });
  _defineProperty2(Draggable2, "defaultProps", {
    ..._DraggableCore.default.defaultProps,
    axis: "both",
    bounds: false,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(Draggable$2);
const {
  default: Draggable,
  DraggableCore: DraggableCore2
} = Draggable$2;
cjs.exports = Draggable;
cjs.exports.default = Draggable;
cjs.exports.DraggableCore = DraggableCore2;
var cjsExports = cjs.exports;
const Draggable$1 = /* @__PURE__ */ getDefaultExportFromCjs(cjsExports);
const bootstrap_min = "";
var bootstrap_bundle_min = { exports: {} };
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(module, exports) {
  !function(t2, e2) {
    module.exports = e2();
  }(commonjsGlobal, function() {
    const t2 = /* @__PURE__ */ new Map(), e2 = { set(e3, i3, n3) {
      t2.has(e3) || t2.set(e3, /* @__PURE__ */ new Map());
      const s3 = t2.get(e3);
      s3.has(i3) || 0 === s3.size ? s3.set(i3, n3) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s3.keys())[0]}.`);
    }, get: (e3, i3) => t2.has(e3) && t2.get(e3).get(i3) || null, remove(e3, i3) {
      if (!t2.has(e3))
        return;
      const n3 = t2.get(e3);
      n3.delete(i3), 0 === n3.size && t2.delete(e3);
    } }, i2 = "transitionend", n2 = (t3) => (t3 && window.CSS && window.CSS.escape && (t3 = t3.replace(/#([^\s"#']+)/g, (t4, e3) => `#${CSS.escape(e3)}`)), t3), s2 = (t3) => {
      t3.dispatchEvent(new Event(i2));
    }, o2 = (t3) => !(!t3 || "object" != typeof t3) && (void 0 !== t3.jquery && (t3 = t3[0]), void 0 !== t3.nodeType), r2 = (t3) => o2(t3) ? t3.jquery ? t3[0] : t3 : "string" == typeof t3 && t3.length > 0 ? document.querySelector(n2(t3)) : null, a2 = (t3) => {
      if (!o2(t3) || 0 === t3.getClientRects().length)
        return false;
      const e3 = "visible" === getComputedStyle(t3).getPropertyValue("visibility"), i3 = t3.closest("details:not([open])");
      if (!i3)
        return e3;
      if (i3 !== t3) {
        const e4 = t3.closest("summary");
        if (e4 && e4.parentNode !== i3)
          return false;
        if (null === e4)
          return false;
      }
      return e3;
    }, l2 = (t3) => !t3 || t3.nodeType !== Node.ELEMENT_NODE || !!t3.classList.contains("disabled") || (void 0 !== t3.disabled ? t3.disabled : t3.hasAttribute("disabled") && "false" !== t3.getAttribute("disabled")), c2 = (t3) => {
      if (!document.documentElement.attachShadow)
        return null;
      if ("function" == typeof t3.getRootNode) {
        const e3 = t3.getRootNode();
        return e3 instanceof ShadowRoot ? e3 : null;
      }
      return t3 instanceof ShadowRoot ? t3 : t3.parentNode ? c2(t3.parentNode) : null;
    }, h2 = () => {
    }, d2 = (t3) => {
      t3.offsetHeight;
    }, u2 = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f2 = [], p2 = () => "rtl" === document.documentElement.dir, m2 = (t3) => {
      var e3;
      e3 = () => {
        const e4 = u2();
        if (e4) {
          const i3 = t3.NAME, n3 = e4.fn[i3];
          e4.fn[i3] = t3.jQueryInterface, e4.fn[i3].Constructor = t3, e4.fn[i3].noConflict = () => (e4.fn[i3] = n3, t3.jQueryInterface);
        }
      }, "loading" === document.readyState ? (f2.length || document.addEventListener("DOMContentLoaded", () => {
        for (const t4 of f2)
          t4();
      }), f2.push(e3)) : e3();
    }, g2 = (t3, e3 = [], i3 = t3) => "function" == typeof t3 ? t3(...e3) : i3, _2 = (t3, e3, n3 = true) => {
      if (!n3)
        return void g2(t3);
      const o3 = ((t4) => {
        if (!t4)
          return 0;
        let { transitionDuration: e4, transitionDelay: i3 } = window.getComputedStyle(t4);
        const n4 = Number.parseFloat(e4), s3 = Number.parseFloat(i3);
        return n4 || s3 ? (e4 = e4.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e4) + Number.parseFloat(i3))) : 0;
      })(e3) + 5;
      let r3 = false;
      const a3 = ({ target: n4 }) => {
        n4 === e3 && (r3 = true, e3.removeEventListener(i2, a3), g2(t3));
      };
      e3.addEventListener(i2, a3), setTimeout(() => {
        r3 || s2(e3);
      }, o3);
    }, b2 = (t3, e3, i3, n3) => {
      const s3 = t3.length;
      let o3 = t3.indexOf(e3);
      return -1 === o3 ? !i3 && n3 ? t3[s3 - 1] : t3[0] : (o3 += i3 ? 1 : -1, n3 && (o3 = (o3 + s3) % s3), t3[Math.max(0, Math.min(o3, s3 - 1))]);
    }, v2 = /[^.]*(?=\..*)\.|.*/, y2 = /\..*/, w2 = /::\d+$/, A2 = {};
    let E2 = 1;
    const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function O2(t3, e3) {
      return e3 && `${e3}::${E2++}` || t3.uidEvent || E2++;
    }
    function x2(t3) {
      const e3 = O2(t3);
      return t3.uidEvent = e3, A2[e3] = A2[e3] || {}, A2[e3];
    }
    function k2(t3, e3, i3 = null) {
      return Object.values(t3).find((t4) => t4.callable === e3 && t4.delegationSelector === i3);
    }
    function L2(t3, e3, i3) {
      const n3 = "string" == typeof e3, s3 = n3 ? i3 : e3 || i3;
      let o3 = I2(t3);
      return C.has(o3) || (o3 = t3), [n3, s3, o3];
    }
    function S2(t3, e3, i3, n3, s3) {
      if ("string" != typeof e3 || !t3)
        return;
      let [o3, r3, a3] = L2(e3, i3, n3);
      if (e3 in T) {
        const t4 = (t5) => function(e4) {
          if (!e4.relatedTarget || e4.relatedTarget !== e4.delegateTarget && !e4.delegateTarget.contains(e4.relatedTarget))
            return t5.call(this, e4);
        };
        r3 = t4(r3);
      }
      const l3 = x2(t3), c3 = l3[a3] || (l3[a3] = {}), h3 = k2(c3, r3, o3 ? i3 : null);
      if (h3)
        return void (h3.oneOff = h3.oneOff && s3);
      const d3 = O2(r3, e3.replace(v2, "")), u3 = o3 ? function(t4, e4, i4) {
        return function n4(s4) {
          const o4 = t4.querySelectorAll(e4);
          for (let { target: r4 } = s4; r4 && r4 !== this; r4 = r4.parentNode)
            for (const a4 of o4)
              if (a4 === r4)
                return P2(s4, { delegateTarget: r4 }), n4.oneOff && N2.off(t4, s4.type, e4, i4), i4.apply(r4, [s4]);
        };
      }(t3, i3, r3) : function(t4, e4) {
        return function i4(n4) {
          return P2(n4, { delegateTarget: t4 }), i4.oneOff && N2.off(t4, n4.type, e4), e4.apply(t4, [n4]);
        };
      }(t3, r3);
      u3.delegationSelector = o3 ? i3 : null, u3.callable = r3, u3.oneOff = s3, u3.uidEvent = d3, c3[d3] = u3, t3.addEventListener(a3, u3, o3);
    }
    function D2(t3, e3, i3, n3, s3) {
      const o3 = k2(e3[i3], n3, s3);
      o3 && (t3.removeEventListener(i3, o3, Boolean(s3)), delete e3[i3][o3.uidEvent]);
    }
    function $(t3, e3, i3, n3) {
      const s3 = e3[i3] || {};
      for (const [o3, r3] of Object.entries(s3))
        o3.includes(n3) && D2(t3, e3, i3, r3.callable, r3.delegationSelector);
    }
    function I2(t3) {
      return t3 = t3.replace(y2, ""), T[t3] || t3;
    }
    const N2 = { on(t3, e3, i3, n3) {
      S2(t3, e3, i3, n3, false);
    }, one(t3, e3, i3, n3) {
      S2(t3, e3, i3, n3, true);
    }, off(t3, e3, i3, n3) {
      if ("string" != typeof e3 || !t3)
        return;
      const [s3, o3, r3] = L2(e3, i3, n3), a3 = r3 !== e3, l3 = x2(t3), c3 = l3[r3] || {}, h3 = e3.startsWith(".");
      if (void 0 === o3) {
        if (h3)
          for (const i4 of Object.keys(l3))
            $(t3, l3, i4, e3.slice(1));
        for (const [i4, n4] of Object.entries(c3)) {
          const s4 = i4.replace(w2, "");
          a3 && !e3.includes(s4) || D2(t3, l3, r3, n4.callable, n4.delegationSelector);
        }
      } else {
        if (!Object.keys(c3).length)
          return;
        D2(t3, l3, r3, o3, s3 ? i3 : null);
      }
    }, trigger(t3, e3, i3) {
      if ("string" != typeof e3 || !t3)
        return null;
      const n3 = u2();
      let s3 = null, o3 = true, r3 = true, a3 = false;
      e3 !== I2(e3) && n3 && (s3 = n3.Event(e3, i3), n3(t3).trigger(s3), o3 = !s3.isPropagationStopped(), r3 = !s3.isImmediatePropagationStopped(), a3 = s3.isDefaultPrevented());
      const l3 = P2(new Event(e3, { bubbles: o3, cancelable: true }), i3);
      return a3 && l3.preventDefault(), r3 && t3.dispatchEvent(l3), l3.defaultPrevented && s3 && s3.preventDefault(), l3;
    } };
    function P2(t3, e3 = {}) {
      for (const [i3, n3] of Object.entries(e3))
        try {
          t3[i3] = n3;
        } catch (e4) {
          Object.defineProperty(t3, i3, { configurable: true, get: () => n3 });
        }
      return t3;
    }
    function M2(t3) {
      if ("true" === t3)
        return true;
      if ("false" === t3)
        return false;
      if (t3 === Number(t3).toString())
        return Number(t3);
      if ("" === t3 || "null" === t3)
        return null;
      if ("string" != typeof t3)
        return t3;
      try {
        return JSON.parse(decodeURIComponent(t3));
      } catch (e3) {
        return t3;
      }
    }
    function j2(t3) {
      return t3.replace(/[A-Z]/g, (t4) => `-${t4.toLowerCase()}`);
    }
    const F2 = { setDataAttribute(t3, e3, i3) {
      t3.setAttribute(`data-bs-${j2(e3)}`, i3);
    }, removeDataAttribute(t3, e3) {
      t3.removeAttribute(`data-bs-${j2(e3)}`);
    }, getDataAttributes(t3) {
      if (!t3)
        return {};
      const e3 = {}, i3 = Object.keys(t3.dataset).filter((t4) => t4.startsWith("bs") && !t4.startsWith("bsConfig"));
      for (const n3 of i3) {
        let i4 = n3.replace(/^bs/, "");
        i4 = i4.charAt(0).toLowerCase() + i4.slice(1, i4.length), e3[i4] = M2(t3.dataset[n3]);
      }
      return e3;
    }, getDataAttribute: (t3, e3) => M2(t3.getAttribute(`data-bs-${j2(e3)}`)) };
    class H2 {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(t3) {
        return t3 = this._mergeConfigObj(t3), t3 = this._configAfterMerge(t3), this._typeCheckConfig(t3), t3;
      }
      _configAfterMerge(t3) {
        return t3;
      }
      _mergeConfigObj(t3, e3) {
        const i3 = o2(e3) ? F2.getDataAttribute(e3, "config") : {};
        return { ...this.constructor.Default, ..."object" == typeof i3 ? i3 : {}, ...o2(e3) ? F2.getDataAttributes(e3) : {}, ..."object" == typeof t3 ? t3 : {} };
      }
      _typeCheckConfig(t3, e3 = this.constructor.DefaultType) {
        for (const [n3, s3] of Object.entries(e3)) {
          const e4 = t3[n3], r3 = o2(e4) ? "element" : null == (i3 = e4) ? `${i3}` : Object.prototype.toString.call(i3).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(s3).test(r3))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n3}" provided type "${r3}" but expected type "${s3}".`);
        }
        var i3;
      }
    }
    class W2 extends H2 {
      constructor(t3, i3) {
        super(), (t3 = r2(t3)) && (this._element = t3, this._config = this._getConfig(i3), e2.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        e2.remove(this._element, this.constructor.DATA_KEY), N2.off(this._element, this.constructor.EVENT_KEY);
        for (const t3 of Object.getOwnPropertyNames(this))
          this[t3] = null;
      }
      _queueCallback(t3, e3, i3 = true) {
        _2(t3, e3, i3);
      }
      _getConfig(t3) {
        return t3 = this._mergeConfigObj(t3, this._element), t3 = this._configAfterMerge(t3), this._typeCheckConfig(t3), t3;
      }
      static getInstance(t3) {
        return e2.get(r2(t3), this.DATA_KEY);
      }
      static getOrCreateInstance(t3, e3 = {}) {
        return this.getInstance(t3) || new this(t3, "object" == typeof e3 ? e3 : null);
      }
      static get VERSION() {
        return "5.3.2";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(t3) {
        return `${t3}${this.EVENT_KEY}`;
      }
    }
    const B2 = (t3) => {
      let e3 = t3.getAttribute("data-bs-target");
      if (!e3 || "#" === e3) {
        let i3 = t3.getAttribute("href");
        if (!i3 || !i3.includes("#") && !i3.startsWith("."))
          return null;
        i3.includes("#") && !i3.startsWith("#") && (i3 = `#${i3.split("#")[1]}`), e3 = i3 && "#" !== i3 ? n2(i3.trim()) : null;
      }
      return e3;
    }, z2 = { find: (t3, e3 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e3, t3)), findOne: (t3, e3 = document.documentElement) => Element.prototype.querySelector.call(e3, t3), children: (t3, e3) => [].concat(...t3.children).filter((t4) => t4.matches(e3)), parents(t3, e3) {
      const i3 = [];
      let n3 = t3.parentNode.closest(e3);
      for (; n3; )
        i3.push(n3), n3 = n3.parentNode.closest(e3);
      return i3;
    }, prev(t3, e3) {
      let i3 = t3.previousElementSibling;
      for (; i3; ) {
        if (i3.matches(e3))
          return [i3];
        i3 = i3.previousElementSibling;
      }
      return [];
    }, next(t3, e3) {
      let i3 = t3.nextElementSibling;
      for (; i3; ) {
        if (i3.matches(e3))
          return [i3];
        i3 = i3.nextElementSibling;
      }
      return [];
    }, focusableChildren(t3) {
      const e3 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t4) => `${t4}:not([tabindex^="-"])`).join(",");
      return this.find(e3, t3).filter((t4) => !l2(t4) && a2(t4));
    }, getSelectorFromElement(t3) {
      const e3 = B2(t3);
      return e3 && z2.findOne(e3) ? e3 : null;
    }, getElementFromSelector(t3) {
      const e3 = B2(t3);
      return e3 ? z2.findOne(e3) : null;
    }, getMultipleElementsFromSelector(t3) {
      const e3 = B2(t3);
      return e3 ? z2.find(e3) : [];
    } }, R2 = (t3, e3 = "hide") => {
      const i3 = `click.dismiss${t3.EVENT_KEY}`, n3 = t3.NAME;
      N2.on(document, i3, `[data-bs-dismiss="${n3}"]`, function(i4) {
        if (["A", "AREA"].includes(this.tagName) && i4.preventDefault(), l2(this))
          return;
        const s3 = z2.getElementFromSelector(this) || this.closest(`.${n3}`);
        t3.getOrCreateInstance(s3)[e3]();
      });
    }, q2 = ".bs.alert", V = `close${q2}`, K = `closed${q2}`;
    class Q2 extends W2 {
      static get NAME() {
        return "alert";
      }
      close() {
        if (N2.trigger(this._element, V).defaultPrevented)
          return;
        this._element.classList.remove("show");
        const t3 = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, t3);
      }
      _destroyElement() {
        this._element.remove(), N2.trigger(this._element, K), this.dispose();
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = Q2.getOrCreateInstance(this);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3] || t3.startsWith("_") || "constructor" === t3)
              throw new TypeError(`No method named "${t3}"`);
            e3[t3](this);
          }
        });
      }
    }
    R2(Q2, "close"), m2(Q2);
    const X2 = '[data-bs-toggle="button"]';
    class Y extends W2 {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = Y.getOrCreateInstance(this);
          "toggle" === t3 && e3[t3]();
        });
      }
    }
    N2.on(document, "click.bs.button.data-api", X2, (t3) => {
      t3.preventDefault();
      const e3 = t3.target.closest(X2);
      Y.getOrCreateInstance(e3).toggle();
    }), m2(Y);
    const U2 = ".bs.swipe", G2 = `touchstart${U2}`, J = `touchmove${U2}`, Z2 = `touchend${U2}`, tt = `pointerdown${U2}`, et = `pointerup${U2}`, it = { endCallback: null, leftCallback: null, rightCallback: null }, nt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class st extends H2 {
      constructor(t3, e3) {
        super(), this._element = t3, t3 && st.isSupported() && (this._config = this._getConfig(e3), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
      }
      static get Default() {
        return it;
      }
      static get DefaultType() {
        return nt;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        N2.off(this._element, U2);
      }
      _start(t3) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t3) && (this._deltaX = t3.clientX) : this._deltaX = t3.touches[0].clientX;
      }
      _end(t3) {
        this._eventIsPointerPenTouch(t3) && (this._deltaX = t3.clientX - this._deltaX), this._handleSwipe(), g2(this._config.endCallback);
      }
      _move(t3) {
        this._deltaX = t3.touches && t3.touches.length > 1 ? 0 : t3.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const t3 = Math.abs(this._deltaX);
        if (t3 <= 40)
          return;
        const e3 = t3 / this._deltaX;
        this._deltaX = 0, e3 && g2(e3 > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (N2.on(this._element, tt, (t3) => this._start(t3)), N2.on(this._element, et, (t3) => this._end(t3)), this._element.classList.add("pointer-event")) : (N2.on(this._element, G2, (t3) => this._start(t3)), N2.on(this._element, J, (t3) => this._move(t3)), N2.on(this._element, Z2, (t3) => this._end(t3)));
      }
      _eventIsPointerPenTouch(t3) {
        return this._supportPointerEvents && ("pen" === t3.pointerType || "touch" === t3.pointerType);
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = { ArrowLeft: ht, ArrowRight: ct }, Ct = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Ot = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class xt extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z2.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
      }
      static get Default() {
        return Ct;
      }
      static get DefaultType() {
        return Ot;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(at);
      }
      nextWhenVisible() {
        !document.hidden && a2(this._element) && this.next();
      }
      prev() {
        this._slide(lt);
      }
      pause() {
        this._isSliding && s2(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? N2.one(this._element, ut, () => this.cycle()) : this.cycle());
      }
      to(t3) {
        const e3 = this._getItems();
        if (t3 > e3.length - 1 || t3 < 0)
          return;
        if (this._isSliding)
          return void N2.one(this._element, ut, () => this.to(t3));
        const i3 = this._getItemIndex(this._getActive());
        if (i3 === t3)
          return;
        const n3 = t3 > i3 ? at : lt;
        this._slide(n3, e3[t3]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(t3) {
        return t3.defaultInterval = t3.interval, t3;
      }
      _addEventListeners() {
        this._config.keyboard && N2.on(this._element, ft, (t3) => this._keydown(t3)), "hover" === this._config.pause && (N2.on(this._element, pt, () => this.pause()), N2.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t4 of z2.find(".carousel-item img", this._element))
          N2.on(t4, gt, (t5) => t5.preventDefault());
        const t3 = { leftCallback: () => this._slide(this._directionToOrder(ct)), rightCallback: () => this._slide(this._directionToOrder(ht)), endCallback: () => {
          "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
        } };
        this._swipeHelper = new st(this._element, t3);
      }
      _keydown(t3) {
        if (/input|textarea/i.test(t3.target.tagName))
          return;
        const e3 = Tt[t3.key];
        e3 && (t3.preventDefault(), this._slide(this._directionToOrder(e3)));
      }
      _getItemIndex(t3) {
        return this._getItems().indexOf(t3);
      }
      _setActiveIndicatorElement(t3) {
        if (!this._indicatorsElement)
          return;
        const e3 = z2.findOne(wt, this._indicatorsElement);
        e3.classList.remove(yt), e3.removeAttribute("aria-current");
        const i3 = z2.findOne(`[data-bs-slide-to="${t3}"]`, this._indicatorsElement);
        i3 && (i3.classList.add(yt), i3.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const t3 = this._activeElement || this._getActive();
        if (!t3)
          return;
        const e3 = Number.parseInt(t3.getAttribute("data-bs-interval"), 10);
        this._config.interval = e3 || this._config.defaultInterval;
      }
      _slide(t3, e3 = null) {
        if (this._isSliding)
          return;
        const i3 = this._getActive(), n3 = t3 === at, s3 = e3 || b2(this._getItems(), i3, n3, this._config.wrap);
        if (s3 === i3)
          return;
        const o3 = this._getItemIndex(s3), r3 = (e4) => N2.trigger(this._element, e4, { relatedTarget: s3, direction: this._orderToDirection(t3), from: this._getItemIndex(i3), to: o3 });
        if (r3(dt).defaultPrevented)
          return;
        if (!i3 || !s3)
          return;
        const a3 = Boolean(this._interval);
        this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o3), this._activeElement = s3;
        const l3 = n3 ? "carousel-item-start" : "carousel-item-end", c3 = n3 ? "carousel-item-next" : "carousel-item-prev";
        s3.classList.add(c3), d2(s3), i3.classList.add(l3), s3.classList.add(l3), this._queueCallback(() => {
          s3.classList.remove(l3, c3), s3.classList.add(yt), i3.classList.remove(yt, c3, l3), this._isSliding = false, r3(ut);
        }, i3, this._isAnimated()), a3 && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return z2.findOne(Et, this._element);
      }
      _getItems() {
        return z2.find(At, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(t3) {
        return p2() ? t3 === ct ? lt : at : t3 === ct ? at : lt;
      }
      _orderToDirection(t3) {
        return p2() ? t3 === lt ? ct : ht : t3 === lt ? ht : ct;
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = xt.getOrCreateInstance(this, t3);
          if ("number" != typeof t3) {
            if ("string" == typeof t3) {
              if (void 0 === e3[t3] || t3.startsWith("_") || "constructor" === t3)
                throw new TypeError(`No method named "${t3}"`);
              e3[t3]();
            }
          } else
            e3.to(t3);
        });
      }
    }
    N2.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t3) {
      const e3 = z2.getElementFromSelector(this);
      if (!e3 || !e3.classList.contains(vt))
        return;
      t3.preventDefault();
      const i3 = xt.getOrCreateInstance(e3), n3 = this.getAttribute("data-bs-slide-to");
      return n3 ? (i3.to(n3), void i3._maybeEnableCycle()) : "next" === F2.getDataAttribute(this, "slide") ? (i3.next(), void i3._maybeEnableCycle()) : (i3.prev(), void i3._maybeEnableCycle());
    }), N2.on(window, _t, () => {
      const t3 = z2.find('[data-bs-ride="carousel"]');
      for (const e3 of t3)
        xt.getOrCreateInstance(e3);
    }), m2(xt);
    const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", Mt = "collapsing", jt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = { parent: null, toggle: true }, Wt = { parent: "(null|element)", toggle: "boolean" };
    class Bt extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._isTransitioning = false, this._triggerArray = [];
        const i3 = z2.find(Ft);
        for (const t4 of i3) {
          const e4 = z2.getSelectorFromElement(t4), i4 = z2.find(e4).filter((t5) => t5 === this._element);
          null !== e4 && i4.length && this._triggerArray.push(t4);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      static get Default() {
        return Ht;
      }
      static get DefaultType() {
        return Wt;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let t3 = [];
        if (this._config.parent && (t3 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t4) => t4 !== this._element).map((t4) => Bt.getOrCreateInstance(t4, { toggle: false }))), t3.length && t3[0]._isTransitioning)
          return;
        if (N2.trigger(this._element, Lt).defaultPrevented)
          return;
        for (const e4 of t3)
          e4.hide();
        const e3 = this._getDimension();
        this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e3] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
        const i3 = `scroll${e3[0].toUpperCase() + e3.slice(1)}`;
        this._queueCallback(() => {
          this._isTransitioning = false, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e3] = "", N2.trigger(this._element, St);
        }, this._element, true), this._element.style[e3] = `${this._element[i3]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown())
          return;
        if (N2.trigger(this._element, Dt).defaultPrevented)
          return;
        const t3 = this._getDimension();
        this._element.style[t3] = `${this._element.getBoundingClientRect()[t3]}px`, d2(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
        for (const t4 of this._triggerArray) {
          const e3 = z2.getElementFromSelector(t4);
          e3 && !this._isShown(e3) && this._addAriaAndCollapsedClass([t4], false);
        }
        this._isTransitioning = true, this._element.style[t3] = "", this._queueCallback(() => {
          this._isTransitioning = false, this._element.classList.remove(Mt), this._element.classList.add(Pt), N2.trigger(this._element, $t);
        }, this._element, true);
      }
      _isShown(t3 = this._element) {
        return t3.classList.contains(Nt);
      }
      _configAfterMerge(t3) {
        return t3.toggle = Boolean(t3.toggle), t3.parent = r2(t3.parent), t3;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const t3 = this._getFirstLevelChildren(Ft);
        for (const e3 of t3) {
          const t4 = z2.getElementFromSelector(e3);
          t4 && this._addAriaAndCollapsedClass([e3], this._isShown(t4));
        }
      }
      _getFirstLevelChildren(t3) {
        const e3 = z2.find(jt, this._config.parent);
        return z2.find(t3, this._config.parent).filter((t4) => !e3.includes(t4));
      }
      _addAriaAndCollapsedClass(t3, e3) {
        if (t3.length)
          for (const i3 of t3)
            i3.classList.toggle("collapsed", !e3), i3.setAttribute("aria-expanded", e3);
      }
      static jQueryInterface(t3) {
        const e3 = {};
        return "string" == typeof t3 && /show|hide/.test(t3) && (e3.toggle = false), this.each(function() {
          const i3 = Bt.getOrCreateInstance(this, e3);
          if ("string" == typeof t3) {
            if (void 0 === i3[t3])
              throw new TypeError(`No method named "${t3}"`);
            i3[t3]();
          }
        });
      }
    }
    N2.on(document, It, Ft, function(t3) {
      ("A" === t3.target.tagName || t3.delegateTarget && "A" === t3.delegateTarget.tagName) && t3.preventDefault();
      for (const t4 of z2.getMultipleElementsFromSelector(this))
        Bt.getOrCreateInstance(t4, { toggle: false }).toggle();
    }), m2(Bt);
    var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [zt, Rt, qt, Vt], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t3, e3) {
      return t3.concat([e3 + "-" + Xt, e3 + "-" + Yt]);
    }, []), ee = [].concat(Qt, [Kt]).reduce(function(t3, e3) {
      return t3.concat([e3, e3 + "-" + Xt, e3 + "-" + Yt]);
    }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [ie, ne, se, oe, re, ae, le, ce, he];
    function ue(t3) {
      return t3 ? (t3.nodeName || "").toLowerCase() : null;
    }
    function fe(t3) {
      if (null == t3)
        return window;
      if ("[object Window]" !== t3.toString()) {
        var e3 = t3.ownerDocument;
        return e3 && e3.defaultView || window;
      }
      return t3;
    }
    function pe(t3) {
      return t3 instanceof fe(t3).Element || t3 instanceof Element;
    }
    function me(t3) {
      return t3 instanceof fe(t3).HTMLElement || t3 instanceof HTMLElement;
    }
    function ge(t3) {
      return "undefined" != typeof ShadowRoot && (t3 instanceof fe(t3).ShadowRoot || t3 instanceof ShadowRoot);
    }
    const _e = { name: "applyStyles", enabled: true, phase: "write", fn: function(t3) {
      var e3 = t3.state;
      Object.keys(e3.elements).forEach(function(t4) {
        var i3 = e3.styles[t4] || {}, n3 = e3.attributes[t4] || {}, s3 = e3.elements[t4];
        me(s3) && ue(s3) && (Object.assign(s3.style, i3), Object.keys(n3).forEach(function(t5) {
          var e4 = n3[t5];
          false === e4 ? s3.removeAttribute(t5) : s3.setAttribute(t5, true === e4 ? "" : e4);
        }));
      });
    }, effect: function(t3) {
      var e3 = t3.state, i3 = { popper: { position: e3.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
      return Object.assign(e3.elements.popper.style, i3.popper), e3.styles = i3, e3.elements.arrow && Object.assign(e3.elements.arrow.style, i3.arrow), function() {
        Object.keys(e3.elements).forEach(function(t4) {
          var n3 = e3.elements[t4], s3 = e3.attributes[t4] || {}, o3 = Object.keys(e3.styles.hasOwnProperty(t4) ? e3.styles[t4] : i3[t4]).reduce(function(t5, e4) {
            return t5[e4] = "", t5;
          }, {});
          me(n3) && ue(n3) && (Object.assign(n3.style, o3), Object.keys(s3).forEach(function(t5) {
            n3.removeAttribute(t5);
          }));
        });
      };
    }, requires: ["computeStyles"] };
    function be(t3) {
      return t3.split("-")[0];
    }
    var ve = Math.max, ye = Math.min, we = Math.round;
    function Ae() {
      var t3 = navigator.userAgentData;
      return null != t3 && t3.brands && Array.isArray(t3.brands) ? t3.brands.map(function(t4) {
        return t4.brand + "/" + t4.version;
      }).join(" ") : navigator.userAgent;
    }
    function Ee() {
      return !/^((?!chrome|android).)*safari/i.test(Ae());
    }
    function Te(t3, e3, i3) {
      void 0 === e3 && (e3 = false), void 0 === i3 && (i3 = false);
      var n3 = t3.getBoundingClientRect(), s3 = 1, o3 = 1;
      e3 && me(t3) && (s3 = t3.offsetWidth > 0 && we(n3.width) / t3.offsetWidth || 1, o3 = t3.offsetHeight > 0 && we(n3.height) / t3.offsetHeight || 1);
      var r3 = (pe(t3) ? fe(t3) : window).visualViewport, a3 = !Ee() && i3, l3 = (n3.left + (a3 && r3 ? r3.offsetLeft : 0)) / s3, c3 = (n3.top + (a3 && r3 ? r3.offsetTop : 0)) / o3, h3 = n3.width / s3, d3 = n3.height / o3;
      return { width: h3, height: d3, top: c3, right: l3 + h3, bottom: c3 + d3, left: l3, x: l3, y: c3 };
    }
    function Ce(t3) {
      var e3 = Te(t3), i3 = t3.offsetWidth, n3 = t3.offsetHeight;
      return Math.abs(e3.width - i3) <= 1 && (i3 = e3.width), Math.abs(e3.height - n3) <= 1 && (n3 = e3.height), { x: t3.offsetLeft, y: t3.offsetTop, width: i3, height: n3 };
    }
    function Oe(t3, e3) {
      var i3 = e3.getRootNode && e3.getRootNode();
      if (t3.contains(e3))
        return true;
      if (i3 && ge(i3)) {
        var n3 = e3;
        do {
          if (n3 && t3.isSameNode(n3))
            return true;
          n3 = n3.parentNode || n3.host;
        } while (n3);
      }
      return false;
    }
    function xe(t3) {
      return fe(t3).getComputedStyle(t3);
    }
    function ke(t3) {
      return ["table", "td", "th"].indexOf(ue(t3)) >= 0;
    }
    function Le(t3) {
      return ((pe(t3) ? t3.ownerDocument : t3.document) || window.document).documentElement;
    }
    function Se(t3) {
      return "html" === ue(t3) ? t3 : t3.assignedSlot || t3.parentNode || (ge(t3) ? t3.host : null) || Le(t3);
    }
    function De(t3) {
      return me(t3) && "fixed" !== xe(t3).position ? t3.offsetParent : null;
    }
    function $e(t3) {
      for (var e3 = fe(t3), i3 = De(t3); i3 && ke(i3) && "static" === xe(i3).position; )
        i3 = De(i3);
      return i3 && ("html" === ue(i3) || "body" === ue(i3) && "static" === xe(i3).position) ? e3 : i3 || function(t4) {
        var e4 = /firefox/i.test(Ae());
        if (/Trident/i.test(Ae()) && me(t4) && "fixed" === xe(t4).position)
          return null;
        var i4 = Se(t4);
        for (ge(i4) && (i4 = i4.host); me(i4) && ["html", "body"].indexOf(ue(i4)) < 0; ) {
          var n3 = xe(i4);
          if ("none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || -1 !== ["transform", "perspective"].indexOf(n3.willChange) || e4 && "filter" === n3.willChange || e4 && n3.filter && "none" !== n3.filter)
            return i4;
          i4 = i4.parentNode;
        }
        return null;
      }(t3) || e3;
    }
    function Ie(t3) {
      return ["top", "bottom"].indexOf(t3) >= 0 ? "x" : "y";
    }
    function Ne(t3, e3, i3) {
      return ve(t3, ye(e3, i3));
    }
    function Pe(t3) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t3);
    }
    function Me(t3, e3) {
      return e3.reduce(function(e4, i3) {
        return e4[i3] = t3, e4;
      }, {});
    }
    const je = { name: "arrow", enabled: true, phase: "main", fn: function(t3) {
      var e3, i3 = t3.state, n3 = t3.name, s3 = t3.options, o3 = i3.elements.arrow, r3 = i3.modifiersData.popperOffsets, a3 = be(i3.placement), l3 = Ie(a3), c3 = [Vt, qt].indexOf(a3) >= 0 ? "height" : "width";
      if (o3 && r3) {
        var h3 = function(t4, e4) {
          return Pe("number" != typeof (t4 = "function" == typeof t4 ? t4(Object.assign({}, e4.rects, { placement: e4.placement })) : t4) ? t4 : Me(t4, Qt));
        }(s3.padding, i3), d3 = Ce(o3), u3 = "y" === l3 ? zt : Vt, f3 = "y" === l3 ? Rt : qt, p3 = i3.rects.reference[c3] + i3.rects.reference[l3] - r3[l3] - i3.rects.popper[c3], m3 = r3[l3] - i3.rects.reference[l3], g3 = $e(o3), _3 = g3 ? "y" === l3 ? g3.clientHeight || 0 : g3.clientWidth || 0 : 0, b3 = p3 / 2 - m3 / 2, v3 = h3[u3], y3 = _3 - d3[c3] - h3[f3], w3 = _3 / 2 - d3[c3] / 2 + b3, A3 = Ne(v3, w3, y3), E3 = l3;
        i3.modifiersData[n3] = ((e3 = {})[E3] = A3, e3.centerOffset = A3 - w3, e3);
      }
    }, effect: function(t3) {
      var e3 = t3.state, i3 = t3.options.element, n3 = void 0 === i3 ? "[data-popper-arrow]" : i3;
      null != n3 && ("string" != typeof n3 || (n3 = e3.elements.popper.querySelector(n3))) && Oe(e3.elements.popper, n3) && (e3.elements.arrow = n3);
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function Fe(t3) {
      return t3.split("-")[1];
    }
    var He = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function We(t3) {
      var e3, i3 = t3.popper, n3 = t3.popperRect, s3 = t3.placement, o3 = t3.variation, r3 = t3.offsets, a3 = t3.position, l3 = t3.gpuAcceleration, c3 = t3.adaptive, h3 = t3.roundOffsets, d3 = t3.isFixed, u3 = r3.x, f3 = void 0 === u3 ? 0 : u3, p3 = r3.y, m3 = void 0 === p3 ? 0 : p3, g3 = "function" == typeof h3 ? h3({ x: f3, y: m3 }) : { x: f3, y: m3 };
      f3 = g3.x, m3 = g3.y;
      var _3 = r3.hasOwnProperty("x"), b3 = r3.hasOwnProperty("y"), v3 = Vt, y3 = zt, w3 = window;
      if (c3) {
        var A3 = $e(i3), E3 = "clientHeight", T2 = "clientWidth";
        A3 === fe(i3) && "static" !== xe(A3 = Le(i3)).position && "absolute" === a3 && (E3 = "scrollHeight", T2 = "scrollWidth"), (s3 === zt || (s3 === Vt || s3 === qt) && o3 === Yt) && (y3 = Rt, m3 -= (d3 && A3 === w3 && w3.visualViewport ? w3.visualViewport.height : A3[E3]) - n3.height, m3 *= l3 ? 1 : -1), s3 !== Vt && (s3 !== zt && s3 !== Rt || o3 !== Yt) || (v3 = qt, f3 -= (d3 && A3 === w3 && w3.visualViewport ? w3.visualViewport.width : A3[T2]) - n3.width, f3 *= l3 ? 1 : -1);
      }
      var C2, O3 = Object.assign({ position: a3 }, c3 && He), x3 = true === h3 ? function(t4, e4) {
        var i4 = t4.x, n4 = t4.y, s4 = e4.devicePixelRatio || 1;
        return { x: we(i4 * s4) / s4 || 0, y: we(n4 * s4) / s4 || 0 };
      }({ x: f3, y: m3 }, fe(i3)) : { x: f3, y: m3 };
      return f3 = x3.x, m3 = x3.y, l3 ? Object.assign({}, O3, ((C2 = {})[y3] = b3 ? "0" : "", C2[v3] = _3 ? "0" : "", C2.transform = (w3.devicePixelRatio || 1) <= 1 ? "translate(" + f3 + "px, " + m3 + "px)" : "translate3d(" + f3 + "px, " + m3 + "px, 0)", C2)) : Object.assign({}, O3, ((e3 = {})[y3] = b3 ? m3 + "px" : "", e3[v3] = _3 ? f3 + "px" : "", e3.transform = "", e3));
    }
    const Be = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t3) {
      var e3 = t3.state, i3 = t3.options, n3 = i3.gpuAcceleration, s3 = void 0 === n3 || n3, o3 = i3.adaptive, r3 = void 0 === o3 || o3, a3 = i3.roundOffsets, l3 = void 0 === a3 || a3, c3 = { placement: be(e3.placement), variation: Fe(e3.placement), popper: e3.elements.popper, popperRect: e3.rects.popper, gpuAcceleration: s3, isFixed: "fixed" === e3.options.strategy };
      null != e3.modifiersData.popperOffsets && (e3.styles.popper = Object.assign({}, e3.styles.popper, We(Object.assign({}, c3, { offsets: e3.modifiersData.popperOffsets, position: e3.options.strategy, adaptive: r3, roundOffsets: l3 })))), null != e3.modifiersData.arrow && (e3.styles.arrow = Object.assign({}, e3.styles.arrow, We(Object.assign({}, c3, { offsets: e3.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l3 })))), e3.attributes.popper = Object.assign({}, e3.attributes.popper, { "data-popper-placement": e3.placement });
    }, data: {} };
    var ze = { passive: true };
    const Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
    }, effect: function(t3) {
      var e3 = t3.state, i3 = t3.instance, n3 = t3.options, s3 = n3.scroll, o3 = void 0 === s3 || s3, r3 = n3.resize, a3 = void 0 === r3 || r3, l3 = fe(e3.elements.popper), c3 = [].concat(e3.scrollParents.reference, e3.scrollParents.popper);
      return o3 && c3.forEach(function(t4) {
        t4.addEventListener("scroll", i3.update, ze);
      }), a3 && l3.addEventListener("resize", i3.update, ze), function() {
        o3 && c3.forEach(function(t4) {
          t4.removeEventListener("scroll", i3.update, ze);
        }), a3 && l3.removeEventListener("resize", i3.update, ze);
      };
    }, data: {} };
    var qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Ve(t3) {
      return t3.replace(/left|right|bottom|top/g, function(t4) {
        return qe[t4];
      });
    }
    var Ke = { start: "end", end: "start" };
    function Qe(t3) {
      return t3.replace(/start|end/g, function(t4) {
        return Ke[t4];
      });
    }
    function Xe(t3) {
      var e3 = fe(t3);
      return { scrollLeft: e3.pageXOffset, scrollTop: e3.pageYOffset };
    }
    function Ye(t3) {
      return Te(Le(t3)).left + Xe(t3).scrollLeft;
    }
    function Ue(t3) {
      var e3 = xe(t3), i3 = e3.overflow, n3 = e3.overflowX, s3 = e3.overflowY;
      return /auto|scroll|overlay|hidden/.test(i3 + s3 + n3);
    }
    function Ge(t3) {
      return ["html", "body", "#document"].indexOf(ue(t3)) >= 0 ? t3.ownerDocument.body : me(t3) && Ue(t3) ? t3 : Ge(Se(t3));
    }
    function Je(t3, e3) {
      var i3;
      void 0 === e3 && (e3 = []);
      var n3 = Ge(t3), s3 = n3 === (null == (i3 = t3.ownerDocument) ? void 0 : i3.body), o3 = fe(n3), r3 = s3 ? [o3].concat(o3.visualViewport || [], Ue(n3) ? n3 : []) : n3, a3 = e3.concat(r3);
      return s3 ? a3 : a3.concat(Je(Se(r3)));
    }
    function Ze(t3) {
      return Object.assign({}, t3, { left: t3.x, top: t3.y, right: t3.x + t3.width, bottom: t3.y + t3.height });
    }
    function ti(t3, e3, i3) {
      return e3 === Gt ? Ze(function(t4, e4) {
        var i4 = fe(t4), n3 = Le(t4), s3 = i4.visualViewport, o3 = n3.clientWidth, r3 = n3.clientHeight, a3 = 0, l3 = 0;
        if (s3) {
          o3 = s3.width, r3 = s3.height;
          var c3 = Ee();
          (c3 || !c3 && "fixed" === e4) && (a3 = s3.offsetLeft, l3 = s3.offsetTop);
        }
        return { width: o3, height: r3, x: a3 + Ye(t4), y: l3 };
      }(t3, i3)) : pe(e3) ? function(t4, e4) {
        var i4 = Te(t4, false, "fixed" === e4);
        return i4.top = i4.top + t4.clientTop, i4.left = i4.left + t4.clientLeft, i4.bottom = i4.top + t4.clientHeight, i4.right = i4.left + t4.clientWidth, i4.width = t4.clientWidth, i4.height = t4.clientHeight, i4.x = i4.left, i4.y = i4.top, i4;
      }(e3, i3) : Ze(function(t4) {
        var e4, i4 = Le(t4), n3 = Xe(t4), s3 = null == (e4 = t4.ownerDocument) ? void 0 : e4.body, o3 = ve(i4.scrollWidth, i4.clientWidth, s3 ? s3.scrollWidth : 0, s3 ? s3.clientWidth : 0), r3 = ve(i4.scrollHeight, i4.clientHeight, s3 ? s3.scrollHeight : 0, s3 ? s3.clientHeight : 0), a3 = -n3.scrollLeft + Ye(t4), l3 = -n3.scrollTop;
        return "rtl" === xe(s3 || i4).direction && (a3 += ve(i4.clientWidth, s3 ? s3.clientWidth : 0) - o3), { width: o3, height: r3, x: a3, y: l3 };
      }(Le(t3)));
    }
    function ei(t3) {
      var e3, i3 = t3.reference, n3 = t3.element, s3 = t3.placement, o3 = s3 ? be(s3) : null, r3 = s3 ? Fe(s3) : null, a3 = i3.x + i3.width / 2 - n3.width / 2, l3 = i3.y + i3.height / 2 - n3.height / 2;
      switch (o3) {
        case zt:
          e3 = { x: a3, y: i3.y - n3.height };
          break;
        case Rt:
          e3 = { x: a3, y: i3.y + i3.height };
          break;
        case qt:
          e3 = { x: i3.x + i3.width, y: l3 };
          break;
        case Vt:
          e3 = { x: i3.x - n3.width, y: l3 };
          break;
        default:
          e3 = { x: i3.x, y: i3.y };
      }
      var c3 = o3 ? Ie(o3) : null;
      if (null != c3) {
        var h3 = "y" === c3 ? "height" : "width";
        switch (r3) {
          case Xt:
            e3[c3] = e3[c3] - (i3[h3] / 2 - n3[h3] / 2);
            break;
          case Yt:
            e3[c3] = e3[c3] + (i3[h3] / 2 - n3[h3] / 2);
        }
      }
      return e3;
    }
    function ii(t3, e3) {
      void 0 === e3 && (e3 = {});
      var i3 = e3, n3 = i3.placement, s3 = void 0 === n3 ? t3.placement : n3, o3 = i3.strategy, r3 = void 0 === o3 ? t3.strategy : o3, a3 = i3.boundary, l3 = void 0 === a3 ? Ut : a3, c3 = i3.rootBoundary, h3 = void 0 === c3 ? Gt : c3, d3 = i3.elementContext, u3 = void 0 === d3 ? Jt : d3, f3 = i3.altBoundary, p3 = void 0 !== f3 && f3, m3 = i3.padding, g3 = void 0 === m3 ? 0 : m3, _3 = Pe("number" != typeof g3 ? g3 : Me(g3, Qt)), b3 = u3 === Jt ? Zt : Jt, v3 = t3.rects.popper, y3 = t3.elements[p3 ? b3 : u3], w3 = function(t4, e4, i4, n4) {
        var s4 = "clippingParents" === e4 ? function(t5) {
          var e5 = Je(Se(t5)), i5 = ["absolute", "fixed"].indexOf(xe(t5).position) >= 0 && me(t5) ? $e(t5) : t5;
          return pe(i5) ? e5.filter(function(t6) {
            return pe(t6) && Oe(t6, i5) && "body" !== ue(t6);
          }) : [];
        }(t4) : [].concat(e4), o4 = [].concat(s4, [i4]), r4 = o4[0], a4 = o4.reduce(function(e5, i5) {
          var s5 = ti(t4, i5, n4);
          return e5.top = ve(s5.top, e5.top), e5.right = ye(s5.right, e5.right), e5.bottom = ye(s5.bottom, e5.bottom), e5.left = ve(s5.left, e5.left), e5;
        }, ti(t4, r4, n4));
        return a4.width = a4.right - a4.left, a4.height = a4.bottom - a4.top, a4.x = a4.left, a4.y = a4.top, a4;
      }(pe(y3) ? y3 : y3.contextElement || Le(t3.elements.popper), l3, h3, r3), A3 = Te(t3.elements.reference), E3 = ei({ reference: A3, element: v3, strategy: "absolute", placement: s3 }), T2 = Ze(Object.assign({}, v3, E3)), C2 = u3 === Jt ? T2 : A3, O3 = { top: w3.top - C2.top + _3.top, bottom: C2.bottom - w3.bottom + _3.bottom, left: w3.left - C2.left + _3.left, right: C2.right - w3.right + _3.right }, x3 = t3.modifiersData.offset;
      if (u3 === Jt && x3) {
        var k3 = x3[s3];
        Object.keys(O3).forEach(function(t4) {
          var e4 = [qt, Rt].indexOf(t4) >= 0 ? 1 : -1, i4 = [zt, Rt].indexOf(t4) >= 0 ? "y" : "x";
          O3[t4] += k3[i4] * e4;
        });
      }
      return O3;
    }
    function ni(t3, e3) {
      void 0 === e3 && (e3 = {});
      var i3 = e3, n3 = i3.placement, s3 = i3.boundary, o3 = i3.rootBoundary, r3 = i3.padding, a3 = i3.flipVariations, l3 = i3.allowedAutoPlacements, c3 = void 0 === l3 ? ee : l3, h3 = Fe(n3), d3 = h3 ? a3 ? te : te.filter(function(t4) {
        return Fe(t4) === h3;
      }) : Qt, u3 = d3.filter(function(t4) {
        return c3.indexOf(t4) >= 0;
      });
      0 === u3.length && (u3 = d3);
      var f3 = u3.reduce(function(e4, i4) {
        return e4[i4] = ii(t3, { placement: i4, boundary: s3, rootBoundary: o3, padding: r3 })[be(i4)], e4;
      }, {});
      return Object.keys(f3).sort(function(t4, e4) {
        return f3[t4] - f3[e4];
      });
    }
    const si = { name: "flip", enabled: true, phase: "main", fn: function(t3) {
      var e3 = t3.state, i3 = t3.options, n3 = t3.name;
      if (!e3.modifiersData[n3]._skip) {
        for (var s3 = i3.mainAxis, o3 = void 0 === s3 || s3, r3 = i3.altAxis, a3 = void 0 === r3 || r3, l3 = i3.fallbackPlacements, c3 = i3.padding, h3 = i3.boundary, d3 = i3.rootBoundary, u3 = i3.altBoundary, f3 = i3.flipVariations, p3 = void 0 === f3 || f3, m3 = i3.allowedAutoPlacements, g3 = e3.options.placement, _3 = be(g3), b3 = l3 || (_3 !== g3 && p3 ? function(t4) {
          if (be(t4) === Kt)
            return [];
          var e4 = Ve(t4);
          return [Qe(t4), e4, Qe(e4)];
        }(g3) : [Ve(g3)]), v3 = [g3].concat(b3).reduce(function(t4, i4) {
          return t4.concat(be(i4) === Kt ? ni(e3, { placement: i4, boundary: h3, rootBoundary: d3, padding: c3, flipVariations: p3, allowedAutoPlacements: m3 }) : i4);
        }, []), y3 = e3.rects.reference, w3 = e3.rects.popper, A3 = /* @__PURE__ */ new Map(), E3 = true, T2 = v3[0], C2 = 0; C2 < v3.length; C2++) {
          var O3 = v3[C2], x3 = be(O3), k3 = Fe(O3) === Xt, L3 = [zt, Rt].indexOf(x3) >= 0, S3 = L3 ? "width" : "height", D3 = ii(e3, { placement: O3, boundary: h3, rootBoundary: d3, altBoundary: u3, padding: c3 }), $2 = L3 ? k3 ? qt : Vt : k3 ? Rt : zt;
          y3[S3] > w3[S3] && ($2 = Ve($2));
          var I3 = Ve($2), N3 = [];
          if (o3 && N3.push(D3[x3] <= 0), a3 && N3.push(D3[$2] <= 0, D3[I3] <= 0), N3.every(function(t4) {
            return t4;
          })) {
            T2 = O3, E3 = false;
            break;
          }
          A3.set(O3, N3);
        }
        if (E3)
          for (var P3 = function(t4) {
            var e4 = v3.find(function(e5) {
              var i4 = A3.get(e5);
              if (i4)
                return i4.slice(0, t4).every(function(t5) {
                  return t5;
                });
            });
            if (e4)
              return T2 = e4, "break";
          }, M3 = p3 ? 3 : 1; M3 > 0 && "break" !== P3(M3); M3--)
            ;
        e3.placement !== T2 && (e3.modifiersData[n3]._skip = true, e3.placement = T2, e3.reset = true);
      }
    }, requiresIfExists: ["offset"], data: { _skip: false } };
    function oi(t3, e3, i3) {
      return void 0 === i3 && (i3 = { x: 0, y: 0 }), { top: t3.top - e3.height - i3.y, right: t3.right - e3.width + i3.x, bottom: t3.bottom - e3.height + i3.y, left: t3.left - e3.width - i3.x };
    }
    function ri(t3) {
      return [zt, qt, Rt, Vt].some(function(e3) {
        return t3[e3] >= 0;
      });
    }
    const ai = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t3) {
      var e3 = t3.state, i3 = t3.name, n3 = e3.rects.reference, s3 = e3.rects.popper, o3 = e3.modifiersData.preventOverflow, r3 = ii(e3, { elementContext: "reference" }), a3 = ii(e3, { altBoundary: true }), l3 = oi(r3, n3), c3 = oi(a3, s3, o3), h3 = ri(l3), d3 = ri(c3);
      e3.modifiersData[i3] = { referenceClippingOffsets: l3, popperEscapeOffsets: c3, isReferenceHidden: h3, hasPopperEscaped: d3 }, e3.attributes.popper = Object.assign({}, e3.attributes.popper, { "data-popper-reference-hidden": h3, "data-popper-escaped": d3 });
    } }, li = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t3) {
      var e3 = t3.state, i3 = t3.options, n3 = t3.name, s3 = i3.offset, o3 = void 0 === s3 ? [0, 0] : s3, r3 = ee.reduce(function(t4, i4) {
        return t4[i4] = function(t5, e4, i5) {
          var n4 = be(t5), s4 = [Vt, zt].indexOf(n4) >= 0 ? -1 : 1, o4 = "function" == typeof i5 ? i5(Object.assign({}, e4, { placement: t5 })) : i5, r4 = o4[0], a4 = o4[1];
          return r4 = r4 || 0, a4 = (a4 || 0) * s4, [Vt, qt].indexOf(n4) >= 0 ? { x: a4, y: r4 } : { x: r4, y: a4 };
        }(i4, e3.rects, o3), t4;
      }, {}), a3 = r3[e3.placement], l3 = a3.x, c3 = a3.y;
      null != e3.modifiersData.popperOffsets && (e3.modifiersData.popperOffsets.x += l3, e3.modifiersData.popperOffsets.y += c3), e3.modifiersData[n3] = r3;
    } }, ci = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t3) {
      var e3 = t3.state, i3 = t3.name;
      e3.modifiersData[i3] = ei({ reference: e3.rects.reference, element: e3.rects.popper, strategy: "absolute", placement: e3.placement });
    }, data: {} }, hi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t3) {
      var e3 = t3.state, i3 = t3.options, n3 = t3.name, s3 = i3.mainAxis, o3 = void 0 === s3 || s3, r3 = i3.altAxis, a3 = void 0 !== r3 && r3, l3 = i3.boundary, c3 = i3.rootBoundary, h3 = i3.altBoundary, d3 = i3.padding, u3 = i3.tether, f3 = void 0 === u3 || u3, p3 = i3.tetherOffset, m3 = void 0 === p3 ? 0 : p3, g3 = ii(e3, { boundary: l3, rootBoundary: c3, padding: d3, altBoundary: h3 }), _3 = be(e3.placement), b3 = Fe(e3.placement), v3 = !b3, y3 = Ie(_3), w3 = "x" === y3 ? "y" : "x", A3 = e3.modifiersData.popperOffsets, E3 = e3.rects.reference, T2 = e3.rects.popper, C2 = "function" == typeof m3 ? m3(Object.assign({}, e3.rects, { placement: e3.placement })) : m3, O3 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x3 = e3.modifiersData.offset ? e3.modifiersData.offset[e3.placement] : null, k3 = { x: 0, y: 0 };
      if (A3) {
        if (o3) {
          var L3, S3 = "y" === y3 ? zt : Vt, D3 = "y" === y3 ? Rt : qt, $2 = "y" === y3 ? "height" : "width", I3 = A3[y3], N3 = I3 + g3[S3], P3 = I3 - g3[D3], M3 = f3 ? -T2[$2] / 2 : 0, j3 = b3 === Xt ? E3[$2] : T2[$2], F3 = b3 === Xt ? -T2[$2] : -E3[$2], H3 = e3.elements.arrow, W3 = f3 && H3 ? Ce(H3) : { width: 0, height: 0 }, B3 = e3.modifiersData["arrow#persistent"] ? e3.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z3 = B3[S3], R3 = B3[D3], q3 = Ne(0, E3[$2], W3[$2]), V2 = v3 ? E3[$2] / 2 - M3 - q3 - z3 - O3.mainAxis : j3 - q3 - z3 - O3.mainAxis, K2 = v3 ? -E3[$2] / 2 + M3 + q3 + R3 + O3.mainAxis : F3 + q3 + R3 + O3.mainAxis, Q3 = e3.elements.arrow && $e(e3.elements.arrow), X3 = Q3 ? "y" === y3 ? Q3.clientTop || 0 : Q3.clientLeft || 0 : 0, Y2 = null != (L3 = null == x3 ? void 0 : x3[y3]) ? L3 : 0, U3 = I3 + K2 - Y2, G3 = Ne(f3 ? ye(N3, I3 + V2 - Y2 - X3) : N3, I3, f3 ? ve(P3, U3) : P3);
          A3[y3] = G3, k3[y3] = G3 - I3;
        }
        if (a3) {
          var J2, Z3 = "x" === y3 ? zt : Vt, tt2 = "x" === y3 ? Rt : qt, et2 = A3[w3], it2 = "y" === w3 ? "height" : "width", nt2 = et2 + g3[Z3], st2 = et2 - g3[tt2], ot2 = -1 !== [zt, Vt].indexOf(_3), rt2 = null != (J2 = null == x3 ? void 0 : x3[w3]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E3[it2] - T2[it2] - rt2 + O3.altAxis, lt2 = ot2 ? et2 + E3[it2] + T2[it2] - rt2 - O3.altAxis : st2, ct2 = f3 && ot2 ? function(t4, e4, i4) {
            var n4 = Ne(t4, e4, i4);
            return n4 > i4 ? i4 : n4;
          }(at2, et2, lt2) : Ne(f3 ? at2 : nt2, et2, f3 ? lt2 : st2);
          A3[w3] = ct2, k3[w3] = ct2 - et2;
        }
        e3.modifiersData[n3] = k3;
      }
    }, requiresIfExists: ["offset"] };
    function di(t3, e3, i3) {
      void 0 === i3 && (i3 = false);
      var n3, s3, o3 = me(e3), r3 = me(e3) && function(t4) {
        var e4 = t4.getBoundingClientRect(), i4 = we(e4.width) / t4.offsetWidth || 1, n4 = we(e4.height) / t4.offsetHeight || 1;
        return 1 !== i4 || 1 !== n4;
      }(e3), a3 = Le(e3), l3 = Te(t3, r3, i3), c3 = { scrollLeft: 0, scrollTop: 0 }, h3 = { x: 0, y: 0 };
      return (o3 || !o3 && !i3) && (("body" !== ue(e3) || Ue(a3)) && (c3 = (n3 = e3) !== fe(n3) && me(n3) ? { scrollLeft: (s3 = n3).scrollLeft, scrollTop: s3.scrollTop } : Xe(n3)), me(e3) ? ((h3 = Te(e3, true)).x += e3.clientLeft, h3.y += e3.clientTop) : a3 && (h3.x = Ye(a3))), { x: l3.left + c3.scrollLeft - h3.x, y: l3.top + c3.scrollTop - h3.y, width: l3.width, height: l3.height };
    }
    function ui(t3) {
      var e3 = /* @__PURE__ */ new Map(), i3 = /* @__PURE__ */ new Set(), n3 = [];
      function s3(t4) {
        i3.add(t4.name), [].concat(t4.requires || [], t4.requiresIfExists || []).forEach(function(t5) {
          if (!i3.has(t5)) {
            var n4 = e3.get(t5);
            n4 && s3(n4);
          }
        }), n3.push(t4);
      }
      return t3.forEach(function(t4) {
        e3.set(t4.name, t4);
      }), t3.forEach(function(t4) {
        i3.has(t4.name) || s3(t4);
      }), n3;
    }
    var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function pi() {
      for (var t3 = arguments.length, e3 = new Array(t3), i3 = 0; i3 < t3; i3++)
        e3[i3] = arguments[i3];
      return !e3.some(function(t4) {
        return !(t4 && "function" == typeof t4.getBoundingClientRect);
      });
    }
    function mi(t3) {
      void 0 === t3 && (t3 = {});
      var e3 = t3, i3 = e3.defaultModifiers, n3 = void 0 === i3 ? [] : i3, s3 = e3.defaultOptions, o3 = void 0 === s3 ? fi : s3;
      return function(t4, e4, i4) {
        void 0 === i4 && (i4 = o3);
        var s4, r3, a3 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fi, o3), modifiersData: {}, elements: { reference: t4, popper: e4 }, attributes: {}, styles: {} }, l3 = [], c3 = false, h3 = { state: a3, setOptions: function(i5) {
          var s5 = "function" == typeof i5 ? i5(a3.options) : i5;
          d3(), a3.options = Object.assign({}, o3, a3.options, s5), a3.scrollParents = { reference: pe(t4) ? Je(t4) : t4.contextElement ? Je(t4.contextElement) : [], popper: Je(e4) };
          var r4, c4, u3 = function(t5) {
            var e5 = ui(t5);
            return de.reduce(function(t6, i6) {
              return t6.concat(e5.filter(function(t7) {
                return t7.phase === i6;
              }));
            }, []);
          }((r4 = [].concat(n3, a3.options.modifiers), c4 = r4.reduce(function(t5, e5) {
            var i6 = t5[e5.name];
            return t5[e5.name] = i6 ? Object.assign({}, i6, e5, { options: Object.assign({}, i6.options, e5.options), data: Object.assign({}, i6.data, e5.data) }) : e5, t5;
          }, {}), Object.keys(c4).map(function(t5) {
            return c4[t5];
          })));
          return a3.orderedModifiers = u3.filter(function(t5) {
            return t5.enabled;
          }), a3.orderedModifiers.forEach(function(t5) {
            var e5 = t5.name, i6 = t5.options, n4 = void 0 === i6 ? {} : i6, s6 = t5.effect;
            if ("function" == typeof s6) {
              var o4 = s6({ state: a3, name: e5, instance: h3, options: n4 });
              l3.push(o4 || function() {
              });
            }
          }), h3.update();
        }, forceUpdate: function() {
          if (!c3) {
            var t5 = a3.elements, e5 = t5.reference, i5 = t5.popper;
            if (pi(e5, i5)) {
              a3.rects = { reference: di(e5, $e(i5), "fixed" === a3.options.strategy), popper: Ce(i5) }, a3.reset = false, a3.placement = a3.options.placement, a3.orderedModifiers.forEach(function(t6) {
                return a3.modifiersData[t6.name] = Object.assign({}, t6.data);
              });
              for (var n4 = 0; n4 < a3.orderedModifiers.length; n4++)
                if (true !== a3.reset) {
                  var s5 = a3.orderedModifiers[n4], o4 = s5.fn, r4 = s5.options, l4 = void 0 === r4 ? {} : r4, d4 = s5.name;
                  "function" == typeof o4 && (a3 = o4({ state: a3, options: l4, name: d4, instance: h3 }) || a3);
                } else
                  a3.reset = false, n4 = -1;
            }
          }
        }, update: (s4 = function() {
          return new Promise(function(t5) {
            h3.forceUpdate(), t5(a3);
          });
        }, function() {
          return r3 || (r3 = new Promise(function(t5) {
            Promise.resolve().then(function() {
              r3 = void 0, t5(s4());
            });
          })), r3;
        }), destroy: function() {
          d3(), c3 = true;
        } };
        if (!pi(t4, e4))
          return h3;
        function d3() {
          l3.forEach(function(t5) {
            return t5();
          }), l3 = [];
        }
        return h3.setOptions(i4).then(function(t5) {
          !c3 && i4.onFirstUpdate && i4.onFirstUpdate(t5);
        }), h3;
      };
    }
    var gi = mi(), _i = mi({ defaultModifiers: [Re, ci, Be, _e] }), bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai] });
    const vi = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: ae, afterRead: se, afterWrite: he, applyStyles: _e, arrow: je, auto: Kt, basePlacements: Qt, beforeMain: oe, beforeRead: ie, beforeWrite: le, bottom: Rt, clippingParents: Ut, computeStyles: Be, createPopper: bi, createPopperBase: gi, createPopperLite: _i, detectOverflow: ii, end: Yt, eventListeners: Re, flip: si, hide: ai, left: Vt, main: re, modifierPhases: de, offset: li, placements: ee, popper: Jt, popperGenerator: mi, popperOffsets: ci, preventOverflow: hi, read: ne, reference: Zt, right: qt, start: Xt, top: zt, variationPlacements: te, viewport: Gt, write: ce }, Symbol.toStringTag, { value: "Module" })), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", Mi = p2() ? "top-end" : "top-start", ji = p2() ? "top-start" : "top-end", Fi = p2() ? "bottom-end" : "bottom-start", Hi = p2() ? "bottom-start" : "bottom-end", Wi = p2() ? "left-start" : "right-start", Bi = p2() ? "right-start" : "left-start", zi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ri = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class qi extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._popper = null, this._parent = this._element.parentNode, this._menu = z2.next(this._element, Pi)[0] || z2.prev(this._element, Pi)[0] || z2.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
      }
      static get Default() {
        return zi;
      }
      static get DefaultType() {
        return Ri;
      }
      static get NAME() {
        return yi;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (l2(this._element) || this._isShown())
          return;
        const t3 = { relatedTarget: this._element };
        if (!N2.trigger(this._element, xi, t3).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
            for (const t4 of [].concat(...document.body.children))
              N2.on(t4, "mouseover", h2);
          this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add($i), this._element.classList.add($i), N2.trigger(this._element, ki, t3);
        }
      }
      hide() {
        if (l2(this._element) || !this._isShown())
          return;
        const t3 = { relatedTarget: this._element };
        this._completeHide(t3);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      _completeHide(t3) {
        if (!N2.trigger(this._element, Ci, t3).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t4 of [].concat(...document.body.children))
              N2.off(t4, "mouseover", h2);
          this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F2.removeDataAttribute(this._menu, "popper"), N2.trigger(this._element, Oi, t3);
        }
      }
      _getConfig(t3) {
        if ("object" == typeof (t3 = super._getConfig(t3)).reference && !o2(t3.reference) && "function" != typeof t3.reference.getBoundingClientRect)
          throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return t3;
      }
      _createPopper() {
        if (void 0 === vi)
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let t3 = this._element;
        "parent" === this._config.reference ? t3 = this._parent : o2(this._config.reference) ? t3 = r2(this._config.reference) : "object" == typeof this._config.reference && (t3 = this._config.reference);
        const e3 = this._getPopperConfig();
        this._popper = bi(t3, this._menu, e3);
      }
      _isShown() {
        return this._menu.classList.contains($i);
      }
      _getPlacement() {
        const t3 = this._parent;
        if (t3.classList.contains("dropend"))
          return Wi;
        if (t3.classList.contains("dropstart"))
          return Bi;
        if (t3.classList.contains("dropup-center"))
          return "top";
        if (t3.classList.contains("dropdown-center"))
          return "bottom";
        const e3 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t3.classList.contains("dropup") ? e3 ? ji : Mi : e3 ? Hi : Fi;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: t3 } = this._config;
        return "string" == typeof t3 ? t3.split(",").map((t4) => Number.parseInt(t4, 10)) : "function" == typeof t3 ? (e3) => t3(e3, this._element) : t3;
      }
      _getPopperConfig() {
        const t3 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
        return (this._inNavbar || "static" === this._config.display) && (F2.setDataAttribute(this._menu, "popper", "static"), t3.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t3, ...g2(this._config.popperConfig, [t3]) };
      }
      _selectMenuItem({ key: t3, target: e3 }) {
        const i3 = z2.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t4) => a2(t4));
        i3.length && b2(i3, e3, t3 === Ti, !i3.includes(e3)).focus();
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = qi.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3])
              throw new TypeError(`No method named "${t3}"`);
            e3[t3]();
          }
        });
      }
      static clearMenus(t3) {
        if (2 === t3.button || "keyup" === t3.type && "Tab" !== t3.key)
          return;
        const e3 = z2.find(Ni);
        for (const i3 of e3) {
          const e4 = qi.getInstance(i3);
          if (!e4 || false === e4._config.autoClose)
            continue;
          const n3 = t3.composedPath(), s3 = n3.includes(e4._menu);
          if (n3.includes(e4._element) || "inside" === e4._config.autoClose && !s3 || "outside" === e4._config.autoClose && s3)
            continue;
          if (e4._menu.contains(t3.target) && ("keyup" === t3.type && "Tab" === t3.key || /input|select|option|textarea|form/i.test(t3.target.tagName)))
            continue;
          const o3 = { relatedTarget: e4._element };
          "click" === t3.type && (o3.clickEvent = t3), e4._completeHide(o3);
        }
      }
      static dataApiKeydownHandler(t3) {
        const e3 = /input|textarea/i.test(t3.target.tagName), i3 = "Escape" === t3.key, n3 = [Ei, Ti].includes(t3.key);
        if (!n3 && !i3)
          return;
        if (e3 && !i3)
          return;
        t3.preventDefault();
        const s3 = this.matches(Ii) ? this : z2.prev(this, Ii)[0] || z2.next(this, Ii)[0] || z2.findOne(Ii, t3.delegateTarget.parentNode), o3 = qi.getOrCreateInstance(s3);
        if (n3)
          return t3.stopPropagation(), o3.show(), void o3._selectMenuItem(t3);
        o3._isShown() && (t3.stopPropagation(), o3.hide(), s3.focus());
      }
    }
    N2.on(document, Si, Ii, qi.dataApiKeydownHandler), N2.on(document, Si, Pi, qi.dataApiKeydownHandler), N2.on(document, Li, qi.clearMenus), N2.on(document, Di, qi.clearMenus), N2.on(document, Li, Ii, function(t3) {
      t3.preventDefault(), qi.getOrCreateInstance(this).toggle();
    }), m2(qi);
    const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Yi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class Ui extends H2 {
      constructor(t3) {
        super(), this._config = this._getConfig(t3), this._isAppended = false, this._element = null;
      }
      static get Default() {
        return Xi;
      }
      static get DefaultType() {
        return Yi;
      }
      static get NAME() {
        return Vi;
      }
      show(t3) {
        if (!this._config.isVisible)
          return void g2(t3);
        this._append();
        const e3 = this._getElement();
        this._config.isAnimated && d2(e3), e3.classList.add(Ki), this._emulateAnimation(() => {
          g2(t3);
        });
      }
      hide(t3) {
        this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
          this.dispose(), g2(t3);
        })) : g2(t3);
      }
      dispose() {
        this._isAppended && (N2.off(this._element, Qi), this._element.remove(), this._isAppended = false);
      }
      _getElement() {
        if (!this._element) {
          const t3 = document.createElement("div");
          t3.className = this._config.className, this._config.isAnimated && t3.classList.add("fade"), this._element = t3;
        }
        return this._element;
      }
      _configAfterMerge(t3) {
        return t3.rootElement = r2(t3.rootElement), t3;
      }
      _append() {
        if (this._isAppended)
          return;
        const t3 = this._getElement();
        this._config.rootElement.append(t3), N2.on(t3, Qi, () => {
          g2(this._config.clickCallback);
        }), this._isAppended = true;
      }
      _emulateAnimation(t3) {
        _2(t3, this._getElement(), this._config.isAnimated);
      }
    }
    const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn2 = "backward", en2 = { autofocus: true, trapElement: null }, nn2 = { autofocus: "boolean", trapElement: "element" };
    class sn extends H2 {
      constructor(t3) {
        super(), this._config = this._getConfig(t3), this._isActive = false, this._lastTabNavDirection = null;
      }
      static get Default() {
        return en2;
      }
      static get DefaultType() {
        return nn2;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N2.off(document, Gi), N2.on(document, Ji, (t3) => this._handleFocusin(t3)), N2.on(document, Zi, (t3) => this._handleKeydown(t3)), this._isActive = true);
      }
      deactivate() {
        this._isActive && (this._isActive = false, N2.off(document, Gi));
      }
      _handleFocusin(t3) {
        const { trapElement: e3 } = this._config;
        if (t3.target === document || t3.target === e3 || e3.contains(t3.target))
          return;
        const i3 = z2.focusableChildren(e3);
        0 === i3.length ? e3.focus() : this._lastTabNavDirection === tn2 ? i3[i3.length - 1].focus() : i3[0].focus();
      }
      _handleKeydown(t3) {
        "Tab" === t3.key && (this._lastTabNavDirection = t3.shiftKey ? tn2 : "forward");
      }
    }
    const on2 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn2 = ".sticky-top", an2 = "padding-right", ln = "margin-right";
    class cn {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const t3 = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t3);
      }
      hide() {
        const t3 = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, an2, (e3) => e3 + t3), this._setElementAttributes(on2, an2, (e3) => e3 + t3), this._setElementAttributes(rn2, ln, (e3) => e3 - t3);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an2), this._resetElementAttributes(on2, an2), this._resetElementAttributes(rn2, ln);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(t3, e3, i3) {
        const n3 = this.getWidth();
        this._applyManipulationCallback(t3, (t4) => {
          if (t4 !== this._element && window.innerWidth > t4.clientWidth + n3)
            return;
          this._saveInitialAttribute(t4, e3);
          const s3 = window.getComputedStyle(t4).getPropertyValue(e3);
          t4.style.setProperty(e3, `${i3(Number.parseFloat(s3))}px`);
        });
      }
      _saveInitialAttribute(t3, e3) {
        const i3 = t3.style.getPropertyValue(e3);
        i3 && F2.setDataAttribute(t3, e3, i3);
      }
      _resetElementAttributes(t3, e3) {
        this._applyManipulationCallback(t3, (t4) => {
          const i3 = F2.getDataAttribute(t4, e3);
          null !== i3 ? (F2.removeDataAttribute(t4, e3), t4.style.setProperty(e3, i3)) : t4.style.removeProperty(e3);
        });
      }
      _applyManipulationCallback(t3, e3) {
        if (o2(t3))
          e3(t3);
        else
          for (const i3 of z2.find(t3, this._element))
            e3(i3);
      }
    }
    const hn = ".bs.modal", dn = `hide${hn}`, un2 = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = { backdrop: true, focus: true, keyboard: true }, Cn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class On extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._dialog = z2.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new cn(), this._addEventListeners();
      }
      static get Default() {
        return Tn;
      }
      static get DefaultType() {
        return Cn;
      }
      static get NAME() {
        return "modal";
      }
      toggle(t3) {
        return this._isShown ? this.hide() : this.show(t3);
      }
      show(t3) {
        this._isShown || this._isTransitioning || N2.trigger(this._element, pn, { relatedTarget: t3 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t3)));
      }
      hide() {
        this._isShown && !this._isTransitioning && (N2.trigger(this._element, dn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
      }
      dispose() {
        N2.off(window, hn), N2.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Ui({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
      }
      _initializeFocusTrap() {
        return new sn({ trapElement: this._element });
      }
      _showElement(t3) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const e3 = z2.findOne(".modal-body", this._dialog);
        e3 && (e3.scrollTop = 0), d2(this._element), this._element.classList.add(An), this._queueCallback(() => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N2.trigger(this._element, mn, { relatedTarget: t3 });
        }, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        N2.on(this._element, vn, (t3) => {
          "Escape" === t3.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
        }), N2.on(window, gn, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), N2.on(this._element, bn, (t3) => {
          N2.one(this._element, _n, (e3) => {
            this._element === t3.target && this._element === e3.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
          document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N2.trigger(this._element, fn);
        });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (N2.trigger(this._element, un2).defaultPrevented)
          return;
        const t3 = this._element.scrollHeight > document.documentElement.clientHeight, e3 = this._element.style.overflowY;
        "hidden" === e3 || this._element.classList.contains(En) || (t3 || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
          this._element.classList.remove(En), this._queueCallback(() => {
            this._element.style.overflowY = e3;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      _adjustDialog() {
        const t3 = this._element.scrollHeight > document.documentElement.clientHeight, e3 = this._scrollBar.getWidth(), i3 = e3 > 0;
        if (i3 && !t3) {
          const t4 = p2() ? "paddingLeft" : "paddingRight";
          this._element.style[t4] = `${e3}px`;
        }
        if (!i3 && t3) {
          const t4 = p2() ? "paddingRight" : "paddingLeft";
          this._element.style[t4] = `${e3}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      static jQueryInterface(t3, e3) {
        return this.each(function() {
          const i3 = On.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === i3[t3])
              throw new TypeError(`No method named "${t3}"`);
            i3[t3](e3);
          }
        });
      }
    }
    N2.on(document, yn, '[data-bs-toggle="modal"]', function(t3) {
      const e3 = z2.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && t3.preventDefault(), N2.one(e3, pn, (t4) => {
        t4.defaultPrevented || N2.one(e3, fn, () => {
          a2(this) && this.focus();
        });
      });
      const i3 = z2.findOne(".modal.show");
      i3 && On.getInstance(i3).hide(), On.getOrCreateInstance(e3).toggle(this);
    }), R2(On), m2(On);
    const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, Mn = `hide${xn}`, jn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = { backdrop: true, keyboard: true, scroll: false }, Rn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class qn extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      static get Default() {
        return zn;
      }
      static get DefaultType() {
        return Rn;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(t3) {
        return this._isShown ? this.hide() : this.show(t3);
      }
      show(t3) {
        this._isShown || N2.trigger(this._element, Nn, { relatedTarget: t3 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(() => {
          this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N2.trigger(this._element, Pn, { relatedTarget: t3 });
        }, this._element, true));
      }
      hide() {
        this._isShown && (N2.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(() => {
          this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N2.trigger(this._element, Fn);
        }, this._element, true)));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const t3 = Boolean(this._config.backdrop);
        return new Ui({ className: "offcanvas-backdrop", isVisible: t3, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t3 ? () => {
          "static" !== this._config.backdrop ? this.hide() : N2.trigger(this._element, jn);
        } : null });
      }
      _initializeFocusTrap() {
        return new sn({ trapElement: this._element });
      }
      _addEventListeners() {
        N2.on(this._element, Bn, (t3) => {
          "Escape" === t3.key && (this._config.keyboard ? this.hide() : N2.trigger(this._element, jn));
        });
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = qn.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3] || t3.startsWith("_") || "constructor" === t3)
              throw new TypeError(`No method named "${t3}"`);
            e3[t3](this);
          }
        });
      }
    }
    N2.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t3) {
      const e3 = z2.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && t3.preventDefault(), l2(this))
        return;
      N2.one(e3, Fn, () => {
        a2(this) && this.focus();
      });
      const i3 = z2.findOne(In);
      i3 && i3 !== e3 && qn.getInstance(i3).hide(), qn.getOrCreateInstance(e3).toggle(this);
    }), N2.on(window, Ln, () => {
      for (const t3 of z2.find(In))
        qn.getOrCreateInstance(t3).show();
    }), N2.on(window, Hn, () => {
      for (const t3 of z2.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t3).position && qn.getOrCreateInstance(t3).hide();
    }), R2(qn), m2(qn);
    const Vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Kn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t3, e3) => {
      const i3 = t3.nodeName.toLowerCase();
      return e3.includes(i3) ? !Kn.has(i3) || Boolean(Qn.test(t3.nodeValue)) : e3.filter((t4) => t4 instanceof RegExp).some((t4) => t4.test(i3));
    }, Yn = { allowList: Vn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Un = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Gn = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class Jn extends H2 {
      constructor(t3) {
        super(), this._config = this._getConfig(t3);
      }
      static get Default() {
        return Yn;
      }
      static get DefaultType() {
        return Un;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content).map((t3) => this._resolvePossibleFunction(t3)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(t3) {
        return this._checkContent(t3), this._config.content = { ...this._config.content, ...t3 }, this;
      }
      toHtml() {
        const t3 = document.createElement("div");
        t3.innerHTML = this._maybeSanitize(this._config.template);
        for (const [e4, i4] of Object.entries(this._config.content))
          this._setContent(t3, i4, e4);
        const e3 = t3.children[0], i3 = this._resolvePossibleFunction(this._config.extraClass);
        return i3 && e3.classList.add(...i3.split(" ")), e3;
      }
      _typeCheckConfig(t3) {
        super._typeCheckConfig(t3), this._checkContent(t3.content);
      }
      _checkContent(t3) {
        for (const [e3, i3] of Object.entries(t3))
          super._typeCheckConfig({ selector: e3, entry: i3 }, Gn);
      }
      _setContent(t3, e3, i3) {
        const n3 = z2.findOne(i3, t3);
        n3 && ((e3 = this._resolvePossibleFunction(e3)) ? o2(e3) ? this._putElementInTemplate(r2(e3), n3) : this._config.html ? n3.innerHTML = this._maybeSanitize(e3) : n3.textContent = e3 : n3.remove());
      }
      _maybeSanitize(t3) {
        return this._config.sanitize ? function(t4, e3, i3) {
          if (!t4.length)
            return t4;
          if (i3 && "function" == typeof i3)
            return i3(t4);
          const n3 = new window.DOMParser().parseFromString(t4, "text/html"), s3 = [].concat(...n3.body.querySelectorAll("*"));
          for (const t5 of s3) {
            const i4 = t5.nodeName.toLowerCase();
            if (!Object.keys(e3).includes(i4)) {
              t5.remove();
              continue;
            }
            const n4 = [].concat(...t5.attributes), s4 = [].concat(e3["*"] || [], e3[i4] || []);
            for (const e4 of n4)
              Xn(e4, s4) || t5.removeAttribute(e4.nodeName);
          }
          return n3.body.innerHTML;
        }(t3, this._config.allowList, this._config.sanitizeFn) : t3;
      }
      _resolvePossibleFunction(t3) {
        return g2(t3, [this]);
      }
      _putElementInTemplate(t3, e3) {
        if (this._config.html)
          return e3.innerHTML = "", void e3.append(t3);
        e3.textContent = t3.textContent;
      }
    }
    const Zn = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = { AUTO: "auto", TOP: "top", RIGHT: p2() ? "left" : "right", BOTTOM: "bottom", LEFT: p2() ? "right" : "left" }, as = { allowList: Vn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ls = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class cs extends W2 {
      constructor(t3, e3) {
        if (void 0 === vi)
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(t3, e3), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      static get Default() {
        return as;
      }
      static get DefaultType() {
        return ls;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = true;
      }
      disable() {
        this._isEnabled = false;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout), N2.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled)
          return;
        const t3 = N2.trigger(this._element, this.constructor.eventName("show")), e3 = (c2(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t3.defaultPrevented || !e3)
          return;
        this._disposePopper();
        const i3 = this._getTipElement();
        this._element.setAttribute("aria-describedby", i3.getAttribute("id"));
        const { container: n3 } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (n3.append(i3), N2.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i3), i3.classList.add(es), "ontouchstart" in document.documentElement)
          for (const t4 of [].concat(...document.body.children))
            N2.on(t4, "mouseover", h2);
        this._queueCallback(() => {
          N2.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
        }, this.tip, this._isAnimated());
      }
      hide() {
        if (this._isShown() && !N2.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
            for (const t3 of [].concat(...document.body.children))
              N2.off(t3, "mouseover", h2);
          this._activeTrigger.click = false, this._activeTrigger[os] = false, this._activeTrigger[ss] = false, this._isHovered = null, this._queueCallback(() => {
            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N2.trigger(this._element, this.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return Boolean(this._getTitle());
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
      _createTipElement(t3) {
        const e3 = this._getTemplateFactory(t3).toHtml();
        if (!e3)
          return null;
        e3.classList.remove(ts, es), e3.classList.add(`bs-${this.constructor.NAME}-auto`);
        const i3 = ((t4) => {
          do {
            t4 += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t4));
          return t4;
        })(this.constructor.NAME).toString();
        return e3.setAttribute("id", i3), this._isAnimated() && e3.classList.add(ts), e3;
      }
      setContent(t3) {
        this._newContent = t3, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(t3) {
        return this._templateFactory ? this._templateFactory.changeContent(t3) : this._templateFactory = new Jn({ ...this._config, content: t3, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      _initializeOnDelegatedTarget(t3) {
        return this.constructor.getOrCreateInstance(t3.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ts);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(es);
      }
      _createPopper(t3) {
        const e3 = g2(this._config.placement, [this, t3, this._element]), i3 = rs[e3.toUpperCase()];
        return bi(this._element, t3, this._getPopperConfig(i3));
      }
      _getOffset() {
        const { offset: t3 } = this._config;
        return "string" == typeof t3 ? t3.split(",").map((t4) => Number.parseInt(t4, 10)) : "function" == typeof t3 ? (e3) => t3(e3, this._element) : t3;
      }
      _resolvePossibleFunction(t3) {
        return g2(t3, [this._element]);
      }
      _getPopperConfig(t3) {
        const e3 = { placement: t3, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t4) => {
          this._getTipElement().setAttribute("data-popper-placement", t4.state.placement);
        } }] };
        return { ...e3, ...g2(this._config.popperConfig, [e3]) };
      }
      _setListeners() {
        const t3 = this._config.trigger.split(" ");
        for (const e3 of t3)
          if ("click" === e3)
            N2.on(this._element, this.constructor.eventName("click"), this._config.selector, (t4) => {
              this._initializeOnDelegatedTarget(t4).toggle();
            });
          else if ("manual" !== e3) {
            const t4 = e3 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i3 = e3 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            N2.on(this._element, t4, this._config.selector, (t5) => {
              const e4 = this._initializeOnDelegatedTarget(t5);
              e4._activeTrigger["focusin" === t5.type ? os : ss] = true, e4._enter();
            }), N2.on(this._element, i3, this._config.selector, (t5) => {
              const e4 = this._initializeOnDelegatedTarget(t5);
              e4._activeTrigger["focusout" === t5.type ? os : ss] = e4._element.contains(t5.relatedTarget), e4._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, N2.on(this._element.closest(is), ns, this._hideModalHandler);
      }
      _fixTitle() {
        const t3 = this._element.getAttribute("title");
        t3 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t3), this._element.setAttribute("data-bs-original-title", t3), this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(t3, e3) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t3, e3);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
      }
      _getConfig(t3) {
        const e3 = F2.getDataAttributes(this._element);
        for (const t4 of Object.keys(e3))
          Zn.has(t4) && delete e3[t4];
        return t3 = { ...e3, ..."object" == typeof t3 && t3 ? t3 : {} }, t3 = this._mergeConfigObj(t3), t3 = this._configAfterMerge(t3), this._typeCheckConfig(t3), t3;
      }
      _configAfterMerge(t3) {
        return t3.container = false === t3.container ? document.body : r2(t3.container), "number" == typeof t3.delay && (t3.delay = { show: t3.delay, hide: t3.delay }), "number" == typeof t3.title && (t3.title = t3.title.toString()), "number" == typeof t3.content && (t3.content = t3.content.toString()), t3;
      }
      _getDelegateConfig() {
        const t3 = {};
        for (const [e3, i3] of Object.entries(this._config))
          this.constructor.Default[e3] !== i3 && (t3[e3] = i3);
        return t3.selector = false, t3.trigger = "manual", t3;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = cs.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3])
              throw new TypeError(`No method named "${t3}"`);
            e3[t3]();
          }
        });
      }
    }
    m2(cs);
    const hs = { ...cs.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, ds = { ...cs.DefaultType, content: "(null|string|element|function)" };
    class us extends cs {
      static get Default() {
        return hs;
      }
      static get DefaultType() {
        return ds;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = us.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3])
              throw new TypeError(`No method named "${t3}"`);
            e3[t3]();
          }
        });
      }
    }
    m2(us);
    const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, As = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class Es extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
      }
      static get Default() {
        return ws;
      }
      static get DefaultType() {
        return As;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const t3 of this._observableSections.values())
          this._observer.observe(t3);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(t3) {
        return t3.target = r2(t3.target) || document.body, t3.rootMargin = t3.offset ? `${t3.offset}px 0px -30%` : t3.rootMargin, "string" == typeof t3.threshold && (t3.threshold = t3.threshold.split(",").map((t4) => Number.parseFloat(t4))), t3;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (N2.off(this._config.target, ms), N2.on(this._config.target, ms, bs, (t3) => {
          const e3 = this._observableSections.get(t3.target.hash);
          if (e3) {
            t3.preventDefault();
            const i3 = this._rootElement || window, n3 = e3.offsetTop - this._element.offsetTop;
            if (i3.scrollTo)
              return void i3.scrollTo({ top: n3, behavior: "smooth" });
            i3.scrollTop = n3;
          }
        }));
      }
      _getNewObserver() {
        const t3 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
        return new IntersectionObserver((t4) => this._observerCallback(t4), t3);
      }
      _observerCallback(t3) {
        const e3 = (t4) => this._targetLinks.get(`#${t4.target.id}`), i3 = (t4) => {
          this._previousScrollData.visibleEntryTop = t4.target.offsetTop, this._process(e3(t4));
        }, n3 = (this._rootElement || document.documentElement).scrollTop, s3 = n3 >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = n3;
        for (const o3 of t3) {
          if (!o3.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(e3(o3));
            continue;
          }
          const t4 = o3.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (s3 && t4) {
            if (i3(o3), !n3)
              return;
          } else
            s3 || t4 || i3(o3);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const t3 = z2.find(bs, this._config.target);
        for (const e3 of t3) {
          if (!e3.hash || l2(e3))
            continue;
          const t4 = z2.findOne(decodeURI(e3.hash), this._element);
          a2(t4) && (this._targetLinks.set(decodeURI(e3.hash), e3), this._observableSections.set(e3.hash, t4));
        }
      }
      _process(t3) {
        this._activeTarget !== t3 && (this._clearActiveClass(this._config.target), this._activeTarget = t3, t3.classList.add(_s), this._activateParents(t3), N2.trigger(this._element, ps, { relatedTarget: t3 }));
      }
      _activateParents(t3) {
        if (t3.classList.contains("dropdown-item"))
          z2.findOne(".dropdown-toggle", t3.closest(".dropdown")).classList.add(_s);
        else
          for (const e3 of z2.parents(t3, ".nav, .list-group"))
            for (const t4 of z2.prev(e3, ys))
              t4.classList.add(_s);
      }
      _clearActiveClass(t3) {
        t3.classList.remove(_s);
        const e3 = z2.find(`${bs}.${_s}`, t3);
        for (const t4 of e3)
          t4.classList.remove(_s);
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = Es.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3] || t3.startsWith("_") || "constructor" === t3)
              throw new TypeError(`No method named "${t3}"`);
            e3[t3]();
          }
        });
      }
    }
    N2.on(window, gs, () => {
      for (const t3 of z2.find('[data-bs-spy="scroll"]'))
        Es.getOrCreateInstance(t3);
    }), m2(Es);
    const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", Ms = "Home", js = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W2 {
      constructor(t3) {
        super(t3), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N2.on(this._element, Ss, (t4) => this._keydown(t4)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const t3 = this._element;
        if (this._elemIsActive(t3))
          return;
        const e3 = this._getActiveElem(), i3 = e3 ? N2.trigger(e3, Cs, { relatedTarget: t3 }) : null;
        N2.trigger(t3, xs, { relatedTarget: e3 }).defaultPrevented || i3 && i3.defaultPrevented || (this._deactivate(e3, t3), this._activate(t3, e3));
      }
      _activate(t3, e3) {
        t3 && (t3.classList.add(Fs), this._activate(z2.getElementFromSelector(t3)), this._queueCallback(() => {
          "tab" === t3.getAttribute("role") ? (t3.removeAttribute("tabindex"), t3.setAttribute("aria-selected", true), this._toggleDropDown(t3, true), N2.trigger(t3, ks, { relatedTarget: e3 })) : t3.classList.add(Ws);
        }, t3, t3.classList.contains(Hs)));
      }
      _deactivate(t3, e3) {
        t3 && (t3.classList.remove(Fs), t3.blur(), this._deactivate(z2.getElementFromSelector(t3)), this._queueCallback(() => {
          "tab" === t3.getAttribute("role") ? (t3.setAttribute("aria-selected", false), t3.setAttribute("tabindex", "-1"), this._toggleDropDown(t3, false), N2.trigger(t3, Os, { relatedTarget: e3 })) : t3.classList.remove(Ws);
        }, t3, t3.classList.contains(Hs)));
      }
      _keydown(t3) {
        if (![$s, Is, Ns, Ps, Ms, js].includes(t3.key))
          return;
        t3.stopPropagation(), t3.preventDefault();
        const e3 = this._getChildren().filter((t4) => !l2(t4));
        let i3;
        if ([Ms, js].includes(t3.key))
          i3 = e3[t3.key === Ms ? 0 : e3.length - 1];
        else {
          const n3 = [Is, Ps].includes(t3.key);
          i3 = b2(e3, t3.target, n3, true);
        }
        i3 && (i3.focus({ preventScroll: true }), Ks.getOrCreateInstance(i3).show());
      }
      _getChildren() {
        return z2.find(qs, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((t3) => this._elemIsActive(t3)) || null;
      }
      _setInitialAttributes(t3, e3) {
        this._setAttributeIfNotExists(t3, "role", "tablist");
        for (const t4 of e3)
          this._setInitialAttributesOnChild(t4);
      }
      _setInitialAttributesOnChild(t3) {
        t3 = this._getInnerElement(t3);
        const e3 = this._elemIsActive(t3), i3 = this._getOuterElement(t3);
        t3.setAttribute("aria-selected", e3), i3 !== t3 && this._setAttributeIfNotExists(i3, "role", "presentation"), e3 || t3.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t3, "role", "tab"), this._setInitialAttributesOnTargetPanel(t3);
      }
      _setInitialAttributesOnTargetPanel(t3) {
        const e3 = z2.getElementFromSelector(t3);
        e3 && (this._setAttributeIfNotExists(e3, "role", "tabpanel"), t3.id && this._setAttributeIfNotExists(e3, "aria-labelledby", `${t3.id}`));
      }
      _toggleDropDown(t3, e3) {
        const i3 = this._getOuterElement(t3);
        if (!i3.classList.contains("dropdown"))
          return;
        const n3 = (t4, n4) => {
          const s3 = z2.findOne(t4, i3);
          s3 && s3.classList.toggle(n4, e3);
        };
        n3(Bs, Fs), n3(".dropdown-menu", Ws), i3.setAttribute("aria-expanded", e3);
      }
      _setAttributeIfNotExists(t3, e3, i3) {
        t3.hasAttribute(e3) || t3.setAttribute(e3, i3);
      }
      _elemIsActive(t3) {
        return t3.classList.contains(Fs);
      }
      _getInnerElement(t3) {
        return t3.matches(qs) ? t3 : z2.findOne(qs, t3);
      }
      _getOuterElement(t3) {
        return t3.closest(".nav-item, .list-group-item") || t3;
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = Ks.getOrCreateInstance(this);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3] || t3.startsWith("_") || "constructor" === t3)
              throw new TypeError(`No method named "${t3}"`);
            e3[t3]();
          }
        });
      }
    }
    N2.on(document, Ls, Rs, function(t3) {
      ["A", "AREA"].includes(this.tagName) && t3.preventDefault(), l2(this) || Ks.getOrCreateInstance(this).show();
    }), N2.on(window, Ds, () => {
      for (const t3 of z2.find(Vs))
        Ks.getOrCreateInstance(t3);
    }), m2(Ks);
    const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = { animation: "boolean", autohide: "boolean", delay: "number" }, ro = { animation: true, autohide: true, delay: 5e3 };
    class ao extends W2 {
      constructor(t3, e3) {
        super(t3, e3), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
      }
      static get Default() {
        return ro;
      }
      static get DefaultType() {
        return oo;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        N2.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d2(this._element), this._element.classList.add(no, so), this._queueCallback(() => {
          this._element.classList.remove(so), N2.trigger(this._element, eo), this._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
      hide() {
        this.isShown() && (N2.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(() => {
          this._element.classList.add(io), this._element.classList.remove(so, no), N2.trigger(this._element, Zs);
        }, this._element, this._config.animation)));
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(no);
      }
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(t3, e3) {
        switch (t3.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e3;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e3;
        }
        if (e3)
          return void this._clearTimeout();
        const i3 = t3.relatedTarget;
        this._element === i3 || this._element.contains(i3) || this._maybeScheduleHide();
      }
      _setListeners() {
        N2.on(this._element, Xs, (t3) => this._onInteraction(t3, true)), N2.on(this._element, Ys, (t3) => this._onInteraction(t3, false)), N2.on(this._element, Us, (t3) => this._onInteraction(t3, true)), N2.on(this._element, Gs, (t3) => this._onInteraction(t3, false));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      static jQueryInterface(t3) {
        return this.each(function() {
          const e3 = ao.getOrCreateInstance(this, t3);
          if ("string" == typeof t3) {
            if (void 0 === e3[t3])
              throw new TypeError(`No method named "${t3}"`);
            e3[t3](this);
          }
        });
      }
    }
    return R2(ao), m2(ao), { Alert: Q2, Button: Y, Carousel: xt, Collapse: Bt, Dropdown: qi, Modal: On, Offcanvas: qn, Popover: us, ScrollSpy: Es, Tab: Ks, Toast: ao, Tooltip: cs };
  });
})(bootstrap_bundle_min);
function getProductCategoryName(searchCategory, totalCategoriesArray) {
  if (!totalCategoriesArray || !searchCategory)
    return "";
  return (totalCategoriesArray == null ? void 0 : totalCategoriesArray.find((category) => category.includes(searchCategory))) || "";
}
function calculateExtraCharge(weight, extraWeightLimit, price, extraChargeUnitWeight, onHalf = false) {
  if (weight > extraWeightLimit) {
    const extraWeight = (weight - extraWeightLimit) * (onHalf ? 2 : 1) * extraChargeUnitWeight;
    return Math.ceil(extraWeight) * parseFloat(price);
  }
  return 0;
}
function calculateLowFbaFee(productTier, productData, dimensionalWeight, fulfilmentFeeDistribution, fulfilmentFee, outOfBoundFBAFee, marketplace) {
  var _a, _b;
  const isApparelProducts = fulfilmentFeeDistribution["apparelProductsCategory"].includes(productData.productCategory);
  let feesValues = void 0;
  if (marketplace === ukMarketPlace)
    feesValues = (_a = fulfilmentFeeDistribution["lowFBAFeeHashForUk"]) == null ? void 0 : _a[productTier];
  else if (marketplace === usMarketPlace)
    feesValues = (_b = fulfilmentFeeDistribution[isApparelProducts ? "lowFBAFeesApperal" : "lowFBAFeesItemsHash"]) == null ? void 0 : _b[productTier];
  if (!feesValues)
    return fulfilmentFee - fulfilmentFeeDistribution[outOfBoundFBAFee];
  let lowPriceFBA = 0;
  let shippingWeight = marketplace === ukMarketPlace ? productData.unitWeight : parseFloat(Math.max(productData.unitWeight, dimensionalWeight).toFixed(2));
  const weight = ["Small standard", "Special oversize"].includes(productTier) ? productData.unitWeight : shippingWeight;
  lowPriceFBA = parseFloat(calculationAccordingToTheTier(lowPriceFBA, feesValues, weight, productTier, marketplace === ukMarketPlace ? poundsToKg : 1).toFixed(2));
  return lowPriceFBA;
}
function calculationAccordingToTheTier(fulfilmentFees, feesValues, shippingWeight, productTier, extraChargeUnitWeight = 1) {
  if (productTier.includes("oversize")) {
    let [lWeightLimit, uWeightLimit, basicFulfilment, extraPrice, extraWeightLimit] = feesValues[0].match(valueFromStringRegEx);
    fulfilmentFees = parseFloat(basicFulfilment) + calculateExtraCharge(shippingWeight, extraWeightLimit, extraPrice, extraChargeUnitWeight);
    return fulfilmentFees;
  }
  for (const feesValue of feesValues) {
    let [lWeightLimit, uWeightLimit, basicFulfilment, extraPrice] = feesValue.match(valueFromStringRegEx);
    if (shippingWeight > parseFloat(lWeightLimit) && shippingWeight <= parseFloat(uWeightLimit)) {
      fulfilmentFees = parseFloat(basicFulfilment);
      if (parseFloat(extraPrice) > 0)
        fulfilmentFees += calculateExtraCharge(shippingWeight, lWeightLimit, extraPrice, extraChargeUnitWeight, true);
      break;
    }
  }
  return fulfilmentFees;
}
function calculateStorageFee(itemVolume, productTier, storageFeeRateRanges) {
  let storageFee = 0;
  let cubicFeet = itemVolume / 1728;
  const currentDate = /* @__PURE__ */ new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const isOverSize = productTier.toLowerCase().includes("oversize");
  const storageFeeKey = isOverSize ? "oversize" : "standard";
  storageFee = currentMonth >= 0 && currentMonth <= 9 ? cubicFeet * storageFeeRateRanges[storageFeeKey]["jan_sep"] : cubicFeet * storageFeeRateRanges[storageFeeKey]["oct_dec"];
  return parseFloat(storageFee.toFixed(2));
}
function calculateReferralFee(productCategory, salePrice, referralPercentageHash, nonPortionCategoriesList, portionCategoriesList, currencySymbol) {
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
    if (typeof percentageOfCategory === "object") {
      let totalKeyPairs = Object.keys(percentageOfCategory);
      if (totalKeyPairs.length === 2) {
        let salePriceCheckValue = parseFloat(totalKeyPairs[0].match(valueFromStringRegEx));
        if (isPortion)
          [referralFees, referralFeePercentageText, referralFeePercentage] = referralFeeForPortions(percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol);
        else if (isNonPortion)
          [referralFees, referralFeePercentageText, referralFeePercentage] = referralFeeForNonPortions(percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol);
      } else if (totalKeyPairs.length === 4) {
        totalKeyPairs.sort((a2, b2) => percentageOfCategory[b2] - percentageOfCategory[a2]);
        [referralFees, referralFeePercentageText, referralFeePercentage] = referralFeeForFineArt(percentageOfCategory, salePrice, totalKeyPairs, currencySymbol);
      }
    } else {
      referralFees = percentageOfCategory * 0.01 * salePrice;
      referralFeePercentageText = `Referral: ${percentageOfCategory.toFixed(2)}%`;
      referralFeePercentage = percentageOfCategory;
    }
  }
  if (referralFees === 0 && referralPercentageHash["defaultPercentageForReferral"] && salePrice) {
    referralFees = referralPercentageHash["defaultPercentageForReferral"] * 0.01 * salePrice;
    referralFeePercentageText = `Referral: ${referralPercentageHash["defaultPercentageForReferral"].toFixed(2)}%`;
    referralFeePercentage = referralPercentageHash["defaultPercentageForReferral"];
  } else if (referralFees === 0 && salePrice) {
    referralFees = 15 * 0.01 * salePrice;
    referralFeePercentageText = "Referral: 15.00%";
    referralFeePercentage = 15;
  }
  referralFees = parseFloat(referralFees.toFixed(2));
  return [referralFees, referralFeePercentageText, referralFeePercentage];
}
function referralFeeForPortions(percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol) {
  let msg = `Variable Referral Fee
Sale Price up to ${currencySymbol}${salePriceCheckValue}: ${percentageOfCategory[totalKeyPairs[0]].toFixed(2)}%`;
  let fees = 0;
  let percentage = 0;
  if (salePrice <= salePriceCheckValue) {
    fees = percentageOfCategory[totalKeyPairs[0]] * 0.01 * salePrice;
    percentage = percentageOfCategory[totalKeyPairs[0]];
  } else {
    fees += percentageOfCategory[totalKeyPairs[0]] * 0.01 * salePriceCheckValue;
    fees += percentageOfCategory[totalKeyPairs[1]] * 0.01 * (salePrice - salePriceCheckValue);
    msg += `
Sale Price above ${currencySymbol}${salePriceCheckValue}: ${percentageOfCategory[totalKeyPairs[1]].toFixed(2)}%`;
    percentage = totalKeyPairs[1];
  }
  return [fees, msg, percentage];
}
function referralFeeForNonPortions(percentageOfCategory, salePrice, salePriceCheckValue, totalKeyPairs, currencySymbol) {
  let msg = `Variable Referral Fee
Sale Price up to ${currencySymbol}${salePriceCheckValue}: `;
  let keyPair = salePrice <= salePriceCheckValue ? 0 : 1;
  let fees = percentageOfCategory[totalKeyPairs[keyPair]] * 0.01 * salePrice;
  msg += !keyPair ? `${percentageOfCategory[totalKeyPairs[keyPair]].toFixed(2)}%` : `${percentageOfCategory[totalKeyPairs[0]].toFixed(2)}%
Sale Price above ${currencySymbol}${salePriceCheckValue}: ${percentageOfCategory[totalKeyPairs[keyPair]].toFixed(2)}%`;
  return [fees, msg, percentageOfCategory[totalKeyPairs[keyPair]]];
}
function referralFeeForFineArt(percentageOfCategory, salePrice, totalKeyPairs, currencySymbol) {
  let msg = "Variable Referral Fee";
  let fees = 0;
  let oldConditions = [];
  let percentage = 0;
  for (const keyPair of totalKeyPairs) {
    let condition = keyPair.match(valueFromStringRegEx).map((value) => parseFloat(value));
    if (salePrice > condition[0] && condition[1] ? salePrice <= condition[1] : true) {
      let i2 = 0;
      let oldValuesSum = 0;
      for (; i2 < oldConditions.length; i2++) {
        fees += percentageOfCategory[totalKeyPairs[i2]] * 0.01 * (oldConditions[i2] - oldValuesSum);
        msg += `
Sale Price up to ${currencySymbol + oldConditions[i2]}: ${percentageOfCategory[totalKeyPairs[i2]].toFixed(2)}%`;
        oldValuesSum += oldConditions[i2];
      }
      fees += percentageOfCategory[totalKeyPairs[i2]] * 0.01 * (salePrice - condition[0]);
      msg += `
Sale Price above ${currencySymbol + condition[0]}: ${percentageOfCategory[totalKeyPairs[i2]].toFixed(2)}%`;
      percentage = totalKeyPairs[i2];
      break;
    }
    oldConditions.push(condition[1]);
  }
  return [fees, msg, percentage];
}
const calculateTotalFees = (profitCalculatorData, productFees) => {
  var _a, _b;
  if (profitCalculatorData.fulfilmentType)
    return parseFloat((((_a = productFees.referralFees) == null ? void 0 : _a[0]) + productFees.closingFee).toFixed(2));
  return parseFloat(
    profitCalculatorData.fulfilmentFee + productFees.storageFee * profitCalculatorData.storageMonth + ((_b = productFees == null ? void 0 : productFees.referralFees) == null ? void 0 : _b[0]) + (profitCalculatorData == null ? void 0 : profitCalculatorData.prepFee) + productFees.closingFee
  ).toFixed(2);
};
function calculateProductTierUK(productData, dimensionalWeight) {
  let productTier = "N/A";
  const productTierWeight = productData.unitWeight;
  let [shortestSide, medianSide, longestSide] = [Math.floor(productData.height * 100) / 100, Math.floor(productData.width * 100) / 100, Math.floor(productData.length * 100) / 100];
  let lengthPlusGirth = longestSide + (shortestSide + medianSide) * 2;
  if (productTierWeight <= 0.1763 && longestSide <= 7.87 && medianSide <= 5.9 && shortestSide <= 0.3937)
    productTier = "Small Envelope";
  else if (productTierWeight <= 1.014 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842)
    productTier = "Standard Envelope";
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 1.5748)
    productTier = "Large Envelope";
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 2.3622)
    productTier = "Extra Large Envelope";
  else if (productTierWeight <= 8.597 && dimensionalWeight <= 8.597 && longestSide < 13.7795 && medianSide < 9.8425 && shortestSide < 4.7244)
    productTier = "Small Parcel";
  else if (productTierWeight <= 26.23 && dimensionalWeight <= 26.23 && longestSide <= 17.71 && medianSide <= 13.38 && shortestSide <= 10.236)
    productTier = "Standard Parcel";
  else if (productTierWeight < 3.88 && dimensionalWeight < 56.92 && longestSide <= 24.01 && medianSide <= 18.11 && shortestSide <= 18.11)
    productTier = "Small Oversize";
  else if (productTierWeight < 65.6095 && dimensionalWeight < 190.4761 && longestSide <= 47.244 && medianSide <= 23.622 && shortestSide <= 23.622)
    productTier = "Standard Oversize";
  else if (productTierWeight < 69.4456 && dimensionalWeight > 238.099 && longestSide > 47.244 && longestSide < 68.8976)
    productTier = "Large Oversize";
  else if (productTierWeight > 69.4456 || lengthPlusGirth > 141.732283 || longestSide > 68.8976377)
    productTier = "Special Oversize";
  else
    productTier = "Special Oversize";
  return productTier;
}
function calculateProductTierForLowFbaUK(productData) {
  let productTier = "N/A";
  let productTierWeight = productData.unitWeight;
  let [shortestSide, medianSide, longestSide] = [parseFloat(productData.height.toFixed(2)), parseFloat(productData.width.toFixed(2)), parseFloat(productData.length.toFixed(2))];
  if (productTierWeight <= 0.17637 && longestSide <= 7.87 && medianSide <= 5.9 && shortestSide <= 0.3937)
    productTier = "Small Envelope";
  else if (productTierWeight <= 0.1322 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842)
    productTier = "Standard Envelope";
  else if (productTierWeight <= 0.4629 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842)
    productTier = "Standard Envelope";
  else if (productTierWeight <= 1.0141 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 0.9842)
    productTier = "Standard Envelope";
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 1.5748)
    productTier = "Large Envelope";
  else if (productTierWeight <= 2.1164 && longestSide <= 12.9939 && medianSide <= 9.055 && shortestSide <= 2.3622)
    productTier = "Extra Large Envelope";
  else if (productTierWeight <= 0.3306 && longestSide <= 13.7795 && medianSide <= 9.8425 && shortestSide <= 4.7244)
    productTier = "Small Parcel";
  else if (productTierWeight <= 0.8818 && longestSide <= 13.7795 && medianSide <= 9.8425 && shortestSide <= 4.7244)
    productTier = "Small Parcel";
  return productTier;
}
function calculateFulfilmentFeeUK(unitWeight, dimensionalWeight, productTier, fulfilmentFeeHashForUk) {
  const unitWeightTiers = ["Small Envelope", "Standard Envelope", "Large Envelope", "Extra Large Envelope", "Special Oversize"];
  let fulfilmentFees = 0;
  let shippingWeight = Math.max(unitWeight, dimensionalWeight);
  let weight = unitWeightTiers.includes(productTier) ? unitWeight : shippingWeight;
  let feesValues = fulfilmentFeeHashForUk[productTier];
  weight = Math.floor(weight * 100) / 100;
  if (productTier.includes("Oversize")) {
    for (const feesValue of feesValues) {
      let values = feesValue.match(valueFromStringRegEx);
      if (weight > parseFloat(values[0]) && weight <= parseFloat(values[1]))
        fulfilmentFees = parseFloat(values[2]);
      else if (parseFloat(values[4]) !== 0 && fulfilmentFees === 0)
        fulfilmentFees = calculateExtraCharge(weight, values[4], values[3], poundsToKg) + parseFloat(values[2]);
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
function calculateClosingFeeUK(productCategory, fulfilmentFeeDistribution) {
  var _a, _b;
  let fees = 0;
  let closingFeeProductCategory = fulfilmentFeeDistribution["closingFeeProductCategory"];
  let closingFeeValue = fulfilmentFeeDistribution["variableClosingFeeUK"];
  let closingFeeValueForBooks = fulfilmentFeeDistribution["variableClosingFeeForBookInUK"];
  let closingFeeHashForBooks = fulfilmentFeeDistribution["varibaleClosingFeeHashForBooksInUK"];
  if (productCategory) {
    let ifFoundFees = 0;
    for (let j2 = 0; j2 < closingFeeHashForBooks.length; j2++) {
      if (((_a = closingFeeHashForBooks[j2]) == null ? void 0 : _a.match(productCategory)) || (productCategory == null ? void 0 : productCategory.match(closingFeeHashForBooks[j2])))
        ifFoundFees = closingFeeValueForBooks;
      if (ifFoundFees)
        break;
    }
    for (let i2 = 0; i2 < closingFeeProductCategory.length; i2++) {
      if (((_b = closingFeeProductCategory[i2]) == null ? void 0 : _b.match(productCategory)) || (productCategory == null ? void 0 : productCategory.match(closingFeeProductCategory[i2]))) {
        fees = closingFeeValue;
        if (ifFoundFees !== 0)
          fees = ifFoundFees;
        if (fees)
          break;
      }
    }
  }
  return fees;
}
function calculateMaxCostUK(profitCalculatorData) {
  let minROI = 0;
  let minProfit = 0;
  let totalFees = profitCalculatorData.totalFee;
  switch (parseInt(profitCalculatorData.vatSelect)) {
    case 2:
      minROI = ((profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax))) * 0.2 + (profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax)))) / (1 + profitCalculatorData.minROI / 100 + profitCalculatorData.vatTax / 100 * (profitCalculatorData.minROI / 100));
      minProfit = (profitCalculatorData.salePrice - totalFees - profitCalculatorData.salePrice * (profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax)) - profitCalculatorData.minProfit) * (1 + profitCalculatorData.vatTax / 100);
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
function calculateProductTierUS(productData, dimensionalWeight) {
  let productTier = "N/A";
  let productTierWeight = Math.max(productData.unitWeight, dimensionalWeight);
  let [shortestSide, medianSide, longestSide] = [Math.floor(productData.height * 100) / 100, Math.floor(productData.width * 100) / 100, Math.floor(productData.length * 100) / 100];
  let lengthPlusGirth = longestSide + (shortestSide + medianSide) * 2;
  if (productData.unitWeight <= 1 && longestSide <= 15 && medianSide <= 12 && shortestSide <= 0.75)
    productTier = "Small standard";
  else if (productTierWeight <= 20 && longestSide <= 18 && medianSide <= 14 && shortestSide <= 8)
    productTier = "Large standard";
  else if (productTierWeight <= 70 && longestSide <= 60 && medianSide <= 30 && lengthPlusGirth <= 130)
    productTier = "Small oversize";
  else if (productTierWeight <= 150 && longestSide <= 108 && lengthPlusGirth <= 130)
    productTier = "Medium oversize";
  else if (productTierWeight <= 150 && longestSide <= 108 && lengthPlusGirth > 130 && lengthPlusGirth <= 165)
    productTier = "Large oversize";
  else if (productData.unitWeight > 150 || productTierWeight > 150 || longestSide > 108 || lengthPlusGirth > 165)
    productTier = "Special oversize";
  return productTier;
}
function calculateFulfilmentFeeUS(productTier, productData, dimensionalWeight, fulfilmentFeeDistribution) {
  let fulfilmentFees = 0;
  let feesValues = 0;
  let shippingWeight = parseFloat(Math.max(productData.unitWeight, dimensionalWeight).toFixed(2));
  const weight = ["Small standard", "Special oversize"].includes(productTier) ? productData.unitWeight : shippingWeight;
  if (["Small standard", "Large standard"].includes(productTier)) {
    const isApparelProducts = fulfilmentFeeDistribution["apparelProductsCategory"].includes(productData.productCategory);
    feesValues = fulfilmentFeeDistribution[isApparelProducts ? "apperalProducts" : "myProducts"][productTier];
  } else if (productTier.includes("oversize"))
    feesValues = fulfilmentFeeDistribution["overSizedProduct"][productTier];
  fulfilmentFees = parseFloat(calculationAccordingToTheTier(fulfilmentFees, feesValues, weight, productTier).toFixed(2));
  return fulfilmentFees;
}
function calculateClosingFeeUS(productCategory, fulfilmentFeeDistribution) {
  var _a;
  let fees = 0;
  let closingFeeProductCategory = fulfilmentFeeDistribution["closingFeeProductCategory"];
  let closingFeeValue = fulfilmentFeeDistribution["variableClosingFeeUS"];
  if (productCategory) {
    for (let i2 = 0; i2 < closingFeeProductCategory.length; i2++) {
      if (((_a = closingFeeProductCategory[i2]) == null ? void 0 : _a.match(productCategory)) || (productCategory == null ? void 0 : productCategory.match(closingFeeProductCategory[i2])))
        fees = closingFeeValue;
      if (fees)
        break;
    }
  }
  return fees;
}
function calculateMaxCostUS(profitCalculatorData) {
  const totalFee = profitCalculatorData.totalFee;
  let minROi = (profitCalculatorData.salePrice - totalFee) / (1 + profitCalculatorData.minROI / 100);
  let minProfit = profitCalculatorData.salePrice - totalFee - profitCalculatorData.minProfit;
  return Math.min(minROi, minProfit).toFixed(2);
}
async function getOffersFromDetailPage(domain, asinElement, detailPageOffersXpath, marketplace) {
  let pricesAndFulfilmentChannel = [];
  const currentMarketPlaceId = marketplace === ukMarketPlace ? ukMarketPlaceId : usMarketPlaceId;
  try {
    for (let i2 = 1; i2 <= 2; i2++) {
      const url = getOffersURL(domain, asinElement, i2);
      let offersContainer = await getOffersFromBackground(url, detailPageOffersXpath);
      if ((offersContainer == null ? void 0 : offersContainer.snapshotLength) > 0) {
        for (let j2 = 0; j2 < offersContainer.snapshotLength; j2++) {
          let snapshotData = offersContainer.snapshotItem(j2);
          pricesAndFulfilmentChannel.push(await getOfferValuesByXPaths(snapshotData, detailPageOffersXpath, offersXPathsKeys, domain, currentMarketPlaceId));
        }
      } else
        break;
    }
    pricesAndFulfilmentChannel = await buyBoxFbaOffer(detailPageOffersXpath, pricesAndFulfilmentChannel, domain, currentMarketPlaceId);
    return pricesAndFulfilmentChannel;
  } catch (error) {
    console.log("Error in detail page offers: ", error);
  }
}
async function getOffersFromBackground(url, detailPageOffersXpath) {
  let detailPageOffersResponse = await sendMessageForOffersAndGoogleShopping(url, true);
  const parser = new DOMParser();
  const offersDocument = parser.parseFromString(detailPageOffersResponse, "text/html");
  for (const xPath of detailPageOffersXpath["offersXpath"]) {
    let detailPageOffersData = offersDocument.evaluate(xPath, offersDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if ((detailPageOffersData == null ? void 0 : detailPageOffersData.snapshotLength) > 0)
      return detailPageOffersData;
  }
  return null;
}
async function getSellerIdFromOffer(url, domain, currentMarketPlaceId) {
  try {
    const urlObject = new URL(url);
    const queryParams = urlObject.searchParams;
    let [sellerId, nodeId] = queryParams.getAll("seller", "node");
    if (sellerId)
      return `https://www.amazon.${domain}/s?i=merchant-items&me=${sellerId}&marketplaceID=${currentMarketPlaceId}`;
    else if (nodeId)
      return `https://www.amazon.${domain}/Warehouse-Deals/b?ie=UTF8&node=${nodeId}`;
    else
      return "";
  } catch (error) {
    return "";
  }
}
async function buyBoxFbaOffer(detailPageOffersXpath, pricesAndFulfilmentChannel, domain, currentMarketPlaceId) {
  let snapshotData;
  for (const xPath of detailPageOffersXpath["buyBoxOffer"])
    if (!snapshotData && xPath !== void 0)
      snapshotData = getElementByXpath(xPath).snapshotItem(0);
  if (snapshotData)
    pricesAndFulfilmentChannel == null ? void 0 : pricesAndFulfilmentChannel.push(await getOfferValuesByXPaths(snapshotData, detailPageOffersXpath, buyBoxOffersXPathKeys, domain, currentMarketPlaceId, true));
  return pricesAndFulfilmentChannel;
}
const getOffersURL = (domain, asinElement, index) => `https://www.amazon.${domain}/gp/product/ajax/ref=${index === 1 ? "dp_aod_ALL_mbc" : `aod_page_${index}`}?asin=${asinElement}&m=&qid=&smid=&sourcecustomerorglistid=&sourcecustomerorglistitemid=&sr=&pc=dp${index === 1 ? "" : `&isonlyrenderofferlist=true&pageno=${index}`}&experienceId=aodAjaxMain`;
const getOfferValuesByXPaths = async (snapshotData, detailPageOffersXpath, xpathKeys, domain, currentMarketPlaceId, offersCheckForAWZ = false) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let salePrice, fulfilmentType, sellerListPageUrl;
  for (let k2 = 0; k2 < detailPageOffersXpath["offersPathMaxCount"]; k2++) {
    if (!salePrice && detailPageOffersXpath[xpathKeys.price][k2] !== void 0)
      salePrice = parseFloat((_c = (_b = (_a = snapshotData.querySelectorAll(detailPageOffersXpath[xpathKeys.price][k2])[0]) == null ? void 0 : _a.innerHTML) == null ? void 0 : _b.replace(/,/g, "")) == null ? void 0 : _c.match(valueFromStringRegEx)) || 0;
    if (!fulfilmentType && detailPageOffersXpath[xpathKeys.fulfilmentType][k2] !== void 0)
      fulfilmentType = offersCheckForAWZ === true ? "AMZ" : (((_g = (_f = (_e = (_d = snapshotData.querySelector(detailPageOffersXpath[xpathKeys.fulfilmentType][k2])) == null ? void 0 : _d.innerHTML) == null ? void 0 : _e.trim()) == null ? void 0 : _f.toLowerCase()) == null ? void 0 : _g.includes("amazon")) ? "FBA" : "FBM") || null;
    if (!sellerListPageUrl && detailPageOffersXpath[xpathKeys.sellerId][k2] !== void 0)
      sellerListPageUrl = await getSellerIdFromOffer((_h = snapshotData.querySelector(detailPageOffersXpath[xpathKeys.sellerId][k2])) == null ? void 0 : _h.href, domain, currentMarketPlaceId) || null;
  }
  return { salePrice, fulfilmentType, sellerIdLink: sellerListPageUrl };
};
const getOfferAndGoogleShoppingReferralAndFBA = async (offersArray, profitCalculatorData, productFees, marketplace = null, productCategory = null, offersCheck = true) => {
  const offersData = [];
  if (!offersArray)
    return [];
  for (const offer of offersArray) {
    let offerReferral, offerFulfilment;
    if (productCategory != null) {
      offerReferral = await getReferralFee(offer.salePrice, productCategory, marketplace, "");
      offerFulfilment = getAppliedFulfilmentFee(marketplace, offer.salePrice, productFees);
      offerReferral.pop();
    } else {
      offerReferral = offer == null ? void 0 : offer.offerReferral;
      offerFulfilment = offer == null ? void 0 : offer.offerFulfilment;
    }
    const totalFee = calculateTotalFees({ ...profitCalculatorData, salePrice: offer == null ? void 0 : offer.salePrice, fulfilmentFee: offerFulfilment }, { ...productFees, referralFees: offerReferral });
    const { profit, ROI: ROI2 } = offersCheck ? calculateProfitAndRoi({ ...profitCalculatorData, totalFee, fulfilmentFee: offerFulfilment, salePrice: offer == null ? void 0 : offer.salePrice }, marketplace) : calculateProfitAndRoi({ ...profitCalculatorData, costPrice: offer == null ? void 0 : offer.salePrice }, marketplace);
    offersData.push({ ...offer, offerReferral, offerFulfilment, totalFee, profit, ROI: ROI2 });
  }
  return offersData;
};
const calculateProfitValues = async (data, oldProfitCalculatorData, marketplace, currencySymbol, productData, productFees, oldOffersData, oldGoogleShoppingData) => {
  const newFees = productFees;
  let newOffersData = oldOffersData;
  let newGoogleShoppings = oldGoogleShoppingData;
  let newData = { ...oldProfitCalculatorData, ...data };
  Object.keys(newData).map((key) => newData[key] = +newData[key]);
  if ((data == null ? void 0 : data.isFeeVatApplied) != void 0 || (data == null ? void 0 : data.vatSelect) || (data == null ? void 0 : data.taxValue) != void 0)
    data["totalFee"] = newData == null ? void 0 : newData.totalFee;
  else if ((data == null ? void 0 : data.salePrice) != void 0) {
    newFees["referralFees"] = await getReferralFee(newData == null ? void 0 : newData.salePrice, productData == null ? void 0 : productData.productCategory, marketplace, currencySymbol);
    newData["fulfilmentFee"] = getAppliedFulfilmentFee(marketplace, newData == null ? void 0 : newData.salePrice, newFees);
    data["fulfilmentFee"] = newData["fulfilmentFee"];
    data["totalFee"] = calculateTotalFees(newData, newFees);
  } else if ((data == null ? void 0 : data.costPrice) !== void 0)
    data["totalFee"] = newData == null ? void 0 : newData.totalFee;
  else if ((data == null ? void 0 : data.prepFee) != void 0 || (data == null ? void 0 : data.fulfilmentType) !== void 0 || (data == null ? void 0 : data.storageMonth))
    data["totalFee"] = calculateTotalFees(newData, newFees);
  else if ((data == null ? void 0 : data.minROI) || (data == null ? void 0 : data.minProfit)) {
    data["maxCost"] = marketplace === usMarketPlace ? calculateMaxCostUS(newData) : calculateMaxCostUK(newData);
    await chrome.storage.local.set({ min_roi_value: data == null ? void 0 : data.minROI, min_Profit_value: data == null ? void 0 : data.minProfit });
  }
  if ((data == null ? void 0 : data.totalFee) != void 0) {
    newData.totalFee = +data["totalFee"];
    if ((data == null ? void 0 : data.costPrice) === void 0)
      data["maxCost"] = marketplace === usMarketPlace ? calculateMaxCostUS(newData) : calculateMaxCostUK(newData);
    data = { ...data, ...calculateProfitAndRoi(newData, marketplace) };
    data["profitMargin"] = calculateProfitMargin(data.profit, data.salePrice ?? (oldProfitCalculatorData == null ? void 0 : oldProfitCalculatorData.salePrice));
    let vatForBreak = marketplace === usMarketPlace ? 0 : newData["vatSelect"];
    if (!newData.isFeeVatApplied && newData["vatSelect"] === 1)
      vatForBreak = 0;
    const totalFeeForBreak = +parseFloat(newData.totalFee - newFees.referralFees[0] - newData.fulfilmentFee).toFixed(2);
    if (data.salePrice === void 0)
      data["breakEven"] = await breakevenSalePrice(
        totalFeeForBreak,
        newData == null ? void 0 : newData.costPrice,
        newFees.referralFees[2],
        vatForBreak,
        newData.vatTax,
        newData.vatTaxFlatRate,
        newFees.fulfilmentFee,
        newFees.lowPriceFBA,
        marketplace,
        productData == null ? void 0 : productData.productCategory
      );
    newOffersData["FBA"] = await getOfferAndGoogleShoppingReferralAndFBA(oldOffersData["FBA"], newData, newFees, marketplace);
    newOffersData["AMZ"] = await getOfferAndGoogleShoppingReferralAndFBA(oldOffersData["AMZ"], newData, newFees, marketplace);
    newOffersData["FBM"] = await getOfferAndGoogleShoppingReferralAndFBA(oldOffersData["FBM"], newData, newFees, marketplace);
    newGoogleShoppings = await getOfferAndGoogleShoppingReferralAndFBA(oldGoogleShoppingData, newData, newFees, marketplace, null, false);
  }
  store.dispatch(setDetailPageProfitCalculatorData(data, newFees, newOffersData, newGoogleShoppings));
};
const getReferralFee = async (salePrice, productCategory, marketplace, currencySymbol) => {
  const { fulfilment_fee_distribution: fulfilmentFeeDistribution } = await chrome.storage.local.get(["fulfilment_fee_distribution"]);
  const referralFees = calculateReferralFee(
    productCategory,
    salePrice,
    fulfilmentFeeDistribution[marketplace === usMarketPlace ? "referralFeePercentagesWithCategory" : marketplace === ukMarketPlace && "referralFeeUKPercentagesWithCategory"],
    fulfilmentFeeDistribution["NonPortionCategoriesUSUK"],
    fulfilmentFeeDistribution["PortionCategoriesUSUK"],
    currencySymbol
  );
  return referralFees;
};
const getAppliedFulfilmentFee = (marketplace, salePrice, productFees) => marketplace === usMarketPlace ? salePrice < 10 ? productFees.lowPriceFBA : productFees.fulfilmentFee : salePrice <= 10 ? productFees.lowPriceFBA : productFees.fulfilmentFee;
const getFulfilmentText = (marketplace, lowFbaProductTier, salePrice, currencySymbol) => {
  const isLowFBA = marketplace === usMarketPlace ? salePrice < 10 ? true : false : salePrice <= 10 ? true : false;
  if (isLowFBA)
    if (lowFbaProductTier === "N/A")
      return { title: "The size of item exceeds low FBA criteria. So, Standard FBA will be applied.", label: "Fulfilment Fee" };
    else
      return { title: `Low-Price FBA enabled on sale price less than 10. Products with sale price less than ${currencySymbol} 10 will be charged at reduced rate.`, label: "Low-Price FBA Fee" };
  else
    return { title: `It is Standard FBA on sale price greater${marketplace === usMarketPlace ? " or equal" : ""} than 10.`, label: "Fulfilment Fee" };
};
const profitCalculatorCalculations = (productData, profitCalculatorData, fulfilmentFeeDistribution, marketplace, currencySymbol, itemTitle) => {
  const volume = calculateVolume(productData.length, productData.height, productData.width);
  productData["volume"] = volume;
  if (marketplace === usMarketPlace)
    return profitCalculatorUSCalculations(productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol, itemTitle);
  else
    return profitCalculatorUKCalculations(productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol);
};
const profitCalculatorUSCalculations = (productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol, itemTitle) => {
  const dimensionalWeight = productData.volume / 139;
  const productTier = calculateProductTierUS(productData, dimensionalWeight);
  let fulfilmentFee = calculateFulfilmentFeeUS(productTier, productData, dimensionalWeight, fulfilmentFeeDistribution);
  let lowPriceFBA = calculateLowFbaFee(productTier, productData, dimensionalWeight, fulfilmentFeeDistribution, fulfilmentFee, "outOfBoundlowFbaFeeForUS", usMarketPlace);
  const storageFee = calculateStorageFee(productData.volume, productTier, fulfilmentFeeDistribution["storageFeeRangesByMonths"]);
  const closingFee = calculateClosingFeeUS(productData.productCategory, fulfilmentFeeDistribution);
  const referralFees = calculateReferralFee(
    productData == null ? void 0 : productData.productCategory,
    profitCalculatorData == null ? void 0 : profitCalculatorData.salePrice,
    fulfilmentFeeDistribution["referralFeePercentagesWithCategory"],
    fulfilmentFeeDistribution["NonPortionCategoriesUSUK"],
    fulfilmentFeeDistribution["PortionCategoriesUSUK"],
    currencySymbol
  );
  const productCategory = productData == null ? void 0 : productData.productCategory;
  const extraFulfilmentCategory = ["Battery", "battery", "batteries", "Batteries", "Rechargeable", "rechargeable", "Wireless", "wireless"];
  if ((productCategory.includes("phone") || productCategory.includes("Phones") || productCategory === "Electronics" || productCategory === "Electronic") && extraFulfilmentCategory.some((category) => itemTitle.includes(category))) {
    fulfilmentFee += 0.11;
    lowPriceFBA += 0.11;
  }
  return { fulfilmentFee, lowPriceFBA, storageFee, referralFees, closingFee, productTier, lowFbaProductTier: productTier };
};
const profitCalculatorUKCalculations = (productData, profitCalculatorData, fulfilmentFeeDistribution, currencySymbol) => {
  const dimensionalWeight = productData.volume * Math.pow(2.54, 3) / 5e3 * 2.205;
  const productTier = calculateProductTierUK(productData, dimensionalWeight);
  const lowFbaProductTier = calculateProductTierForLowFbaUK(productData);
  const fulfilmentFee = calculateFulfilmentFeeUK(productData == null ? void 0 : productData.unitWeight, dimensionalWeight, productTier, fulfilmentFeeDistribution["fulfillmentFeeHashForUk"]);
  const closingFee = calculateClosingFeeUK(productData == null ? void 0 : productData.productCategory, fulfilmentFeeDistribution);
  const lowPriceFBA = lowFbaProductTier === "N/A" ? fulfilmentFee : calculateLowFbaFee(lowFbaProductTier, productData, dimensionalWeight, fulfilmentFeeDistribution, fulfilmentFee, "outOfBoundlowFbaFeeForUK", ukMarketPlace);
  const storageFee = calculateStorageFee(productData.volume, productTier, fulfilmentFeeDistribution["storageFeeRangesByMonthsForUK"]);
  const referralFees = calculateReferralFee(
    productData == null ? void 0 : productData.productCategory,
    profitCalculatorData == null ? void 0 : profitCalculatorData.salePrice,
    fulfilmentFeeDistribution["referralFeeUKPercentagesWithCategory"],
    fulfilmentFeeDistribution["NonPortionCategoriesUSUK"],
    fulfilmentFeeDistribution["PortionCategoriesUSUK"],
    currencySymbol
  );
  return { fulfilmentFee, lowPriceFBA, storageFee, referralFees, closingFee, productTier, lowFbaProductTier };
};
function calculateProfitAndRoi(profitCalculatorData, marketplace) {
  let taxValue = (marketplace === ukMarketPlace ? calculateProductVatDue(profitCalculatorData) : profitCalculatorData.taxValue / 100 * profitCalculatorData.salePrice).toFixed(2);
  let calculateProfit = Math.floor((profitCalculatorData.salePrice - profitCalculatorData.costPrice - profitCalculatorData.totalFee - taxValue) * 100) / 100;
  let calculateRoi = null;
  if (parseFloat(+profitCalculatorData.costPrice))
    calculateRoi = Math.floor(parseFloat(calculateProfit / profitCalculatorData.costPrice * 100) * 100) / 100;
  calculateProfit = parseFloat(calculateProfit.toFixed(2));
  return { profit: calculateProfit, ROI: calculateRoi, vatFees: taxValue };
}
function calculateProductVatDue(profitCalculatorData) {
  let vatDueTaxValue = 0;
  if (profitCalculatorData.vatSelect === 0)
    return 0;
  if (profitCalculatorData.vatSelect == 2) {
    const taxPercentage = profitCalculatorData.vatTax / (100 + profitCalculatorData.vatTax);
    vatDueTaxValue = profitCalculatorData.salePrice * taxPercentage - profitCalculatorData.costPrice * taxPercentage;
  } else if (profitCalculatorData.vatSelect == 3)
    vatDueTaxValue = profitCalculatorData.salePrice * (profitCalculatorData.vatTaxFlatRate / 100);
  else if (profitCalculatorData.isFeeVatApplied) {
    let totalFee = profitCalculatorData.totalFee;
    vatDueTaxValue = totalFee * (profitCalculatorData.vatTax / 100);
  }
  return vatDueTaxValue;
}
const calculateVolume = (length, height, width) => length * height * width;
function calculateProfitMargin(profit, salePrice) {
  let profitMargin = null;
  if (!salePrice)
    return null;
  profitMargin = (profit / salePrice * 100).toFixed(2);
  return profitMargin;
}
async function breakevenSalePrice(totalFee, costPrice, referralFeePercentage, vatSelect, vatPercentage, flatRate, fulfilment, lowFBA, marketplace, productCategory) {
  let breakevenSalePriceValue;
  let isLowFBA = false;
  totalFee += fulfilment;
  let referralPercentageValue = referralFeePercentage;
  if ([2, 1].includes(vatSelect))
    breakevenSalePriceValue = (totalFee * (vatPercentage / 100) + totalFee + costPrice) / (1 - referralPercentageValue / 100 - referralPercentageValue / 100 * (vatPercentage / 100));
  else if (vatSelect === 3)
    breakevenSalePriceValue = (totalFee + costPrice) / (1 - referralPercentageValue / 100 - flatRate / 100);
  else if (vatSelect == 0)
    breakevenSalePriceValue = (totalFee + costPrice) / (1 - referralPercentageValue / 100);
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
  const newReferralPercentage = (await getReferralFee(breakevenSalePriceValue, productCategory, marketplace, "1"))[2];
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
      productCategory
    );
  return breakevenSalePriceValue;
}
const fetchDetailPageData = async () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let vatTaxFlatRate;
  let currencySymbol, asinElement, marketplace, marketplaceValue;
  let {
    fulfilment_fee_distribution: fulfilmentFeeDistribution,
    fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths,
    vat_flat_rate: vatFlatRates,
    detail_page_subcontainer: detailPageSubContainerPath,
    min_roi_value: minRoi,
    min_Profit_value: minProfit
  } = await chrome.storage.local.get(["fulfilment_fee_distribution", "fulfilment_fee_distribution_xpaths", "vat_flat_rate", "min_roi_value", "min_Profit_value", "detail_page_subcontainer"]);
  if ([
    fulfilmentFeeDistribution,
    fulfilmentFeeDistributionXPaths,
    vatFlatRates,
    ...lodashExports.values(
      lodashExports.pick(fulfilmentFeeDistribution, [
        "variableClosingFeeUK",
        "variableClosingFeeForBookInUK",
        "varibaleClosingFeeHashForBooksInUK",
        "variableClosingFeeUS",
        "NonPortionCategoriesUSUK",
        "PortionCategoriesUSUK"
      ])
    )
  ].some((x2) => !x2)) {
    let response = await chrome.runtime.sendMessage({ getAllDataByArbitrage: true });
    vatTaxFlatRate = response.profitCalculator.vat_flat_rate;
    fulfilmentFeeDistribution = response.profitCalculator;
    fulfilmentFeeDistributionXPaths = response.productDetailsPageXpath;
    await chrome.storage.local.set({ fulfilment_fee_distribution: fulfilmentFeeDistribution, fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths, vat_flat_rate: vatTaxFlatRate });
  }
  let { vat_flat_rate: vatFlatRate } = await chrome.storage.local.get(["vat_flat_rate"]);
  vatTaxFlatRate = parseFloat(vatFlatRate);
  let [currentUrl, domain] = await getPageDomain();
  [currencySymbol, marketplace, marketplaceValue] = getSymbolAndMarket(domain);
  try {
    asinElement = await getProductAsin(currentUrl);
    if (!asinElement)
      throw Error("Asin Element is Undefined");
    const productCategory = getProductCategory(fulfilmentFeeDistributionXPaths);
    const productBSR = getProductBSR(fulfilmentFeeDistributionXPaths);
    const salePrice = getProductSalePrice(currentUrl, fulfilmentFeeDistributionXPaths);
    const urlParams = new URL(currentUrl).searchParams;
    let mainServerAPICheck = urlParams.get("use_main_server") === "true";
    const response = await getProductInfo([asinElement], marketplace, marketplaceValue, mainServerAPICheck, productCategory === "" ? null : productCategory, productBSR, salePrice);
    if ((response == null ? void 0 : response.license_status) && ((_a = response == null ? void 0 : response.license_status) == null ? void 0 : _a.license) == true) {
      let detailsResponse = {
        bsr: (_c = (_b = response == null ? void 0 : response.products) == null ? void 0 : _b[asinElement]) == null ? void 0 : _c.bsr,
        bsr_percentage: (_e = (_d = response == null ? void 0 : response.products) == null ? void 0 : _d[asinElement]) == null ? void 0 : _e.bsr_percentage,
        dimensions: (_g = (_f = response == null ? void 0 : response.products) == null ? void 0 : _f[asinElement]) == null ? void 0 : _g.dimensions,
        sales: (_i = (_h = response == null ? void 0 : response.products) == null ? void 0 : _h[asinElement]) == null ? void 0 : _i.sales
      };
      let reverseSearchData = { products: (_k = (_j = response == null ? void 0 : response.products) == null ? void 0 : _j[asinElement]) == null ? void 0 : _k.products };
      const [itemTitle, productData, profitCalculatorData] = getValuesFromUrlAndByXPaths(currentUrl, fulfilmentFeeDistributionXPaths, asinElement, response);
      productData["productCategory"] = productCategory;
      profitCalculatorData["vatTaxFlatRate"] = vatTaxFlatRate;
      profitCalculatorData["storageMonth"] = 0;
      profitCalculatorData["fulfilmentType"] = false;
      profitCalculatorData["vatSelect"] = (profitCalculatorData == null ? void 0 : profitCalculatorData.vatRegistered) ? 2 : 1;
      profitCalculatorData["minROI"] = minRoi || initialMinROI;
      profitCalculatorData["minProfit"] = minProfit || initialMinProfit;
      let productFees = profitCalculatorCalculations(productData, profitCalculatorData, fulfilmentFeeDistribution, marketplace, currencySymbol, itemTitle);
      profitCalculatorData["fulfilmentFee"] = getAppliedFulfilmentFee(marketplace, profitCalculatorData == null ? void 0 : profitCalculatorData.salePrice, productFees);
      profitCalculatorData["totalFee"] = calculateTotalFees(profitCalculatorData, productFees);
      let vatForBreak = marketplace === usMarketPlace ? 0 : profitCalculatorData["vatSelect"];
      if (!profitCalculatorData.isFeeVatApplied && profitCalculatorData["vatSelect"] === 1)
        vatForBreak = 0;
      const totalFeeForBreak = profitCalculatorData.totalFee - productFees.referralFees[0] - profitCalculatorData.fulfilmentFee;
      profitCalculatorData.breakEven = await breakevenSalePrice(
        totalFeeForBreak,
        profitCalculatorData.costPrice,
        productFees.referralFees[2],
        vatForBreak,
        profitCalculatorData.vatTax,
        profitCalculatorData.vatTaxFlatRate,
        productFees == null ? void 0 : productFees.fulfilmentFee,
        productFees == null ? void 0 : productFees.lowPriceFBA,
        marketplace,
        productData == null ? void 0 : productData.productCategory
      );
      profitCalculatorData["maxCost"] = marketplace === usMarketPlace ? calculateMaxCostUS(profitCalculatorData) : calculateMaxCostUK(profitCalculatorData);
      const result = calculateProfitAndRoi(profitCalculatorData, marketplace);
      profitCalculatorData["profit"] = result.profit;
      profitCalculatorData["ROI"] = result.ROI;
      profitCalculatorData["vatFees"] = result.vatFees;
      const profitMargin = calculateProfitMargin(result.profit, salePrice);
      profitCalculatorData["profitMargin"] = profitMargin;
      const headerData = {
        productTitle: itemTitle,
        imageXpath: fulfilmentFeeDistributionXPaths["productDetailPageImage"],
        currentUrl
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
          domain
        })
      );
      return { domain, asinElement, marketplace, productFees, profitCalculatorData, productCategory };
    } else {
      store.dispatch(setDetailPageData({ success: false }));
    }
  } catch (error) {
    console.log("Error in Detail page: ", error.message);
    store.dispatch(setDetailPageData({ success: false }));
  }
};
const fetchOffersOfDetailPage = async (domain, asinElement, marketplace, productFees, profitCalculatorData, productCategory) => {
  try {
    let { fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths } = await chrome.storage.local.get(["fulfilment_fee_distribution_xpaths"]);
    let offersData = lodashExports.uniqBy(
      await getOffersFromDetailPage(domain, asinElement, fulfilmentFeeDistributionXPaths["detailPageoffersXpath"], marketplace),
      (element) => [element.salePrice + "_" + element.fulfilmentType].join("_")
    );
    offersData = lodashExports.filter(offersData, (offer) => offer.salePrice !== 0);
    offersData = lodashExports.sortBy(offersData, (o2) => parseFloat(o2.salePrice));
    offersData = lodashExports.groupBy(offersData, "fulfilmentType");
    offersData["FBA"] = await getOfferAndGoogleShoppingReferralAndFBA(offersData["FBA"], profitCalculatorData, productFees, marketplace, productCategory);
    offersData["AMZ"] = await getOfferAndGoogleShoppingReferralAndFBA(offersData["AMZ"], profitCalculatorData, productFees, marketplace, productCategory);
    offersData["FBM"] = await getOfferAndGoogleShoppingReferralAndFBA(offersData["FBM"], profitCalculatorData, productFees, marketplace, productCategory);
    store.dispatch(setDetailPageData({ offersData, offersDataSuccess: true, offersDataLoading: false }));
  } catch (error) {
    store.dispatch(setDetailPageData({ offersData: {}, offersDataSuccess: false, offersDataLoading: false }));
  }
};
async function getPageDomain() {
  const tabUrl = window.location.href;
  const { tab_url: urlStore } = await chrome.storage.local.get(["tab_url"]);
  let currentUrl = tabUrl || urlStore || await chrome.runtime.sendMessage({ currentUrl: true });
  const urlObj = new URL(currentUrl);
  const hostname = urlObj.hostname;
  const domain = hostname.split("amazon.").pop();
  return [currentUrl, domain];
}
async function getProductAsin(currentUrl) {
  const { detail_page_asin: detailPageAsinPath } = await chrome.storage.local.get(["detail_page_asin"]);
  let asinElement, asinFromUrl;
  if (currentUrl.includes("/dp") || currentUrl.includes("/gp/product")) {
    const regex = /\/(?:dp|product)\/([A-Za-z0-9]+)/;
    const match = currentUrl.match(regex);
    asinFromUrl = match ? match[1] : null;
  }
  if (asinFromUrl && (asinFromUrl == null ? void 0 : asinFromUrl.length) >= 8 && (asinFromUrl == null ? void 0 : asinFromUrl.length) <= 10) {
    return asinFromUrl;
  }
  for (let i2 = 0; i2 < detailPageAsinPath.length; i2++) {
    let element = getAsinByXpath(detailPageAsinPath[i2]);
    if (element) {
      asinElement = element.textContent.trim().replace(/\s/g, "").replace(String.fromCharCode(8206), "");
      break;
    }
  }
  return asinElement;
}
function splitDimensions(itemDimension) {
  return itemDimension.match(valueFromStringRegEx);
}
function getProductValue(xPathOfValue, isSalePriceValue = false) {
  if (xPathOfValue !== void 0 && !isSalePriceValue) {
    let response = getElementByXpath(xPathOfValue).snapshotItem(0);
    if (response)
      return response.textContent.trim();
  }
  if (xPathOfValue !== void 0 && isSalePriceValue) {
    let response = getElementByXpath(xPathOfValue);
    let salePrice = [];
    for (let i2 = 0; i2 < response.snapshotLength; i2++) {
      let item = response.snapshotItem(i2).textContent.trim();
      item = item.toLowerCase();
      if (!item.includes("count"))
        salePrice.push(item);
    }
    return salePrice[0] ?? "";
  }
  return "";
}
const getValueFromQueryParams = (params, attrs) => {
  for (const attr of attrs) {
    const value = params.get(attr);
    if (value)
      return parseFloat(value);
  }
  return "";
};
const getProductCategory = (productDetailsXpath) => {
  let productCategory = "";
  for (const categoryXpath of productDetailsXpath["itemCategory"]) {
    if (productCategory === "" && categoryXpath !== void 0) {
      let productCategoryResponse = getElementByXpath(categoryXpath).snapshotItem(0);
      if (productCategoryResponse !== null) {
        if (productCategoryResponse.childNodes.length !== 0) {
          let elements = productCategoryResponse == null ? void 0 : productCategoryResponse.childNodes;
          for (let i2 = 0; i2 < productCategoryResponse.childNodes.length; i2++) {
            if (elements[i2].nodeName === "A") {
              const text = productCategoryResponse.textContent.trim();
              const regex = /in\s(.*?)\s\(/;
              const match = text.match(regex);
              productCategory = match && match[1] || "";
            }
          }
        } else
          productCategory = productCategoryResponse.textContent.trim();
        if (productCategory === "‹")
          productCategory = "";
      }
    } else
      break;
  }
  return productCategory;
};
const getProductBSR = (productDetailsXpath) => {
  let bsr = null;
  if (productDetailsXpath["itemBSR"])
    for (const bsrXpath of productDetailsXpath["itemBSR"]) {
      const xPathResult = getElementByXpath(bsrXpath);
      if (bsr)
        break;
      if (xPathResult.snapshotLength) {
        bsr = parseFloat(xPathResult.snapshotItem(0).textContent.trim().split(" ")[0].replace("#", "").replace(",", ""));
      }
    }
  return bsr;
};
function getProductSalePrice(currentUrl, productDetailsXpath) {
  const urlParams = new URL(currentUrl).searchParams;
  let salePrice = "";
  const salePriceAttrs = ["ah_price", "sas_sale_price", "bbp-sellprice"];
  salePrice = getValueFromQueryParams(urlParams, salePriceAttrs);
  for (let i2 = 0; i2 < productDetailsXpath["maxCount"]; i2++) {
    if (!salePrice) {
      salePrice = getProductValue(productDetailsXpath["salePrice"][i2], true);
      if (salePrice.includes("option")) {
        let pricesArray = salePrice.split("option");
        salePrice = pricesArray[pricesArray.length - 1].trim();
      }
      if (salePrice) {
        salePrice = salePrice.replace(/,/g, "");
        salePrice = parseFloat(salePrice.match(valueFromStringRegEx));
        if (salePrice === 0)
          salePrice = void 0;
      }
    }
  }
  if (checkValue(salePrice))
    salePrice = 0;
  return salePrice;
}
const checkValue = (value) => value === "" || value === void 0 || Number.isNaN(value);
function getValuesFromUrlAndByXPaths(currentUrl, productDetailsXpath, asin, response) {
  var _a;
  let [salePrice, costPrice, itemDimension, unitWeight, itemTitle] = Array(6).fill("");
  let [prepFee, taxValue, vatTax] = Array(4).fill(0);
  let [vatRegistered, isFeeExcludesVat] = Array(2).fill(false);
  let detailsResponse = response == null ? void 0 : response.products[asin];
  if (detailsResponse == null ? void 0 : detailsResponse.dimensions) {
    if ((detailsResponse == null ? void 0 : detailsResponse.dimensions.length) && (detailsResponse == null ? void 0 : detailsResponse.dimensions.width) && (detailsResponse == null ? void 0 : detailsResponse.dimensions.height))
      itemDimension = (detailsResponse == null ? void 0 : detailsResponse.dimensions.length) + "X" + (detailsResponse == null ? void 0 : detailsResponse.dimensions.width) + "X" + (detailsResponse == null ? void 0 : detailsResponse.dimensions.height) + " milimeters";
    if (detailsResponse == null ? void 0 : detailsResponse.dimensions.weight)
      unitWeight = (detailsResponse == null ? void 0 : detailsResponse.dimensions.weight) + " grams";
  }
  const urlParams = new URL(currentUrl).searchParams;
  const costPriceAttrs = ["ah_cost", "sas_cost_price", "bbp-buyprice"];
  costPrice = getValueFromQueryParams(urlParams, costPriceAttrs);
  for (let i2 = 0; i2 < productDetailsXpath["maxCount"]; i2++) {
    if (!itemDimension)
      itemDimension = getProductValue(productDetailsXpath["itemDimension"][i2]);
    if (!unitWeight)
      unitWeight = getProductValue(productDetailsXpath["itemWeight"][i2]);
    if (!itemTitle)
      itemTitle = getProductValue(productDetailsXpath["itemTitle"][i2]);
  }
  if (checkValue(costPrice))
    costPrice = Math.floor(parseFloat((((_a = lodashExports.minBy(detailsResponse == null ? void 0 : detailsResponse.products, (v2) => parseFloat(v2.price))) == null ? void 0 : _a.price) ?? 0) * 100)) / 100;
  salePrice = getProductSalePrice(currentUrl, productDetailsXpath);
  if (checkValue(itemDimension))
    itemDimension = [];
  [prepFee, taxValue, vatTax, vatRegistered, isFeeExcludesVat] = setLicenseStatusResponse(response, currentUrl);
  if (vatTax === 0)
    vatTax = 20;
  if (itemDimension.length > 0) {
    if (splitDimensions(itemDimension).length > 3)
      unitWeight = itemDimension.split(";")[1];
  }
  itemDimension = itemDimensionOfProduct(itemDimension);
  unitWeight = itemWeightVariations(unitWeight);
  return [
    itemTitle,
    { length: itemDimension[2], width: itemDimension[1], height: itemDimension[0], unitWeight },
    { salePrice, costPrice, prepFee, taxValue, vatTax, vatRegistered, isFeeVatApplied: !isFeeExcludesVat }
  ];
}
function itemDimensionOfProduct(itemDimension) {
  if (itemDimension.length === 0)
    return [0, 0, 0];
  else {
    itemDimension = itemDimension.toLowerCase();
    const unit = Object.keys(dimensionsUnitValues).sort((a2, b2) => b2.length - a2.length).find((unit2) => itemDimension.includes(unit2));
    itemDimension = itemDimension.match(valueFromStringRegEx);
    if (unit)
      itemDimension = itemDimension.map((value) => parseFloat(value) * dimensionsUnitValues[unit]);
    else
      itemDimension = itemDimension.map((value) => parseFloat(value));
    if (itemDimension.length !== 3)
      for (let i2 = itemDimension.length; i2 <= 3; i2++)
        itemDimension.push(0);
    let dimensionsArray = itemDimension.sort((a2, b2) => a2 - b2);
    return dimensionsArray;
  }
}
function itemWeightVariations(unitWeight) {
  if (Number.isNaN(unitWeight.match(valueFromStringRegEx)) || unitWeight.match(valueFromStringRegEx) === null) {
    unitWeight = 0;
    return unitWeight;
  }
  let weightValue = parseFloat(unitWeight.match(valueFromStringRegEx).join(""));
  unitWeight = unitWeight.toLowerCase();
  const unitValue = weightUnitValues[Object.keys(weightUnitValues).sort((a2, b2) => b2.length - a2.length).find((unit) => unitWeight.includes(unit))];
  unitWeight = weightValue / (unitValue ?? 1);
  return unitWeight;
}
function setLicenseStatusResponse(response, currentUrl) {
  let valuesArray, responseObject;
  const foundDomainIndex = domainsSuffixes.findIndex((x2) => currentUrl.includes(x2));
  const foundMarketPlace = marketplacesSuffixes[foundDomainIndex];
  if (foundDomainIndex && foundMarketPlace)
    responseObject = response.license_status[foundMarketPlace];
  valuesArray = [parseFloat(responseObject == null ? void 0 : responseObject.prep), parseFloat(responseObject == null ? void 0 : responseObject.tax), parseFloat(responseObject == null ? void 0 : responseObject.vat), responseObject == null ? void 0 : responseObject.vat_registered, responseObject == null ? void 0 : responseObject.is_fee_excludes_vat];
  for (let i2 = 0; i2 < (valuesArray == null ? void 0 : valuesArray.length); i2++)
    if (valuesArray[i2] === void 0 || Number.isNaN(valuesArray[i2]))
      valuesArray[i2] = i2 > 2 ? false : 0;
  return valuesArray;
}
const ContactSupport = () => {
  const noConnectionSVG = "./assets/icons/no-connection.svg";
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "ah-detail-page-data", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(noConnectionSVG), alt: "item", width: "250px", height: "45px" }),
    /* @__PURE__ */ jsx("span", { style: { fontWeight: "bold", color: "darkgrey", display: "flex", justifyContent: "center", paddingTop: "10px" }, children: t2("Please Contact Support!") })
  ] }) });
};
const DetailPageInnerDropDowns = ({ id, label, currencySymbol, children, value, precision = 2 }) => {
  const collapseDownIcon = "./assets/icons/collapse_down_icon.svg";
  const collapseUpIcon = "./assets/icons/collapse_up_icon.svg";
  const [isCollapse, setIsCollapse] = reactExports.useState(true);
  const handleCollapseChange = () => setIsCollapse(!isCollapse);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "d-flex align-items-center justify-content-between mb-2 collapsed",
        id: `${id}_collapse_div`,
        "data-bs-toggle": "collapse",
        "data-bs-target": `#${id}_collapse`,
        onClick: handleCollapseChange,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: label }),
            /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(isCollapse ? collapseDownIcon : collapseUpIcon), alt: "down", className: "cursor-pointer" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "fs-12 ah-custom-font-light", id: `total_${id}_fee_span_text`, children: [
            currencySymbol,
            " ",
            parseFloat(value).toFixed(precision)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { id: `${id}_collapse`, className: "collapse", style: { fontWeight: "400" }, children })
  ] });
};
const LowestOffer = ({ title, value }) => {
  return /* @__PURE__ */ jsxs("div", { className: "ah-offer-price ", style: { borderBottom: "2px solid #F0F0F0", padding: "12px 0px" }, children: [
    /* @__PURE__ */ jsx("span", { className: "", children: title }),
    /* @__PURE__ */ jsx("span", { className: "ah-text-dark", children: value })
  ] });
};
const OffersCheckBox = ({ label, isChecked, setIsChecked }) => {
  return /* @__PURE__ */ jsxs("div", { className: "form-check ah-form-check d-flex gap-2", style: { alignItems: "center", minHeight: "auto" }, children: [
    /* @__PURE__ */ jsx("input", { className: "form-check-input", type: "checkbox", checked: isChecked, onClick: () => setIsChecked(!isChecked) }),
    /* @__PURE__ */ jsx("label", { className: "form-check-label", children: label })
  ] });
};
const DetailPageOffers = () => {
  var _a, _b, _c, _d, _e, _f;
  const { offersData, currencySymbol } = useSelector((state) => state.DetailPage);
  const offersDataOfFBAAndAWZ = (_a = offersData["FBA"]) == null ? void 0 : _a.concat(offersData["AMZ"]);
  const [isFBAChecked, setIsFBAChecked] = (offersDataOfFBAAndAWZ == null ? void 0 : offersDataOfFBAAndAWZ.length) > 0 ? reactExports.useState(true) : reactExports.useState(false);
  const [isFBMChecked, setIsFBMChecked] = ((_b = offersData["FBM"]) == null ? void 0 : _b.length) > 0 ? reactExports.useState(true) : reactExports.useState(false);
  const getEmptyDataMessage = () => {
    var _a2;
    const fba = offersDataOfFBAAndAWZ == null ? void 0 : offersDataOfFBAAndAWZ.length;
    const fbm = (_a2 = offersData["FBM"]) == null ? void 0 : _a2.length;
    if (!(fba || fbm))
      return "There are no Offers";
    if (!(isFBAChecked || isFBMChecked))
      return "Please select one of the above options";
    if (isFBAChecked && !fba && !isFBMChecked)
      return "There are no FBA Offers";
    if (isFBMChecked && !fbm && !isFBAChecked)
      return "There are no FBM Offers";
    return false;
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "scroll-offers-accordion", children: [
    /* @__PURE__ */ jsx("div", { className: "ah-offer-wrapper mb-2", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(LowestOffer, { title: "BuyBox Offer Price", value: currencySymbol + " " + parseFloat(((_c = lodashExports.head(offersData["AMZ"])) == null ? void 0 : _c.salePrice) ?? 0).toFixed(2) }),
      /* @__PURE__ */ jsx(LowestOffer, { title: "Low FBA Offer Price", value: currencySymbol + " " + parseFloat(((_d = lodashExports.head(offersData["FBA"])) == null ? void 0 : _d.salePrice) ?? 0).toFixed(2) }),
      /* @__PURE__ */ jsx(LowestOffer, { title: "Low FBM Offer Price", value: currencySymbol + " " + parseFloat(((_e = lodashExports.head(offersData["FBM"])) == null ? void 0 : _e.salePrice) ?? 0).toFixed(2) })
    ] }) }),
    /* @__PURE__ */ jsx(DetailPageInnerDropDowns, { id: "offers", label: "Offers", currencySymbol: "", value: (offersDataOfFBAAndAWZ == null ? void 0 : offersDataOfFBAAndAWZ.length) + ((_f = offersData["FBM"]) == null ? void 0 : _f.length), precision: 0, children: /* @__PURE__ */ jsxs("div", { className: "ah-offer-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-end gap-2 pb-2", children: [
        /* @__PURE__ */ jsx(OffersCheckBox, { label: "FBA", isChecked: isFBAChecked, setIsChecked: setIsFBAChecked }),
        /* @__PURE__ */ jsx(OffersCheckBox, { label: "FBM", isChecked: isFBMChecked, setIsChecked: setIsFBMChecked })
      ] }),
      /* @__PURE__ */ jsx(
        RenderIf,
        {
          isTrue: !getEmptyDataMessage(),
          fallback: /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx(EmptyData, { message: getEmptyDataMessage() }) }),
          children: /* @__PURE__ */ jsxs("table", { className: "table ah-offer-table", children: [
            /* @__PURE__ */ jsx("thead", { className: "table ah-offer-table", children: /* @__PURE__ */ jsxs("tr", { className: "", children: [
              /* @__PURE__ */ jsx("th", { className: "", scope: "col", children: "Seller" }),
              /* @__PURE__ */ jsx("th", { className: "", scope: "col", children: "Price" }),
              /* @__PURE__ */ jsx("th", { className: "", scope: "col", children: "Profit" }),
              /* @__PURE__ */ jsx("th", { className: "", scope: "col", children: "ROI" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: lodashExports.sortBy([...isFBAChecked ? offersDataOfFBAAndAWZ : [], ...isFBMChecked ? offersData["FBM"] : []], (o2) => parseFloat(o2.salePrice)).map((offer, index, offers) => {
              return /* @__PURE__ */ jsxs("tr", { className: "ah_offers_table_rows ah-offers-fba-table-rows", style: { borderBottom: index === offers.length - 1 ? "none" : "1.5px solid #f0f0f0" }, children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("a", { className: "", href: offer == null ? void 0 : offer.sellerIdLink, target: "_blank", rel: "noreferrer", children: offer == null ? void 0 : offer.fulfilmentType }) }),
                /* @__PURE__ */ jsx("td", { className: "", id: "offers_price_table_data", children: currencySymbol + parseFloat(offer.salePrice).toFixed(2) }),
                /* @__PURE__ */ jsx("td", { className: offer.profit > 0 ? "ah-success-data" : "ah-fail-data", id: "offers_profit_table_data", children: currencySymbol + parseFloat(offer == null ? void 0 : offer.profit).toFixed(2) }),
                /* @__PURE__ */ jsxs("td", { className: offer.ROI === 0 || lodashExports.isNull(offer.ROI) ? "" : offer.ROI > 0 ? "ah-success-data" : "ah-fail-data", id: "offers_roi_table_data", children: [
                  parseFloat(offer == null ? void 0 : offer.ROI).toFixed(2) === "NaN" ? "∞" : parseFloat(offer == null ? void 0 : offer.ROI).toFixed(2),
                  " %"
                ] })
              ] });
            }) })
          ] })
        }
      )
    ] }) })
  ] }) });
};
const DetailPageGoogleShopping = () => {
  const { googleShoppingData, currencySymbol } = useSelector((state) => state.DetailPage);
  const [domain, setDomain] = reactExports.useState("");
  const getEmptyDataMessage = () => {
    if ((googleShoppingData == null ? void 0 : googleShoppingData.length) === 0)
      return "Results not found";
    return false;
  };
  reactExports.useEffect(() => {
    const urlObj = new URL(window.location.href);
    setDomain(urlObj.hostname.split("amazon.").pop());
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "scroll-offers-accordion", children: /* @__PURE__ */ jsx(
    RenderIf,
    {
      isTrue: !getEmptyDataMessage(),
      fallback: /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx(EmptyData, { message: getEmptyDataMessage() }) }),
      children: googleShoppingData == null ? void 0 : googleShoppingData.map((hash, index) => {
        var _a, _b;
        let sellerUrl = (_b = (_a = hash.googleShoppingSeller) == null ? void 0 : _a.split(domain + "/url")) == null ? void 0 : _b[1];
        sellerUrl = googleShoppingBaseUrl + domain + "/url" + sellerUrl || "";
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "px-2", children: /* @__PURE__ */ jsxs("div", { className: "ah-google-shopping-results", children: [
            /* @__PURE__ */ jsx("img", { className: "ah-google-shopping-img", src: hash.googleShoppingImage, alt: "product-img", "max-width": "30px", "max-height": "30px" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  width: "100%"
                },
                children: [
                  /* @__PURE__ */ jsx("p", { className: "ah-google-shopping-results-title ah-detail-page-title-ellipse", title: hash.googleShoppingTitle, children: hash.googleShoppingTitle }),
                  /* @__PURE__ */ jsxs("div", { className: "row g-0", children: [
                    /* @__PURE__ */ jsx("div", { className: "col-6 py-1", children: /* @__PURE__ */ jsxs("div", { className: "ah-google-shopping-inner-text-wrapper", children: [
                      /* @__PURE__ */ jsx("span", { className: "ah-google-shopping-inner-text-light", children: "Price:" }),
                      /* @__PURE__ */ jsxs("span", { className: "ah-google-shopping-inner-text", title: currencySymbol + parseFloat(hash == null ? void 0 : hash.salePrice).toFixed(2), children: [
                        currencySymbol,
                        parseFloat(hash.salePrice).toFixed(2)
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "col-6 py-1", children: /* @__PURE__ */ jsxs("div", { className: "ah-google-shopping-inner-text-wrapper pe-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "ah-google-shopping-inner-text-light", children: "Profit:" }),
                      /* @__PURE__ */ jsx("span", { className: "ah-google-shopping-inner-text", children: /* @__PURE__ */ jsxs("span", { style: { color: hash.profit === 0 || lodashExports.isNull(hash.profit) ? "" : hash.profit > 0 ? "green" : "red" }, title: currencySymbol + parseFloat(hash == null ? void 0 : hash.profit).toFixed(2), children: [
                        currencySymbol,
                        parseFloat(hash == null ? void 0 : hash.profit).toFixed(2)
                      ] }) })
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("div", { className: "ah-google-shopping-inner-text-wrapper pb-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "ah-google-shopping-inner-text-light", children: "Seller:" }),
                      /* @__PURE__ */ jsx("span", { style: { paddingBottom: "2px" }, className: "ah-google-shopping-inner-text", title: hash.googleShoppingSellerName, children: /* @__PURE__ */ jsx("a", { href: sellerUrl, target: "_blank", rel: "noopener noreferrer", children: hash.googleShoppingSellerName }) })
                    ] }) }),
                    /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("div", { className: "ah-google-shopping-inner-text-wrapper pe-0 pb-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "ah-google-shopping-inner-text-light", children: "ROI:" }),
                      /* @__PURE__ */ jsx("span", { className: "ah-google-shopping-inner-text", children: /* @__PURE__ */ jsxs("span", { style: { color: hash.ROI === 0 || lodashExports.isNull(hash.ROI) ? "" : hash.ROI > 0 ? "green" : "red" }, title: (parseFloat(hash == null ? void 0 : hash.ROI).toFixed(2) === "NaN" ? "∞" : parseFloat(hash == null ? void 0 : hash.ROI).toFixed(2)) + " %", children: [
                        parseFloat(hash == null ? void 0 : hash.ROI).toFixed(2) === "NaN" ? "∞" : parseFloat(hash == null ? void 0 : hash.ROI).toFixed(2),
                        " %"
                      ] }) })
                    ] }) })
                  ] })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("hr", { className: "m-0" })
        ] });
      })
    }
  ) }) });
};
let dragSource = null;
const DropDown = ({ id, collapseId, title, handleChangePosition, children }) => {
  const dropDownIcon = `./assets/icons/drop_down_${id}_icon.svg`;
  const draggingClass = "dragging";
  const [dropDownStatus, setDropDownStatus] = reactExports.useState(null);
  function handleDragStart(evt) {
    var _a, _b;
    dragSource = this;
    (_b = (_a = evt.target) == null ? void 0 : _a.classList) == null ? void 0 : _b.add(draggingClass);
    evt.dataTransfer.effectAllowed = "move";
  }
  function handleDragOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    this.classList.add("over");
  }
  function handleDragEnter(evt) {
    evt.preventDefault();
  }
  function handleDragLeave() {
    this.classList.remove("over");
  }
  async function handleDrop() {
    if (this.id !== dragSource.id) {
      handleChangePosition(dragSource.id, this.id);
    }
  }
  function handleDragEnd() {
    this.classList.remove("over");
    this.classList.remove(draggingClass);
  }
  reactExports.useEffect(() => {
    const dropdown = document.getElementById(`${id}`);
    if (dropdown) {
      dropdown.addEventListener("dragstart", handleDragStart, true);
      dropdown.addEventListener("dragenter", handleDragEnter, true);
      dropdown.addEventListener("dragover", handleDragOver, true);
      dropdown.addEventListener("dragleave", handleDragLeave, true);
      dropdown.addEventListener("drop", handleDrop, true);
      dropdown.addEventListener("dragend", handleDragEnd, true);
    }
    chrome.storage.local.get([`${id}_drop_down`]).then((res) => {
      setDropDownStatus(res[`${id}_drop_down`]);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "accordion-item", draggable: "true", id, children: /* @__PURE__ */ jsx("h2", { className: "accordion-header", id: `heading${collapseId}`, children: /* @__PURE__ */ jsx(
      "button",
      {
        className: `accordion-button ${!(dropDownStatus ?? true) ? "collapsed" : ""} py-1`,
        type: "button",
        onClick: () => {
          chrome.storage.local.set({ [`${id}_drop_down`]: !(dropDownStatus ?? true) });
          setDropDownStatus(!dropDownStatus);
        },
        id: `${id}_drop_down_button`,
        "data-bs-toggle": `${dropDownStatus ?? true ? "collapse" : ""}`,
        "data-bs-target": `#collapse${collapseId}`,
        "aria-expanded": dropDownStatus ?? true ? "true" : "false",
        "aria-controls": `collapse${collapseId}`,
        children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-1", id: `${id}_image_changing`, children: [
          /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(dropDownIcon), alt: "item" }),
          /* @__PURE__ */ jsx("span", { children: title })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "accordion-item", children: /* @__PURE__ */ jsx("div", { className: `accordion-collapse collapse ${(dropDownStatus ?? true) && "show"}`, id: `collapse${collapseId}`, "aria-labelledby": `heading${collapseId}`, children }) })
  ] });
};
const DropDown$1 = React$1.memo(DropDown);
const InputField = ({ label, id, symbol, fieldName, value, handleOnChange, isDisabled = false }) => {
  const [localValue, setLocalValue] = reactExports.useState(parseFloat(value).toFixed(2));
  reactExports.useEffect(() => {
    if (value != localValue)
      setLocalValue(value);
  }, [value]);
  return /* @__PURE__ */ jsxs("div", { className: "col-md-6 mb-1", children: [
    /* @__PURE__ */ jsx("span", { className: `fs-10 ${isDisabled ? "text-decoration-line-through" : ""} ah-custom-label`, children: label }),
    /* @__PURE__ */ jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          step: "0.01",
          type: "number",
          onWheel: (e2) => e2.target.blur(),
          className: "form-control",
          value: localValue,
          id,
          style: { userSelect: "text" },
          onBlur: () => {
            setLocalValue(parseFloat(value).toFixed(2));
          },
          onChange: (e2) => {
            setLocalValue(e2.target.value);
            handleOnChange(fieldName, +e2.target.value);
          },
          onClick: (event) => {
            const target = event.currentTarget;
            target.select();
          },
          disabled: isDisabled
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "input-group-text", id: "basic-addon2", children: symbol })
    ] })
  ] });
};
const InputSelect = ({ options, label, id, title, fieldName, value, handleOnChange, isDisabled = false }) => /* @__PURE__ */ jsx("div", { id: `${id}_main_div_container`, className: "col-md-6 mb-1", children: /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("span", { className: `fs-10 ${isDisabled ? "text-decoration-line-through" : ""} ah-custom-label`, children: label }),
  /* @__PURE__ */ jsx(
    "select",
    {
      id: `${id}_selection_of_profit_calculator`,
      onChange: (e2) => handleOnChange(fieldName, e2.target.value),
      "data-toggle": "tooltip",
      value,
      "data-placement": "top",
      style: { fontFamily: "Lato, sans-serif", fontSize: "12px", cursor: isDisabled ? "default" : "pointer" },
      title,
      className: "form-select",
      "aria-label": "Default select example",
      disabled: isDisabled,
      children: options == null ? void 0 : options.map((option, index) => {
        return /* @__PURE__ */ jsx("option", { value: option == null ? void 0 : option.value, children: option == null ? void 0 : option.label }, `${id + index}`);
      })
    }
  )
] }) });
const InputToggle = ({ id, label, title, style, fieldName, value, handleOnChange, isFBA = false }) => /* @__PURE__ */ jsx("div", { id: `${id}_main_div_container`, className: isFBA ? "col-md-6 mb-1" : "py-1", "data-toggle": "tooltip", "data-placement": "top", style, title, children: /* @__PURE__ */ jsxs("div", { className: !isFBA ? "d-flex align-items-center justify-content-between" : "", children: [
  /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: label }),
  /* @__PURE__ */ jsx("div", { className: `form-check form-switch switch-input ${!isFBA && "light-input"} toggle-profit-list`, children: /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      className: "form-check-input",
      role: "switch",
      id: `${id}_toggle_of_profit_calculator`,
      style: { cursor: "pointer", marginTop: "0px" },
      checked: value,
      onChange: (e2) => handleOnChange(fieldName, e2.target.checked)
    }
  ) })
] }) });
const TotalFeeData = ({ id, label, currencySymbol, value, title = null }) => /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
  /* @__PURE__ */ jsx(
    "span",
    {
      className: `fs-10  ${title ? " ah-detail-page-fees-tooltip-doted-line" : ""}`,
      "data-toggle": "tooltip",
      "data-placement": "top",
      style: { fontFamily: "Lato, sans-serif", fontSize: "12px", color: "#747890" },
      title,
      id: `${id}_fee_text`,
      children: label
    }
  ),
  /* @__PURE__ */ jsx("span", { className: "fs-12 fee", id: `${id}_fee`, children: currencySymbol + " " + parseFloat(value).toFixed(2) })
] });
const ProfitCalculator = () => {
  const { currencySymbol, marketplace, profitCalculatorData, productData, productFees, offersData, googleShoppingData } = useSelector((state) => state.DetailPage);
  const { t: t2 } = useTranslation();
  const storageMonthsOptions = [...Array(13)].map((_2, idx) => ({ label: `${idx}`, value: idx }));
  const inputFieldValues = [
    { label: t2("Cost"), id: "cost_price_of_profit_calculator", fieldName: "costPrice", value: profitCalculatorData == null ? void 0 : profitCalculatorData.costPrice, symbol: currencySymbol, isDisabled: false },
    { label: t2("Price"), id: "sale_price_of_profit_calculator", fieldName: "salePrice", value: profitCalculatorData == null ? void 0 : profitCalculatorData.salePrice, symbol: currencySymbol, isDisabled: false },
    {
      label: t2("Prep Fee"),
      id: "prep_fee_of_profit_calculator",
      fieldName: "prepFee",
      value: profitCalculatorData == null ? void 0 : profitCalculatorData.prepFee,
      symbol: currencySymbol,
      isDisabled: profitCalculatorData == null ? void 0 : profitCalculatorData.fulfilmentType
    }
  ];
  const maxCostInputFieldValues = [
    { label: t2("Min.ROI"), id: "min_roi_of_profit_calculator", fieldName: "minROI", value: profitCalculatorData == null ? void 0 : profitCalculatorData.minROI, symbol: "%" },
    { label: t2("Min.Profit"), id: "min_profit_of_profit_calculator", fieldName: "minProfit", value: profitCalculatorData == null ? void 0 : profitCalculatorData.minProfit, symbol: currencySymbol }
  ];
  const totalFeeDataValues = [
    {
      id: "fulfilment",
      currencySymbol,
      value: (profitCalculatorData == null ? void 0 : profitCalculatorData.fulfilmentType) ? 0 : profitCalculatorData.fulfilmentFee,
      ...getFulfilmentText(marketplace, productFees == null ? void 0 : productFees.lowFbaProductTier, profitCalculatorData == null ? void 0 : profitCalculatorData.salePrice, currencySymbol)
    },
    { id: "referral", label: t2("Referral Fee"), currencySymbol, value: productFees == null ? void 0 : productFees.referralFees[0], title: productFees == null ? void 0 : productFees.referralFees[1] },
    { id: "closing", label: t2("Variable Closing Fee"), currencySymbol, value: productFees == null ? void 0 : productFees.closingFee, title: null },
    {
      id: "storage",
      label: t2("Storage Fee"),
      currencySymbol,
      value: (profitCalculatorData == null ? void 0 : profitCalculatorData.fulfilmentType) ? 0 : ((productFees == null ? void 0 : productFees.storageFee) * (profitCalculatorData == null ? void 0 : profitCalculatorData.storageMonth)).toFixed(2),
      title: null
    },
    {
      id: "prepFee",
      label: t2("Prep Fee"),
      currencySymbol,
      value: (profitCalculatorData == null ? void 0 : profitCalculatorData.fulfilmentType) ? 0 : profitCalculatorData == null ? void 0 : profitCalculatorData.prepFee,
      title: null
    }
  ];
  const vatDue = [
    { label: t2("Not Applicable"), value: 0 },
    { label: t2("Not Registered"), value: 1 },
    { label: t2("VAT Registered"), value: 2 },
    { label: t2("Flat Rate"), value: 3 }
  ];
  const handleOnChange = (fieldName, fieldValue) => calculateProfitValues({ [fieldName]: fieldValue }, profitCalculatorData, marketplace, currencySymbol, productData, productFees, offersData, googleShoppingData);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "row g-2", children: [
      inputFieldValues.map((inputFieldValue, index) => /* @__PURE__ */ jsx(
        InputField,
        {
          symbol: inputFieldValue.symbol,
          label: inputFieldValue.label,
          id: inputFieldValue.id,
          fieldName: inputFieldValue.fieldName,
          value: inputFieldValue.value,
          handleOnChange,
          isDisabled: inputFieldValue == null ? void 0 : inputFieldValue.isDisabled
        },
        index
      )),
      /* @__PURE__ */ jsx(RenderIf, { isTrue: marketplace === usMarketPlace, children: /* @__PURE__ */ jsx(InputField, { symbol: "%", label: t2("Tax Due"), id: "tax_of_profit_calculator", fieldName: "taxValue", value: profitCalculatorData == null ? void 0 : profitCalculatorData.taxValue, handleOnChange }) }),
      /* @__PURE__ */ jsx(InputToggle, { id: "fba_and_fbm", label: t2("Fulfilment Type"), isFBA: true, fieldName: "fulfilmentType", value: profitCalculatorData == null ? void 0 : profitCalculatorData.fulfilmentType, handleOnChange }),
      /* @__PURE__ */ jsx(
        InputSelect,
        {
          options: storageMonthsOptions,
          label: t2("Storage Months"),
          fieldName: "storageMonth",
          handleOnChange,
          value: (profitCalculatorData == null ? void 0 : profitCalculatorData.storageMonth) ?? 0,
          isDisabled: profitCalculatorData == null ? void 0 : profitCalculatorData.fulfilmentType,
          id: "storage_month",
          title: t2("Select for how many months you want to store inventory in Amazon's warehouse")
        }
      ),
      /* @__PURE__ */ jsx(RenderIf, { isTrue: marketplace === ukMarketPlace, children: /* @__PURE__ */ jsx(InputSelect, { options: vatDue, label: t2("VAT Scheme"), id: "vat_due", fieldName: "vatSelect", value: profitCalculatorData == null ? void 0 : profitCalculatorData.vatSelect, handleOnChange }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "hr mt-2" }),
    /* @__PURE__ */ jsxs(RenderIf, { isTrue: marketplace === ukMarketPlace && (profitCalculatorData == null ? void 0 : profitCalculatorData.vatSelect) == 1, children: [
      /* @__PURE__ */ jsx(
        InputToggle,
        {
          id: "vat_due",
          label: t2("VAT On Fees"),
          fieldName: "isFeeVatApplied",
          value: profitCalculatorData == null ? void 0 : profitCalculatorData.isFeeVatApplied,
          handleOnChange,
          style: { fontFamily: "Lato, sans-serif", fontSize: "12px" }
        }
      ),
      /* @__PURE__ */ jsx("hr", { className: "hr" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between my-2", children: [
      /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: t2("Profit Margin") }),
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: "fs-12 ah-custom-font-light",
          style: { color: profitCalculatorData.profitMargin === 0 || lodashExports.isNull(profitCalculatorData.profitMargin) ? "black" : profitCalculatorData.profitMargin > 0 ? "green" : "red" },
          id: "roiOfProfitCalculatorSpanText",
          children: [
            parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.profitMargin).toFixed(2) === "NaN" ? "∞" : parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.profitMargin).toFixed(2),
            " %"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "hr mb-2" }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between my-2", children: [
      /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: t2("Profit") }),
      /* @__PURE__ */ jsx("span", { className: "fs-12 ah-custom-font-light", style: { color: profitCalculatorData.profit > 0 ? "green" : "red" }, id: "profitOfProfitCalculatorSpan", children: currencySymbol + " " + parseFloat(profitCalculatorData.profit).toFixed(2) })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "hr mb-2" }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
      /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: t2("ROI") }),
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: "fs-12 ah-custom-font-light",
          style: { color: profitCalculatorData.ROI === 0 || lodashExports.isNull(profitCalculatorData.ROI) ? "black" : profitCalculatorData.ROI > 0 ? "green" : "red" },
          id: "roiOfProfitCalculatorSpanText",
          children: [
            parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.ROI).toFixed(2) === "NaN" ? "∞" : parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.ROI).toFixed(2),
            " %"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "hr mb-2" }),
    /* @__PURE__ */ jsxs(RenderIf, { isTrue: marketplace === ukMarketPlace, children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: t2("VAT Due") }),
        /* @__PURE__ */ jsx("span", { className: "fs-12 ah-custom-font-light", style: { color: "black" }, id: "vatOfProfitCalculator", children: currencySymbol + " " + parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.vatFees).toFixed(2) })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "hr mb-2" })
    ] }),
    /* @__PURE__ */ jsx(DetailPageInnerDropDowns, { id: "max_cost", value: profitCalculatorData == null ? void 0 : profitCalculatorData.maxCost, label: t2("Maximum Cost"), currencySymbol, children: /* @__PURE__ */ jsx("div", { className: "row pt-1", children: maxCostInputFieldValues.map((maxCostInputFieldValue, index) => /* @__PURE__ */ jsx(
      InputField,
      {
        symbol: maxCostInputFieldValue.symbol,
        label: maxCostInputFieldValue.label,
        id: maxCostInputFieldValue.id,
        fieldName: maxCostInputFieldValue.fieldName,
        value: maxCostInputFieldValue.value,
        handleOnChange
      },
      index
    )) }) }),
    /* @__PURE__ */ jsx("hr", { className: "hr my-2" }),
    /* @__PURE__ */ jsx(DetailPageInnerDropDowns, { id: "fee", label: t2("Total Fees"), value: profitCalculatorData == null ? void 0 : profitCalculatorData.totalFee, currencySymbol, children: totalFeeDataValues.map((totalFeeDataValue, index) => /* @__PURE__ */ jsx(
      TotalFeeData,
      {
        id: totalFeeDataValue.id,
        label: totalFeeDataValue.label,
        currencySymbol: totalFeeDataValue.currencySymbol,
        value: totalFeeDataValue.value,
        title: totalFeeDataValue.title
      },
      index
    )) }),
    /* @__PURE__ */ jsx("hr", { className: "hr mb-2" }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between my-2", children: [
      /* @__PURE__ */ jsx("span", { className: "fs-10 ah-custom-label", children: t2("Breakeven Price") }),
      /* @__PURE__ */ jsx("span", { className: "fs-12 ah-custom-font-light", id: "profitOfProfitCalculatorSpan", children: currencySymbol + " " + parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.breakEven).toFixed(2) })
    ] })
  ] });
};
async function getGoogleShoppingFromBackground(url, profitCalculatorData, productFees, marketplace, productCategory) {
  let { fulfilment_fee_distribution_xpaths: fulfilmentFeeDistributionXPaths } = await chrome.storage.local.get(["fulfilment_fee_distribution_xpaths"]);
  try {
    let detailPageGoogleShoppingResponse = await sendMessageForOffersAndGoogleShopping(url, false);
    const parser = new DOMParser();
    const offersDocument = parser.parseFromString(detailPageGoogleShoppingResponse, "text/html");
    let googleShoppingData = await getGoogleShoppingData(offersDocument || [], fulfilmentFeeDistributionXPaths["GoogleShoppingPaths"], profitCalculatorData, productFees, marketplace, productCategory);
    store.dispatch(setDetailPageData({ googleShoppingData, googleShoppingSuccess: true, googleShoppingLoading: false }));
  } catch (error) {
    store.dispatch(setDetailPageData({ googleShoppingData: [], googleShoppingSuccess: false, googleShoppingLoading: false }));
  }
}
async function getGoogleShoppingData(offersDocument, detailPageOffersXpath, profitCalculatorData, productFees, marketplace, productCategory) {
  let googleShoppingDataArray = [];
  for (let i2 = 0; i2 < detailPageOffersXpath["allGoogleShopping"].length; i2++)
    if (offersDocument.querySelectorAll(detailPageOffersXpath["allGoogleShopping"][i2]).length > 0)
      offersDocument = offersDocument.querySelectorAll(detailPageOffersXpath["allGoogleShopping"][i2]);
  if ((offersDocument == null ? void 0 : offersDocument.length) > 0) {
    let loopCount = detailPageOffersXpath["defaultNumberOfShopping"];
    if ((offersDocument == null ? void 0 : offersDocument.length) <= detailPageOffersXpath["defaultNumberOfShopping"])
      loopCount = offersDocument == null ? void 0 : offersDocument.length;
    for (let i2 = 0; i2 < loopCount; i2++) {
      googleShoppingDataArray.push(await getDataByXpathsForGoogleShopping(offersDocument[i2], detailPageOffersXpath));
    }
  }
  googleShoppingDataArray = await getOfferAndGoogleShoppingReferralAndFBA(googleShoppingDataArray, profitCalculatorData, productFees, marketplace, productCategory, false);
  return googleShoppingDataArray;
}
async function getDataByXpathsForGoogleShopping(offersDocument, detailPageOffersXpath) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let dataHash = { googleShoppingImage: void 0, googleShoppingTitle: void 0, salePrice: void 0, googleShoppingSeller: void 0, googleShoppingSellerName: void 0 };
  for (let i2 = 0; i2 < detailPageOffersXpath["maxCount"]; i2++) {
    if (!dataHash.googleShoppingImage && detailPageOffersXpath["googleShoppingImage"][i2] !== void 0)
      dataHash.googleShoppingImage = (_a = offersDocument == null ? void 0 : offersDocument.querySelector(detailPageOffersXpath["googleShoppingImage"][i2])) == null ? void 0 : _a.src;
    if (!dataHash.googleShoppingTitle && detailPageOffersXpath["googleShoppingTitle"][i2] !== void 0)
      dataHash.googleShoppingTitle = (_b = offersDocument == null ? void 0 : offersDocument.querySelector(detailPageOffersXpath["googleShoppingTitle"][i2])) == null ? void 0 : _b.textContent;
    if (!dataHash.salePrice && detailPageOffersXpath["googleShoppingSalePrice"][i2] !== void 0)
      dataHash.salePrice = parseFloat((_e = (_d = (_c = offersDocument == null ? void 0 : offersDocument.querySelector(detailPageOffersXpath["googleShoppingSalePrice"][i2])) == null ? void 0 : _c.textContent) == null ? void 0 : _d.replace(/,/g, "")) == null ? void 0 : _e.match(valueFromStringRegEx));
    if (!dataHash.googleShoppingSeller && detailPageOffersXpath["googleShoppingSeller"][i2] !== void 0)
      dataHash.googleShoppingSeller = (_f = offersDocument == null ? void 0 : offersDocument.querySelector(detailPageOffersXpath["googleShoppingSeller"][i2])) == null ? void 0 : _f.href;
    if (!dataHash.googleShoppingSellerName && detailPageOffersXpath["googleShoppingSellerName"][i2] !== void 0) {
      dataHash.googleShoppingSellerName = (_g = offersDocument == null ? void 0 : offersDocument.querySelector(detailPageOffersXpath["googleShoppingSellerName"][i2])) == null ? void 0 : _g.innerHTML;
      if (dataHash.googleShoppingSellerName.includes("</style>"))
        dataHash.googleShoppingSellerName = (_i = (_h = dataHash.googleShoppingSellerName) == null ? void 0 : _h.split("</style>")) == null ? void 0 : _i[1];
    }
  }
  return dataHash;
}
const DetailPageDropDowns = ({ compartmentPositions, setCompartmentPositions, apiAccessLevel }) => {
  const { reverseSearchData, currencySymbol, reverseSearchLoading, offersDataLoading, googleShoppingLoading, headerData, googleShoppingSuccess, marketplace, productFees, profitCalculatorData, productData } = useSelector((state) => state.DetailPage);
  const { t: t2 } = useTranslation();
  const handleChangePosition = async (dragId, dropId) => {
    const { compartmentPositions: previous } = await chrome.storage.local.get(["compartmentPositions"]);
    const updatedPositions = { ...previous, [dragId]: previous[dropId], [dropId]: previous[dragId] };
    chrome.storage.local.set({ compartmentPositions: updatedPositions });
    setCompartmentPositions(updatedPositions);
  };
  const getStyle = () => ({ borderBottom: "2px solid #F0F0F0" });
  reactExports.useEffect(() => {
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if (googleShoppingSuccess === null)
      getGoogleShoppingFromBackground((_a = googleLinkAndGoogleShoppingLink(headerData == null ? void 0 : headerData.productTitle, headerData.currentUrl)) == null ? void 0 : _a[1], profitCalculatorData, productFees, marketplace, productData == null ? void 0 : productData.productCategory);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column accordion product-accordion", id: "sortable", children: [
    /* @__PURE__ */ jsx(RenderIf, { isTrue: (apiAccessLevel == null ? void 0 : apiAccessLevel.all) || (apiAccessLevel == null ? void 0 : apiAccessLevel.reverse_search), children: /* @__PURE__ */ jsx("div", { className: `order-${compartmentPositions == null ? void 0 : compartmentPositions.reverse_search}`, style: getStyle(), children: /* @__PURE__ */ jsx(DropDown$1, { id: "reverse_search", collapseId: "Two", title: t2("Reverse Search"), handleChangePosition, children: /* @__PURE__ */ jsx("div", { className: "accordion-body profit-list pb-0 pt-0", children: /* @__PURE__ */ jsx("div", { className: "arbitrage-content border-0 m-0", children: /* @__PURE__ */ jsx(RenderIf, { isTrue: !reverseSearchLoading, fallback: /* @__PURE__ */ jsx(Loader, {}), children: /* @__PURE__ */ jsx(ReverseSearchTable, { stores: lodashExports.sortBy(reverseSearchData == null ? void 0 : reverseSearchData.products, (o2) => parseFloat(o2.price)), currencySymbol }) }) }) }) }) }) }),
    /* @__PURE__ */ jsx(RenderIf, { isTrue: apiAccessLevel == null ? void 0 : apiAccessLevel.all, children: /* @__PURE__ */ jsx("div", { className: `order-${compartmentPositions == null ? void 0 : compartmentPositions.profit_calculator}`, style: getStyle(), children: /* @__PURE__ */ jsx(DropDown$1, { id: "profit_calculator", collapseId: "One", title: t2("Profit Calculator"), handleChangePosition, children: /* @__PURE__ */ jsx("div", { className: "accordion-body profit-list pb-0", children: /* @__PURE__ */ jsx(ProfitCalculator, {}) }) }) }) }),
    /* @__PURE__ */ jsx(RenderIf, { isTrue: apiAccessLevel == null ? void 0 : apiAccessLevel.all, children: /* @__PURE__ */ jsx("div", { className: `order-${compartmentPositions == null ? void 0 : compartmentPositions.pricing_and_offerings}`, style: getStyle(), children: /* @__PURE__ */ jsx(DropDown$1, { id: "pricing_and_offerings", collapseId: "Three", title: t2("Pricing & Offers"), handleChangePosition, children: /* @__PURE__ */ jsx("div", { className: "accordion-body profit-list pb-0 pt-0", children: /* @__PURE__ */ jsx(
      RenderIf,
      {
        isTrue: !offersDataLoading,
        fallback: /* @__PURE__ */ jsx("div", { style: { height: "150px" }, children: /* @__PURE__ */ jsx(Loader, {}) }),
        children: /* @__PURE__ */ jsx(DetailPageOffers, {})
      }
    ) }) }) }) }),
    /* @__PURE__ */ jsx(RenderIf, { isTrue: apiAccessLevel == null ? void 0 : apiAccessLevel.all, children: /* @__PURE__ */ jsx("div", { className: `order-${compartmentPositions == null ? void 0 : compartmentPositions.google_shopping}`, style: getStyle(), children: /* @__PURE__ */ jsx(DropDown$1, { id: "google_shopping", collapseId: "Four", title: t2("Google Shopping Results"), handleChangePosition, children: /* @__PURE__ */ jsx("div", { className: "accordion-body profit-list pb-0 pt-0", children: /* @__PURE__ */ jsx(
      RenderIf,
      {
        isTrue: !googleShoppingLoading,
        fallback: /* @__PURE__ */ jsx("div", { style: { height: "150px" }, children: /* @__PURE__ */ jsx(Loader, {}) }),
        children: /* @__PURE__ */ jsx(DetailPageGoogleShopping, {})
      }
    ) }) }) }) })
  ] });
};
const DetailPageFooter = () => {
  const leftDockIcon = "/assets/icons/left-dock-icon.svg";
  const rightDockIcon = "/assets/icons/right-dock-icon.svg";
  const middleDockIcon = "/assets/icons/middle-dock-icon.svg";
  const draggableIcon = "/assets/icons/draggable-icon.svg";
  const sideDockIcon = "/assets/icons/side-dock-icon.svg";
  const [dockPosition, setDockPosition] = reactExports.useState(null);
  const handleChangePosition = async (position) => {
    if (dockPosition === position)
      return;
    document.getElementById("arbitrage-extension-grid").remove();
    await chrome.storage.local.set({ extensionPosition: position });
    AddElementIntoAmazonPage(false);
  };
  reactExports.useEffect(() => {
    chrome.storage.local.get(["extensionPosition"]).then(({ extensionPosition }) => setDockPosition(extensionPosition));
  }, []);
  const dockButtons = [
    { iconPath: leftDockIcon, title: "Left Dock", position: "left-dock" },
    { iconPath: rightDockIcon, title: "Right Dock", position: "right-dock" },
    { iconPath: middleDockIcon, title: "Middle Dock", position: "middle" },
    { iconPath: draggableIcon, title: "Draggable", position: "draggable" },
    { iconPath: sideDockIcon, title: "Reset to side dock", position: "side" }
  ];
  return /* @__PURE__ */ jsx("div", { style: { zIndex: 9999 }, children: /* @__PURE__ */ jsx("div", { style: { padding: "9px 0px" }, children: /* @__PURE__ */ jsx("div", { className: "d-flex gap-1 ", children: dockButtons.map((dockButton) => /* @__PURE__ */ jsx("span", { onClick: () => handleChangePosition(dockButton == null ? void 0 : dockButton.position), className: "ah-detail-page-dock-buttons", title: dockButton.title, children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(dockButton.iconPath), className: "ah-detail-page-dock-buttons", alt: dockButton.title }) })) }) }) });
};
const DetailPageHeader = ({ handleClassName = "" }) => {
  const arbitrageLogo = "./assets/images/arbitrageLogo.png";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `d-flex justify-content-center ${handleClassName}`,
      style: { borderBottom: "2px solid #EEEDED", cursor: "grab", alignItems: "center", padding: " 8px 0 8px 0  ", margin: " 0px 8px 0px 8px  " },
      children: /* @__PURE__ */ jsx("a", { href: "https://arbitragehero.com/", target: "_blank", rel: "noreferrer", style: { height: "16px" }, children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(arbitrageLogo), width: "60px", style: { pointerEvents: "none" } }) })
    }
  );
};
const DimensionsAndWeight = () => {
  const { productData } = useSelector((state) => state.DetailPage);
  return /* @__PURE__ */ jsxs("div", { className: "ah-detail-page-dimension-weight", children: [
    /* @__PURE__ */ jsx("span", { className: "ah-custom-label fs-10", children: "Dimensions" }),
    /* @__PURE__ */ jsxs("div", { className: "inner-text d-flex align-items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "ah-main-value d-flex align-items-center text-black", style: { borderRight: "1.5px solid rgb(225, 225, 225)", paddingRight: "6px", marginRight: "6px" }, children: parseFloat(productData == null ? void 0 : productData.length).toFixed(2) + " x " + parseFloat(productData == null ? void 0 : productData.width).toFixed(2) + " x " + parseFloat(productData == null ? void 0 : productData.height).toFixed(2) + " in" }),
      /* @__PURE__ */ jsx("span", { className: "ah-main-value text-black", children: (productData == null ? void 0 : productData.unitWeight.toFixed(2)) + " lbs" })
    ] })
  ] });
};
const ProductDetailTiles = ({ gridCols }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "row", style: { padding: "8px 0px", width: "calc(100% + 18px)" }, children: gridCols.map((gridCol) => {
      if (!(gridCol == null ? void 0 : gridCol.value) && gridCol.value !== 0)
        return;
      return /* @__PURE__ */ jsxs("div", { className: "col", children: [
        /* @__PURE__ */ jsx("div", { className: "ah-detail-page-gird_col_title fs-10", style: { marginBottom: "4px" }, children: gridCol == null ? void 0 : gridCol.title }),
        /* @__PURE__ */ jsxs("div", { className: "ah-detail-page-gird_col_value", style: (gridCol == null ? void 0 : gridCol.style) || {}, children: [
          " ",
          gridCol == null ? void 0 : gridCol.value
        ] })
      ] });
    }) }),
    /* @__PURE__ */ jsx("hr", { className: "hr " })
  ] });
};
const ProductDetailPageMainGridHeader = ({ data, extensionPosition }) => {
  var _a, _b;
  const [image, setImage] = reactExports.useState("");
  const { t: t2 } = useTranslation();
  const { productData, productInfo } = useSelector((state) => state.DetailPage);
  const { productTitle, imageXpath, currentUrl } = data;
  reactExports.useEffect(() => {
    for (const xPath of imageXpath) {
      let productImage = getElementByXpath(xPath).snapshotItem(0);
      if (productImage) {
        setImage(productImage.textContent);
        break;
      }
    }
  }, [data]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "d-flex ah-detail-page-products-heading mb-2", children: [
      /* @__PURE__ */ jsxs("h6", { children: [
        " ",
        t2("Overview")
      ] }),
      /* @__PURE__ */ jsx(GoogleLinks, { itemTitle: productTitle, currentUrl, fontSize: "12px" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ah-detail-page-product-titles", style: { marginBottom: "14px", alignItems: ["right-dock", "left-dock"].includes(extensionPosition) ? "center" : "start" }, children: [
      /* @__PURE__ */ jsx("img", { src: image, alt: "item", style: { maxWidth: "50px", maxHeight: "50px", objectFit: "contain" } }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-between ", style: { height: "32px" }, children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "ah-detail-page-title-ellipse", title: productTitle, children: productTitle }) }),
        /* @__PURE__ */ jsx(RenderIf, { isTrue: productData == null ? void 0 : productData.productCategory, children: /* @__PURE__ */ jsxs("div", { className: "inner-text", children: [
          /* @__PURE__ */ jsx("span", { className: "product-category-title", children: "By: " }),
          /* @__PURE__ */ jsx("span", { className: "ah-main-value", children: productData == null ? void 0 : productData.productCategory })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "inner-text", children: [
          /* @__PURE__ */ jsx("span", { className: "product-category-title", children: "Est. Monthly Sales: " }),
          /* @__PURE__ */ jsx("span", { className: "ah-main-value", children: (productInfo == null ? void 0 : productInfo.bsr) >= 1e8 || !/\d/.test(productInfo == null ? void 0 : productInfo.bsr) ? "N/A" : ((_a = productInfo == null ? void 0 : productInfo.sales) == null ? void 0 : _a.error) ? "N/A" : ((_b = productInfo == null ? void 0 : productInfo.sales) == null ? void 0 : _b.monthlySales) || 0 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "hr my-2", id: "small_and_light_main_div_upper_line" })
  ] });
};
const ProductDetailPageMainGrid = ({ extensionPosition, handleClassName }) => {
  var _a, _b;
  const [compartmentPositions, setCompartmentPositions] = reactExports.useState(null);
  const [apiKeyResponse, setApiKeyResponse] = reactExports.useState(null);
  const [position, setPosition] = reactExports.useState(extensionPosition);
  const { headerData, productInfo, asin, loading, success, profitCalculatorData, currencySymbol } = useSelector((state) => state.DetailPage);
  [
    { title: "Est. Monthly Sales", value: ((_a = productInfo == null ? void 0 : productInfo.sales) == null ? void 0 : _a.monthlySales) || 0 },
    { title: "Est. Daily Sales", value: ((_b = productInfo == null ? void 0 : productInfo.sales) == null ? void 0 : _b.dailySales) || 0 }
  ];
  const colorForProfitAndRoi = (value) => value === 0 || lodashExports.isNull(value) ? "" : value > 0 ? "green" : "red";
  const profitAndRoi = [
    { title: "Profit", "value": currencySymbol + " " + (parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.profit).toFixed(2) || 0), style: { color: colorForProfitAndRoi(profitCalculatorData == null ? void 0 : profitCalculatorData.profit) } },
    { title: "ROI", "value": ((parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.ROI).toFixed(2) === "NaN" ? "∞" : parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.ROI).toFixed(2)) || 0) + " %", "colorCheck": true, style: { color: colorForProfitAndRoi(profitCalculatorData == null ? void 0 : profitCalculatorData.ROI) } },
    { title: "Max cost", "value": currencySymbol + " " + (parseFloat(profitCalculatorData == null ? void 0 : profitCalculatorData.maxCost).toFixed(2) || 0), style: { marginBottom: "4px" } }
  ];
  reactExports.useEffect(() => {
    if (loading)
      return;
    if (success === null)
      fetchDetailPageData().then((res) => {
        if (res) {
          const { domain, asinElement, marketplace, productFees, profitCalculatorData: profitCalculatorData2, productCategory } = res;
          fetchOffersOfDetailPage(domain, asinElement, marketplace, productFees, profitCalculatorData2, productCategory);
        }
      });
    chrome.storage.local.get(["compartmentPositions"]).then((response) => {
      if (response.compartmentPositions === void 0) {
        const positionHash = {};
        for (let i2 = 0; i2 < detailPageDropDownsKeysIds.length; i2++)
          positionHash[detailPageDropDownsKeysIds[i2]] = i2;
        chrome.storage.local.set({ compartmentPositions: positionHash });
        setCompartmentPositions(positionHash);
      } else
        setCompartmentPositions(response.compartmentPositions);
    });
    chrome.storage.local.get(["apiKeyResponse"]).then((response) => setApiKeyResponse(response.apiKeyResponse));
  }, [loading]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "ah-detail-page-products-main",
      style: { position: "relative", maxHeight: "100%", height: `${extensionPosition === "side" || extensionPosition === "middle" ? "auto" : "100%"}`, width: `${extensionPosition === "side" ? "276px" : "100%"}` },
      children: [
        /* @__PURE__ */ jsx(DetailPageHeader, { handleClassName }),
        /* @__PURE__ */ jsx(
          RenderIf,
          {
            isTrue: !loading && position && (apiKeyResponse == null ? void 0 : apiKeyResponse.access) && success !== null && compartmentPositions != null,
            fallback: /* @__PURE__ */ jsx("div", { style: { height: extensionPosition === "side" || extensionPosition === "middle" ? "640px" : "100%" }, children: /* @__PURE__ */ jsx(Loader, {}) }),
            children: /* @__PURE__ */ jsxs(
              RenderIf,
              {
                isTrue: success,
                fallback: /* @__PURE__ */ jsx("div", { style: { height: extensionPosition === "side" || extensionPosition === "middle" ? "640px" : "100%" }, children: /* @__PURE__ */ jsx(ContactSupport, {}) }),
                children: [
                  /* @__PURE__ */ jsx("div", { style: { overflowY: "auto", maxHeight: `${extensionPosition === "side" || extensionPosition === "middle" ? "640px" : "calc(100% - 67px)"}` }, children: /* @__PURE__ */ jsxs("div", { style: { marginBottom: extensionPosition === "side" || extensionPosition === "middle" ? "30px" : "0%", width: "100%", padding: "8px" }, children: [
                    /* @__PURE__ */ jsx(RenderIf, { isTrue: headerData, children: /* @__PURE__ */ jsx(ProductDetailPageMainGridHeader, { data: headerData, extensionPosition }) }),
                    /* @__PURE__ */ jsx(BaseRatingComponent, { detailsResponse: productInfo, asin }),
                    /* @__PURE__ */ jsx("hr", { className: "hr my-1" }),
                    /* @__PURE__ */ jsx(DimensionsAndWeight, {}),
                    /* @__PURE__ */ jsx("hr", { className: "hr mt-1" }),
                    /* @__PURE__ */ jsx(ProductDetailTiles, { gridCols: profitAndRoi }),
                    /* @__PURE__ */ jsx(DetailPageDropDowns, { compartmentPositions, setCompartmentPositions, apiAccessLevel: apiKeyResponse == null ? void 0 : apiKeyResponse.access })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        backgroundColor: "#F9F9FB",
                        bottom: "-1px",
                        borderBottom: "1px solid rgb(255 153 0 / 50%)",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        left: 0,
                        width: "100%",
                        padding: "0px 9px 0px 9px"
                      },
                      children: /* @__PURE__ */ jsx(DetailPageFooter, {})
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
};
var __extends$1 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var rowSizeBase = {
  width: "100%",
  height: "10px",
  top: "0px",
  left: "0px",
  cursor: "row-resize"
};
var colSizeBase = {
  width: "10px",
  height: "100%",
  top: "0px",
  left: "0px",
  cursor: "col-resize"
};
var edgeBase = {
  width: "20px",
  height: "20px",
  position: "absolute"
};
var styles = {
  top: __assign$1(__assign$1({}, rowSizeBase), { top: "-5px" }),
  right: __assign$1(__assign$1({}, colSizeBase), { left: void 0, right: "-5px" }),
  bottom: __assign$1(__assign$1({}, rowSizeBase), { top: void 0, bottom: "-5px" }),
  left: __assign$1(__assign$1({}, colSizeBase), { left: "-5px" }),
  topRight: __assign$1(__assign$1({}, edgeBase), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
  bottomRight: __assign$1(__assign$1({}, edgeBase), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
  bottomLeft: __assign$1(__assign$1({}, edgeBase), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
  topLeft: __assign$1(__assign$1({}, edgeBase), { left: "-10px", top: "-10px", cursor: "nw-resize" })
};
var Resizer = (
  /** @class */
  function(_super) {
    __extends$1(Resizer2, _super);
    function Resizer2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.onMouseDown = function(e2) {
        _this.props.onResizeStart(e2, _this.props.direction);
      };
      _this.onTouchStart = function(e2) {
        _this.props.onResizeStart(e2, _this.props.direction);
      };
      return _this;
    }
    Resizer2.prototype.render = function() {
      return reactExports.createElement("div", { className: this.props.className || "", style: __assign$1(__assign$1({ position: "absolute", userSelect: "none" }, styles[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    };
    return Resizer2;
  }(reactExports.PureComponent)
);
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var DEFAULT_SIZE = {
  width: "auto",
  height: "auto"
};
var clamp = function(n2, min, max) {
  return Math.max(Math.min(n2, max), min);
};
var snap = function(n2, size) {
  return Math.round(n2 / size) * size;
};
var hasDirection = function(dir, target) {
  return new RegExp(dir, "i").test(target);
};
var isTouchEvent = function(event) {
  return Boolean(event.touches && event.touches.length);
};
var isMouseEvent = function(event) {
  return Boolean((event.clientX || event.clientX === 0) && (event.clientY || event.clientY === 0));
};
var findClosestSnap = function(n2, snapArray, snapGap) {
  if (snapGap === void 0) {
    snapGap = 0;
  }
  var closestGapIndex = snapArray.reduce(function(prev, curr, index) {
    return Math.abs(curr - n2) < Math.abs(snapArray[prev] - n2) ? index : prev;
  }, 0);
  var gap = Math.abs(snapArray[closestGapIndex] - n2);
  return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n2;
};
var getStringSize = function(n2) {
  n2 = n2.toString();
  if (n2 === "auto") {
    return n2;
  }
  if (n2.endsWith("px")) {
    return n2;
  }
  if (n2.endsWith("%")) {
    return n2;
  }
  if (n2.endsWith("vh")) {
    return n2;
  }
  if (n2.endsWith("vw")) {
    return n2;
  }
  if (n2.endsWith("vmax")) {
    return n2;
  }
  if (n2.endsWith("vmin")) {
    return n2;
  }
  return n2 + "px";
};
var getPixelSize = function(size, parentSize, innerWidth2, innerHeight2) {
  if (size && typeof size === "string") {
    if (size.endsWith("px")) {
      return Number(size.replace("px", ""));
    }
    if (size.endsWith("%")) {
      var ratio = Number(size.replace("%", "")) / 100;
      return parentSize * ratio;
    }
    if (size.endsWith("vw")) {
      var ratio = Number(size.replace("vw", "")) / 100;
      return innerWidth2 * ratio;
    }
    if (size.endsWith("vh")) {
      var ratio = Number(size.replace("vh", "")) / 100;
      return innerHeight2 * ratio;
    }
  }
  return size;
};
var calculateNewMax = function(parentSize, innerWidth2, innerHeight2, maxWidth, maxHeight, minWidth, minHeight) {
  maxWidth = getPixelSize(maxWidth, parentSize.width, innerWidth2, innerHeight2);
  maxHeight = getPixelSize(maxHeight, parentSize.height, innerWidth2, innerHeight2);
  minWidth = getPixelSize(minWidth, parentSize.width, innerWidth2, innerHeight2);
  minHeight = getPixelSize(minHeight, parentSize.height, innerWidth2, innerHeight2);
  return {
    maxWidth: typeof maxWidth === "undefined" ? void 0 : Number(maxWidth),
    maxHeight: typeof maxHeight === "undefined" ? void 0 : Number(maxHeight),
    minWidth: typeof minWidth === "undefined" ? void 0 : Number(minWidth),
    minHeight: typeof minHeight === "undefined" ? void 0 : Number(minHeight)
  };
};
var definedProps = [
  "as",
  "style",
  "className",
  "grid",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
];
var baseClassName = "__resizable_base__";
var Resizable = (
  /** @class */
  function(_super) {
    __extends(Resizable2, _super);
    function Resizable2(props) {
      var _this = _super.call(this, props) || this;
      _this.ratio = 1;
      _this.resizable = null;
      _this.parentLeft = 0;
      _this.parentTop = 0;
      _this.resizableLeft = 0;
      _this.resizableRight = 0;
      _this.resizableTop = 0;
      _this.resizableBottom = 0;
      _this.targetLeft = 0;
      _this.targetTop = 0;
      _this.appendBase = function() {
        if (!_this.resizable || !_this.window) {
          return null;
        }
        var parent = _this.parentNode;
        if (!parent) {
          return null;
        }
        var element = _this.window.document.createElement("div");
        element.style.width = "100%";
        element.style.height = "100%";
        element.style.position = "absolute";
        element.style.transform = "scale(0, 0)";
        element.style.left = "0";
        element.style.flex = "0 0 100%";
        if (element.classList) {
          element.classList.add(baseClassName);
        } else {
          element.className += baseClassName;
        }
        parent.appendChild(element);
        return element;
      };
      _this.removeBase = function(base) {
        var parent = _this.parentNode;
        if (!parent) {
          return;
        }
        parent.removeChild(base);
      };
      _this.ref = function(c2) {
        if (c2) {
          _this.resizable = c2;
        }
      };
      _this.state = {
        isResizing: false,
        width: typeof (_this.propsSize && _this.propsSize.width) === "undefined" ? "auto" : _this.propsSize && _this.propsSize.width,
        height: typeof (_this.propsSize && _this.propsSize.height) === "undefined" ? "auto" : _this.propsSize && _this.propsSize.height,
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      };
      _this.onResizeStart = _this.onResizeStart.bind(_this);
      _this.onMouseMove = _this.onMouseMove.bind(_this);
      _this.onMouseUp = _this.onMouseUp.bind(_this);
      return _this;
    }
    Object.defineProperty(Resizable2.prototype, "parentNode", {
      get: function() {
        if (!this.resizable) {
          return null;
        }
        return this.resizable.parentNode;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Resizable2.prototype, "window", {
      get: function() {
        if (!this.resizable) {
          return null;
        }
        if (!this.resizable.ownerDocument) {
          return null;
        }
        return this.resizable.ownerDocument.defaultView;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Resizable2.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Resizable2.prototype, "size", {
      get: function() {
        var width = 0;
        var height = 0;
        if (this.resizable && this.window) {
          var orgWidth = this.resizable.offsetWidth;
          var orgHeight = this.resizable.offsetHeight;
          var orgPosition = this.resizable.style.position;
          if (orgPosition !== "relative") {
            this.resizable.style.position = "relative";
          }
          width = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : orgWidth;
          height = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : orgHeight;
          this.resizable.style.position = orgPosition;
        }
        return { width, height };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Resizable2.prototype, "sizeStyle", {
      get: function() {
        var _this = this;
        var size = this.props.size;
        var getSize = function(key) {
          if (typeof _this.state[key] === "undefined" || _this.state[key] === "auto") {
            return "auto";
          }
          if (_this.propsSize && _this.propsSize[key] && _this.propsSize[key].toString().endsWith("%")) {
            if (_this.state[key].toString().endsWith("%")) {
              return _this.state[key].toString();
            }
            var parentSize = _this.getParentSize();
            var value = Number(_this.state[key].toString().replace("px", ""));
            var percent = value / parentSize[key] * 100;
            return percent + "%";
          }
          return getStringSize(_this.state[key]);
        };
        var width = size && typeof size.width !== "undefined" && !this.state.isResizing ? getStringSize(size.width) : getSize("width");
        var height = size && typeof size.height !== "undefined" && !this.state.isResizing ? getStringSize(size.height) : getSize("height");
        return { width, height };
      },
      enumerable: false,
      configurable: true
    });
    Resizable2.prototype.getParentSize = function() {
      if (!this.parentNode) {
        if (!this.window) {
          return { width: 0, height: 0 };
        }
        return { width: this.window.innerWidth, height: this.window.innerHeight };
      }
      var base = this.appendBase();
      if (!base) {
        return { width: 0, height: 0 };
      }
      var wrapChanged = false;
      var wrap = this.parentNode.style.flexWrap;
      if (wrap !== "wrap") {
        wrapChanged = true;
        this.parentNode.style.flexWrap = "wrap";
      }
      base.style.position = "relative";
      base.style.minWidth = "100%";
      base.style.minHeight = "100%";
      var size = {
        width: base.offsetWidth,
        height: base.offsetHeight
      };
      if (wrapChanged) {
        this.parentNode.style.flexWrap = wrap;
      }
      this.removeBase(base);
      return size;
    };
    Resizable2.prototype.bindEvents = function() {
      if (this.window) {
        this.window.addEventListener("mouseup", this.onMouseUp);
        this.window.addEventListener("mousemove", this.onMouseMove);
        this.window.addEventListener("mouseleave", this.onMouseUp);
        this.window.addEventListener("touchmove", this.onMouseMove, {
          capture: true,
          passive: false
        });
        this.window.addEventListener("touchend", this.onMouseUp);
      }
    };
    Resizable2.prototype.unbindEvents = function() {
      if (this.window) {
        this.window.removeEventListener("mouseup", this.onMouseUp);
        this.window.removeEventListener("mousemove", this.onMouseMove);
        this.window.removeEventListener("mouseleave", this.onMouseUp);
        this.window.removeEventListener("touchmove", this.onMouseMove, true);
        this.window.removeEventListener("touchend", this.onMouseUp);
      }
    };
    Resizable2.prototype.componentDidMount = function() {
      if (!this.resizable || !this.window) {
        return;
      }
      var computedStyle = this.window.getComputedStyle(this.resizable);
      this.setState({
        width: this.state.width || this.size.width,
        height: this.state.height || this.size.height,
        flexBasis: computedStyle.flexBasis !== "auto" ? computedStyle.flexBasis : void 0
      });
    };
    Resizable2.prototype.componentWillUnmount = function() {
      if (this.window) {
        this.unbindEvents();
      }
    };
    Resizable2.prototype.createSizeForCssProperty = function(newSize, kind) {
      var propsSize = this.propsSize && this.propsSize[kind];
      return this.state[kind] === "auto" && this.state.original[kind] === newSize && (typeof propsSize === "undefined" || propsSize === "auto") ? "auto" : newSize;
    };
    Resizable2.prototype.calculateNewMaxFromBoundary = function(maxWidth, maxHeight) {
      var boundsByDirection = this.props.boundsByDirection;
      var direction = this.state.direction;
      var widthByDirection = boundsByDirection && hasDirection("left", direction);
      var heightByDirection = boundsByDirection && hasDirection("top", direction);
      var boundWidth;
      var boundHeight;
      if (this.props.bounds === "parent") {
        var parent_1 = this.parentNode;
        if (parent_1) {
          boundWidth = widthByDirection ? this.resizableRight - this.parentLeft : parent_1.offsetWidth + (this.parentLeft - this.resizableLeft);
          boundHeight = heightByDirection ? this.resizableBottom - this.parentTop : parent_1.offsetHeight + (this.parentTop - this.resizableTop);
        }
      } else if (this.props.bounds === "window") {
        if (this.window) {
          boundWidth = widthByDirection ? this.resizableRight : this.window.innerWidth - this.resizableLeft;
          boundHeight = heightByDirection ? this.resizableBottom : this.window.innerHeight - this.resizableTop;
        }
      } else if (this.props.bounds) {
        boundWidth = widthByDirection ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
        boundHeight = heightByDirection ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
      }
      if (boundWidth && Number.isFinite(boundWidth)) {
        maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
      }
      if (boundHeight && Number.isFinite(boundHeight)) {
        maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
      }
      return { maxWidth, maxHeight };
    };
    Resizable2.prototype.calculateNewSizeFromDirection = function(clientX, clientY) {
      var scale = this.props.scale || 1;
      var resizeRatio = this.props.resizeRatio || 1;
      var _a = this.state, direction = _a.direction, original = _a.original;
      var _b = this.props, lockAspectRatio = _b.lockAspectRatio, lockAspectRatioExtraHeight = _b.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _b.lockAspectRatioExtraWidth;
      var newWidth = original.width;
      var newHeight = original.height;
      var extraHeight = lockAspectRatioExtraHeight || 0;
      var extraWidth = lockAspectRatioExtraWidth || 0;
      if (hasDirection("right", direction)) {
        newWidth = original.width + (clientX - original.x) * resizeRatio / scale;
        if (lockAspectRatio) {
          newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
        }
      }
      if (hasDirection("left", direction)) {
        newWidth = original.width - (clientX - original.x) * resizeRatio / scale;
        if (lockAspectRatio) {
          newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
        }
      }
      if (hasDirection("bottom", direction)) {
        newHeight = original.height + (clientY - original.y) * resizeRatio / scale;
        if (lockAspectRatio) {
          newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
        }
      }
      if (hasDirection("top", direction)) {
        newHeight = original.height - (clientY - original.y) * resizeRatio / scale;
        if (lockAspectRatio) {
          newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
        }
      }
      return { newWidth, newHeight };
    };
    Resizable2.prototype.calculateNewSizeFromAspectRatio = function(newWidth, newHeight, max, min) {
      var _a = this.props, lockAspectRatio = _a.lockAspectRatio, lockAspectRatioExtraHeight = _a.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a.lockAspectRatioExtraWidth;
      var computedMinWidth = typeof min.width === "undefined" ? 10 : min.width;
      var computedMaxWidth = typeof max.width === "undefined" || max.width < 0 ? newWidth : max.width;
      var computedMinHeight = typeof min.height === "undefined" ? 10 : min.height;
      var computedMaxHeight = typeof max.height === "undefined" || max.height < 0 ? newHeight : max.height;
      var extraHeight = lockAspectRatioExtraHeight || 0;
      var extraWidth = lockAspectRatioExtraWidth || 0;
      if (lockAspectRatio) {
        var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
        var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
        var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
        var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
        var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
        var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
        var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
        var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
        newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
        newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
      } else {
        newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
        newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
      }
      return { newWidth, newHeight };
    };
    Resizable2.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var parent_2 = this.parentNode;
        if (parent_2) {
          var parentRect = parent_2.getBoundingClientRect();
          this.parentLeft = parentRect.left;
          this.parentTop = parentRect.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds !== "string") {
        var targetRect = this.props.bounds.getBoundingClientRect();
        this.targetLeft = targetRect.left;
        this.targetTop = targetRect.top;
      }
      if (this.resizable) {
        var _a = this.resizable.getBoundingClientRect(), left = _a.left, top_1 = _a.top, right = _a.right, bottom = _a.bottom;
        this.resizableLeft = left;
        this.resizableRight = right;
        this.resizableTop = top_1;
        this.resizableBottom = bottom;
      }
    };
    Resizable2.prototype.onResizeStart = function(event, direction) {
      if (!this.resizable || !this.window) {
        return;
      }
      var clientX = 0;
      var clientY = 0;
      if (event.nativeEvent && isMouseEvent(event.nativeEvent)) {
        clientX = event.nativeEvent.clientX;
        clientY = event.nativeEvent.clientY;
      } else if (event.nativeEvent && isTouchEvent(event.nativeEvent)) {
        clientX = event.nativeEvent.touches[0].clientX;
        clientY = event.nativeEvent.touches[0].clientY;
      }
      if (this.props.onResizeStart) {
        if (this.resizable) {
          var startResize = this.props.onResizeStart(event, direction, this.resizable);
          if (startResize === false) {
            return;
          }
        }
      }
      if (this.props.size) {
        if (typeof this.props.size.height !== "undefined" && this.props.size.height !== this.state.height) {
          this.setState({ height: this.props.size.height });
        }
        if (typeof this.props.size.width !== "undefined" && this.props.size.width !== this.state.width) {
          this.setState({ width: this.props.size.width });
        }
      }
      this.ratio = typeof this.props.lockAspectRatio === "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
      var flexBasis;
      var computedStyle = this.window.getComputedStyle(this.resizable);
      if (computedStyle.flexBasis !== "auto") {
        var parent_3 = this.parentNode;
        if (parent_3) {
          var dir = this.window.getComputedStyle(parent_3).flexDirection;
          this.flexDir = dir.startsWith("row") ? "row" : "column";
          flexBasis = computedStyle.flexBasis;
        }
      }
      this.setBoundingClientRect();
      this.bindEvents();
      var state = {
        original: {
          x: clientX,
          y: clientY,
          width: this.size.width,
          height: this.size.height
        },
        isResizing: true,
        backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(event.target).cursor || "auto" }),
        direction,
        flexBasis
      };
      this.setState(state);
    };
    Resizable2.prototype.onMouseMove = function(event) {
      var _this = this;
      if (!this.state.isResizing || !this.resizable || !this.window) {
        return;
      }
      if (this.window.TouchEvent && isTouchEvent(event)) {
        try {
          event.preventDefault();
          event.stopPropagation();
        } catch (e2) {
        }
      }
      var _a = this.props, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, minWidth = _a.minWidth, minHeight = _a.minHeight;
      var clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
      var clientY = isTouchEvent(event) ? event.touches[0].clientY : event.clientY;
      var _b = this.state, direction = _b.direction, original = _b.original, width = _b.width, height = _b.height;
      var parentSize = this.getParentSize();
      var max = calculateNewMax(parentSize, this.window.innerWidth, this.window.innerHeight, maxWidth, maxHeight, minWidth, minHeight);
      maxWidth = max.maxWidth;
      maxHeight = max.maxHeight;
      minWidth = max.minWidth;
      minHeight = max.minHeight;
      var _c = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c.newHeight, newWidth = _c.newWidth;
      var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
      if (this.props.snap && this.props.snap.x) {
        newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
      }
      if (this.props.snap && this.props.snap.y) {
        newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
      }
      var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, { width: boundaryMax.maxWidth, height: boundaryMax.maxHeight }, { width: minWidth, height: minHeight });
      newWidth = newSize.newWidth;
      newHeight = newSize.newHeight;
      if (this.props.grid) {
        var newGridWidth = snap(newWidth, this.props.grid[0]);
        var newGridHeight = snap(newHeight, this.props.grid[1]);
        var gap = this.props.snapGap || 0;
        newWidth = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
        newHeight = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
      }
      var delta = {
        width: newWidth - original.width,
        height: newHeight - original.height
      };
      if (width && typeof width === "string") {
        if (width.endsWith("%")) {
          var percent = newWidth / parentSize.width * 100;
          newWidth = percent + "%";
        } else if (width.endsWith("vw")) {
          var vw = newWidth / this.window.innerWidth * 100;
          newWidth = vw + "vw";
        } else if (width.endsWith("vh")) {
          var vh = newWidth / this.window.innerHeight * 100;
          newWidth = vh + "vh";
        }
      }
      if (height && typeof height === "string") {
        if (height.endsWith("%")) {
          var percent = newHeight / parentSize.height * 100;
          newHeight = percent + "%";
        } else if (height.endsWith("vw")) {
          var vw = newHeight / this.window.innerWidth * 100;
          newHeight = vw + "vw";
        } else if (height.endsWith("vh")) {
          var vh = newHeight / this.window.innerHeight * 100;
          newHeight = vh + "vh";
        }
      }
      var newState = {
        width: this.createSizeForCssProperty(newWidth, "width"),
        height: this.createSizeForCssProperty(newHeight, "height")
      };
      if (this.flexDir === "row") {
        newState.flexBasis = newState.width;
      } else if (this.flexDir === "column") {
        newState.flexBasis = newState.height;
      }
      reactDomExports.flushSync(function() {
        _this.setState(newState);
      });
      if (this.props.onResize) {
        this.props.onResize(event, direction, this.resizable, delta);
      }
    };
    Resizable2.prototype.onMouseUp = function(event) {
      var _a = this.state, isResizing = _a.isResizing, direction = _a.direction, original = _a.original;
      if (!isResizing || !this.resizable) {
        return;
      }
      var delta = {
        width: this.size.width - original.width,
        height: this.size.height - original.height
      };
      if (this.props.onResizeStop) {
        this.props.onResizeStop(event, direction, this.resizable, delta);
      }
      if (this.props.size) {
        this.setState(this.props.size);
      }
      this.unbindEvents();
      this.setState({
        isResizing: false,
        backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: "auto" })
      });
    };
    Resizable2.prototype.updateSize = function(size) {
      this.setState({ width: size.width, height: size.height });
    };
    Resizable2.prototype.renderResizer = function() {
      var _this = this;
      var _a = this.props, enable = _a.enable, handleStyles = _a.handleStyles, handleClasses = _a.handleClasses, handleWrapperStyle = _a.handleWrapperStyle, handleWrapperClass = _a.handleWrapperClass, handleComponent = _a.handleComponent;
      if (!enable) {
        return null;
      }
      var resizers = Object.keys(enable).map(function(dir) {
        if (enable[dir] !== false) {
          return reactExports.createElement(Resizer, { key: dir, direction: dir, onResizeStart: _this.onResizeStart, replaceStyles: handleStyles && handleStyles[dir], className: handleClasses && handleClasses[dir] }, handleComponent && handleComponent[dir] ? handleComponent[dir] : null);
        }
        return null;
      });
      return reactExports.createElement("div", { className: handleWrapperClass, style: handleWrapperStyle }, resizers);
    };
    Resizable2.prototype.render = function() {
      var _this = this;
      var extendsProps = Object.keys(this.props).reduce(function(acc, key) {
        if (definedProps.indexOf(key) !== -1) {
          return acc;
        }
        acc[key] = _this.props[key];
        return acc;
      }, {});
      var style = __assign(__assign(__assign({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      if (this.state.flexBasis) {
        style.flexBasis = this.state.flexBasis;
      }
      var Wrapper = this.props.as || "div";
      return reactExports.createElement(
        Wrapper,
        __assign({ ref: this.ref, style, className: this.props.className }, extendsProps),
        this.state.isResizing && reactExports.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    };
    Resizable2.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true
      },
      style: {},
      grid: [1, 1],
      lockAspectRatio: false,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    };
    return Resizable2;
  }(reactExports.PureComponent)
);
const DraggableComponent = ({ extensionPosition }) => {
  const [size, setSize] = reactExports.useState({ width: 276, height: 500 });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Draggable$1, { handle: ".handle", children: /* @__PURE__ */ jsx(
    Resizable,
    {
      size: { width: size.width, height: size.height },
      minWidth: 285,
      maxWidth: 500,
      maxHeight: 800,
      minHeight: 257,
      onResizeStop: (e2, direction, ref, d2) => {
        e2.preventDefault();
        e2.stopPropagation();
        setSize({
          width: size.width + d2.width,
          height: size.height + d2.height
        });
      },
      children: /* @__PURE__ */ jsx("div", { style: { height: "100%", width: "100%" }, children: /* @__PURE__ */ jsx(ProductDetailPageMainGrid, { handleClassName: "handle", extensionPosition }) })
    }
  ) }) });
};
async function AddElementIntoAmazonPage(resetState = true) {
  let intervalCount = 0;
  const maxCount = 5;
  const id = setInterval(async () => {
    try {
      let arbitrageDoc = null;
      let extensionPositionDock, detailPageMiddleContainer, detailPageSubContainerXPaths, pageNotFoundXpath;
      try {
        let { extensionPosition } = await chrome.storage.local.get(["extensionPosition"]);
        const { detail_page_middle_container, detail_page_subcontainer, page_not_found } = await chrome.storage.local.get([
          "detail_page_middle_container",
          "detail_page_subcontainer",
          "page_not_found"
        ]);
        pageNotFoundXpath = page_not_found;
        extensionPositionDock = extensionPosition;
        detailPageMiddleContainer = detail_page_middle_container;
        detailPageSubContainerXPaths = detail_page_subcontainer;
      } catch (error) {
        chrome.storage.local.set({ extensionPosition: "draggable" });
        clearInterval(id);
        return;
      }
      if (intervalCount === maxCount) {
        chrome.storage.local.set({ extensionPosition: "draggable" });
        clearInterval(id);
      }
      if (!extensionPositionDock)
        chrome.storage.local.set({ extensionPositionDock: "side" });
      extensionPositionDock = extensionPositionDock ?? "side";
      if (extensionPositionDock === "side")
        arbitrageDoc = await findContainerToAppendGridInto(detailPageSubContainerXPaths);
      else if (extensionPositionDock === "middle")
        arbitrageDoc = await findContainerToAppendGridInto(detailPageMiddleContainer ?? detailPageSubContainerXPaths);
      else {
        if (pageNotFoundXpath) {
          const pageNotFound = getElementByXpath(pageNotFoundXpath);
          if (pageNotFound.snapshotLength)
            return clearInterval(id);
        }
        arbitrageDoc = document.getElementsByTagName("body")[0];
      }
      if (arbitrageDoc) {
        clearInterval(id);
        addingArbitrageMainGridToDetailPage(arbitrageDoc, extensionPositionDock, resetState);
      }
      intervalCount++;
    } catch (error) {
      clearInterval(id);
    }
  }, 500);
}
const getComponentToRender = (position) => {
  if (position === "draggable")
    return /* @__PURE__ */ jsx(DraggableComponent, { extensionPosition: position });
  return /* @__PURE__ */ jsx(ProductDetailPageMainGrid, { extensionPosition: position });
};
async function addingArbitrageMainGridToDetailPage(arbitrageDoc, position, resetState = true) {
  var _a;
  let language = document.getElementsByTagName("html")[0].lang;
  language = language.split("-");
  language[1] = (_a = language[1]) == null ? void 0 : _a.toUpperCase();
  instance.changeLanguage(language.join("-"));
  let container = document.createElement("div");
  container.id = "arbitrage-extension-grid";
  container.className = `ah-detail-page-${position}`;
  const asin = await getProductAsin(window.location.href);
  if (asin === void 0)
    return;
  if (arbitrageDoc.firstChild.id === container.id || document.getElementById("arbitrage-extension-grid")) {
    if (asin !== store.getState().DetailPage.asin) {
      container = document.getElementById("arbitrage-extension-grid");
    } else
      return;
  }
  store.dispatch(setDetailPageData({ asin }));
  if (arbitrageDoc.tagName === "BODY")
    arbitrageDoc.className = `ah-detail-page-${position}-document-body`;
  else
    document.getElementsByTagName("BODY")[0].className = "";
  resetState && store.dispatch(resetDetailPageData());
  arbitrageDoc.prepend(container);
  createRoot(container).render(/* @__PURE__ */ jsx(Provider, { store, children: getComponentToRender(position) }));
}
const store_page = "";
const StoreDataDetails = ({ image, title, value, color }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("span", { children: [
      /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(image), alt: "line chart", className: "ah-stores-check-img", width: "16px", height: "16px" }),
      /* @__PURE__ */ jsx("span", { children: title })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `ah-stores-${color}`, children: value })
  ] });
};
const StoreHeader = () => {
  const arbitrageLogo = "/assets/images/arbitrageLogo.png";
  const bxCircle = "/assets/icons/bx-x-circle.svg";
  const handleCrossClick = async () => {
    try {
      let documentBody = document.getElementsByTagName("body")[0];
      documentBody.id = "";
      let customDivContainer = document.getElementById("ah-stores-custom-sidebar");
      documentBody.removeChild(customDivContainer);
      await chrome.storage.local.set({ store_container_is_appended: false });
    } catch (error) {
      console.log("Error in crossImageActionToRemoveAppendedContainer", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "ah-stores-header", children: [
    /* @__PURE__ */ jsx("a", { href: "https://arbitragehero.com", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx("div", { className: "span", children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(arbitrageLogo), alt: "item", width: "100px" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "span", id: "cross_image_span", style: { cursor: "pointer" }, onClick: () => handleCrossClick(), children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(bxCircle), alt: "close" }) })
  ] });
};
const StorePageMain = ({ storeData, storeLogInStatus, headerText }) => {
  const arbitrageLogo = "/assets/icons/aqbitrag-small-logo.svg";
  const bxLinkExternal = "/assets/icons/bx-link-external.svg";
  const bxPackage = "/assets/icons/bx-package.svg";
  const bxLineChart = "/assets/icons/bx-line-chart.svg";
  const bxLineChartYellow = "/assets/icons/bx-line-chart-yellow.svg";
  const bxLineChartDown = "/assets/icons/bx-line-chart-down.svg";
  const [isFormOpen, setIsFormOpen] = reactExports.useState(storeLogInStatus);
  const [loginHeaderText, setLoginHeaderText] = reactExports.useState(headerText);
  const handleFormOpen = (value) => {
    setIsFormOpen(value);
    chrome.storage.local.set({ store_log_in_status: value });
  };
  const handleChangeLoginHeader = () => getLoginCurrentStatus().then((res) => setLoginHeaderText(res));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "ah-stores-main", children: [
    /* @__PURE__ */ jsx(StoreHeader, {}),
    /* @__PURE__ */ jsxs("div", { className: "ah-stores-content", children: [
      /* @__PURE__ */ jsx(RenderIf, { isTrue: !isFormOpen, fallback: /* @__PURE__ */ jsx(APIValidationMain, { isPopUp: false, setIsFormOpen: handleFormOpen, handleChangeLoginHeader }), children: /* @__PURE__ */ jsx("div", { id: "login-heading", style: { marginBottom: "16px" }, onClick: () => handleFormOpen(true), children: /* @__PURE__ */ jsx("span", { id: "span_show_the_login_status_text", className: "ah-stores-hover-span", style: { textDecoration: "underline", color: "rgb(255, 153, 0)", fontSize: "14px", fontWeight: "bold" }, children: loginHeaderText }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "ah-stores-content-top", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: `https://www.google.com/s2/favicons?domain=www.${storeData.domain}`, alt: "item", width: "15px", height: "15px" }),
          /* @__PURE__ */ jsx("span", { children: storeData.name })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "https://app.arbitragehero.com/?action=online_arbitrage&ID=411", target: "_blank", style: { paddingTop: "10px" }, rel: "noreferrer", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(arbitrageLogo), alt: "Arbitrage store" }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("img", { src: chrome.runtime.getURL(bxLinkExternal), alt: "link" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ah-stores-content-bottom", children: [
        /* @__PURE__ */ jsx(StoreDataDetails, { title: "Total Products", color: "blue", image: bxPackage, value: storeData == null ? void 0 : storeData.available_products.total }),
        /* @__PURE__ */ jsx(StoreDataDetails, { title: "High Score", color: "green", image: bxLineChart, value: storeData == null ? void 0 : storeData.available_products.high }),
        /* @__PURE__ */ jsx(StoreDataDetails, { title: "Medium Score", color: "yellow", image: bxLineChartYellow, value: storeData == null ? void 0 : storeData.available_products.medium }),
        /* @__PURE__ */ jsx(StoreDataDetails, { title: "Low Score", color: "red", image: bxLineChartDown, value: storeData == null ? void 0 : storeData.available_products.low })
      ] })
    ] })
  ] }) });
};
const getStoreStatus = async () => {
  try {
    if ((document == null ? void 0 : document.getElementById("ah-stores-custom-sidebar")) === null) {
      let { registered_stores_by_arbitrage: registeredStoresByArbitrage } = await chrome.storage.local.get(["registered_stores_by_arbitrage"]);
      let currentUrl, desiredHash, stores, hostName;
      if (registeredStoresByArbitrage === void 0) {
        let registeredStoresByArbitrage2 = await chrome.runtime.sendMessage({ getAllStoresDataByArbitrage: true });
        await chrome.storage.local.set({ registered_stores_by_arbitrage: registeredStoresByArbitrage2 });
      }
      currentUrl = window.location.href;
      hostName = window.location.hostname;
      stores = registeredStoresByArbitrage == null ? void 0 : registeredStoresByArbitrage.stores;
      const matcher = (txt) => currentUrl.includes(txt);
      if (stores !== void 0 && !matcher("amazon") && !otherUrlCheck.some(matcher)) {
        desiredHash = stores.find((store2) => hostName.includes(store2.domain));
        if (desiredHash !== void 0) {
          await chrome.storage.local.set({ store_container_is_appended: true });
          return desiredHash;
        }
      }
    }
    return false;
  } catch (error) {
    console.log("Error in store page: ", error);
    return false;
  }
};
async function addingArbitrageToStorePage() {
  const isStorePage = await getStoreStatus();
  if (!isStorePage)
    return;
  const { store_log_in_status: storeLogInStatus } = await chrome.storage.local.get(["store_log_in_status"]);
  const headerText = await getLoginCurrentStatus();
  const container = document.createElement("div");
  const documentBody = document.getElementsByTagName("body")[0];
  container.id = "ah-stores-custom-sidebar";
  documentBody.id = "ah-stores-document-body";
  documentBody.prepend(container);
  createRoot(container).render(
    /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(StorePageMain, { storeData: isStorePage, storeLogInStatus, headerText }) })
  );
}
async function getLoginCurrentStatus() {
  const { apiKeyResponse: api_key_response } = await chrome.storage.local.get(["apiKeyResponse"]);
  const { apiKey } = await chrome.storage.local.get(["apiKey"]);
  if (api_key_response) {
    const response = await chrome.runtime.sendMessage({
      checkApiKeyValidation: true,
      apiKey
    });
    if (response.license) {
      return "API Key Info";
    } else {
      return "Login to Arbitrage Extension";
    }
  } else {
    return "Login to Arbitrage Extension";
  }
}
chrome.runtime.onMessage.addListener(function(request) {
  if (request.message === "product_detail_page_app") {
    chrome.runtime.sendMessage({
      clear_interval: true,
      intervalId: request.intervalId
    });
    AddElementIntoAmazonPage();
  } else if (request.message === "amazon_list_page_app") {
    chrome.runtime.sendMessage({
      clear_interval: true,
      intervalId: request.intervalId
    });
    AddElementIntoAmazonListPage();
  } else if (request.message === "store_page_app")
    addingArbitrageToStorePage();
  request.message === "product_detail_page_loader" && store.dispatch(setDetailPageLoader(request.loader));
  request.message === "amazon_list_page_loader" && store.dispatch(setListPageLoader(request.loader));
});
