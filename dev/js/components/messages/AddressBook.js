import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import AddressBookListElement from './AddressBookListElement'

export default class AddressBook extends Component {
  renderTree = (data, parentCnt) =>{
    const {onElementClick} = this.props
    const lastElement = data.length - 1
    let treeNode = data.map(function(element, cnt){
      element.path = parentCnt != null ? parentCnt +", " + cnt : cnt
      let node = null, renderdElement, checked = false
      if(element.contacts){
        node = this.renderTree(element.contacts, element.path)
      }
      if(element.checked) checked = true
      return <AddressBookListElement
        onElementClick={onElementClick.bind(this,element)}
        checked={checked}
        key={cnt} label={element.label}
        node={node} />
    }.bind(this))
    return <ul>{treeNode}</ul>
  }
  render(){
    const {data} = this.props
    let output = data ? this.renderTree(data, null) : null
    return(
      <div className="address-book">
        {output}
      </div>
    )
  }
}
