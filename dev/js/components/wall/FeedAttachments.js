import React from 'react';
import ActionsRow from './../helpers/ActionsRow'
import Attachment from './../helpers/Attachment'
import Button from 'react-md/lib/Buttons';
import {injectIntl, formatMessage, defineMessages, onReplayClick} from 'react-intl';

const messages = defineMessages({
  reply: {
    id: 'FeedAttachments.Reply',
    defaultMessage: 'Reply'
  }
})
const FeedAttachments = ({intl, attachments, onDownloadClick}) =>{
  let mappedAttachments;
  if(attachments){
    mappedAttachments = attachments.map(
      attachment =>
      <li key={attachment.id} onClick={onDownloadClick.bind(this, attachment.id)}>
        <Attachment name={attachment.name} size={attachment.size} ext={attachment.extension} />
      </li>  
    )
  }

    return(
      attachments ?
      <div className="feed-attachments">
        <ul className="attachment-list">{mappedAttachments}</ul>
      </div>
      : null
    )
}
FeedAttachments.propTypes = {
  attachments: React.PropTypes.array.isRequired
}
export default injectIntl(FeedAttachments)