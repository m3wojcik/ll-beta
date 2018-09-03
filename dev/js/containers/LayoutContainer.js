import React, { Component } from 'react';
import { connect } from "react-redux";
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainLogo from '../components/MainLogo';
import ToolbarContainer from './ToolbarContainer';
import NavigationUserContainer from './NavigationUserContainer';
import MenuItemLink from '../components/MenuItemLink';
import { FormattedMessage } from 'react-intl';

@connect((store) => {
  return {
    
  };
})
export default class LayoutContainer extends Component {
  render(){
    const {hasTabs, appData, menuVisible} = this.props;
    let toolbarClassName = hasTabs ? 'main-toolbar no-shadow' : 'main-toolbar';
    const navItems = [{
        label: <FormattedMessage id="LayoutContainer.dashboard" defaultMessage="Dashboard" />,
        to: '/',
        index: true,
        icon: 'home',
        iconClass: 'icon-blue'
      },
      {
        label: <FormattedMessage id="LayoutContainer.marks" defaultMessage="Marks" />,
        type: 'marks',
        to: 'marks',
        icon: 'assessment',
        iconClass:'icon-teal'
      },
      {
        label: <FormattedMessage id="LayoutContainer.classes" defaultMessage="Classes" />,
        to: 'classes',
        icon: 'event',
        iconClass:'icon-green'
      },
      {
        label: <FormattedMessage id="LayoutContainer.attendance" defaultMessage="Attendance" />,
        to: 'attendance',
        icon: 'done_all',
        iconClass:'icon-olive'
      },
      {
        label: <FormattedMessage id="LayoutContainer.messages" defaultMessage="Messages" />,
        type: 'messages',
        to: 'inbox',
        icon: 'inbox',
        iconClass:'icon-yellow'
      },
      {
        label: <FormattedMessage id="LayoutContainer.files" defaultMessage="Files" />,
        to: 'files',
        icon: 'folder',
        iconClass:'icon-orange'
      },
      {
        label: <FormattedMessage id="LayoutContainer.tests" defaultMessage="Tests" />,
        to: 'tests',
        icon: 'assignment_turned_in',
        iconClass:'icon-red'
      },
      {
        label: <FormattedMessage id="LayoutContainer.elibrary" defaultMessage="E-library" />,
        to: 'elibrary',
        icon: 'library_books',
        iconClass:'icon-violet'
      },
      {
        label: <FormattedMessage id="LayoutContainer.surveys" defaultMessage="Surveys" />,
        to: 'surveys',
        icon: 'speaker_notes',
        iconClass:'icon-brown'
      },
      {
        label: <FormattedMessage id="LayoutContainer.payments" defaultMessage="Payments" />,
        to: 'payments',
        icon: 'payment',
        iconClass:'icon-grey'
      },
    ]
    return(
      <NavigationDrawer
        navClassName="navigation"
        navItems={navItems.map(props => <MenuItemLink {...props} key={props.to} />)}
        drawerClassName="navigation-drawer"
        includeDrawerHeader
        drawerChildren = {<MainLogo />}
        drawerHeaderChildren={<NavigationUserContainer userData={appData.user} />}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        toolbarThemeType="themed"
        toolbarTitleClassName="toolbar-title"
        toolbarChildren={<ToolbarContainer appData={appData} />}
        contentId="main-content-demo"
        toolbarClassName={toolbarClassName}
        transitionName="md-cross-fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={100}
      >
      {this.props.content}

      </NavigationDrawer>
  )
  }
}
