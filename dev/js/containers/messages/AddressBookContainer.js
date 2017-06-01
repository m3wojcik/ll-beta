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
    this.state = { addressBook: []};
  }
  componentDidMount(){
    this.props.dispatch(fetchAddressBook());
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.addressBook.length > 0 && nextProps.addressBook != this.props.addressBook){
      console.log(this.renderAddressBook(nextProps.addressBook));
      this.setState({addressBook: this.renderAddressBook(nextProps.addressBook)})

    }
  }
  renderAddressBook = (addressBook, path) =>{
    
    const mappedBook = addressBook.map(function(element){
      if(element.contacts){
        this.renderAddressBook(element.contacts)
      }
      return element
    }.bind(this))
    return mappedBook;
  }
  handleElementClick = (element) =>{
    const {addressBook} = this.state
    if(element.id){

    }
    console.log('click',element.path);
    //console.log('click',this.state.addressBook[0].contacts[0].contacts[1])
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
