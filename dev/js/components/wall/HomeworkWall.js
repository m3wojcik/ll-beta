import React from 'react';
import Button from 'react-md/lib/Buttons';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import Attachment from './../helpers/Attachment'
import ActionsRow from './../helpers/ActionsRow';
import FeedAvatar from './FeedAvatar';

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  checkedHomework: {
    id: 'homeworkWall.checkedHomework',
    defaultMessage: 'checked homework'
  },
  checkedHomeworkToLesson: {
    id: 'homeworkWall.checkedHomeworkToLesson',
    defaultMessage: 'checked homework on lesson'
  },
  noHomework: {
    id: 'homeworkWall.noHomework',
    defaultMessage: 'No homework'
  },
  viewLesson: {
    id: 'homeworkWall.viewLesson',
    defaultMessage: 'View lesson'
  }
})

const HomeworkWall = ({intl, details, onGoToClick}) =>{
  
  
  let headerText;
  if(details.extra_data.date){
    headerText = <span>{details.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.checkedHomeworkToLesson)}</span> {details.extra_data.date}</span>
  }else{
    headerText = <span>{details.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.checkedHomework)}</span></span>
  }
  
  const bodyText = <span>{intl.formatMessage(messages.noHomework)}: <span onClick={onGoToClick.bind(this, 'classDetails/'+details.extra_data.class_id)} className="text-important">{details.extra_data.group}</span> {details.extra_data.date}</span>
  const iconLeft = details.extra_data.teacher ? <FeedAvatar name={details.extra_data.teacher} /> : null
  return(
      <FeedItem
        className={details.is_fetched ? "feed-homework old" : "feed-homework new"}
        header={headerText}
        iconLeft={iconLeft}
        subHeader={<WallNotificationHeader notification={details} />}
        body={bodyText}
        expander={
          <ActionsRow>
              <Button onClick={onGoToClick.bind(this, 'classDetails/'+details.extra_data.class_id)} flat>{intl.formatMessage(messages.viewLesson)}</Button>
          </ActionsRow>
        }
    />
    )
}
HomeworkWall.propTypes = {
  details: React.PropTypes.object.isRequired
}
export default injectIntl(HomeworkWall)