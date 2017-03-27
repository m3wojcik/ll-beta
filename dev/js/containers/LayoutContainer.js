import React, { Component } from 'react';
import { connect } from "react-redux";

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation';
import MainLogo from '../components/MainLogo';
import ToolbarContainer from './ToolbarContainer';

import Snackbar from 'react-md/lib/Snackbars';
import Content from '../components/helpers/Content'


import { addToast, removeToast } from "../actions/ToastsActions";
import NavigationUserContainer from './NavigationUserContainer';

@connect((store) => {
  return {
    toasts: store.toasts
  };
})
export default class LayoutContainer extends Component {
  removeToast = () => {
    this.props.dispatch(removeToast());
  }
  render(){
    const {hasTabs, appData, header, toasts} = this.props;

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
          toolbarChildren={<ToolbarContainer />}
          contentId="main-content-demo"
          toolbarClassName={toolbarClassName}
        >
        {this.props.content}
        <Snackbar {...toasts} onDismiss={this.removeToast} />
        </NavigationDrawer>
    )
  }
}
