import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';
import List from 'react-md/lib/Lists/List';
import Avatar from 'react-md/lib/Avatars';
import {getWeek} from '../../actions/Functions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
export default class DashboardMessages extends Component {

  render(){
    const { dashboardMessages, fetched, onMessageClick } = this.props;
    let output = []
    const mappedMessages = dashboardMessages.map(function(message){
        return (
          <ListItem  key={message.id}
            className={message.read ? "message-list-item message-read" : "message-list-item message-unread"}
            onClick={onMessageClick.bind(this,message.id)}
            leftAvatar={<Avatar icon={message.sender.charAt(0).toUpperCase()} />}
            rightIcon={<FormattedRelative value={message.date}/>}
            primaryText={message.read ? message.sender : <strong>{message.sender}</strong>}
            secondaryText={message.subject}
          />
      )
    })
    if(fetched){
      output.push(<List className="white-list" key="attendances">{mappedMessages}</List>)
    }else{
      output.push(<Loader key="loader" centerPadding />)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="New messages"
        titleIcon={<FontIcon className="icon-yellow">inbox</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
DashboardMessages.propTypes = {
  dashboardMessages: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
