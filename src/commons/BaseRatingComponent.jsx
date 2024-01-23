import ProductDetail from './ProductDetail';
import React from 'react';
import RenderIf from './RenderIf';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const BaseRatingComponent = ({ asin, detailsResponse, detailPage = false }) => {
  const { t } = useTranslation();

  const { productInfo } = useSelector(state => state.DetailPage);
  const bsrAndPercentage = detailsResponse?.bsr >= 100000000 || !/\d/.test(detailsResponse?.bsr) ? [ 'N/A', 'N/A' ] : [ detailsResponse?.bsr ?? 'N/A', detailsResponse?.bsr_percentage ?? 'N/A' ];

  return (
    <>
      <div className="ah-product row" style={{ margin: 0 }}>
        <RenderIf isTrue={asin}>
          <div className="ah-product-details col" style={{ padding: 0 }}>
            <div>
              <span className="ah-custom-label ah-custom-h6 d-block">ASIN</span>
              <span className="text-black ah-custom-font-light ah-custom-h6"> {asin} </span>
            </div>
          </div>
        </RenderIf>
        <div className="ah-product-details col" style={{ padding: 0 }}>
          <ProductDetail value={bsrAndPercentage[0]} title="BSR " precision={0} />
        </div>

        <div className="ah-product-details col" style={{ padding: 0 }}>
          <ProductDetail value={bsrAndPercentage[1]} title="BSR% " precision={4} />
        </div>
        <RenderIf isTrue={detailPage}>
          <div className="ah-product-details col" style={{ padding: 0 }}>
            <ProductDetail value={productInfo?.sales?.error || !productInfo?.sales ? 'N/A' : productInfo?.sales?.monthlySales || 0} title="Est.Sales " precision={0} symbol="/mo" />
          </div>
        </RenderIf>
      </div>
    </>
  );
};

export default BaseRatingComponent;
