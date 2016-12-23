import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation';
import { connect } from "react-redux";

@connect((store) => {
  return {
    hasTabs: store.app.toolbar.hasTabs
  };
})
export default class LayoutContainer extends Component {
    render(){
      const {hasTabs} = this.props;
      var classess = '';
      if(hasTabs){
        classess = 'no-shadow';
      }
    return(
      <NavigationDrawer
      navItems={MainNavigation}
      drawerClassName="navigation"
      contentClassName="md-grid"
      //drawerHeader={<div>drawer header</div>}
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
