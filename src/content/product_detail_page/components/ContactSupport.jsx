import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSupport = () => {
  const noConnectionSVG = './assets/icons/no-connection.svg';

  const { t } = useTranslation();

  return (
    <div className="ah-detail-page-data">
      <div>
        <img src={chrome.runtime.getURL(noConnectionSVG)} alt="item" width="250px" height="45px" />
        <span style={{ fontWeight: 'bold', color: 'darkgrey', display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>{t('Please Contact Support!')}</span>
      </div>
    </div>
  );
};

export default ContactSupport;
