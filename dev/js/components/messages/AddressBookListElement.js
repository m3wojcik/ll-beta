import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';

export default class AddressBookListElement extends Component {
  render(){
    const {label, node, onElementClick, checked} = this.props
    return(
      <li>
        <div className="list-tree-element" >
        <Checkbox
          id="c"
          name={label}
          label={label}
          onChange={onElementClick.bind(this)}
          checked={checked}
        />
        </div>
        {node}
      </li>
    )
  }
}
