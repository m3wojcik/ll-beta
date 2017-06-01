import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import {getShortMonth} from '../../actions/Functions';
import Box from '../helpers/Box';
import BoxTitle from '../helpers/BoxTitle';
import Header from '../helpers/Header';
import AttendanceStatuses from './AttendanceStatuses'
import AttendanceCalendar from './AttendanceCalendar'
import ProgressBar from './../helpers/ProgressBar'


import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class Attendance extends Component {
  render(){
    const { attendance } = this.props;
    let attendancesInTime = [];
    const attendanceGroupsRows = attendance.map(function(group,i){
      return(
        <li key={group.group_id}>
          <Header header={group.group_name}  />
          <Box className="no-flex no-padding">
            <BoxTitle
              title="Attendance percent result"
              titleIcon={<FontIcon className="icon-olive">equalizer</FontIcon>}
            />
          <ProgressBar title={Math.round(group.attendance) + "%"}  value={group.attendance} />
              <BoxTitle
                title="Statuses"
                titleIcon={<FontIcon className="icon-olive">dns</FontIcon>}
              />
            <AttendanceStatuses attendance={group.details} />

              <BoxTitle
                title="Calendar"
                titleIcon={<FontIcon className="icon-olive">event</FontIcon>}
              />
            <AttendanceCalendar attendance={group.details} />
          </Box>
        </li>
      )
    });
    return(
      <ul className="clean-list">
        {attendanceGroupsRows}
      </ul>
    )
  }
}
