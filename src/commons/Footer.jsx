import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = ({ imageSize, children }) => {
  const arbitrageLogo = './assets/images/arbitrageLogo.png';

  const { t } = useTranslation();

  return (
    <div className="ah-content-footer">
      <div>{children}</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="poweredBy">{t('Powered by')}:</span>
        <a href="https://arbitragehero.com/" target="_blank" rel="noreferrer" style={{ height: '15px' }}>
          <img src={chrome.runtime.getURL(arbitrageLogo)} width={imageSize} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
