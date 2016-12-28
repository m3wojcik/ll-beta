import React, { Component } from 'react';
import TabsNavigationContainer from '../containers/TabsNavigationContainer'
import { connect } from "react-redux";
import { setTabs, setHasTabs, setTabsContent } from "../actions/AppActions";
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
@connect((store) => {
  return {
    routing: store.routing,
    tabs: store.app.tabs
  };
})
export default class MessagesContainer extends Component {
  componentWillMount() {
    this.props.dispatch(setHasTabs(true));
    this.props.dispatch(setTabs(this.props.route.childRoutes));
    this.props.dispatch(setTabsContent(this.props.route.childComponents));
  }
  render(){
    return(
      <div>
        <TabsNavigationContainer />
          <Button
            floating
            secondary
            fixed
          >
            <FontIcon>create</FontIcon>
          </Button>
      </div>

    )
  }
}
