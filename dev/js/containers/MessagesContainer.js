import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setTabs, setHasTabs, setTabsContent } from "../actions/AppActions";
import TabsNavigationContainer from '../containers/TabsNavigationContainer';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
@connect((store) => {
  return {
    routing: store.routing,
    tabs: store.app.tabs
  };
})
export default class MessagesContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(setHasTabs(true));
    this.props.dispatch(setTabs(this.props.route.childRoutes));
    this.props.dispatch(setTabsContent(this.props.route.childComponents));
  }
  handleClick(){
    this.props.dispatch(push('createmessage'));
  }
  render(){
    return(
      <div>
        <TabsNavigationContainer />
          <Button
            onClick={this.handleClick}
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
