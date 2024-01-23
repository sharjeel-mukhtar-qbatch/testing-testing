import React from 'react';

const TotalFeeData = ({ id, label, currencySymbol, value, title = null }) => (
  <div className="d-flex align-items-center justify-content-between mb-2">
    <span
      className={`fs-10  ${title ? ' ah-detail-page-fees-tooltip-doted-line' : ''}`}
      data-toggle="tooltip"
      data-placement="top"
      style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', color: '#747890' }}
      title={title}
      id={`${id}_fee_text`}
    >
      {label}
    </span>
    <span className="fs-12 fee" id={`${id}_fee`}>
      {currencySymbol + ' ' + parseFloat(value).toFixed(2)}
    </span>
  </div>
);

export default TotalFeeData;
