import React from 'react';

const ValidApiKey = () => {
  const checkCircleSVG = '/assets/icons/CheckCircle.svg';

  return (
    <>
      <div className="ah-api-input-status">
        <div className="status success">
          <span>
            <img src={chrome.runtime.getURL(checkCircleSVG)} style={{ marginRight: 4 }} />
            Valid API key.
          </span>
        </div>
      </div>

      <span className="ah-api-footer-button" id="footer-text">
        <a href="https://arbitragehero.com" target="_blank" rel="noreferrer">
          Click here to learn more
        </a>
      </span>
    </>
  );
};

export default ValidApiKey;
