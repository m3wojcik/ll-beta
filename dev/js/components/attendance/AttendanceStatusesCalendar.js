import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
export default class AttendanceStatusesCalendar extends Component {
  render(){
    const { statuses } = this.props;

    const statusesMapped = statuses.map(
      (status , i) =>
      <li key={i}>
        <FontIcon style={{color:status.color}}>fiber_manual_record</FontIcon>
      </li>
    );
    return(
      <ul key="list" className="statuses-calendar">
        {statusesMapped}
      </ul>
    )
  }
}
