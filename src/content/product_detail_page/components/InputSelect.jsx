import React from 'react';

const InputSelect = ({ options, label, id, title, fieldName, value, handleOnChange, isDisabled = false }) => (
  <div id={`${id}_main_div_container`} className="col-md-6 mb-1">
    <div>
      <span className={`fs-10 ${isDisabled ? 'text-decoration-line-through' : ''} ah-custom-label`}>{label}</span>
      <select
        id={`${id}_selection_of_profit_calculator`}
        onChange={e => handleOnChange(fieldName, e.target.value)}
        data-toggle="tooltip"
        value={value}
        data-placement="top"
        style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', cursor: isDisabled ? 'default' : 'pointer' }}
        title={title}
        className="form-select"
        aria-label="Default select example"
        disabled={isDisabled}
      >
        {options?.map((option, index) => {
          return (
            <option value={option?.value} key={`${id + index}`}>
              {option?.label}
            </option>
          );
        })}
      </select>
    </div>
  </div>
);

export default InputSelect;
