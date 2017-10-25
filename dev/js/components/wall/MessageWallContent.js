import React from 'react';
import ActionsRow from './../helpers/ActionsRow'
import Button from 'react-md/lib/Buttons';
import {injectIntl, formatMessage, defineMessages, onReplayClick} from 'react-intl';

const messages = defineMessages({
  reply: {
    id: 'messageWallContent.Reply',
    defaultMessage: 'Reply'
  },
  view: {
    id: 'messageWallContent.View',
    defaultMessage: 'View'
  }
})
const MessageWallContent = ({intl, message, messageId, onReplayClick, onGoToClick}) =>{

    return(
      <div>
        <div className="wall-message-content" dangerouslySetInnerHTML={{__html:message.content}} />
        <ActionsRow>
          <Button onClick={onReplayClick.bind(this, message)} primary flat>{intl.formatMessage(messages.reply)}</Button>
          <Button onClick={onGoToClick.bind(this, 'message/'+messageId)} flat>{intl.formatMessage(messages.view)}</Button>
        </ActionsRow>
      </div>
      
    )
}
MessageWallContent.propTypes = {
  message: React.PropTypes.object.isRequired
}
export default injectIntl(MessageWallContent)