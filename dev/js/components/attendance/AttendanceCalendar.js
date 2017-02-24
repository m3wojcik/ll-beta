import React, { Component } from 'react';
import {FormattedDate, FormattedRelative} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import IconText from './../helpers/IconText';
import Label from './../helpers/Label';
import AttendanceStatusesCalendar from './AttendanceStatusesCalendar';
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
export default class AttendanceCalendar extends Component {
  getStatus = (date) => {
    const { attendance} = this.props;
    const dateWithoutHours = date.setHours(0,0,0,0);
    let statuses = [];
    attendance.forEach(function(status,i){
        const statusDateWithoutHours =new Date(status.date).setHours(0,0,0,0);
        if(statusDateWithoutHours == dateWithoutHours){
          statuses.push(status)
        }
    })
    return statuses
  }
  renderDay = (day) => {
    const date = day;
    const displayDate = day.getDate();
    const statusArray = this.getStatus(date);
    let status, propsClass;
    if(statusArray.length > 0){
      propsClass = "has-status"
      status = <AttendanceStatusesCalendar statuses={statusArray} />
    }
    return (
      <div className={propsClass}>
        { displayDate }
        {status}
      </div>
    );
  }
  render(){

    return(
      <DayPicker
        canChangeMonth={ true }
        className="calendar-attendances"
        renderDay={ this.renderDay }
        firstDayOfWeek={ 1 }
      />
    )
  }
}
