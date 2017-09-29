import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { showSnack } from 'react-redux-snackbar';

import { fetchMessage, deleteMessage, restoreMessage, updateReceivers } from "../../actions/MessagesActions";
import {BASE_URL} from "../../middleware/api"
import Loader from '../../components/helpers/Loader'
import Message from '../../components/messages/Message';


@connect((store) => {
   return {
    singleMessages: store.messages.singleMessages,
    singleMessage: store.messages.singleMessage,
    fetched: store.messages.singleMessage.fetched,
    fetching: store.messages.singleMessage.fetching,
    deleteMessage: store.messages.deleteMessage
  };
})
export default class MessageContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchMessage({"id": this.props.params.messageId, "mark_as_read": true}));
  }
  componentWillReceiveProps(nextProps){
    const { deleteMessage, singleMessages } = this.props
    const messageId = this.props.params.messageId
    const props = deleteMessage
    const next = nextProps.deleteMessage
    if(next.fetched && props.fetched != next.fetched){
      if(singleMessages[messageId].mailbox !="trash"){
        this.props.dispatch(push("inbox"));
      }else this.props.dispatch(push("trash"));
      this.props.dispatch(showSnack('message_deleted', {label: 'Message deleted', timeout: 3000, button:{label: "UNDO", action: this.handleRestoreMessage.bind(this,next)}}));
    }
    if(next.restored && props.restored != next.restored){
      this.props.dispatch(showSnack('message_restored', {label: 'Message restored', timeout: 3000}));
      this.props.dispatch(push("inbox"));
    }
    if(this.props.params.messageId != nextProps.params.messageId){
      this.props.dispatch(fetchMessage({"id": this.props.params.messageId, "mark_as_read": true}));
    }
  }
  handleReplayBtnClick = (message) => {

    this.props.dispatch(push('createmessage'));
  }
  handleForwardBtnClick = (message) => {
      this.props.dispatch(push('createmessage'));
  }
  handleDeleteBtnClick = (message) => {
    this.props.dispatch(deleteMessage({"ids": [message.id]}));
  }
  handleDeletePermanentlyBtnClick = (message) => {
    this.props.dispatch(deleteMessage({"ids": [message.id],"permanent": 1}));
  }
  handleRestoreMessage = (message) =>{
    this.props.dispatch(restoreMessage({"ids": [message.id]}));
  }
  handleFileClick = (file) => {
    const { singleMessages } = this.props
    const messageId = singleMessages.message.id
    const attachmentId = file.id
    const accessToken = localStorage.getItem('access_token')
    const downloadString = BASE_URL + "attachment?access_token="+ accessToken +"&attachment_id="+attachmentId+"&message_id="+messageId
    window.open(downloadString)
  }
  render(){
    const { singleMessages ,fetched, deleteMessage } = this.props;
    const messageId = this.props.params.messageId
    if(singleMessages[messageId] && singleMessages[messageId].fetched ){
      return(
        <div className="content-no-padding">
          {deleteMessage.fetching ? <Loader centerPadding /> : null}
          <Message
            message={singleMessages[messageId]}
            onFileClick = {this.handleFileClick}
            onReplayBtnClick={this.handleReplayBtnClick}
            onForwardBtnClick={this.handleForwardBtnClick}
            onDeleteBtnClick={this.handleDeleteBtnClick.bind(this, singleMessages[messageId])}
            onRestoreBtnClick={this.handleRestoreMessage.bind(this, singleMessages[messageId])}
            onDeletePermanentlyBtnClick={this.handleDeletePermanentlyBtnClick.bind(this, singleMessages[messageId])}
          />
        </div>
      )
    }else{
      return(<Loader full />)  
    }
  }
}
