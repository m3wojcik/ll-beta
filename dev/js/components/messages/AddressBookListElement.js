import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';

export default class AddressBookListElement extends Component {
  render(){
    const {label, node, onElementClick, checked, display} = this.props
    // if(!display && display !== undefined) labelText +=" -"
    // else labelText +=" +"
    return(
      display || display == undefined ?
      <li>
        <div className="list-tree-element" >
        <Checkbox
          id={label}
          name={label}
          label={label}
          onChange={onElementClick.bind(this)}
          checked={checked}
        />
        </div>
        {node}
      </li> : null
    )
  }
}
