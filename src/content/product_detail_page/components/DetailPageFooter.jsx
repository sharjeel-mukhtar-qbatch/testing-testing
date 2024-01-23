import React, { useEffect, useState } from 'react';

import { AddElementIntoAmazonPage } from '../product_detail_page_app';

const DetailPageFooter = () => {
  const leftDockIcon = '/assets/icons/left-dock-icon.svg';
  const rightDockIcon = '/assets/icons/right-dock-icon.svg';
  const middleDockIcon = '/assets/icons/middle-dock-icon.svg';
  const draggableIcon = '/assets/icons/draggable-icon.svg';
  const sideDockIcon = '/assets/icons/side-dock-icon.svg';

  const [ dockPosition, setDockPosition ] = useState(null);

  const handleChangePosition = async position => {
    if (dockPosition === position) return;

    document.getElementById('arbitrage-extension-grid').remove();

    await chrome.storage.local.set({ extensionPosition: position });

    AddElementIntoAmazonPage(false);
  };

  useEffect(() => {
    chrome.storage.local.get([ 'extensionPosition' ]).then(({ extensionPosition }) => setDockPosition(extensionPosition));
  }, []);

  const dockButtons = [
    { iconPath: leftDockIcon, title: 'Left Dock', position: 'left-dock' },
    { iconPath: rightDockIcon, title: 'Right Dock', position: 'right-dock' },
    { iconPath: middleDockIcon, title: 'Middle Dock', position: 'middle' },
    { iconPath: draggableIcon, title: 'Draggable', position: 'draggable' },
    { iconPath: sideDockIcon, title: 'Reset to side dock', position: 'side' },
  ];

  return (
    <div style={{ zIndex: 9999 }}>
      <div style={{ padding: '9px 0px' }}>
        <div className="d-flex gap-1 ">
          {dockButtons.map(dockButton => (
            <span onClick={() => handleChangePosition(dockButton?.position)} className="ah-detail-page-dock-buttons" title={dockButton.title}>
              <img src={chrome.runtime.getURL(dockButton.iconPath)} className="ah-detail-page-dock-buttons" alt={dockButton.title} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPageFooter;
