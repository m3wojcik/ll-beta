import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Label from './../helpers/Label'
import Tooltip from './../helpers/Tooltip'

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  attendanceChecked: {
    id: 'classDetailsStatus.AttendanceChecked',
    defaultMessage: 'Attendance checked'
  },
  homeworkChecked: {
    id: 'classDetailsStatus.HomeworkChecked',
    defaultMessage: 'Homework checked'
  },
  filledIn: {
    id: 'classDetailsStatus.FilledIn',
    defaultMessage: 'Filled in'
  },
  online: {
    id: 'classDetailsStatus.Online',
    defaultMessage: 'Online'
  },
  filesAdded: {
    id: 'classDetailsStatus.FilesAdded',
    defaultMessage: 'Files added'
  },
  testsAdded: {
    id: 'classDetailsStatus.TestsAdded',
    defaultMessage: 'Tests added'
  }
})

const ClassDetailsIconStatus = ({ intl, status, details }) => {

    let classDetails = []
    if(details.attendance_checked){
      classDetails.push(
        <li key="attendance_checked">
          <Tooltip tooltipLabel={intl.formatMessage(messages.attendanceChecked)} tooltipPosition="top"><FontIcon class="icon-olive">done_all</FontIcon></Tooltip>
        </li>
      )
    }
    if(details.homework_checked){
      classDetails.push(
        <li key="homework_checked">
          <Tooltip tooltipLabel={intl.formatMessage(messages.homeworkChecked)} tooltipPosition="top"><FontIcon class="icon-blue">home</FontIcon></Tooltip>
        </li>
      )
    }
    if(details.lesson_object_added){
      classDetails.push(
        <li key="lesson_object_added">
          <Tooltip tooltipLabel={intl.formatMessage(messages.filledIn)} tooltipPosition="top"><FontIcon class="icon-purple">edit</FontIcon></Tooltip>
        </li>
      )
    }
    if(details.online){
      classDetails.push(
        <li key="online">
          <Label label={intl.formatMessage(messages.online)} className="label-teal" />
        </li>
      )
    }
    if(details.files_added){
      classDetails.push(
        <li key="files_added">
          <Tooltip tooltipLabel={intl.formatMessage(messages.filesAdded)} tooltipPosition="top"><FontIcon class="icon-orange">folder</FontIcon></Tooltip>
        </li>
      )
    }
    if(details.tests_added){
      classDetails.push(
        <li key="tests_added">
          <Tooltip tooltipLabel={intl.formatMessage(messages.testsAdded)} tooltipPosition="top"><FontIcon class="icon-red">assignment_turned_in</FontIcon></Tooltip>
        </li>
      )
    }
    return(
        <ul className="clean-list list-horizontal">
          {classDetails}
        </ul>
    )
  }
export default injectIntl(ClassDetailsIconStatus)