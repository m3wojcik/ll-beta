import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardSurveys } from "../../actions/DashboardSurveysActions";

import DashboardSurveys from '../../components/dashboard/DashboardSurveys'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardSurveys: store.dashboardSurveys.dashboardSurveys,
     fetched: store.dashboardSurveys.fetched,
     fetching: store.dashboardSurveys.fetching
  };
})
export default class DashboardSurveysContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardSurveys());
    }
  }
  handleSolveClick = (survey) =>{
    this.props.dispatch(push('survey/' + survey.id));
  }
  render(){
    const { fetched, fetching, dashboardSurveys } = this.props;
    return(
      <DashboardSurveys
        fetched={fetched}
        dashboardSurveys={dashboardSurveys}
        onSolveClick={this.handleSolveClick}  />
      )
  }
}
