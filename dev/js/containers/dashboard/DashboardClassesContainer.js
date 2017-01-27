import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardClasses } from "../../actions/DashboardClassesActions";

import DashboardClasses from '../../components/dashboard/DashboardClasses'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardClasses: store.dashboardClasses.dashboardClasses,
     fetched: store.dashboardClasses.fetched,
     fetching: store.dashboardClasses.fetching
  };
})
export default class DashboardClassesContainer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchDashboardClasses());
  }
  render(){
    const { fetched, dashboardClasses } = this.props;
    return(
      <DashboardClasses fetched={fetched} dashboardClasses={dashboardClasses} />
      )
  }
}
