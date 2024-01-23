import React from 'react';

const NoInternet = () => {
  const noConnectionSVG = './assets/icons/no-connection.svg';

  return (
    <div className="ah-api-key-body">
      <div id="internet_image_connection_div">
        <img src={chrome.runtime.getURL(noConnectionSVG)} width="70px" />
      </div>
      <div id="internet_connection_div">
        <h4>Please Check Your Internet Connection!</h4>
      </div>
    </div>
  );
};

export default NoInternet;
