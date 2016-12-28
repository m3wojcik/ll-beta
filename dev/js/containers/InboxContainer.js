import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setAppHeader } from "../actions/AppActions";
import { fetchInboxMessages } from "../actions/InboxActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Inbox from '../components/Inbox'


@connect((store) => {
   return {
    routing: store.routing,
    page: store.app.page,
    tabs: store.app.tabs,
    inbox: store.inbox.inboxMessages,
    fetched: store.inbox.fetched,
    fetching: store.inbox.fetching
  };
})
export default class InboxContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(fetchInboxMessages(function () {
      this.props.onLoad();
    }.bind(this)));
  }
  handleClick(messageId){
    this.props.dispatch(push('message/' + messageId));
  }
  render(){
    const { inbox, fetched } = this.props;
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content-no-padding content-tabs">
        <Inbox messages={inbox}  onMessageClick={this.handleClick}  />

      </div>
    )
  }
}
