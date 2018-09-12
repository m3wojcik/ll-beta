import React from 'react';

export const RenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={touched && error ? "field error":"field"}>
    <label>{label}{touched}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span className="block-text">{error}</span>) || (warning && <span className="block-text">{warning}</span>))}
  
  </div>
)
