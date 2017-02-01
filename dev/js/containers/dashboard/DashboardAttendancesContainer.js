import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardAttendances } from "../../actions/DashboardAttendancesActions";

import DashboardAttendances from '../../components/dashboard/DashboardAttendances'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardAttendances: store.dashboardAttendances.dashboardAttendances,
     fetched: store.dashboardAttendances.fetched,
     fetching: store.dashboardAttendances.fetching
  };
})
export default class DashboardAttendancesContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardAttendances());
    }
  }
  render(){
    const { fetched, dashboardAttendances } = this.props;
    return(
      <DashboardAttendances fetched={fetched} dashboardAttendances={dashboardAttendances} />
      )
  }
}
