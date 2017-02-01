import React, { Component } from 'react';
import { connect } from "react-redux";
import Content from '../components/helpers/Content'
import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import DashboardClassesContainer from './dashboard/DashboardClassesContainer'
import DashboardAttendancesContainer from './dashboard/DashboardAttendancesContainer'
import DashboardMarksContainer from './dashboard/DashboardMarksContainer'
import DashboardMessagesContainer from './dashboard/DashboardMessagesContainer'
import DashboardFilesContainer from './dashboard/DashboardFilesContainer'
import DashboardTestsContainer from './dashboard/DashboardTestsContainer'
import DashboardElibraryContainer from './dashboard/DashboardElibraryContainer'
import DashboardSurveysContainer from './dashboard/DashboardSurveysContainer'
import DashboardPaymentsContainer from './dashboard/DashboardPaymentsContainer'

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
          <div className="md-grid md-row">
            <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
              <DashboardAttendancesContainer />
              <DashboardMessagesContainer />
              <DashboardTestsContainer />
              <DashboardSurveysContainer />
            </div>
            <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
              <DashboardMarksContainer />
              <DashboardFilesContainer />
              <DashboardElibraryContainer />
              <DashboardPaymentsContainer />
            </div>

          </div>
      </Content>
    )
  }
}
