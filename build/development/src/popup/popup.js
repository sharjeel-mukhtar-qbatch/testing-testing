import { c as createRoot, j as jsx, A as APIValidationMain } from "../../assets/chunk-client.js";
import { o as otherUrlCheck } from "../../assets/chunk-constants.js";
const popup = "";
const App = () => /* @__PURE__ */ jsx(APIValidationMain, {});
chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
  let tabId = tabs[0].id;
  const matcher = (txt) => tabs[0].url.includes(txt);
  if (!tabs[0].url.includes("amazon") && !otherUrlCheck.some(matcher)) {
    const { store_container_is_appended: isStorePageAppended } = await chrome.storage.local.get(["store_container_is_appended"]);
    if (!isStorePageAppended) {
      chrome.scripting.insertCSS({ target: { tabId }, files: ["assets/main.css"] });
      chrome.tabs.sendMessage(tabId, { message: "store_page_app" }).catch((error) => {
        if (error.message !== "Could not establish connection. Receiving end does not exist.")
          console.log(error);
      });
    }
    window.close();
  } else
    createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(App, {}));
});
