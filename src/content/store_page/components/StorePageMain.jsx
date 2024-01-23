import React, { useEffect, useState } from 'react';

import APIValidationMain from '../../../apiKeyValidation/APIValidationMain';
import RenderIf from '../../../commons/RenderIf';
import StoreDataDetails from './StoreDataDetails';
import StoreHeader from './StoreHeader';
import { getLoginCurrentStatus } from '../store_page_app';

const StorePageMain = ({ storeData, storeLogInStatus, headerText }) => {
  const arbitrageLogo = '/assets/icons/aqbitrag-small-logo.svg';
  const bxLinkExternal = '/assets/icons/bx-link-external.svg';
  const bxPackage = '/assets/icons/bx-package.svg';
  const bxLineChart = '/assets/icons/bx-line-chart.svg';
  const bxLineChartYellow = '/assets/icons/bx-line-chart-yellow.svg';
  const bxLineChartDown = '/assets/icons/bx-line-chart-down.svg';

  const [ isFormOpen, setIsFormOpen ] = useState(storeLogInStatus);
  const [ loginHeaderText, setLoginHeaderText ] = useState(headerText);

  const handleFormOpen = value => {
    setIsFormOpen(value);

    chrome.storage.local.set({ store_log_in_status: value });
  };

  const handleChangeLoginHeader = () => getLoginCurrentStatus().then(res => setLoginHeaderText(res));

  return (
    <div>
      <div className="ah-stores-main">
        <StoreHeader />
        <div className="ah-stores-content">
          <RenderIf isTrue={!isFormOpen} fallback={<APIValidationMain isPopUp={false} setIsFormOpen={handleFormOpen} handleChangeLoginHeader={handleChangeLoginHeader} />}>
            <div id="login-heading" style={{ marginBottom: '16px' }} onClick={() => handleFormOpen(true)}>
              <span id="span_show_the_login_status_text" className="ah-stores-hover-span" style={{ textDecoration: 'underline', color: 'rgb(255, 153, 0)', fontSize: '14px', fontWeight: 'bold' }}>
                {loginHeaderText}
              </span>
            </div>
          </RenderIf>
          <div className="ah-stores-content-top">
            <div>
              <img src={`https://www.google.com/s2/favicons?domain=www.${storeData.domain}`} alt="item" width="15px" height="15px" />
              <span>{storeData.name}</span>
            </div>
            <a href="https://app.arbitragehero.com/?action=online_arbitrage&amp;ID=411" target="_blank" style={{ paddingTop: '10px' }} rel="noreferrer">
              <div>
                <span>
                  <img src={chrome.runtime.getURL(arbitrageLogo)} alt="Arbitrage store" />
                </span>
                <span>
                  <img src={chrome.runtime.getURL(bxLinkExternal)} alt="link" />
                </span>
              </div>
            </a>
          </div>
          <div className="ah-stores-content-bottom">
            <StoreDataDetails title="Total Products" color="blue" image={bxPackage} value={storeData?.available_products.total} />
            <StoreDataDetails title="High Score" color="green" image={bxLineChart} value={storeData?.available_products.high} />
            <StoreDataDetails title="Medium Score" color="yellow" image={bxLineChartYellow} value={storeData?.available_products.medium} />
            <StoreDataDetails title="Low Score" color="red" image={bxLineChartDown} value={storeData?.available_products.low} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePageMain;
