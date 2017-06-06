import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import AddressBookListElement from './AddressBookListElement'

export default class AddressBook extends Component {
  renderTree = (data, parentPath) =>{
    const {onElementClick} = this.props
    const lastElement = data.length - 1
    let treeNode = data.map(function(element, cnt){
      let path = parentPath === null ? [] : parentPath.slice();
      path.push(cnt)
      element.path = path
      let node = null, renderdElement, checked = false
      if(element.contacts){
        node = this.renderTree(element.contacts, path)
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
