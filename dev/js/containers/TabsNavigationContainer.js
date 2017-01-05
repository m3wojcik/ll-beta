import React, { Component } from 'react';

import { connect } from "react-redux";
import {push} from 'react-router-redux';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import Toolbar from 'react-md/lib/Toolbars';
import {getParamFromPath, getCleanPath} from '../actions/Functions'
import { setAppHeader, setActiveTabIndex, setTabsContainer, pageIsLoaded } from "../actions/AppActions"

@connect((store) => {
   return {
    routing: store.routing,
    toolbar: store.app.toolbar,
    tabs: store.app.tabs,
    page: store.app.page
  };
})
export default class TabsNavigationContainer extends Component {
    constructor(props) {
    super(props);
    this.state = { tabs: []};
    const tabs = [];
    const childrenWithProps = React.Children.map(this.props.tabs.tabsContent,
     (child) => React.cloneElement(child, {
       onLoad: this.forceHeightCalculation
     })
    );
    this.props.tabs.tabs.map(function(tab,i){
        tabs.push(
           <Tab key={i} label={tab.header}>
              <div className="container">{childrenWithProps[i]}</div>
           </Tab>)
    }.bind(this));

    this.state.tabs = tabs;
    this.handleTabChange = this.handleTabChange.bind(this);
    this.setTabsContainer = this.setTabsContainer.bind(this);
    this.forceHeightCalculation = this.forceHeightCalculation.bind(this);
  }
  componentWillMount() {
    //Ustawienia headera i aktywnej zakładki
    var pathName = this.props.routing.locationBeforeTransitions.pathname;
    pathName = getCleanPath(pathName);
    this.props.tabs.tabs.forEach(function(tab, i){
      if(tab.path == pathName){
        this.props.dispatch(setAppHeader(this.props.tabs.tabs[i].header));
        this.props.dispatch(setActiveTabIndex(i));
      }
    }.bind(this));
  }
  setTabsContainer(tabsContainer) {
    this.props.dispatch(setTabsContainer(tabsContainer));
  }
  forceHeightCalculation() {
    if (this.tabs.tabsContainer) {
        this.tabs.tabsContainer.forceUpdate();
    }
  }
  handleTabChange(activeTabIndex) {
    this.props.dispatch(push(this.props.tabs.tabs[activeTabIndex].path));
    this.props.dispatch(setActiveTabIndex(activeTabIndex));
    this.props.dispatch(setAppHeader(this.props.tabs.tabs[activeTabIndex].header));
  }
  render(){
    return(
        <TabsContainer
          onTabChange={this.handleTabChange}
          activeTabIndex={this.props.tabs.activeTabIndex}
          colored
          fixed
          ref={this.setTabsContainer}>
          <Tabs tabId="tab" className="md-paper--2">
            {this.state.tabs}
          </Tabs>
          </TabsContainer>
    )
  }
}
