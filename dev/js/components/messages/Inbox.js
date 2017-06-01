import React, { Component } from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Avatar from 'react-md/lib/Avatars';
import Divider from 'react-md/lib/Dividers';
import CustomDate from '../helpers/CustomDate'
import {FormattedTime} from 'react-intl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Inbox extends Component {
  render(){
    const { messages, searchValue, onMessageClick, sent } = this.props;
    const mappedMessages = messages.messages.map(function(message){
      let subject = message.subject.toLowerCase();
      let sender = sent ? message.recipients.toLowerCase() : message.sender.toLowerCase()
      let search = searchValue.toLowerCase();
      let right =
          <div className="message-attachment">
            {message.attachments ?
            <FontIcon className="message-attachment-icon">attachment</FontIcon>
            : null }
              <div className="message-time">
                <CustomDate className="md-tile-text--primary md-text" date={message.date}/>
                <div className="md-tile-text--secondary md-text--secondary">
                  <FormattedTime value={message.date} />
                </div>
              </div>
          </div>
      let messageUser = sent ? message.recipients : message.sender
      if(subject.indexOf(search) != -1 || sender.indexOf(search) != -1 ){
        return(
            <ListItem  key={message.id}
              className={message.read ? "message-list-item md-paper--1 message-read" : "message-list-item md-paper--1 message-unread"}
              onClick={onMessageClick.bind(this,message.id)}
              leftAvatar={<Avatar icon={messageUser.charAt(0).toUpperCase()} />}
              rightIcon={right}
              primaryText={message.read ? messageUser : <strong>{messageUser}</strong>}
              secondaryText={message.subject}
            />
        )
      }
    }.bind(this));
    return(
      <List className="white-list">
        <ReactCSSTransitionGroup transitionName="fade-list" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {mappedMessages}
        </ReactCSSTransitionGroup>
      </List>
    )
  }
}
