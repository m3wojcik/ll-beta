import React, { Component } from 'react';
import { connect } from "react-redux";
import { setHasTabs } from "../actions/AppActions";
import { fetchMessage } from "../actions/MessageActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Message from '../components/Message';


@connect((store) => {
   return {
    routing: store.routing,
    toolbar: store.app.toolbar,
    message: store.message.message,
    fetched: store.message.fetched,
    fetching: store.message.fetching
  };
})
export default class MessageContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setHasTabs(false));
    this.props.dispatch(fetchMessage(this.props.params.messageId));
  }
  render(){
    const { message ,fetched } = this.props;
    console.log('Message',message);
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes-details" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
        <Message message={message} />
      </div>
    )
  }
}
