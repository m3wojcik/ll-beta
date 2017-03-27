import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardTests } from "../../actions/DashboardTestsActions";

import DashboardTests from '../../components/tests/DashboardTests'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardTests: store.dashboardTests.dashboardTests,
     fetched: store.dashboardTests.fetched,
     fetching: store.dashboardTests.fetching
  };
})
export default class DashboardTestsContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardTests());
    }
  }
  handleSolveClick = (test) =>{
    this.props.dispatch(push('test/' + test.id));
  }
  render(){
    const { fetched, fetching, dashboardTests } = this.props;
    return(
      <DashboardTests fetched={fetched} dashboardTests={dashboardTests} onSolveClick={this.handleSolveClick}  />
      )
  }
}
