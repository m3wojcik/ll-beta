import React, { Component } from 'react';
import { connect } from "react-redux";
import { uniqBy } from 'lodash/array';
import Autocomplete from 'react-md/lib/Autocompletes';
import TextField from 'react-md/lib/TextFields'
import Divider from 'react-md/lib/Dividers';
import ReactQuill from 'react-quill';
import Button from 'react-md/lib/Buttons/Button';
import { updateReceivers } from "../../actions/MessagesActions";

import ReceiverChips from '../../components/messages/ReceiverChips'

import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import AddressBookContainer from './AddressBookContainer'
import '../../../scss/quill.snow.scss';

@connect((store) => {
   return {
     addressBook: store.messages.createMessage.addressBook,
     receivers: store.messages.createMessage.receivers,
     message: store.messages.createMessage.message,
     reply: store.messages.createMessage.reply,
     forward: store.messages.createMessage.forward,
     fetched: store.messages.createMessage.fetched,
     fetching: store.messages.createMessage.fetching
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
  handleRemoveChip(receiver){
    console.log(receiver);
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

  render(){
    const { fetched, reply, forward, message, receivers } = this.props;
    const { addressBook } = this.state;
    // let subjectdefaultValue =''
    // let filtredReceivers = [], receivers = [];
    // for(var key in addressBook){
    //   addressBook[key].isSelected ? receivers.push({"name": addressBook[key].name,"id": addressBook[key].id}) :  filtredReceivers.push({"name": addressBook[key].name,"id": addressBook[key].id})
    // }
    // if(reply){
    //   subjectdefaultValue = 'Re: ' + message.subject;
    // }else if (forward) {
    //   subjectdefaultValue = 'Fwd: ' + message.subject;
    // }
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
        <ReceiverChips receivers={receivers} removeChip={this.handleRemoveChip.bind(this)} />
        <AddressBookContainer />
      </Content>
    )
  }
}
