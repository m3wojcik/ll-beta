import React, { Component } from 'react';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';
import {toolbarHeaders} from "../../actions/config"

const messages = defineMessages({
  dashboard: {id: "toolbarHeader.headerDashboard", defaultMessage: "Dashboard"},
  marks: {id: "toolbarHeader.headerMarks", defaultMessage: "Marks"},
  classes: {id: "toolbarHeader.headerClasses", defaultMessage: "Classes"},
  attendance: {id: "toolbarHeader.headerAttendance", defaultMessage: "Attendance"},
  messages: {id: "toolbarHeader.headerMessages", defaultMessage: "Messages"},
  message: {id: "toolbarHeader.headerMessage", defaultMessage: "Message"},
  createMessage: {id: "toolbarHeader.headerCreateMessage", defaultMessage: "Create message"},
  files: {id: "toolbarHeader.headerFiles", defaultMessage: "Files"},
  tests: {id: "toolbarHeader.headerTests", defaultMessage: "Tests"},
  test: {id: "toolbarHeader.headerTest", defaultMessage: "Test"},
  elibrary: {id: "toolbarHeader.elibrary", defaultMessage: "E-library"},
  surveys: {id: "toolbarHeader.surveys", defaultMessage: "Surveys"},
  payments: {id: "toolbarHeader.payments", defaultMessage: "Payments"},
  profile: {id: "toolbarHeader.headerProfile", defaultMessage: "Profile"},
  editProfile: {id: "toolbarHeader.headerEditProfile", defaultMessage: "Edit profile"},
  changePassword: {id: "toolbarHeader.headerChangePassword", defaultMessage: "Change password"},
  loginHistory: {id: "toolbarHeader.headerLoginHistory", defaultMessage: "Login history"},
  studentHistory: {id: "toolbarHeader.headerStudentHistory", defaultMessage: "Student history"},
  settings: {id: "toolbarHeader.settings", defaultMessage: "Settings"}
})

const ToolbarHeader = ({header, intl}) =>{
  let message;
  switch(header) {
    case toolbarHeaders.dashobard:
      message = intl.formatMessage(messages.dashboard)
      break;
    case toolbarHeaders.marks:
      message = intl.formatMessage(messages.marks)
      break;
    case toolbarHeaders.classes:
      message = intl.formatMessage(messages.classes)
      break;
    case toolbarHeaders.attendance:
      message = intl.formatMessage(messages.attendance)
      break;
    case toolbarHeaders.messages:
      message = intl.formatMessage(messages.messages)
      break;
    case toolbarHeaders.message:
      message = intl.formatMessage(messages.message)
      break;
    case toolbarHeaders.createMessage:
      message = intl.formatMessage(messages.createMessage)
      break;
    case toolbarHeaders.files:
      message = intl.formatMessage(messages.files)
      break;
    case toolbarHeaders.tests:
      message = intl.formatMessage(messages.tests)
      break;
    case toolbarHeaders.test:
      message = intl.formatMessage(messages.test)
      break;
    case toolbarHeaders.elibrary:
      message = intl.formatMessage(messages.elibrary)
      break;
    case toolbarHeaders.surveys:
      message = intl.formatMessage(messages.surveys)
      break;
    case toolbarHeaders.payments:
      message = intl.formatMessage(messages.payments)
      break;
    case toolbarHeaders.profile:
      message = intl.formatMessage(messages.profile)
      break;
    case toolbarHeaders.editProfile:
      message = intl.formatMessage(messages.editProfile)
      break;
    case toolbarHeaders.changePassword:
      message = intl.formatMessage(messages.changePassword)
      break;
    case toolbarHeaders.loginHistory:
      message = intl.formatMessage(messages.loginHistory)
      break;
    case toolbarHeaders.studentHistory:
      message = intl.formatMessage(messages.studentHistory)
      break;
    case toolbarHeaders.settings:
      message = intl.formatMessage(messages.settings)
      break;
    default:
      message = header
  }
  return(
    <h2 className="md-title md-title--toolbar toolbar-title">     
      {message}
     </h2>
   )
}
ToolbarHeader.propTypes = {
  header: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.object.isRequired
    ])
}
export default injectIntl(ToolbarHeader)