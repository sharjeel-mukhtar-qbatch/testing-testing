import React, { useEffect, useState } from 'react';

const InputField = ({ label, id, symbol, fieldName, value, handleOnChange, isDisabled = false }) => {
  const [ localValue, setLocalValue ] = useState(parseFloat(value).toFixed(2));
  const [ isSelectable, setIsSelectable ] = useState(true);

  useEffect(() => {
    if (value != localValue) setLocalValue(value);
  }, [ value ]);

  return (
    <div className="col-md-6 mb-1">
      <span className={`fs-10 ${isDisabled ? 'text-decoration-line-through' : ''} ah-custom-label`}>{label}</span>
      <div className="input-group">
        <input
          step="0.01"
          type="number"
          onWheel={e => e.target.blur()}
          className="form-control"
          value={localValue}
          id={id}
          style={{ userSelect: 'text' }}
          onBlur={() => {
            setLocalValue(parseFloat(value).toFixed(2));
            setIsSelectable(true);
          }}
          onChange={e => {
            setLocalValue(e.target.value);
            handleOnChange(fieldName, +e.target.value);
          }}
          onClick={event => {
            const target = event.currentTarget;

            if (isSelectable) target.select();

            setIsSelectable(false);
          }}
          disabled={isDisabled}
        />
        <span className="input-group-text" id="basic-addon2">
          {symbol}
        </span>
      </div>
    </div>
  );
};

export default InputField;
