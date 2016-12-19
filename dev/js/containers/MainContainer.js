import React, { Component } from 'react';
import TabsNavigationContainer from '../containers/TabsNavigationContainer'

import AlertsContainer2 from './AlertsContainer';
export default class MainContainer extends Component {
  render(){
      //console.log("Main: ", '');
    return(
      <div>
        <TabsNavigationContainer activeTabIndex={0} tabs={this.props.route.childRoutes} tabsContent={this.props.route.childComponents} />
      </div>

    )
  }
}
