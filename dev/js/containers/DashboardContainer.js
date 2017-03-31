import React, { Component } from 'react';
import { connect } from "react-redux";
import Content from '../components/helpers/Content'
import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import DashboardClassesContainer from './classes/DashboardClassesContainer'
import DashboardNewsContainer from './dashboard/DashboardNewsContainer'
import DashboardAttendancesContainer from './attendance/DashboardAttendancesContainer'
import DashboardMarksContainer from './marks/DashboardMarksContainer'
import DashboardMessagesContainer from './dashboard/DashboardMessagesContainer'
import DashboardFilesContainer from './dashboard/DashboardFilesContainer'
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
  handleTestClick = (event) =>{
      this.props.dispatch(getTodaysClass({user_id: 1}));
  }
  render(){
    const { appData, notifications } = this.props;
    let dashboardCards = [],dashboardCardsLeft = [],dashboardCardsRight = [];
      if(notifications.news > 0) dashboardCards.push(<DashboardNewsContainer key="DashboardNewsContainer" />);
    if(notifications.newInMarks > 0) dashboardCards.push(<DashboardMarksContainer key="DashboardMarksContainer" />);
    if(notifications.newInAttendance > 0) dashboardCards.push(<DashboardAttendancesContainer key="DashboardAttendancesContainer" />);
    if(notifications.newInMessages > 0) dashboardCards.push(<DashboardMessagesContainer key="DashboardMessagesContainer" />);
    if(notifications.newInFiles > 0) dashboardCards.push(<DashboardFilesContainer key="DashboardFilesContainer" />);
    if(notifications.newInTests > 0) dashboardCards.push(<DashboardTestsContainer key="DashboardTestsContainer" />);
    if(notifications.newInElibrary > 0) dashboardCards.push(<DashboardElibraryContainer key="DashboardElibraryContainer" />);
    if(notifications.newInSurveys > 0) dashboardCards.push(<DashboardSurveysContainer key="DashboardSurveysContainer" />);
    if(notifications.newInPayments > 0) dashboardCards.push(<DashboardPaymentsContainer  key="DashboardPaymentsContainer"/>);
    dashboardCards.forEach(function(card,i){
      if(i%2==0){
        dashboardCardsLeft.push(card)
      }else dashboardCardsRight.push(card)
    })
    return(
      <Content>
        <DashboardWelcome appData={appData} />
        <Button raised primary label="test" onClick={this.handleTestClick} />
        <DashboardClassesContainer />
          <div className="md-grid md-row">
            <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">

            </div>
            <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
              
            </div>
          </div>
      </Content>
    )
  }
}
