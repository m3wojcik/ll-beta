import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { connect } from "react-redux";
import { fetchAppData } from "../actions/AppActions";

@connect((store) => {
  return {
    appData: store.app.appData,
    hasTabs: store.app.toolbar.hasTabs,
    header: store.app.toolbar.header,
    hasBackButton: store.app.toolbar.hasBackButton
  };
})
export default class LayoutContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchAppData());
  }
  render(){
      const {hasTabs, appData} = this.props;
      var classess = hasTabs ? 'no-shadow' : '';
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
        contentClassName="md-grid"
        includeDrawerHeader
        drawerChildren = {<MainNavigation />}
        drawerHeaderChildren={<div>{appData.user.firstName}</div>}
        //toolbarChildren= {}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
        desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
        toolbarTitle={this.props.header}
        contentClassName=""
        contentId="main-content-demo"
        toolbarClassName={classess}
        >

        {this.props.content}
        </NavigationDrawer>
    )
  }
}
