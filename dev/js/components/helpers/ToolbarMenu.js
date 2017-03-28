import React, { Component } from 'react';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';

export default class ToolbarMenu extends Component {
  render(){
  const {onLogoutClick} = this.props;
  return(
        <MenuButton
              id="vert-menu"
              icon
              buttonChildren="more_vert"
              className="md-btn--toolbar"
              tooltipLabel="Open some menu"
            >
              <ListItem primaryText="Profile" />
              <ListItem primaryText="Logout" onClick={onLogoutClick} />
            </MenuButton>
    )
  }
}
