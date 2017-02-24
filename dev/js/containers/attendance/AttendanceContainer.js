import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAttendance } from "../../actions/AttendanceActions";
import Loader from '../../components/helpers/Loader'
import Content from '../../components/helpers/Content'
import Attendance from '../../components/attendance/Attendance'


@connect((store) => {
   return {
    attendance: store.attendance.attendance,
    fetched: store.attendance.fetched,
    fetching: store.attendance.fetching
  };
})
export default class AttendanceContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchAttendance());
  }
  render(){
    const { fetched, attendance } = this.props;
    if(!fetched){
      return(<Loader full />)
    }
    return(
      <Content>
          <Attendance attendance={attendance} />
      </Content>
    )
  }
}
