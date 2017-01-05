import React, { Component } from 'react';

export default class Label extends Component {

  render(){
    const { label, customColor } = this.props;
    return(
      <span className="label" style={{backgroundColor: customColor}}>{label}</span>
    )
  }
}
