import React, { Component } from 'react';
import { connect } from "react-redux";
import { uniqBy } from 'lodash/array';
import Autocomplete from 'react-md/lib/Autocompletes';
import TextField from 'react-md/lib/TextFields'
import Divider from 'react-md/lib/Dividers';
import ReactQuill from 'react-quill';
import Button from 'react-md/lib/Buttons/Button';
import { fetchAddressBook, updateReceivers, updateFiltredReceivers } from "../../actions/CreateMessageActions";

import ReceiverChips from '../../components/ReceiverChips'

import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import AddressBookContainer from './AddressBookContainer'
import '../../../scss/quill.snow.scss';

@connect((store) => {
   return {
     addressBook: store.createMessage.addressBook,
     message: store.createMessage.message,
     reply: store.createMessage.reply,
     forward: store.createMessage.forward,
     fetched: store.createMessage.fetched,
     fetching: store.createMessage.fetching
  };
})
export default class CreateMessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { addressBook: [], message:'' };
    this.addReceiver = this.addReceiver.bind(this);
    this.addReceiverById = this.addReceiverById.bind(this);
  }
  componentDidMount(){

    // this.props.dispatch(fetchAddressBook(function(){
    //   this.setState({addressBook: this.props.addressBook});
    //   if (this.props.reply) {
    //     this.addReceiverById(this.props.message.senderId);
    //     this.setState({message: '<br /><br />' + this.props.message.sender + ' wrote: <br />' + this.props.message.message})
    //   }else if(this.props.forward){
    //     this.setState({message: '<br /><br />' + this.props.message.sender + ' wrote: <br />' + this.props.message.message})
    //   }
    // }.bind(this)));
  }
  addReceiver(receiver, receiverIndex, receivers){
    const { addressBook } = this.state;
    addressBook[receivers[receiverIndex].id].isSelected = true;
    this.setState({ addressBook: addressBook });
  }
  addReceiverById(reciverId){
    const { addressBook } = this.state;
    addressBook[reciverId].isSelected = true;
    this.setState({ addressBook: addressBook });
  }
  handleRemove(receiverIndex, receiverId){
    const { addressBook }  = this.state;
    addressBook[receiverId].isSelected = false;
    this.setState({ addressBook: addressBook });
  }
  render(){
    const { fetched, reply, forward, message } = this.props;
    const { addressBook } = this.state;
    let subjectdefaultValue =''
    let filtredReceivers = [], receivers = [];
    for(var key in addressBook){
      addressBook[key].isSelected ? receivers.push({"name": addressBook[key].name,"id": addressBook[key].id}) :  filtredReceivers.push({"name": addressBook[key].name,"id": addressBook[key].id})
    }
    if(reply){
      subjectdefaultValue = 'Re: ' + message.subject;
    }else if (forward) {
      subjectdefaultValue = 'Fwd: ' + message.subject;
    }
    // <ReceiverChips receivers={receivers} remove={this.handleRemove.bind(this)} />
    // <Autocomplete
    //   paddedBlock
    //   id="receivers"
    //   label="Receivers"
    //   data={filtredReceivers}
    //   dataLabel="name"
    //   onAutocomplete={this.addReceiver}
    //   clearOnAutocomplete
    // />
    // <TextField
    //   id="subject"
    //   label="Subject"
    //   defaultValue={subjectdefaultValue}
    //   maxLength={80}
    // />
    // <ReactQuill theme="snow" value={this.state.message} />
    // <Button raised primary label="Send" />
    return(
      <Content >
        <AddressBookContainer />
      </Content>
    )
  }
}
