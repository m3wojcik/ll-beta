import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';

export default class MessageMenu extends Component {
  render(){
    const {mailbox, onReplayBtnClick, onForwardBtnClick, onDeleteBtnClick, onRestoreBtnClick, onDeletePermanentlyBtnClick} = this.props
    return(
      <div>
      {mailbox=='inbox' ?
        <Button
          onClick={onReplayBtnClick}
          tooltipLabel="Reply"
          icon
          >reply</Button>
      : null }
      {mailbox=='trash' ?
          <Button
            onClick={onRestoreBtnClick}
            tooltipLabel="Restore"
            icon
            >restore</Button>
      : null }
      {mailbox=='trash' ?
          <Button
              onClick={onDeletePermanentlyBtnClick}
              tooltipLabel="Delete permanently"
              icon
            >delete</Button>
      : null }
      {mailbox=='inbox' ?
        <MenuButton
          id="vert-menu"
          icon
          buttonChildren="more_vert"
          className="menu-example"
          tooltipLabel="Menu"
        >
          <ListItem primaryText="Reply" onClick={onReplayBtnClick} leftIcon={<FontIcon>reply</FontIcon>} />
          <ListItem primaryText="Forward" onClick={onForwardBtnClick} leftIcon={<FontIcon>forward</FontIcon>} />
          <ListItem primaryText="Delete" onClick={onDeleteBtnClick} leftIcon={<FontIcon>delete</FontIcon>} />
        </MenuButton>
        : null }
    </div>
    )
  }
}
