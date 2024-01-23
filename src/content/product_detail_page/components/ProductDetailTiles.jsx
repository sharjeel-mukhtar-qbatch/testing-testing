import React from 'react';

const ProductDetailTiles = ({ gridCols }) => {
  return (
    <>
      <div className="row" style={{ padding: '8px 0px', margin: 0 }}>
        {gridCols.map(gridCol => {
          if (!gridCol?.value && gridCol.value !== 0) return;
          return (
            <div className="ah-product-details col" style={{ padding: 0 }}>
              <div className="ah-detail-page-gird_col_title fs-10" style={{ marginBottom: '4px' }}>
                {gridCol?.title}
              </div>
              <div className="ah-detail-page-gird_col_value" style={gridCol?.style || {}}>
                {gridCol?.value}
              </div>
            </div>
          );
        })}
      </div>
      <hr className="hr " />
    </>
  );
};

export default ProductDetailTiles;
