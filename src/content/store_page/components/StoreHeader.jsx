import React from 'react';

const StoreHeader = () => {
  const arbitrageLogo = '/assets/images/arbitrageLogo.png';
  const bxCircle = '/assets/icons/bx-x-circle.svg';

  const handleCrossClick = async () => {
    try {
      let documentBody = document.getElementsByTagName('body')[0];

      documentBody.id = '';
      let customDivContainer = document.getElementById('ah-stores-custom-sidebar');

      documentBody.removeChild(customDivContainer);
      await chrome.storage.local.set({ store_container_is_appended: false });
    } catch (error) {
      console.log('Error in crossImageActionToRemoveAppendedContainer', error);
    }
  };

  return (
    <div className="ah-stores-header">
      <a href="https://arbitragehero.com" target="_blank" rel="noreferrer">
        <div className="span">
          <img src={chrome.runtime.getURL(arbitrageLogo)} alt="item" width="100px" />
        </div>
      </a>
      <div className="span" id="cross_image_span" style={{ cursor: 'pointer' }} onClick={() => handleCrossClick()}>
        <img src={chrome.runtime.getURL(bxCircle)} alt="close" />
      </div>
    </div>
  );
};

export default StoreHeader;
