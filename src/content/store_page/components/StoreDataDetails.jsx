import React from 'react';

const StoreDataDetails = ({ image, title, value, color }) => {
  return (
    <div>
      <span>
        <img src={chrome.runtime.getURL(image)} alt="line chart" className="ah-stores-check-img" width="16px" height="16px" />
        <span>{title}</span>
      </span>
      <span className={`ah-stores-${color}`}>{value}</span>
    </div>
  );
};

export default StoreDataDetails;
