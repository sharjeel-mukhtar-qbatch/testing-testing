import EmptyData from './EmptyData';
import React from 'react';
import RenderIf from './RenderIf';
import { useTranslation } from 'react-i18next';

const ReverseSearchTable = ({ stores, currencySymbol }) => {
  const { t } = useTranslation();

  return (
    <div style={{ overflowX: 'auto' }}>
      <RenderIf isTrue={stores?.length} fallback={<EmptyData />}>
        <table className="ah-reverse-search-content-table">
          <thead>
            <tr>
              <th>{t('Image')}</th>
              <th>{t('Store')}</th>
              <th id="price-header">{t('Price')}</th>
            </tr>
          </thead>

          <tbody>
            {stores?.map((store, index) => {
              const url = new URL(store?.url);

              return (
                <tr key={index}>
                  <td>
                    <img src={store?.image} style={{ maxWidth: '40px', maxHeight: '40px', objectFit: 'contain' }} />
                  </td>
                  <td>
                    <a href={url.href} target="_blank" rel="noreferrer">
                      <img height="10" width="10" src={`https://www.google.com/s2/favicons?domain=${url.hostname}`} />
                      {url.host.replace(/^www\./i, '')}
                    </a>
                  </td>
                  <td>
                    {currencySymbol + ' '}
                    {(Math.floor(parseFloat(store?.price) * 100) / 100).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </RenderIf>
    </div>
  );
};

export default ReverseSearchTable;
