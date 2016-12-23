import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';

import { setAppHeader } from "../actions/AppActions";
import { fetchUpcomingClasses } from "../actions/ClassesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Classes from '../components/Classes'


@connect((store) => {
   return {
    routing: store.routing,
    page: store.app.page,
    tabs: store.app.tabs,
    classes: store.classes.classes,
    fetched: store.classes.fetched,
    fetching: store.classes.fetching
  };
})
export default class NotificationsContainer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchUpcomingClasses(function () {
      this.props.onLoad();
    }.bind(this)));
  }

  render(){
    const { classes, fetched } = this.props;
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content content-tabs">
        
      </div>
    )
  }
}
