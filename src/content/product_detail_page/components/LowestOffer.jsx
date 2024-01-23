import React from 'react';

const LowestOffer = ({ title, value }) => {
  return (
    <div className="ah-offer-price " style={{ borderBottom: '2px solid #F0F0F0', padding: '12px 0px' }}>
      <span className="">{title}</span>
      <span className="ah-text-dark">{value}</span>
    </div>
  );
};

export default LowestOffer;
