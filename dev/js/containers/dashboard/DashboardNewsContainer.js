import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardNews } from "../../actions/DashboardNewsActions";

import DashboardNews from '../../components/dashboard/DashboardNews'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardNews: store.dashboardNews.dashboardNews,
     fetched: store.dashboardNews.fetched,
     fetching: store.dashboardNews.fetching
  };
})
export default class DashboardNewsContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardNews());
    }
  }
  render(){
    const { fetched, dashboardNews } = this.props;
    return(
      <DashboardNews fetched={fetched} dashboardNews={dashboardNews} />
      )
  }
}
