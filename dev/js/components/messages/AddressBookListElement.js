import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class AddressBookListElement extends Component {
  render(){
    const {label, node, onlabelClick} = this.props
    return(
      <li>
        <label onClick={onlabelClick}>{label}</label>
        {node}
      </li>
    )
  }
}
