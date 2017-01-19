import React, { Component } from 'react';
import { connect } from "react-redux";

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation';
import ToolbarContainer from './ToolbarContainer';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

import { fetchAppData, setAppSettings } from "../actions/AppActions";
import NavigationUserContainer from './NavigationUserContainer';

@connect((store) => {
  return {
    routing: store.routing,
    appData: store.app.appData,
    toolbar: store.app.toolbar,
    hasTabs: store.app.toolbar.hasTabs,
    header: store.app.toolbar.header
  };
})
export default class LayoutContainer extends Component {
  componentDidMount(){
    const { routing } = this.props;
    const currentPath = routing.locationBeforeTransitions.pathname;
    this.props.dispatch(fetchAppData());
    let settings = this.getAppSettings(currentPath);
    this.props.dispatch(setAppSettings(settings));
  }
  componentWillReceiveProps(nextProps){
    const { routing } = this.props;
    const currentPath = routing.locationBeforeTransitions.pathname;
    const nextPath = nextProps.routing.locationBeforeTransitions.pathname;
    if(currentPath != nextPath){
      let settings = this.getAppSettings(nextPath);
      this.props.dispatch(setAppSettings(settings));
    }
  }
  getAppSettings = (pathname) =>{
    let settings = {};
    if(/^\/files(\/.+|)/.test(pathname)){
      settings = {"header":"Files", "hasTabs":false, "searchBtn": false}
      return settings;
    }
    switch (pathname) {
      case "/profile/view":
        settings = {"header":"Profile", "hasTabs":false, "searchBtn": false}
        break;
      case "/profile/edit":
        settings = {"header":"Edit profile", "hasTabs":false, "searchBtn": false}
        break;
      case "/profile/changePassword":
        settings = {"header":"Change password", "hasTabs":false, "searchBtn": false}
        break;
      case "/profile/loginHistory":
        settings = {"header":"Login history", "hasTabs":false, "searchBtn": false}
        break;
      case "/inbox":
        settings = {"header":"Inbox", "hasTabs":false, "searchBtn": true}
        break;
      case "/createmessage":
        settings = {"header":"Create", "hasTabs":false, "searchBtn": false}
        break;
      case "/attendance":
        settings = {"header":"Attendance", "hasTabs":false, "searchBtn": false}
        break;
      case "/classes":
        settings = {"header":"Classes", "hasTabs":false, "searchBtn": false}
        break;
      case "/marks":
        settings = {"header":"Marks", "hasTabs":false, "searchBtn": false}
        break;
      case "/tests":
        settings = {"header":"Tests", "hasTabs":false, "searchBtn": false}
        break;
      case "/elibrary/list":
        settings = {"header":"E-library", "hasTabs":false, "searchBtn": true}
        break;
      case "/elibrary/reserved":
        settings = {"header":"Reserved", "hasTabs":false, "searchBtn": false}
        break;
    }
    return settings;
  }

  render(){
    const {hasTabs, appData, toolbar, header} = this.props;


    let classess = hasTabs ? 'no-shadow' : '';
    if(!appData.fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes-details" key="loading"  />
        </div>
      )
    }
    return(
        <NavigationDrawer
          drawerClassName="navigation-drawer"
          includeDrawerHeader
          drawerChildren = {<MainNavigation />}
          drawerHeaderChildren={<NavigationUserContainer userData={appData.user} />}

          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}

          toolbarThemeType="themed"
          toolbarTitleClassName="toolbar-title"
          toolbarChildren={<ToolbarContainer />}
          contentClassName=""
          contentId="main-content-demo"
          toolbarClassName={classess}
        >

        {this.props.content}
        </NavigationDrawer>
    )
  }
}
