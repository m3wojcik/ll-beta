import React from 'react';
import CustomListItem from '../helpers/CustomListItem';
import WallNotificationHeader from './WallNotificationHeader';
import ListHorizontal from './../helpers/ListHorizontal';
import FontIcon from 'react-md/lib/FontIcons';

const MessageWall = ({message}) =>{
  const secondaryTextElements = [
    <span>
      <FontIcon className="icon-grey">face</FontIcon>
      {message.extra_data.sender}
    </span>
  ]
    return(
      <CustomListItem
        clickable
        header={<WallNotificationHeader notification={message} />}
        primaryText={message.extra_data.subject}
        secondaryText={<ListHorizontal space="no-space" elements={secondaryTextElements} />}
        expander={<div>sadas</div>}
    />
    )
}
MessageWall.propTypes = {
  message: React.PropTypes.object.isRequired
}
export default MessageWall