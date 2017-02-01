import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardElibrary } from "../../actions/DashboardElibraryActions";

import DashboardElibrary from '../../components/dashboard/DashboardElibrary'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardElibrary: store.dashboardElibrary.dashboardElibrary,
     fetched: store.dashboardElibrary.fetched,
     fetching: store.dashboardElibrary.fetching
  };
})
export default class DashboardElibraryContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardElibrary());
    }
  }
  render(){
    const { fetched, fetching, dashboardElibrary } = this.props;
    return(
      <DashboardElibrary fetched={fetched} dashboardElibrary={dashboardElibrary} />
      )
  }
}
