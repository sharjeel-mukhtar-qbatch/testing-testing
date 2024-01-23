import React from 'react';

const Header = () => {
  const arbitrageLogo = 'assets/images/arbitrageLogo.png';

  return (
    <>
      <div className="ah-stores-header">
        <a href="https://arbitragehero.com/" target="_blank" rel="noreferrer">
          <img src={chrome.runtime.getURL(arbitrageLogo)} width="70px" />
        </a>
      </div>
    </>
  );
};

export default Header;
