import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import TextField from 'react-md/lib/TextFields'
//import ReactQuill from 'react-quill';
import Button from 'react-md/lib/Buttons/Button';
import { sendMessage, addFeedback } from "../../actions/MessagesActions";
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import AddressBookContainer from './AddressBookContainer'
//import '../../../scss/quill.snow.scss';

@connect((store) => {
   return {
     addressBook: store.messages.createMessage.addressBook,
     message: store.messages.createMessage.message,
     reply: store.messages.createMessage.reply,
     forward: store.messages.createMessage.forward,
     fetched: store.messages.createMessage.fetched,
     fetching: store.messages.createMessage.fetching,
     sendMessage: store.messages.sendMessage
  };
})
export default class CreateMessageContainer extends Component {
  componentWillReceiveProps(nextProps){
    const { sendMessage } = this.props
    const props = sendMessage
    const next = nextProps.sendMessage
    if(next.fetched && props.fetched != next.fetched){
      this.props.dispatch(addFeedback("Message send"));
      this.props.dispatch(push("inbox"));
    }
  }
  handleSendClick = () =>{
    const subject = this.subject.value
    const message = this.message.value
    const receivers = this.props.sendMessage.receivers.map(rec => rec.id)
    this.props.dispatch(sendMessage(
      {
      //"ids": receivers,
      "subject": subject,
      "message": message
      }
    ));
  }
  render(){
    const { fetched, reply, forward, message, sendMessage } = this.props;
    return(
      <Content >
        {sendMessage.fetching ? <Loader centerPadding /> : null}
        <form class="ui form">
          <div className="field">
            <label>Receivers</label>
            <AddressBookContainer />
          </div>
          <div className="field">
            <label>Subject</label>
            <input ref={(input) => { this.subject = input; }} name="subject" type="text"/>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea ref={(input) => { this.message = input; }} ></textarea>
          </div>
          <Button raised primary label="Send" onClick={this.handleSendClick} />
        </form>
      </Content>
    )
  }
}
