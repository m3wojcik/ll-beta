import React, { Component } from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';
import {FormattedRelative} from 'react-intl';

export default class Inbox extends Component {
  render(){
    const { messages, searchValue, onMessageClick } = this.props;
    const mappedMessages = messages.map(function(message){
      let subject = message.subject.toLowerCase();
      let sender = message.sender.toLowerCase();
      let search = searchValue.toLowerCase();
      if(subject.indexOf(search) != -1 || sender.indexOf(search) != -1 ){
        return(
          <div key={message.id}>
            <ListItem
              className={message.read ? "message-list-item message-read" : "message-list-item message-unread"}
              onClick={onMessageClick.bind(this,message.id)}
              leftAvatar={<Avatar icon={message.sender.charAt(0).toUpperCase()} />}
              rightIcon={<FormattedRelative value={message.date}/>}
              primaryText={message.read ? message.sender : <strong>{message.sender}</strong>}
              secondaryText={message.subject}
            />
          </div>
        )
      }
    }.bind(this));
    return(
      <List className="">
        <li>
        </li>
        {mappedMessages}
      </List>
    )
  }
}
