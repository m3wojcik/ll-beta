import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { connect } from "react-redux";
import { fetchAddressBook, updateReceivers, updateFiltredReceivers } from "../../actions/CreateMessageActions";
import AddressBook from '../../components/messages/AddressBook'
import Loader from '../../components/helpers/Loader'

@connect((store) => {
   return {
     addressBook: store.createMessage.addressBook,
     fetched: store.createMessage.fetched,
     fetching: store.createMessage.fetching
  };
})
export default class AddressBookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { addressBook: [], receivers: []};
  }
  componentDidMount(){
    this.props.dispatch(fetchAddressBook());
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.addressBook.length > 0 && nextProps.addressBook != this.props.addressBook){
      this.setState({addressBook: nextProps.addressBook})
    }
  }
  deleteReceiver = (array, id) =>{
    const filtredArray = array.filter(function(el) {
        return el.id !== id;
    });
    return filtredArray
  }
  toggleChildren = (book, checked) =>{
    const {receivers} = this.state
    const mappedBook = book.map(function(element){
      if(element.contacts){
        this.toggleChildren(element.contacts, checked)
      }else{
        if(checked) receivers.push(element)
        //TODO
      }
      element.checked = checked
      return element
    }.bind(this))
    return mappedBook;
  }
  handleElementClick = (element) =>{
    const {addressBook, receivers} = this.state
    let tmpReceivers = receivers;
    let tmp = addressBook[element.path[0]], cnt = 1;
    while(element.path[cnt] !== undefined) {
      tmp = tmp.contacts[element.path[cnt]];
      cnt++;
    }
    if(tmp.checked){
      tmp.checked = false
      if(tmp.contacts) tmp.contacts = this.toggleChildren(tmp.contacts, false)
      else tmpReceivers = this.deleteReceiver(tmpReceivers, element.id)
    }else {
      tmp.checked = true
      if(tmp.contacts) tmp.contacts = this.toggleChildren(tmp.contacts, true)
      else receivers.push(element)
    }
    console.log('receivers', tmpReceivers);
    this.setState({receivers: tmpReceivers})
    this.setState({addressBook: addressBook})
  }
  render(){
    const {addressBook, fetched} = this.props
    if(!fetched){
      return(<Loader full key="loader" />
      )
    }
    return(
      <AddressBook data={this.state.addressBook} onElementClick={this.handleElementClick} />
    )
  }
}
