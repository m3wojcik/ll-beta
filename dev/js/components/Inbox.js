import React, { Component } from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';
import {FormattedRelative} from 'react-intl';
import { Card } from 'semantic-ui-react'

export default class Inbox extends Component {
  render(){
    const { messages } = this.props;
    const mappedMessages = messages.map(
      message =>
      <div key={message.id}>
        <ListItem
          className={message.read ? "message-list-item message-read" : "message-list-item message-unread"}
          onClick={this.props.onMessageClick.bind(this,message.id)}
          leftAvatar={<Avatar icon={message.sender.charAt(0).toUpperCase()} />}
          rightIcon={<FormattedRelative value={message.date}/>}
          primaryText={message.read ? message.sender : <strong>{message.sender}</strong>}
          secondaryText={message.subject}
        />
      </div>
    );
    return(
      <List className="">
        <li>
        </li>
        {mappedMessages}
      </List>
    )
  }
}
