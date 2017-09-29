import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchMessage, replayMessage } from "../../actions/MessagesActions";
import MessageWallContent from '../../components/wall/MessageWallContent'
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'

@connect((store) => {
   return {
    singleMessages: store.messages.singleMessages
  };
})
export default class WallMessageContainer extends Component {
  componentDidMount(){
    const { messageId } = this.props;
    this.props.dispatch(fetchMessage({"id": messageId, "mark_as_read": true}));
  }
  handleReplayClick = (message) =>{
    this.props.dispatch(replayMessage({
      subject: message.subject,
      text: message.content.replace(/<[^>]+>/g, ''),
      senderId: message.senderId
    }))
    this.props.dispatch(push('createmessage'));
  }
  render(){
    const { singleMessages, messageId } = this.props;
    if(singleMessages[messageId] && singleMessages[messageId].fetched ){
      return(
        <MessageWallContent onReplayClick={this.handleReplayClick} message={singleMessages[messageId]} />
      )  
    }else{
      return(<Loader centerPadding />)  
    }
  }
}
