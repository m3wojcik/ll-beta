import React from 'react';
import Label from './../helpers/Label'

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

const ClassDetailsStatus = ({ intl, status, details }) => {

    let classDetails = []
    if(details){
      if(details.attendance_checked){
        classDetails.push(
          <li key="attendance_checked">
            <Label label={intl.formatMessage(messages.attendanceChecked)} className="label-green" />
          </li>
        )
      }
      if(details.homework_checked){
        classDetails.push(
          <li key="homework_checked">
            <Label label={intl.formatMessage(messages.homeworkChecked)} className="label-blue" />
          </li>
        )
      }
      if(details.lesson_object_added){
        classDetails.push(
          <li key="lesson_object_added">
            <Label label={intl.formatMessage(messages.filledIn)} className="label-purple" />
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
            <Label label={intl.formatMessage(messages.filesAdded)} className="label-orange" />
          </li>
        )
      }
      if(details.tests_added){
        classDetails.push(
          <li key="tests_added">
            <Label label={intl.formatMessage(messages.testsAdded)} className="label-red" />
          </li>
        )
      }
    }
    const statusElement = (
      status ?
        <li>
            <Label label={status.label} customColor={"#"+status.color} />
        </li>
      :null
    )
    return(
      <div className="card-section">
        <ul className="clean-list list-horizontal">
          {statusElement}
          {classDetails}
        </ul>
      </div>
    )
  }
export default injectIntl(ClassDetailsStatus)