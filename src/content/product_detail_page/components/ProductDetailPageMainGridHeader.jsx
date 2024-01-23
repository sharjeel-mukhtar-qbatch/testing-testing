import React, { useEffect, useState } from 'react';

import GoogleLinks from '../../../commons/GoogleLinks';
import RenderIf from '../../../commons/RenderIf';
import { getElementByXpath } from '../../../utils/arbitrage_element_functions';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ProductDetailPageMainGridHeader = ({ detailsResponse, data, extensionPosition, asin }) => {
  const [ image, setImage ] = useState('');

  const { t } = useTranslation();

  const { productData } = useSelector(state => state.DetailPage);
  const { productTitle, imageXpath, currentUrl } = data;

  useEffect(() => {
    for (const xPath of imageXpath) {
      let productImage = getElementByXpath(xPath).snapshotItem(0);

      if (productImage) {
        setImage(productImage.textContent);
        break;
      }
    }
  }, [ data ]);

  return (
    <>
      <div className="d-flex ah-detail-page-products-heading mb-2">
        <h6> {t('Overview')}</h6>
        <GoogleLinks itemTitle={productTitle} currentUrl={currentUrl} fontSize="12px" />
      </div>
      <div className="ah-detail-page-product-titles" style={{ marginBottom: '14px', alignItems: 'start' }}>
        <img src={image} alt="item" style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'contain' }} />
        <div className="d-flex flex-column justify-content-between " style={{ height: '100%' }}>
          <div>
            <span className="ah-detail-page-title-ellipse" title={productTitle}>
              {productTitle}
            </span>
          </div>

          <RenderIf isTrue={productData?.productCategory || detailsResponse?.responseCategory}>
            <div className="inner-text">
              <span className="product-category-title">In: </span>
              <span className="ah-main-value">{productData?.productCategory || detailsResponse?.responseCategory}</span>
            </div>
          </RenderIf>

          <div className="inner-text">
            <span className="product-category-title">ASIN: </span>
            <span className="ah-main-value">{asin}</span>
          </div>
        </div>
      </div>
      <hr className="hr my-2" id="small_and_light_main_div_upper_line" />
    </>
  );
};

export default ProductDetailPageMainGridHeader;
