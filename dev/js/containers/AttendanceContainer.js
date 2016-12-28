import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';

import { setAppHeader, setHasTabs } from "../actions/AppActions";
import { fetchAttendance } from "../actions/AttendanceActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Attendance from '../components/Attendance'


@connect((store) => {
   return {
    page: store.app.page,
    toolbar: store.app.toolbar,
    attendance: store.attendance.attendance,
    fetched: store.attendance.fetched,
    fetching: store.attendance.fetching
  };
})
export default class AttendanceContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setHasTabs(false));
    this.props.dispatch(setAppHeader('Attendance'));
    this.props.dispatch(fetchAttendance());
  }
  render(){
    const { fetched, attendance } = this.props;
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
          <Attendance attendance={attendance} />
      </div>
    )
  }
}
