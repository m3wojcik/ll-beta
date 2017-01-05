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
    page: store.app.page,
    fetched: store.app.tabs.fetched
  };
})
export default class TabsNavigationContainer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTabIndex: 0}
    this.handleTabChange = this.handleTabChange.bind(this);
    this.setTabsContainer = this.setTabsContainer.bind(this);
    this.forceHeightCalculation = this.forceHeightCalculation.bind(this);
  }
  setTabsContainer(tabsContainer) {
    this.tabsContainer = tabsContainer;
  }
  handleTabChange(activeTabIndex) {
    const {tabs} = this.props;
    this.props.dispatch(setAppHeader(tabs[activeTabIndex].header));
    this.props.dispatch(push(tabs[activeTabIndex].parent + "/" + tabs[activeTabIndex].path));
    this.setState({activeTabIndex: activeTabIndex});
  }
  componentWillReceiveProps(nextProps){
    const {tabs} = this.props;
    let currentPath = getCleanPath(this.props.routing.locationBeforeTransitions.pathname);
    let nextPath = getCleanPath(nextProps.routing.locationBeforeTransitions.pathname);
    if(currentPath != nextPath){
      let activeTab = 0;
      let pathName = getParamFromPath(nextPath);
      tabs.forEach(function(tab, i){
        if(tab.path == pathName){
          activeTab = i;
        }
      })
      this.setState({activeTabIndex: activeTab});
     }
  }
  componentDidMount(){
    const {tabs} = this.props;
    let pathName = getParamFromPath(this.props.routing.locationBeforeTransitions.pathname);
    let activeTab = 0;
    tabs.forEach(function(tab, i){
      if(tab.path == pathName){
        activeTab = i;
      }
    })
    this.props.dispatch(setAppHeader(tabs[activeTab].header));
    this.setState({activeTabIndex: activeTab});
  }
  forceHeightCalculation() {
    if (this.tabsContainer) {
      this.tabsContainer.forceUpdate();
    }
    // if (this.tabs.tabsContainer) {
    //     this.tabs.tabsContainer.forceUpdate();
    // }
  }
  render(){
    const {tabs} = this.props;
    const {activeTabIndex} = this.state;
    const mappedTabs = tabs.map(
      (tab, i) =>
      <Tab key={i} label={tab.header}>
         <div className="container">{tab.content}</div>
      </Tab>
    )
    return(
      <TabsContainer
        onTabChange={this.handleTabChange}
        activeTabIndex={activeTabIndex}
        colored
        fixed
        ref={this.setTabsContainer}>
          <Tabs tabId="tab" className="md-paper--2">
            {mappedTabs}
          </Tabs>
        </TabsContainer>
    )
  }
}
