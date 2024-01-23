import React from 'react';

const DetailPageHeader = ({ handleClassName = '' }) => {
  const arbitrageLogo = './assets/images/arbitrageLogo.png';

  return (
    <div
      className={`d-flex justify-content-center ${handleClassName}`}
      style={{ borderBottom: '2px solid #EEEDED', cursor: 'grab', alignItems: 'center', padding: ' 8px 0 8px 0  ', margin: ' 0px 8px 0px 8px  ' }}
    >
      <a href="https://arbitragehero.com/" target="_blank" rel="noreferrer" style={{ height: '16px' }}>
        <img src={chrome.runtime.getURL(arbitrageLogo)} width={'60px'} style={{ pointerEvents: 'none' }} />
      </a>
    </div>
  );
};

export default DetailPageHeader;
