import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import AddressBookListElement from './AddressBookListElement'

export default class AddressBook extends Component {
  handleLabelClick = (label) =>{
    console.log('click',label);
  }
  renderTree = (data) =>{
    const lastElement = data.length - 1
    let treeNode = data.map(function(element, i){
      let node = null, renderdElement
      if(element.contacts){
        node = this.renderTree(element.contacts)
      }
      return <AddressBookListElement
        onlabelClick={this.handleLabelClick.bind(this, element.label)}
        key={i} label={element.label}
        node={node} />
    }.bind(this))
    return <ul>{treeNode}</ul>
  }
  render(){
    const {data} = this.props
    let output = this.renderTree(data)
    return(
      <div>
        {output}
      </div>
    )
  }
}
