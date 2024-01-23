import React from 'react';

const CrossAPIForm = ({ setIsFormOpen }) => {
  return (
    <div className="box-close" onClick={() => setIsFormOpen(false)}>
      <img src={chrome.runtime.getURL('/assets/icons/bx-cross.svg')} alt="close" />
    </div>
  );
};

export default CrossAPIForm;
