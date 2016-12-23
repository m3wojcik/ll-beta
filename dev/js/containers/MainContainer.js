import React, { Component } from 'react';
import TabsNavigationContainer from '../containers/TabsNavigationContainer'
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
    this.props.dispatch(setHasTabs(true));
    this.props.dispatch(setTabs(this.props.route.childRoutes));
    this.props.dispatch(setTabsContent(this.props.route.childComponents));
  }
  render(){
    return(
      <div>
        <TabsNavigationContainer />
      </div>

    )
  }
}
