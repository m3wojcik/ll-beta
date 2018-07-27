import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import TabPaneTitle from '../helpers/TabPaneTitle';
import ButtonCheckboxGroup from '../helpers/ButtonCheckboxGroup';
import {DataTable,  TableHeader,  TableBody,  TableRow,  TableColumn} from 'react-md';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  notifications: {
    id: 'settings.notifications',
    defaultMessage: 'Notifications'
  },
  name: {
    id: 'settings.name',
    defaultMessage: 'Name'
  },
  event: {
    id: 'settings.event',
    defaultMessage: 'Event'
  },
  system:{
    id: 'settings.system',
    defaultMessage: 'System message'
  },
  email:{
    id: 'settings.email',
    defaultMessage: 'E-mail'
  },
  sms:{
    id: 'settings.sms',
    defaultMessage: 'SMS'
  },
  createNewSubstitution:{
    id: 'settings.createNewSubstitution',
    defaultMessage: 'Adding substitutions'
  },
  deleteNewSubstitution:{
    id: 'settings.deleteNewSubstitution',
    defaultMessage: 'Cancelling substitutions'
  },
  createNewLesson:{
    id: 'settings.createNewLesson',
    defaultMessage: 'Adding new lesson'
  },
  deleteNewLesson:{
    id: 'settings.deleteNewLesson',
    defaultMessage: 'Removing lessons'
  },
  scheduleChangeSchoolClass:{
    id: 'settings.scheduleChangeSchoolClass',
    defaultMessage: 'Changes in timetable'
  },
  createNewLessonStatus:{
    id: 'settings.createNewLessonStatus',
    defaultMessage: 'Adding lesson status'
  },
  deleteNewLessonStatus:{
    id: 'settings.deleteNewLessonStatus',
    defaultMessage: 'Removing lesson status'
  },
  createLessonObject:{
    id: 'settings.createLessonObject',
    defaultMessage: 'Adding classes details'
  },
  createMessage:{
    id: 'settings.createMessage',
    defaultMessage: 'New message'
  },
  createTestBind:{
    id: 'settings.createTestBind',
    defaultMessage: 'Sharing new test with the group'
  },
  createMeeting:{
    id: 'settings.createMeeting',
    defaultMessage: 'Starting new on-line lesson'
  },
  createTeacherFileBind:{
    id: 'settings.createTeacherFileBind',
    defaultMessage: 'Sharing new files'
  },
  createTeacherNewLesson:{
    id: 'settings.createTeacherNewLesson',
    defaultMessage: 'Adding lessons by teacher'
  },
  createTeacherNewLessonStatus:{
    id: 'settings.createTeacherNewLessonStatus',
    defaultMessage: 'Adding lesson status by teacher'
  },
  deleteTeacherNewLessonStatus:{
    id: 'settings.deleteTeacherNewLessonStatus',
    defaultMessage: 'Removing lesson status by teacher'
  },
  deleteTeacherNewLesson:{
    id: 'settings.deleteTeacherNewLesson',
    defaultMessage: 'Removing lessons by teacher'
  }
})

const Settings = ({ intl, notifications, onCheckboxBtnClick })=> {
  let mappedNotifications = [], options = []
  if(notifications.available){
    notifications.available.forEach(function(value){
      options.push({
        label: intl.formatMessage(messages[value]),
        value: value
      })
    })
  }
  if(notifications.settings){
    Object.keys(notifications.settings).forEach(function(key, i){
       mappedNotifications.push(
        <TableRow key={i}>
          <TableColumn>{intl.formatMessage(messages[key])}</TableColumn>
          <TableColumn><ButtonCheckboxGroup id={key} options={options} checked={notifications.settings[key]} onClick={onCheckboxBtnClick} /></TableColumn>
        </TableRow>
      )
    })
  }
    return(
      <section className="tab-pane">
        <TabPaneTitle
          title={intl.formatMessage(messages.notifications)} 
          titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
        />
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>{intl.formatMessage(messages.name)} </TableColumn>
              <TableColumn>{intl.formatMessage(messages.event)} </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mappedNotifications}
          </TableBody>
        </DataTable>  
      </section>
    )
  }
export default injectIntl(Settings)