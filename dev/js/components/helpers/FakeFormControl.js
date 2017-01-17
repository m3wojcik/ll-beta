import React, { Component } from 'react';

export default class FakeFormControl extends Component {

  render(){
    const { label, value } = this.props;
    return(
      <div className="fake-form-control">
        <label>{label}</label>
        <div className="fake-input">
          {value}
        </div>
      </div>
    )
  }
}
