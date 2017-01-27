import React, { Component } from 'react';
import Divider from 'react-md/lib/Dividers';
import Button from 'react-md/lib/Buttons';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Avatar from 'react-md/lib/Avatars';
import CustomCardTitle from './CustomCardTitle';
import {FormattedRelative} from 'react-intl';
export default class Message extends Component {

  render(){
    const { message } = this.props;
    const menu =(
      <div>
        <Button
          onClick={this.props.onReplayBtnClick.bind(this, message)}
          tooltipLabel="Reply"
          icon
          >reply</Button>
        <MenuButton
          id="vert-menu"
          icon
          buttonChildren="more_vert"
          className="menu-example"
          tooltipLabel="Menu"
        >
        <ListItem primaryText="Reply" onClick={this.props.onReplayBtnClick.bind(this, message)} leftIcon={<FontIcon>reply</FontIcon>} />
        <ListItem primaryText="Forward" onClick={this.props.onForwardBtnClick.bind(this, message)} leftIcon={<FontIcon>forward</FontIcon>} />
        <ListItem primaryText="Delete" onClick={this.props.onDeleteBtnClick.bind(this, message)} leftIcon={<FontIcon>delete</FontIcon>} />
      </MenuButton>
    </div>
    );
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
        </div>
        <div className="message-content" dangerouslySetInnerHTML={{__html:message.message}} />
      </div>
    )
  }
}
