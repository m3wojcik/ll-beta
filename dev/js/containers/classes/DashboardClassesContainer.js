import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardClasses } from "../../actions/DashboardClassesActions";

import DashboardClasses from '../../components/classes/DashboardClasses'
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
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardClasses());
    }
  }
  handleViewClassClick = (classId) =>{
    this.props.dispatch(push('classDetails/'+classId))
  }
  render(){
    const { fetched, dashboardClasses } = this.props;
    console.log("dashboardClasses", dashboardClasses);
    return(
        <DashboardClasses key="DashboardClasses" fetched={fetched} dashboardClasses={dashboardClasses} onViewClassClick={this.handleViewClassClick} />
      )
  }
}
