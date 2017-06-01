import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import { fetchTrashMessages } from "../../actions/MessagesActions";
import { createNewMessageBtnClick } from "../../actions/CreateMessageActions";
import Loader from '../../components/helpers/Loader'
import Inbox from '../../components/messages/Inbox'
import TrashToolbar from '../../components/messages/TrashToolbar'
import Content from '../../components/helpers/Content'
import ToolbarExpander from '../../components/helpers/ToolbarExpander';

@connect((store) => {
   return {
    toolbar: store.app.toolbar,
    trash: store.messages.trash.trashMessages,
    fetched: store.messages.trash.fetched,
    fetching: store.messages.trash.fetching
  };
})
export default class SentContainer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(fetchTrashMessages());
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
  handleSendClick = () => {
    this.props.dispatch(push('sent'));
  }
  render(){
    const { trash, fetched, toolbar } = this.props;
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
      <Content noPadding expander>
        <ToolbarExpander
          left={<TrashToolbar onCreateClick={this.handleCreateClick} onInboxClick={this.handleInboxClick} onSendClick={this.handleSendClick} />}
        />
        <div className="expander-body">
          <Inbox messages={trash} onMessageClick={this.handleClick} searchValue={toolbar.searchValue}  />
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
