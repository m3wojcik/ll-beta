import React, { Component } from 'react';
import { connect } from "react-redux";
import Content from '../components/helpers/Content'
import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import DashboardClassesContainer from './classes/DashboardClassesContainer'
import DashboardNewsContainer from './dashboard/DashboardNewsContainer'
import DashboardAttendancesContainer from './attendance/DashboardAttendancesContainer'
import DashboardMarksContainer from './marks/DashboardMarksContainer'
import DashboardMessagesContainer from './dashboard/DashboardMessagesContainer'
import DashboardFilesContainer from './files/DashboardFilesContainer'
import DashboardTestsContainer from './dashboard/DashboardTestsContainer'
import DashboardElibraryContainer from './dashboard/DashboardElibraryContainer'
import DashboardSurveysContainer from './dashboard/DashboardSurveysContainer'
import DashboardPaymentsContainer from './dashboard/DashboardPaymentsContainer'
import Button from 'react-md/lib/Buttons/Button';
import {getTodaysClass} from '../actions/index'

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
    let dashboardCards = [],dashboardCardsLeft = [],dashboardCardsRight = [];
      if(notifications.news > 0) dashboardCards.push(<DashboardNewsContainer key="DashboardNewsContainer" />);
    if(notifications.newMarks > 0) dashboardCards.push(<DashboardMarksContainer key="DashboardMarksContainer" />);
    if(notifications.newAttendance > 0) dashboardCards.push(<DashboardAttendancesContainer key="DashboardAttendancesContainer" />);
    if(notifications.newMessages > 0) dashboardCards.push(<DashboardMessagesContainer key="DashboardMessagesContainer" />);
    if(notifications.newFiles > 0) dashboardCards.push(<DashboardFilesContainer key="DashboardFilesContainer" />);
    if(notifications.newTests > 0) dashboardCards.push(<DashboardTestsContainer key="DashboardTestsContainer" />);
    if(notifications.newLibrary > 0) dashboardCards.push(<DashboardElibraryContainer key="DashboardElibraryContainer" />);
    if(notifications.newSurveys > 0) dashboardCards.push(<DashboardSurveysContainer key="DashboardSurveysContainer" />);
    //if(notifications.newPayments > 0) dashboardCards.push(<DashboardPaymentsContainer  key="DashboardPaymentsContainer"/>);
    dashboardCards.forEach(function(card,i){
      if(i%2==0){
        dashboardCardsLeft.push(card)
      }else dashboardCardsRight.push(card)
    })
    return(
      <Content>
        <DashboardWelcome appData={appData} />
        <DashboardClassesContainer />
        <div className="md-grid md-row">
          <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
            {dashboardCardsLeft}
          </div>
          <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
            {dashboardCardsRight}
          </div>
        </div>
      </Content>
    )
  }
}
