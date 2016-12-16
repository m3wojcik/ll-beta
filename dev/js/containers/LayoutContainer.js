import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import MainNavigation from '../components/MainNavigation'


export default class LayoutContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <NavigationDrawer
      navItems={MainNavigation}
      drawerClassName="navigation"
      contentClassName="md-grid"
      //drawerHeaderChildren={<div>sds</div>}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
      tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
      desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
      toolbarTitle={this.props.header}
      contentClassName="content"
      contentId="main-content-demo"
      >{this.props.content}
      </NavigationDrawer>
    )
  }
}
