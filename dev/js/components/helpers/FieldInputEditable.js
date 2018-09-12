import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { TextField } from 'react-md';

const FieldInputEditable = ({input, input: { name, value, onChange, onBlur }, meta: { touched, error, warning }, placeholder, type, disabled }) =>{
  return(
      <div className={touched && error ? "field error":"field"}>
        <TextField
          {...input}
          id={name}
          type={type}
          disabled={disabled}
          label={placeholder}
          lineDirection="center"
          error={touched && error ? true : false}
          errorText={error}
          inlineIndicator={!disabled ? <FontIcon>create</FontIcon> : null}
        />
        {touched}
      </div>

  )
}
export default FieldInputEditable
