import React, { Component } from 'react';
import TabsNavigationContainer from '../containers/TabsNavigationContainer'

export default class MainContainer extends Component {
  render(){
      console.log("Main: ", this.props);
    return(
      <div>
      Konponent main
        <TabsNavigationContainer activeTabIndex={0} tabs={this.props.route.childRoutes} />
        <hr />
        {this.props.children}
      </div>

    )
  }
}
