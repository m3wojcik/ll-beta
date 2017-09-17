import React from 'react';

const FakeFormControl = ({label,value}) => {

    return(
      <div className="fake-form-control">
        <label>{label}</label>
        <div className="fake-input">
          {value}
        </div>
      </div>
    )
}
export default FakeFormControl