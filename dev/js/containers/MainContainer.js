import React, { Component } from 'react';
import TabsNavigationContainer2 from '../containers/TabsNavigationContainer2'
import { connect } from "react-redux";
import { setTabs, setHasTabs, setTabsContent } from "../actions/AppActions";

@connect((store) => {
  return {
    routing: store.routing,
    tabs: store.app.tabs
  };
})
export default class MainContainer extends Component {
  componentWillMount() {
    const childComponents = this.props.route.childComponents;
    const parent = this.props.route.path;
    this.props.route.childRoutes.forEach(function(obj,i){
      obj.content = childComponents[i]
      obj.parent = parent
    })
    this.props.dispatch(setHasTabs(true));
    // this.props.dispatch(setTabs(this.props.route.childRoutes));
    // this.props.dispatch(setTabsContent(this.props.route.childComponents));
  }
  render(){
    return(
        <TabsNavigationContainer2
          tabs={this.props.route.childRoutes}
        />
    )
  }
}
