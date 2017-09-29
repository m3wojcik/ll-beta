import React from 'react';
import ActionsRow from './../helpers/ActionsRow'
import Button from 'react-md/lib/Buttons';
import {injectIntl, formatMessage, defineMessages, onReplayClick} from 'react-intl';

const messages = defineMessages({
  reply: {
    id: 'messageWallContent.Reply',
    defaultMessage: 'Reply'
  }
})
const MessageWallContent = ({intl, message, onReplayClick}) =>{

    return(
      <div>
        <div className="wall-message-content" dangerouslySetInnerHTML={{__html:message.content}} />
        <ActionsRow>
          <Button onClick={onReplayClick.bind(this, message)} primary flat>{intl.formatMessage(messages.reply)}</Button>
        </ActionsRow>
      </div>
      
    )
}
MessageWallContent.propTypes = {
  message: React.PropTypes.object.isRequired
}
export default injectIntl(MessageWallContent)