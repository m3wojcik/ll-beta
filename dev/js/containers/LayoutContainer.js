import React, { Component } from 'react';
import { connect } from "react-redux";

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation';
import MainLogo from '../components/MainLogo';
import ToolbarContainer from './ToolbarContainer';
import Loader from '../components/helpers/Loader'
import Snackbar from 'react-md/lib/Snackbars';
import Content from '../components/helpers/Content'
import {getAppSettings, getCleanPath} from '../actions/Functions';
import { fetchAppData, setAppSettings } from "../actions/AppActions";
import { addToast, removeToast } from "../actions/ToastsActions";
import NavigationUserContainer from './NavigationUserContainer';

@connect((store) => {
  return {
    routing: store.routing,
    toasts: store.toasts,
    appData: store.app.appData,
    toolbar: store.app.toolbar,
    hasTabs: store.app.toolbar.hasTabs,
    header: store.app.toolbar.header
  };
})
export default class LayoutContainer extends Component {
  componentDidMount(){
    console.log('fetch app data');
    const { routing } = this.props;
    const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
    this.props.dispatch(fetchAppData());
    let settings = getAppSettings(currentPath);
    this.props.dispatch(setAppSettings(settings));
  }
  componentWillReceiveProps(nextProps){
    const { routing } = this.props;
    const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
    const nextPath = getCleanPath(nextProps.routing.locationBeforeTransitions.pathname);
    if(currentPath != nextPath){
      let settings = getAppSettings(nextPath);
      this.props.dispatch(setAppSettings(settings));
    }
  }
  removeToast = () => {
    this.props.dispatch(removeToast());
  }
  render(){
    const {hasTabs, appData, toolbar, header,toasts} = this.props;

    let toolbarClassName = hasTabs ? 'main-toolbar no-shadow' : 'main-toolbar';
    if(!appData.fetched){
      return(
          <Loader fullPage />
      )
    }
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
