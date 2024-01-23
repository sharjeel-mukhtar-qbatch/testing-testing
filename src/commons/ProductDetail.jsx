import React from 'react';
import RenderIf from './RenderIf';

const ProductDetail = ({ value, title, precision, symbol = '' }) => (
  // <RenderIf isTrue={value}>
    <div>
      <span className="title">
        <span className="ah-custom-label">{title}</span>
        <span className="value">{value === 'N/A' ? value : parseFloat(value).toFixed(precision) + symbol}</span>
      </span>
    </div>
  // </RenderIf>
);

export default ProductDetail;
