import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CustomTabs extends Component {

  render(){
    const { tabs } = this.props;
    const mappedTabs = tabs.map(
      (tab, i) =>
      tab.active ?
      <Link key={i} to={tab.link} className="selected">{tab.icon}{tab.label}</Link>
      :
      <Link key={i} to={tab.link} >{tab.icon}{tab.label}</Link>
    )
    return(
      <div className="custom-tabs">
        {mappedTabs}
      </div>
    )
  }
}
