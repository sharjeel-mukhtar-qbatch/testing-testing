import React, { useState } from 'react';

const DetailPageInnerDropDowns = ({ id, label, currencySymbol, children, value, precision = 2 }) => {
  const collapseDownIcon = './assets/icons/collapse_down_icon.svg';
  const collapseUpIcon = './assets/icons/collapse_up_icon.svg';

  const [ isCollapse, setIsCollapse ] = useState(true);

  const handleCollapseChange = () => setIsCollapse(!isCollapse);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between mb-2 collapsed"
        id={`${id}_collapse_div`}
        data-bs-toggle="collapse"
        data-bs-target={`#${id}_collapse`}
        onClick={handleCollapseChange}
      >
        <div className="d-flex align-items-center gap-2">
          <span className="fs-10 ah-custom-label">{label}</span>

          <img src={chrome.runtime.getURL(isCollapse ? collapseDownIcon : collapseUpIcon)} alt="down" className="cursor-pointer" />
        </div>
        <span className="fs-12 ah-custom-font-light" id={`total_${id}_fee_span_text`}>
          {currencySymbol} {parseFloat(value).toFixed(precision)}
        </span>
      </div>

      <div id={`${id}_collapse`} className="collapse" style={{ fontWeight: '400' }}>
        {children}
      </div>
    </>
  );
};

export default DetailPageInnerDropDowns;
