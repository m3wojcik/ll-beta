import React, { Component } from 'react';
import { connect } from "react-redux";
import Content from '../components/helpers/Content'
import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import DashboardClassesContainer from './dashboard/DashboardClassesContainer'

@connect((store) => {
  return {
    appData: store.app.appData,
    fetched: store.app.appData.fetched,
    notifications : store.app.appData.notifications
  };
})
export default class DashboardContainer extends Component {
  render(){
    const { appData, notifications } = this.props;
    let dashboardCards = [];
    return(
      <Content>
        <DashboardWelcome appData={appData} />
        <DashboardClassesContainer />
      </Content>
    )
  }
}
