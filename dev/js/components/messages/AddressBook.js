import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import AddressBookListElement from './AddressBookListElement'

const AddressBook = ({data, open, receivers, search, onElementClick}) => {
  const renderTree = (data) =>{
    let treeNode = data.map(function(element, cnt){
      let node = null, checked = false, display = true
      let label = element.label.toLowerCase()
      if(element.contacts){ 
        node = renderTree(element.contacts)
        if(receivers.indexOf(element.label) != -1) checked = true
      }else{
        if(label.indexOf(search.toLowerCase()) == -1) display = false
        if(receivers.indexOf(element.id) != -1)  checked = true
      }
      
      return <AddressBookListElement
          onElementClick={onElementClick.bind(this,element)}
          checked={checked}
          key={cnt}
          display={display}
          label={element.label}
          node={node} />

    }.bind(this))
    return <ul>{treeNode}</ul>
  }
  
  let output = data ? renderTree(data) : null
  return(
    <div className={open ? "address-book address-book-open" : "address-book address-book-closed" }>
       {output}
    </div>
  )
}
export default AddressBook