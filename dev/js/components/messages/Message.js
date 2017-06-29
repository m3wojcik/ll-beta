import React, { Component } from 'react';
import Divider from 'react-md/lib/Dividers';
import Button from 'react-md/lib/Buttons';
import Avatar from 'react-md/lib/Avatars';
import {FormattedRelative} from 'react-intl';
import CustomCardTitle from '../CustomCardTitle';
import Files from '../files/Files'
import MessageMenu from './MessageMenu'

export default class Message extends Component {

  render(){
    const { message, onFileClick, onReplayBtnClick, onForwardBtnClick, onDeleteBtnClick, onRestoreBtnClick, onDeletePermanentlyBtnClick } = this.props;
    const menu =
      <MessageMenu
        mailbox = {message.mailbox}
        onReplayBtnClick={onReplayBtnClick}
        onForwardBtnClick={onForwardBtnClick}
        onDeleteBtnClick={onDeleteBtnClick}
        onRestoreBtnClick={onRestoreBtnClick}
        onDeletePermanentlyBtnClick={onDeletePermanentlyBtnClick}
        />
    return(
      <div className="message">
        <div className="message-header md-paper--1">
          <CustomCardTitle left={<h2>{message.subject}</h2>} right={menu} />
          <div className="md-list-tile md-list-tile--two-lines">
            <div className="md-ink-container"></div>
            <div className="md-tile-addon md-tile-addon--avatar">
              <Avatar icon={message.sender.charAt(0).toUpperCase()} />
            </div>
            <div className="md-tile-content md-tile-content--left-avatar">
              <div className="md-tile-text--primary md-text">
                <strong>{message.sender}</strong>
              </div>
              <div className="md-tile-text--secondary md-text--secondary">
                <FormattedRelative value={message.date}/>
              </div>
            </div>
          </div>
          <div className="message-content" dangerouslySetInnerHTML={{__html:message.content}} />
        </div>
        {message.attachments.length > 0 ?
        <div className="content-card">
          <Files
            filesHeader="Attachments"
            files={message.attachments}
            onClick={onFileClick} />
        </div>
        :null}
      </div>
    )
  }
}
