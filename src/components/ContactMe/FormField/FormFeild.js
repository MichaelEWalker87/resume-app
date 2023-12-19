import React from 'react';

const FormField = ({ label, type, name, value, onChange, className }) => {
  return (
    <div className={`form-entry ${className}`}>
      <label className='label-form'>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='text-input-form'
      />
    </div>
  );
};

export default FormField;
