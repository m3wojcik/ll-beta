import React, { Component } from 'react';
import {injectIntl, formatMessage} from 'react-intl';
import {toolbarHeaders} from "../../actions/config"

const ToolbarHeader = ({header, intl}) =>{
  let message;
  switch(header) {
    case toolbarHeaders.dashobard:
      message = intl.formatMessage({id: "toolbarHeader.headerDashboard", defaultMessage: "Dashboard"})
      break;
    case toolbarHeaders.marks:
      message = intl.formatMessage({id: "toolbarHeader.headerMarks", defaultMessage: "Marks"})
      break;
    case toolbarHeaders.classes:
      message = intl.formatMessage({id: "toolbarHeader.headerClasses", defaultMessage: "Classes"})
      break;
    case toolbarHeaders.attendance:
      message = intl.formatMessage({id: "toolbarHeader.headerAttendance", defaultMessage: "Attendance"})
      break;
    case toolbarHeaders.messages:
      message = intl.formatMessage({id: "toolbarHeader.headerMessages", defaultMessage: "Messages"})
      break;
    case toolbarHeaders.message:
      message = intl.formatMessage({id: "toolbarHeader.headerMessage", defaultMessage: "Message"})
      break;
    case toolbarHeaders.createMessage:
      message = intl.formatMessage({id: "toolbarHeader.headerCreateMessage", defaultMessage: "Create message"})
      break;
    case toolbarHeaders.files:
      message = intl.formatMessage({id: "toolbarHeader.headerFiles", defaultMessage: "Files"})
      break;
    case toolbarHeaders.tests:
      message = intl.formatMessage({id: "toolbarHeader.headerTests", defaultMessage: "Tests"})
      break;
    case toolbarHeaders.test:
      message = intl.formatMessage({id: "toolbarHeader.headerTest", defaultMessage: "Test"})
      break;
    case toolbarHeaders.elibrary:
      message = intl.formatMessage({id: "toolbarHeader.elibrary", defaultMessage: "E-library"})
      break;
    case toolbarHeaders.profile:
      message = intl.formatMessage({id: "toolbarHeader.headerProfile", defaultMessage: "Profile"})
      break;
    case toolbarHeaders.editProfile:
      message = intl.formatMessage({id: "toolbarHeader.headerEditProfile", defaultMessage: "Edit profile"})
      break;
    case toolbarHeaders.changePassword:
      message = intl.formatMessage({id: "toolbarHeader.headerChangePassword", defaultMessage: "Change password"})
      break;
      case toolbarHeaders.loginHistory:
      message = intl.formatMessage({id: "toolbarHeader.headerLoginHistory", defaultMessage: "Login history"})
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
  header: React.PropTypes.string.isRequired
}
export default injectIntl(ToolbarHeader)