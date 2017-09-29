import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { connect } from "react-redux";
import { fetchAddressBook, toggleAddressBook, addReceivers, removeReceivers, searchAddressBook } from "../../actions/MessagesActions";
import AddressBook from '../../components/messages/AddressBook'
import ReceiverChips from '../../components/messages/ReceiverChips'
import Loader from '../../components/helpers/Loader'

@connect((store) => {
   return {
     addressBook: store.messages.addressBook,
     receivers: store.messages.addressBook.receivers,
     open: store.messages.addressBook.open,
     search: store.messages.addressBook.search,
     fetched: store.messages.addressBook.fetched,
     fetching: store.messages.addressBook.fetching
  };
})
export default class AddressBookContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchAddressBook());
  }
  getIdsFromNode = (node) =>{
    let tmp = [], tmp2 = [], ret = [];
    node.forEach(function(element){
      if(element.contacts) {
        tmp.push(this.getIdsFromNode(element.contacts))
        tmp.push(element.label)
      }else tmp2.push(element.id)
    }.bind(this))
    for(var i = 0; i < tmp.length; i++){
      ret = ret.concat(tmp[i])
    }
    ret =ret.concat(tmp2)
    return ret
  }
  handleElementClick = (element,isChecked) =>{
    if(element.contacts){
      let nodeIds = this.getIdsFromNode(element.contacts)
      nodeIds.push(element.label)
      if(isChecked) this.props.dispatch(addReceivers(nodeIds));
      else this.props.dispatch(removeReceivers(nodeIds));
    }else{
      if(isChecked) this.props.dispatch(addReceivers(element.id));
      else this.props.dispatch(removeReceivers(element.id));
    }
  }
  handleSearchChange = (event) =>{
    this.props.dispatch(searchAddressBook(event.target.value))
  }
  handleRemoveChip = (receiver) =>{
    this.props.dispatch(removeReceivers(receiver));
  }
  handleToggleBook = (target) =>{
    const {open} = this.props
    if(!open){
      this.searchInput.focus()
      this.props.dispatch(toggleAddressBook(true));
    }else if(target == 'list'){
      this.searchInput.focus()
    }else{
      this.props.dispatch(searchAddressBook(""))
      this.props.dispatch(toggleAddressBook(false));
    }
  }
  render(){
    const {addressBook, fetched, open, receivers, search} = this.props
    if(!fetched){
      return(<Loader full key="loader" />
      )
    }
    
    return(

      <div className={open == true ? "address-book-list md-paper--1 address-book-list-open" : "address-book-list"}>
        <ReceiverChips
          receivers={receivers}
          flatBook={addressBook.flatBook}
          removeChip={this.handleRemoveChip}
          search={search}
          onSearchChange={this.handleSearchChange}
          toggleBook={this.handleToggleBook}
          searchRef={el => this.searchInput = el}
          open={open}
          />
        <AddressBook
          open={open}
          search={search}
          receivers={receivers}
          data={addressBook.treeBook}
          onElementClick={this.handleElementClick}
          />
      </div>

    )
  }
}
