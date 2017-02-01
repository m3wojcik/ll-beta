import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardMarks } from "../../actions/DashboardMarksActions";

import DashboardMarks from '../../components/dashboard/DashboardMarks'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardMarks: store.dashboardMarks.dashboardMarks,
     fetched: store.dashboardMarks.fetched,
     fetching: store.dashboardMarks.fetching
  };
})
export default class DashboardMarksContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardMarks());
    }
  }
  render(){
    const { fetched, fetching, dashboardMarks } = this.props;
    return(
      <DashboardMarks fetched={fetched} dashboardMarks={dashboardMarks} />
      )
  }
}
