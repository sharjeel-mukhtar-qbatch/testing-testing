import React, { useEffect, useState } from 'react';

import ApiKeyForm from './components/ApiKeyForm.jsx';
import CrossAPIForm from '../content/store_page/components/CrossAPIForm.jsx';
import Header from './components/Header.jsx';
import NoInternet from './components/NoInternet.jsx';
import RenderIf from '../commons/RenderIf.jsx';
import ValidApiKey from './components/ValidApiKey.jsx';

const APIValidationMain = ({ isPopUp = true, setIsFormOpen, handleChangeLoginHeader }) => {
  const [ apiKeyResponse, setApiKeyResponse ] = useState(null);
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ loader, setLoader ] = useState(false);

  const handleApiKeySubmit = async apiKey => {
    const response = await chrome.runtime.sendMessage({
      checkApiKeyValidation: true,
      apiKey,
    });

    if (response.license) {
      if (isPopUp) {
        chrome.tabs.query({ currentWindow: true }, function (tabs) {
          for (const tab of tabs) {
            tab.url.includes('https://www.amazon') && chrome.tabs.reload(tab.id);
          }
        });
        window.close();
      } else {
        setLoader(true);
        chrome.storage.local.get([ 'keyExpired', 'apiKeyResponse' ]).then(result => {
          if (result.keyExpired) {
            setErrorMsg('API Key has Expired!');
          }

          setApiKeyResponse(result.apiKeyResponse);
          handleChangeLoginHeader();
          setLoader(false);
        });
      }
    } else {
      setErrorMsg('Invalid API key please try again.');
      setApiKeyResponse(response);
    }
  };

  useEffect(() => {
    setLoader(true);
    chrome.storage.local.get([ 'keyExpired', 'apiKeyResponse' ]).then(result => {
      if (result.keyExpired) {
        setErrorMsg('API Key has Expired!');
      }

      setApiKeyResponse(result.apiKeyResponse);
      setLoader(false);
    });
  }, []);

  return (
    <div className="ah-api-key-page">
      <RenderIf isTrue={isPopUp}>
        <Header />
      </RenderIf>
      <RenderIf isTrue={navigator.onLine} fallback={<NoInternet />}>
        <RenderIf
          isTrue={!loader}
          fallback={
            <div className="ah-api-key-body">
              <div className="ah-loader_main">
                <div className="ah-loader"></div>
              </div>
            </div>
          }
        >
          <div className="ah-api-key-body">
            <RenderIf isTrue={!isPopUp}>
              <CrossAPIForm setIsFormOpen={setIsFormOpen} />
            </RenderIf>
            <RenderIf isTrue={!apiKeyResponse?.license} fallback={<ValidApiKey />}>
              <ApiKeyForm handleApiKeySubmit={handleApiKeySubmit} isPopUp={isPopUp} isError={errorMsg != null} errorMsg={errorMsg} />
            </RenderIf>
          </div>
        </RenderIf>
      </RenderIf>
    </div>
  );
};

export default APIValidationMain;
