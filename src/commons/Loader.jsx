import React from 'react';

const Loader = ({ outerClass }) => (
  <div className={outerClass ?? 'ah-detail-page-data'}>
    <div className="ah-common-loader"></div>
  </div>
);

export default Loader;
