import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import { fetchInboxMessages } from "../../actions/MessagesActions";
import { addToast } from "../../actions/ToastsActions";
import { createNewMessageBtnClick } from "../../actions/CreateMessageActions";
import Loader from '../../components/helpers/Loader'
import Inbox from '../../components/messages/Inbox'
import InboxToolbar from '../../components/messages/InboxToolbar'
import Content from '../../components/helpers/Content'
import ToolbarExpander from '../../components/helpers/ToolbarExpander';

@connect((store) => {
   return {
    routing: store.routing,
    toolbar: store.app.toolbar,
    inbox: store.messages.inbox.inboxMessages,
    fetched: store.messages.inbox.fetched,
    fetching: store.messages.inbox.fetching,
    singleMessage: store.messages.singleMessage,
    deleteMessage: store.messages.deleteMessage
  };
})
export default class InboxContainer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(fetchInboxMessages());
  }
  componentWillReceiveProps(nextProps){
    const {singleMessage, deleteMessage} = this.props
    if(singleMessage.message != null){
      const propsRestored = deleteMessage.restored
      const nextRestored = nextProps.deleteMessage.restored
      if(nextRestored && propsRestored != nextRestored){
        this.props.dispatch(addToast("Message restored"));
      }
    }
  }
  handleClick = (messageId) => {
    this.props.dispatch(push('message/' + messageId));
  }
  handleCreateClick = () =>{
    this.props.dispatch(createNewMessageBtnClick());
    this.props.dispatch(push('createmessage'));
  }
  handleSendClick = () => {
    this.props.dispatch(push("sent"));
  }
  handleTrashClick = () => {
    this.props.dispatch(push('trash'));
  }
  render(){
    const { inbox, fetched, toolbar, deleteMessage } = this.props;
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
      <Content noPadding expander>
        <ToolbarExpander
          left={<InboxToolbar onCreateClick={this.handleCreateClick} onSendClick={this.handleSendClick} onTrashClick={this.handleTrashClick} />}
        />
        <div className="expander-body">
          {deleteMessage.restoring ? <Loader centerPadding /> : null}
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
      </Content>
    )
  }
}
