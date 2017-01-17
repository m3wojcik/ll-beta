import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchInboxMessages } from "../actions/InboxActions";
import { createNewMessageBtnClick } from "../actions/CreateMessageActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Inbox from '../components/Inbox'
import InboxToolbar from '../components/InboxToolbar'


@connect((store) => {
   return {
     toolbar: store.app.toolbar,
    inbox: store.inbox.inboxMessages,
    fetched: store.inbox.fetched,
    fetching: store.inbox.fetching
  };
})
export default class InboxContainer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(fetchInboxMessages());
  }
  handleClick = (messageId) => {
    this.props.dispatch(push('message/' + messageId));
  }
  handleCreateClick = () =>{
    this.props.dispatch(createNewMessageBtnClick());
    this.props.dispatch(push('createmessage'));
  }
  handleSendClick = () => {
    this.props.dispatch(push('send'));
  }
  handleTrashClick = () => {
    this.props.dispatch(push('trash'));
  }
  render(){
    const { inbox, fetched, toolbar } = this.props;
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content-no-padding">
        <InboxToolbar onCreateClick={this.handleCreateClick} onSendClick={this.handleSendClick} onTrashClick={this.handleTrashClick} />
        <Inbox messages={inbox} onMessageClick={this.handleClick} searchValue={toolbar.searchValue}  />
          <Button
            className="hidden-lg hidden-md"
            onClick={this.handleCreateClick}
            floating
            primary
            fixed
          >
            <FontIcon>create</FontIcon>
          </Button>
      </div>
    )
  }
}
