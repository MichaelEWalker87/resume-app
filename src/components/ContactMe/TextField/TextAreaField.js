import React from 'react';

const TextAreaField = ({ label, name, value, onChange, className }) => {
  return (
    <div className={`form-entry ${className}`}>
      <label className='label-form'>{label}</label>
      <textarea
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className='textarea-form'
      />
    </div>
  );
};

export default TextAreaField;