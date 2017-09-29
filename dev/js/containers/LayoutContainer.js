import React, { Component } from 'react';
import { connect } from "react-redux";

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation';
import MainLogo from '../components/MainLogo';
import ToolbarContainer from './ToolbarContainer';
import NavigationUserContainer from './NavigationUserContainer';

@connect((store) => {
  return {
    toasts: store.toasts
  };
})
export default class LayoutContainer extends Component {

  render(){
    const {hasTabs, appData, toasts} = this.props;

    let toolbarClassName = hasTabs ? 'main-toolbar no-shadow' : 'main-toolbar';
    return(
        <NavigationDrawer
          drawerClassName="navigation-drawer"
          includeDrawerHeader
          drawerChildren = {<div className="navigation-body"><MainNavigation /><MainLogo /></div>}
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
