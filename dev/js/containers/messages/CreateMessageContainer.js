import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import TextField from 'react-md/lib/TextFields'
import { showSnack } from 'react-redux-snackbar';
//import ReactQuill from 'react-quill';
import Button from 'react-md/lib/Buttons/Button';
import { addAlert } from "../../actions/AlertActions";
import { sendMessage, setMessageSubject, setMessageText } from "../../actions/MessagesActions";
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import AddressBookContainer from './AddressBookContainer'
import AlertContainer from '../AlertContainer'
//import '../../../scss/quill.snow.scss';

@connect((store) => {
   return {
     addressBook: store.messages.addressBook,
     subject: store.messages.createMessage.subject,
     text: store.messages.createMessage.text,
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
      this.props.dispatch(showSnack('message_send', {label: 'Message sent', timeout: 3000}));
      this.props.dispatch(push("inbox"));
    }
  }
  handleSubjectChange = (event) =>{
    this.props.dispatch(setMessageSubject(event.target.value))
  }
  handleTextChange = (event) =>{
    this.props.dispatch(setMessageText(event.target.value))
  }
  handleSendClick = () =>{
    const {subject, text, addressBook} = this.props
    const receivers = addressBook.receivers.filter(x => typeof(x) =='number')
    console.log(subject, text, receivers)
    if(receivers.length < 1){
      this.props.dispatch(addAlert({id: "create_message_receivers", text: "Receivers not picked", type:"danger"}))
    }else if(subject == ""){
      this.props.dispatch(addAlert({id: "create_message_subject", text: "No text in subject", type:"danger"}))
    }else{
      this.props.dispatch(sendMessage(
        {
        "userIds": receivers,
        "subject": subject,
        "content": text
        }
      ));
    }
  }
  render(){
    const { subject, text, fetched, reply, forward, message, sendMessage } = this.props;
    return(
      <Content >
        <AlertContainer />
        {sendMessage.fetching ? <Loader centerPadding /> : null}
        <form class="ui form">
          <div className="field">
            <label>Receivers</label>
            <AddressBookContainer />
          </div>
          <div className="field">
            <label>Subject</label>
            <input value={subject} onChange={this.handleSubjectChange} name="subject" type="text"/>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea value={text} onChange={this.handleTextChange} ></textarea>
          </div>
          <Button raised primary onClick={this.handleSendClick}>Send</Button>
        </form>
      </Content>
    )
  }
}
