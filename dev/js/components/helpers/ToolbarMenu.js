import React, { Component } from 'react';
import MenuButton from 'react-md/lib/Menus/MenuButton';

import ListItem from 'react-md/lib/Lists/ListItem';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  profile: {id: "toolbarMenu.Profile", defaultMessage: "Profile"},
  language: {id: "toolbarMenu.Language", defaultMessage: "Language"},
  logout: {id: "toolbarMenu.Logout", defaultMessage: "Logout"},
  openMenu: {id: "toolbarMenu.OpenMenu", defaultMessage: "Open menu"},
})
const ToolbarMenu = ({intl, onLogoutClick, onProfileClick, onLanguageClick}) => {
  const menuItems = [
              <ListItem key="profile" primaryText={intl.formatMessage(messages.profile)} onClick={onProfileClick} />,
              <ListItem key="language" primaryText={intl.formatMessage(messages.language)} onClick={onLanguageClick} />,
              <ListItem key="logout" primaryText={intl.formatMessage(messages.logout)} onClick={onLogoutClick} />
  ]
  return(
        <MenuButton
              id="vert-menu"
              icon
              className="md-btn--toolbar"
              tooltipLabel={intl.formatMessage(messages.openMenu)}
              menuItems={menuItems}
            >
            more_vert
            </MenuButton>
    )
}
export default injectIntl(ToolbarMenu)