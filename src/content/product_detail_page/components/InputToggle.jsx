import React from 'react';

const InputToggle = ({ id, label, title, style, fieldName, value, handleOnChange, isFBA = false }) => (
  <div id={`${id}_main_div_container`} className={isFBA ? 'col-md-6 mb-1' : 'py-1'} data-toggle="tooltip" data-placement="top" style={style} title={title}>
    <div className={!isFBA ? 'd-flex align-items-center justify-content-between' : ''}>
      <span className="fs-10 ah-custom-label">{label}</span>
      <div className={`form-check form-switch switch-input ${!isFBA && 'light-input'} toggle-profit-list`}>
        <input
          type="checkbox"
          className="form-check-input"
          role="switch"
          id={`${id}_toggle_of_profit_calculator`}
          style={{ cursor: 'pointer', marginTop: '0px' }}
          checked={value}
          onChange={e => handleOnChange(fieldName, e.target.checked)}
        />
      </div>
    </div>
  </div>
);

export default InputToggle;
