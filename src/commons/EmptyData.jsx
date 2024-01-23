import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyData = ({ message = 'Results not found' }) => {
  const noConnectionSVG = './assets/icons/no-connection.svg';

  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column  align-items-center ">
      <img src={chrome.runtime.getURL(noConnectionSVG)} alt="item" width="250px" height="45px" />
      <span style={{ fontWeight: 'bold', color: 'darkgrey', display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>{t(message)}</span>
    </div>
  );
};

export default EmptyData;
