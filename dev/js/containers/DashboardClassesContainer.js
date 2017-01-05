import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';

import { setAppHeader, setTabsFetch } from "../actions/AppActions";
import { fetchUpcomingClasses } from "../actions/DashboardClassesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Classes from '../components/Classes'


@connect((store) => {
   return {
    routing: store.routing,
    page: store.app.page,
    tabs: store.app.tabs,
    dashboardClasses: store.dashboardClasses.dashboardClasses,
    fetched: store.dashboardClasses.fetched,
    fetching: store.dashboardClasses.fetching
  };
})
export default class DashboardClassesContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    
    this.props.dispatch(setTabsFetch(false));
    this.props.dispatch(fetchUpcomingClasses(function(){
      this.props.dispatch(setTabsFetch(true));
    }.bind(this)));
  }
  handleClick(classId, className){
    this.props.dispatch(setAppHeader('Details: ' + className));
    this.props.dispatch(push('classDetails/' + classId));
  }
  render(){
    const { dashboardClasses, fetched } = this.props;
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content content-tabs">
        <Classes classes={dashboardClasses} onCardClick={this.handleClick}  />
      </div>
    )
  }
}
