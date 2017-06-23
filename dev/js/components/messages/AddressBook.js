import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import AddressBookListElement from './AddressBookListElement'

export default class AddressBook extends Component {
  renderTree = (data, parentPath) =>{
    const {onElementClick} = this.props
    const lastElement = data.length - 1
    let treeNode = data.map(function(element, cnt){
      let path = parentPath === null ? [] : parentPath.slice()
      let node = null, display
      path.push(cnt)
      element.path = path
      if(element.contacts) node = this.renderTree(element.contacts, path)
      return <AddressBookListElement
          onElementClick={onElementClick.bind(this,element)}
          checked={element.checked}
          key={cnt}
          display={element.display}
          label={element.label}
          node={node} />

    }.bind(this))
    return <ul>{treeNode}</ul>
  }
  render(){
    const {data, open} = this.props
    let output = data ? this.renderTree(data, null) : null
    return(
      <div className={open ? "address-book address-book-open" : "address-book address-book-closed" }>
        {output}
      </div>
    )
  }
}
