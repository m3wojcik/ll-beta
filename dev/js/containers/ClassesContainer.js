import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';

import { setAppSettings } from "../actions/AppActions";
import { fetchUpcomingClasses } from "../actions/ClassesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Classes from '../components/Classes'


@connect((store) => {
   return {
    classes: store.classes.classes,
    fetched: store.classes.fetched,
    fetching: store.classes.fetching
  };
})
export default class DashboardClassesContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(fetchUpcomingClasses());
  }
  handleClick(classId, className){
    this.props.dispatch(setAppSettings({header:className, hasTabs: false}));
    this.props.dispatch(push('classDetails/' + classId));
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
      <div className="content">
        <Classes
          classes={classes}
          onCardClick={this.handleClick}
          headers  />
      </div>
    )
  }
}
