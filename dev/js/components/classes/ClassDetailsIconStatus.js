import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import IconLabel from './../helpers/IconLabel'
import Label from './../helpers/Label'

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  attendanceChecked: {
    id: 'classDetailsIconStatus.AttendanceChecked',
    defaultMessage: 'Attendance checked'
  },
  homeworkChecked: {
    id: 'classDetailsIconStatus.HomeworkChecked',
    defaultMessage: 'Homework checked'
  },
  filledIn: {
    id: 'classDetailsIconStatus.FilledIn',
    defaultMessage: 'Filled in'
  },
  online: {
    id: 'classDetailsIconStatus.Online',
    defaultMessage: 'Online'
  },
  filesAdded: {
    id: 'classDetailsIconStatus.FilesAdded',
    defaultMessage: 'Files added'
  },
  testsAdded: {
    id: 'classDetailsIconStatus.TestsAdded',
    defaultMessage: 'Tests added'
  }
})

const ClassDetailsIconStatus = ({ intl, status, details }) => {

    let classDetails = []
    if(details.attendance_checked){
      classDetails.push(
        <li key="attendance_checked">
          <IconLabel 
            icon={<FontIcon class="icon-olive">done_all</FontIcon>} 
            text={intl.formatMessage(messages.attendanceChecked)} 
          />
        </li>
      )
    }
    if(details.homework_checked){
      classDetails.push(
        <li key="homework_checked">
          <IconLabel 
            icon={<FontIcon class="icon-blue">home</FontIcon>} 
            text={intl.formatMessage(messages.homeworkChecked)} 
          />
        </li>
      )
    }
    if(details.lesson_object_added){
      classDetails.push(
        <li key="lesson_object_added">
          <IconLabel 
            icon={<FontIcon class="icon-purple">edit</FontIcon>} 
            text={intl.formatMessage(messages.filledIn)} 
          />
        </li>
      )
    }
    if(details.online){
      classDetails.push(
        <li key="online">
          <IconLabel 
            icon={<FontIcon class="icon-teal">edit</FontIcon>} 
            text={intl.formatMessage(messages.online)} 
          />
        </li>
      )
    }
    if(details.files_added){
      classDetails.push(
        <li key="files_added">
          <IconLabel
            icon={<FontIcon class="icon-orange">folder</FontIcon>} 
            text={intl.formatMessage(messages.filesAdded)} 
          />
        </li>
      )
    }
    if(details.tests_added){
      classDetails.push(
        <li key="tests_added">
          <IconLabel
            icon={<FontIcon class="icon-red">assignment_turned_in</FontIcon>} 
            text={intl.formatMessage(messages.testsAdded)} 
          />
        </li>
      )
    }
    const statusElement = (
      status && status.label ?
        <div className="class-item-status">
          <Label label={status.label} customColor={"#"+status.color} />
        </div>         
      :null
    )
    return(
      <div>
        {statusElement}
        <ul className="clean-list list-horizontal">
          {classDetails}
        </ul>
      </div>
        
    )
  }
export default injectIntl(ClassDetailsIconStatus)