import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { connect } from "react-redux";
import { fetchAddressBook, updateAddressBook, updateReceivers } from "../../actions/MessagesActions";
import AddressBook from '../../components/messages/AddressBook'
import ReceiverChips from '../../components/messages/ReceiverChips'
import Loader from '../../components/helpers/Loader'

@connect((store) => {
   return {
     addressBook: store.messages.createMessage.addressBook,
     receivers: store.messages.sendMessage.receivers,
     fetched: store.messages.createMessage.fetched,
     fetching: store.messages.createMessage.fetching
  };
})
export default class AddressBookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { addressBook: [], search: "", addressBookOpen: false};
  }
  componentDidMount(){
    this.props.dispatch(fetchAddressBook());
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.addressBook.length > 0 && nextProps.addressBook != this.props.addressBook){
      this.setState({addressBook: nextProps.addressBook})
    }
  }
  deleteReceiver = (receivers, id) =>{
    const filtredArray = receivers.filter(function(el) {
        if(el.id != id) return el
    });
    return filtredArray;
  }
  toggleChildren = (book, checked) =>{
    const mappedBook = book.map(function(element){
      if(element.contacts){
        this.toggleChildren(element.contacts, checked)
      }
      //Zaznaczamy tylko widocznych podczas wyszukiwania
      if(checked){
        if(element.display != false) element.checked = checked
      }else element.checked = false
      return element
    }.bind(this))
    return mappedBook;
  }
  toggleReceivers = (book) =>{
    let tmp = [], tmp2 = [], ret = [];
    book.forEach(function(element){
      if(element.contacts){
        tmp.push(this.toggleReceivers(element.contacts));
      }else{
        //dodajemy tylko widocznych podczas wyszukiwania
        if(element.display != false) tmp2.push(element);
      }
    }.bind(this))
    for(var i = 0; i < tmp.length; i++){
      ret = ret.concat(tmp[i])
    }
    ret =ret.concat(tmp2)
    return ret
  }
  handleElementClick = (element) =>{
    const {addressBook, receivers} = this.props
    let tmpReceivers = []
    let tmp = addressBook[element.path[0]], cnt = 1;
    while(element.path[cnt] !== undefined) {
      tmp = tmp.contacts[element.path[cnt]];
      cnt++;
    }
    tmp.checked = !tmp.checked
    if(tmp.contacts) {
      tmp.contacts = this.toggleChildren(tmp.contacts, tmp.checked)
      tmpReceivers = this.toggleReceivers(tmp.contacts)
    }else{
      tmpReceivers.push(tmp)
    }
    if(tmp.checked){
      //addReceiver
      tmpReceivers = [...new Set([...tmpReceivers, ...receivers])];
    }else{
      //removeReceiver
      tmpReceivers = receivers.filter(x => tmpReceivers.indexOf(x) == -1)
    }
    this.props.dispatch(updateReceivers(tmpReceivers));
    this.props.dispatch(updateAddressBook(addressBook));
    // this.setState({
    //   addressBook: addressBook
    // })
  }

  searchTree = (tree, search) =>{
    let tmp = [], tmp2 = [], result = [];
    for(var i = 0; i < tree.length; i++){
      const label = tree[i].label.toLowerCase()
      if(tree[i].contacts){
        tmp.push(this.searchTree(tree[i].contacts, search))
        tree[i].display = false
      }else if(label.indexOf(search) != -1){
        tmp2.push(tree[i])
      } else {
        tree[i].display = false
      }
    }
    for(var i = 0; i < tmp.length; i++){
      result = result.concat(tmp[i])
    }
    result = result.concat(tmp2)
    return result
  }
  buildAddressBook = (results) =>{
    const {addressBook} = this.state
    let tmpAddressBook = []

    //debugger
    results.forEach(function(result, i){
      let cnt = 0
      let tmpNode = addressBook.slice()
      while(result.path[cnt] !== undefined) {
        tmpNode[result.path[cnt]].display = true
        if(tmpNode[result.path[cnt]].contacts) tmpNode = tmpNode[result.path[cnt]].contacts
        cnt++
      }
    })

  }
  handleSearchChange = (event) =>{
    this.searchBook(event.target.value)
  }
  searchBook = (searchValue) =>{
    const {addressBook} = this.props
    const search = searchValue.toLowerCase()
    const results = this.searchTree(addressBook, search)
    this.buildAddressBook(results)
    this.setState({
      "search": searchValue
    });
  }
  handleRemoveChip = (receiver) =>{
    const { addressBook, receivers }  = this.props
    let tmpNode = addressBook, cnt = 0
    //Remove receiver from receivers table
    let tmpReceivers = receivers.filter(function(el) {
        if(el.id != receiver.id) return el
    })
    while(receiver.path[cnt] !== undefined) {
      if(tmpNode[receiver.path[cnt]].contacts) tmpNode = tmpNode[receiver.path[cnt]].contacts
      else tmpNode[receiver.path[cnt]].checked = false
      cnt++
    }
    this.props.dispatch(updateReceivers(tmpReceivers));
  }
  handleToggleBook = (target) =>{
    const {addressBookOpen} = this.state
    if(!addressBookOpen){
      this.searchInput.focus()
      this.setState({"addressBookOpen": true})
    }else if(target == 'list'){
      this.searchInput.focus()
    }else{
      this.searchBook("");
      this.setState({"addressBookOpen": false})
    }
  }
  render(){
    const {addressBook, fetched, receivers} = this.props
    const {search, addressBookOpen} = this.state
    if(!fetched){
      return(<Loader full key="loader" />
      )
    }
    return(

      <div className={addressBookOpen == true ? "address-book-list md-paper--1 address-book-list-open" : "address-book-list"}>
        <ReceiverChips
          receivers={receivers}
          removeChip={this.handleRemoveChip}
          search={search}
          onSearchChange={this.handleSearchChange}
          toggleBook={this.handleToggleBook}
          searchRef={el => this.searchInput = el}
          open={addressBookOpen}
          />
        <AddressBook
          open={addressBookOpen}
          data={this.state.addressBook}
          onElementClick={this.handleElementClick}
          />
      </div>

    )
  }
}
