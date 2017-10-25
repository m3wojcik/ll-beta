import React from 'react';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import ListHorizontal from './../helpers/ListHorizontal';
import WallMessageContainer from './../../containers/wall/WallMessageContainer';
import FontIcon from 'react-md/lib/FontIcons';
import FeedAvatar from './FeedAvatar';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  sendMessage: {
    id: 'messageWall.sendMessage',
    defaultMessage: 'send message'
  }
})

const MessageWall = ({intl, message, onGoToClick}) =>{

  const headerText = <span>{message.extra_data.sender} <span className="text-muted">{intl.formatMessage(messages.sendMessage)}</span></span>
  const bodyText = <span className="text-important">{message.extra_data.subject}</span>
  return(
      <FeedItem
        className={message.is_fetched ? "feed-message old" : "feed-message new"}
        header={headerText}
        subHeader={<WallNotificationHeader notification={message} />}
        iconLeft={<FeedAvatar name={message.extra_data.sender} />}
        body={bodyText}
        expander={<WallMessageContainer messageId={message.object_id} onGoToClick={onGoToClick} />}
    />
    )
}
MessageWall.propTypes = {
  message: React.PropTypes.object.isRequired
}
export default injectIntl(MessageWall)