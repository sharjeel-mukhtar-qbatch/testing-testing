import React, { useRef } from 'react';

import RenderIf from '../../commons/RenderIf';

const ApiKeyForm = ({ handleApiKeySubmit, isError, errorMsg, isPopUp }) => {
  const exclamationCircleSVG = '/assets/icons/ExclamationCircle.svg';

  const apiKeyInputRef = useRef(null);

  return (
    <>
      <div className="ah-api-enter_api_key">
        <h6>Enter an API key{isPopUp ? ' to activate extension' : ''}:</h6>
      </div>
      <div className="ah-api-input-status">
        <RenderIf isTrue={isError}>
          <div className="status error">
            <span>
              <img src={chrome.runtime.getURL(exclamationCircleSVG)} style={{ marginRight: 4 }} />
              {errorMsg}
            </span>
          </div>
        </RenderIf>
        <div className="ah-api-enter_api_key">
          <input ref={apiKeyInputRef} placeholder="API Key Here" className="ah-api-input-control" id="api_key" />
        </div>
      </div>
      <div className="ah-api-enter_api_key" data-action="api_key_submit">
        <button
          className="ah-api-active-button"
          onClick={async () => {
            await handleApiKeySubmit(apiKeyInputRef.current.value);
            apiKeyInputRef.current.value = null;
          }}
        >
          Activate Extension
        </button>
      </div>
      <span className="ah-api-footer-button ah-api-enter_api_key">
        {isPopUp ? 'Don’t have an API key? ' : ''}
        <a href="https://arbitragehero.com" target="_blank" rel="noreferrer">
          Click here to get one.
        </a>
      </span>
    </>
  );
};

export default ApiKeyForm;
