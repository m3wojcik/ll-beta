import React from 'react';

import FontIcon from 'react-md/lib/FontIcons';
import ListHorizontal from '../helpers/ListHorizontal'
import FeedDate from './FeedDate'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  messages: {
    id: 'wallNofiticationHeader.Messages',
    defaultMessage: 'Messages'
  },
  files: {
    id: 'wallNofiticationHeader.Files',
    defaultMessage: 'Files'
  },
  tests: {
    id: 'wallNofiticationHeader.Tests',
    defaultMessage: 'Tests'
  },
  surveys: {
    id: 'wallNofiticationHeader.Surveys',
    defaultMessage: 'Surveys'
  },
  marks: {
    id: 'wallNofiticationHeader.Marks',
    defaultMessage: 'Marks'
  },
  news: {
    id: 'wallNofiticationHeader.News',
    defaultMessage: 'News'
  },
  attendance: {
    id: 'wallNofiticationHeader.Attendance',
    defaultMessage: 'Attendance'
  }
})

const WallNotificationHeader = ({notification, intl}) =>{
  let output = []
  switch(notification.type) {
    case "new_message":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-yellow">inbox</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-yellow">{intl.formatMessage(messages.messages)}</li>)
   
    break;
    case "new_file":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-orange">folder</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-orange">{intl.formatMessage(messages.files)}</li>)
    break;
    case "new_test":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-red">assignment_turned_in</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-red">{intl.formatMessage(messages.tests)}</li>)
    break;
    case "new_survey":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-brown">speaker_notes</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-brown">{intl.formatMessage(messages.surveys)}</li>)
    break;
    case "new_mark":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-teal">assessment</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-teal">{intl.formatMessage(messages.marks)}</li>)  
    break;
    case "new_news":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-grey">description</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-grey">{intl.formatMessage(messages.news)}</li>)  
    break;
    case "new_attendance":
      output.push(<li key="app-icon" className="app-icon">
          <FontIcon className="icon-olive">done_all</FontIcon>      
        </li>)
      output.push(<li key="app-name" className="app-name icon-olive">{intl.formatMessage(messages.attendance)}</li>)  
    break;
  }

  output.push(<li key="bullet" className="bullet"><FontIcon>lens</FontIcon></li>)
  output.push(
  <li key="timestamp" className="timestamp md-text--secondary">
    <FeedDate date={notification.date} />
  </li>) 
  if(notification.extra_data.attachments){
      output.push(<li key="bullet2" className="bullet"><FontIcon>lens</FontIcon></li>)
      output.push(
        <li key="attachments" className="attachment md-text--secondary">
          <FontIcon className="icon-grey">attachment</FontIcon>  
          
        </li>)
  } 
  return(
    <ul className="notification-header">{output}</ul>
  )
}
WallNotificationHeader.propTypes = {
  notification: React.PropTypes.object.isRequired
}
export default injectIntl(WallNotificationHeader)