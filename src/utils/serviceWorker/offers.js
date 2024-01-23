import { getOffersForDetailPage } from './api'

export async function fetchDetailPageOffersAndGoogleShopping(apiEndpoint, tabIdOfCurrentWindow, offersCheck = false) {
  if (offersCheck) {
    let offerData = await getOffersForDetailPage(apiEndpoint)

    if (offerData) return offerData;
  }
  try {
    const window = await chrome.windows.create({ url: apiEndpoint, focused: false, });
    chrome.windows.update(window.id, { width: 0, height: 0 });
    const tab = await chrome.tabs.query({ windowId: window.id });

    await new Promise(resolve => setTimeout(resolve, 5000));
    await chrome.storage.local.get('TabIdsForBackgroundWindows', async result => {
      if (result.TabIdsForBackgroundWindows) {
        result.TabIdsForBackgroundWindows[`${tabIdOfCurrentWindow}`] = window.id;
        await chrome.storage.local.set({ TabIdsForBackgroundWindows: result.TabIdsForBackgroundWindows });
      } else {
        await chrome.storage.local.set({ TabIdsForBackgroundWindows: { tabIdOfCurrentWindow: window.id } });
      }
    });
    if (tab && tab.length > 0) {
      const result = await chrome.scripting.executeScript({ target: { tabId: tab[0].id }, function: () => { return document.body.innerHTML; }, });

      if (result && result[0]) {
        chrome.windows.remove(window.id).catch(err => console.log('Error While Closing Window', err));
        return result[0].result;
      } else await chrome.windows.remove(window.id).catch(err => console.log('Error While Closing Window', err));
    } else await chrome.windows.remove(window.id).catch(err => console.log('Error While Closing Window', err));
    await onTabRemove(tabIdOfCurrentWindow);
  } catch (error) {
    console.log('Error in fetching detail page Google Shopping data.', error);
  }
}

export async function onTabRemove (tabId, checkForListener = false) {
  try {
    await chrome.storage.local.get('TabIdsForBackgroundWindows', async result => {
      if (result.TabIdsForBackgroundWindows) {
        if (result.TabIdsForBackgroundWindows[`${tabId}`]) {
          if (checkForListener) chrome.windows.remove(result.TabIdsForBackgroundWindows[`${tabId}`]).catch(err => console.log('Error While Closing Window', err));
          delete result.TabIdsForBackgroundWindows[`${tabId}`];
          await chrome.storage.local.set({ TabIdsForBackgroundWindows: result.TabIdsForBackgroundWindows });
        }
      }
    });
  } catch (error) {
    console.log('On remove listener error');
  }
}
