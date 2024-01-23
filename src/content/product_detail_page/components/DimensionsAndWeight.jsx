import React from 'react';
import RenderIf from '../../../commons/RenderIf';
import { useSelector } from 'react-redux';

const DimensionsAndWeight = () => {
  const dimensionsSVG = './assets/icons/dimensions.svg';
  const { productData } = useSelector(state => state.DetailPage);

  return (
    <div className="ah-detail-page-dimension-weight" style={{ padding: '3px 0px', marginLeft: '8px' }}>
      <span className="ah-custom-label fs-10">Dimensions</span>

      <div className="inner-text d-flex align-items-center">
        <span className="ah-main-value d-flex align-items-center text-black fs-10" style={{ borderRight: '1.5px solid rgb(225, 225, 225)', paddingRight: '6px', marginRight: '6px' }}>
          {/* <img src={chrome.runtime.getURL(dimensionsSVG)} alt="dimensions" /> */}
          {parseFloat(productData?.length).toFixed(2) + ' x ' + parseFloat(productData?.width).toFixed(2) + ' x ' + parseFloat(productData?.height).toFixed(2) + ' in'}
        </span>

        <span className="ah-main-value text-black fs-10">{productData?.unitWeight.toFixed(2) + ' lbs'}</span>
      </div>
    </div>
  );
};

export default DimensionsAndWeight;
