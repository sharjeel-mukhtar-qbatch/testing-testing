import React from 'react';

const OffersCheckBox = ({ label, isChecked, setIsChecked }) => {
  return (
    <div className={'form-check ah-form-check d-flex gap-2'} style={{ alignItems: 'center', minHeight: 'auto' }}>
      <input className="form-check-input" type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default OffersCheckBox;
