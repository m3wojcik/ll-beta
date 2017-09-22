import React from 'react';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import ListHorizontal from '../helpers/ListHorizontal'
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
  marks: {
    id: 'wallNofiticationHeader.Marks',
    defaultMessage: 'Marks'
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
    case "new_mark":
    output.push(<li key="app-icon" className="app-icon">
        <FontIcon className="icon-teal">assessment</FontIcon>      
      </li>)
    output.push(<li key="app-name" className="app-name icon-teal">{intl.formatMessage(messages.marks)}</li>)
    
  break;
  }
  output.push(<li key="bullet" className="bullet"><FontIcon>lens</FontIcon></li>)
  output.push(<li key="timestamp" className="timestamp md-text--secondary">
     <FormattedRelative value={notification.date} year='numeric' month='long' day='2-digit' />
  </li>)  
  return(
    <ul className="notification-header">{output}</ul>
  )
}
WallNotificationHeader.propTypes = {
  notification: React.PropTypes.object.isRequired
}
export default injectIntl(WallNotificationHeader)