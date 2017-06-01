import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import { fetchSendMessages } from "../../actions/MessagesActions";
import { createNewMessageBtnClick } from "../../actions/CreateMessageActions";
import Loader from '../../components/helpers/Loader'
import Inbox from '../../components/messages/Inbox'
import SentToolbar from '../../components/messages/SentToolbar'
import Content from '../../components/helpers/Content'
import ToolbarExpander from '../../components/helpers/ToolbarExpander';

@connect((store) => {
   return {
    toolbar: store.app.toolbar,
    sent: store.messages.sent.sentMessages,
    fetched: store.messages.sent.fetched,
    fetching: store.messages.sent.fetching
  };
})
export default class SentContainer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(fetchSendMessages());
  }
  handleClick = (messageId) => {
    this.props.dispatch(push('message/' + messageId));
  }
  handleCreateClick = () =>{
    this.props.dispatch(createNewMessageBtnClick());
    this.props.dispatch(push('createmessage'));
  }
  handleInboxClick = () => {
    this.props.dispatch(push('inbox'));
  }
  handleTrashClick = () => {
    this.props.dispatch(push('trash'));
  }
  render(){
    const { sent, fetched, toolbar } = this.props;
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
      <Content noPadding expander>
        <ToolbarExpander
          left={<SentToolbar onCreateClick={this.handleCreateClick} onInboxClick={this.handleInboxClick} onTrashClick={this.handleTrashClick} />}
        />
        <div className="expander-body">
          <Inbox sent messages={sent} onMessageClick={this.handleClick} searchValue={toolbar.searchValue}  />
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
      </Content>
    )
  }
}
