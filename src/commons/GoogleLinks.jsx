import React, { useEffect, useState } from 'react';

import RenderIf from './RenderIf';
import { googleLinkAndGoogleShoppingLink } from '../utils/helpers';
import { useTranslation } from 'react-i18next';

const GoogleLinks = ({ itemTitle, currentUrl, fontSize }) => {
  const googleImageTagString = './assets/icons/ah-new-google-icon.svg';
  const TagImageTagString = './assets/icons/ah-new-google-tag-icon.svg';

  const { t } = useTranslation();

  const [ googleAndGoogleShoppingLink, setGoogleAndGoogleShoppingLink ] = useState([ null, null ]);

  useEffect(() => {
    setGoogleAndGoogleShoppingLink(googleLinkAndGoogleShoppingLink(itemTitle, currentUrl));
  }, []);
  return (
    <RenderIf isTrue={itemTitle}>
      <div style={{ alignItems: 'center', fontSize: `${fontSize || '15px'}`, gap: '5px', paddingBottom: '7px', fontWeight: 'bold', display: 'flex' }}>
        <span className="ah-custom-label ah-custom-h6 pb-0">{t('Search')}:</span>

        <a href={googleAndGoogleShoppingLink?.[0]} style={{ maxHeight: '15px' }} target="_blank" id="google_anchor_tag" rel="noreferrer" title='Google Search Results'>
          <img src={chrome.runtime.getURL(googleImageTagString)} alt="google" />
        </a>
        <a href={googleAndGoogleShoppingLink?.[1]} style={{ maxHeight: '15px' }} id="google_shopping_anchor_tag" target="_blank" rel="noreferrer" title='Google Shopping Results'>
          <img src={chrome.runtime.getURL(TagImageTagString)} alt="tag" />
        </a>
      </div>
    </RenderIf>
  );
};

export default GoogleLinks;
