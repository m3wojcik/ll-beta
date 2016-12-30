import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setAppSettings } from "../actions/AppActions";
import { fetchMessage } from "../actions/MessageActions";
import { replyMessageBtnClick, forwardMessageBtnClick, deleteMessageBtnClick } from "../actions/CreateMessageActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Message from '../components/Message';


@connect((store) => {
   return {
    message: store.message.message,
    fetched: store.message.fetched,
    fetching: store.message.fetching
  };
})
export default class MessageContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setAppSettings({header: 'Inbox', hasTabs: false}));
    this.props.dispatch(fetchMessage(this.props.params.messageId));
    this.handleReplayBtnClick = this.handleReplayBtnClick.bind(this);
    this.handleForwardBtnClick = this.handleForwardBtnClick.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
  }
  handleReplayBtnClick(message){
      this.props.dispatch(replyMessageBtnClick(message));
      this.props.dispatch(push('createmessage'));
  }
  handleForwardBtnClick(message){
      this.props.dispatch(forwardMessageBtnClick(message));
      this.props.dispatch(push('createmessage'));
  }
  handleDeleteBtnClick(message){
      this.props.dispatch(deleteMessageBtnClick(message));
      this.props.dispatch(push('inbox'));
  }
  render(){
    const { message ,fetched } = this.props;
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes-details" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
        <Message
          message={message}
          onReplayBtnClick={this.handleReplayBtnClick}
          onForwardBtnClick={this.handleForwardBtnClick}
          onDeleteBtnClick={this.handleDeleteBtnClick} />
      </div>
    )
  }
}
