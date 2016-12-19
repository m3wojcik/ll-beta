import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import Toolbar from 'react-md/lib/Toolbars';

export default class TabsNavigationContainer extends Component {

    constructor(props) {
    super(props);
    this.state = { activeTabIndex: this.props.activeTabIndex, tabs: []};
    const tabs = [];
    this.props.tabs.map(function(tab,i){
        tabs.push(
           <Tab key={i} label={tab.header}>
               <h3 className="md-cell md-cell--12">{this.props.tabsContent[i]}</h3>
           </Tab>)
    }.bind(this));

    this.state.tabs = tabs;
    this.handleTabChange = this.handleTabChange.bind(this);
  }
    handleTabChange(activeTabIndex) {
        this.context.router.push(this.props.tabs[activeTabIndex].path);
        this.setState({ activeTabIndex: activeTabIndex});
    }
  render(){
      //console.log(this.props.tabsContent);
    return(
        <TabsContainer onTabChange={this.handleTabChange} activeTabIndex={this.state.activeTabIndex} colored>
          <Tabs tabId="tab">
            {this.state.tabs}
          </Tabs>
          </TabsContainer>          
    )
  }
}
TabsNavigationContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
