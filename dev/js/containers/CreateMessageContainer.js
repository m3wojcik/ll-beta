import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings } from "../actions/AppActions";
import { fetchAddressBook, updateReceivers, updateFiltredReceivers } from "../actions/CreateMessageActions";
import { uniqBy } from 'lodash/array';
import Autocomplete from 'react-md/lib/Autocompletes';
import TextField from 'react-md/lib/TextFields'
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ReceiverChips from '../components/ReceiverChips'
import Divider from 'react-md/lib/Dividers';

@connect((store) => {
   return {
     addressBook: store.addressBook.addressBook,
     receivers: store.addressBook.receivers,
     filtredReceivers: store.addressBook.filtredReceivers,
     fetched: store.addressBook.fetched,
     fetching: store.addressBook.fetching
  };
})
export default class CreateMessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { addressBook: this.props.addressBook };
  }
  componentDidMount(){
    this.props.dispatch(setAppSettings({header: 'Create', hasTabs: false}));
    this.props.dispatch(fetchAddressBook());
    this.addReceiver = this.addReceiver.bind(this);
  }
  addReceiver(receiver, receiverIndex, receivers){
    const { addressBook } = this.props;
    addressBook[receivers[receiverIndex].id].isSelected = true;
    this.setState({ addressBook: addressBook });
  };
  handleRemove(receiverIndex, receiverId){
    const { addressBook }  = this.props;
    addressBook[receiverId].isSelected = false;
    this.setState({ addressBook: addressBook });

  }
  render(){
    const { addressBook, fetched } = this.props;
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes-details" key="loading"  />
        </div>
      )
    }
    let filtredReceivers = [], receivers = [];
    for(var key in addressBook){
      addressBook[key].isSelected ? receivers.push({"name":addressBook[key].name,"id":addressBook[key].id}) :  filtredReceivers.push({"name":addressBook[key].name,"id":addressBook[key].id})
    }
    return(
      <div className="content">
        <ReceiverChips receivers={receivers} remove={this.handleRemove.bind(this)} />
        <Autocomplete
          paddedBlock
          id="receivers"
          label="Receivers"
          data={filtredReceivers}
          dataLabel="name"
          onAutocomplete={this.addReceiver}
          clearOnAutocomplete
        />

        <Divider className="md-divider--text-field" />
          <TextField
            block
            paddedBlock
            id="subject"
            placeholder="Subject"
            maxLength={80}
          />
        <Divider className="md-divider--text-field" />
          <TextField
            block
            paddedBlock
            id="message"
            placeholder="Message"
            rows={4}
            maxLength={240}
          />
      </div>
    )
  }
}
