import React from 'react';
import Button from 'react-md/lib/Buttons';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import Attachment from './../helpers/Attachment'
import ActionsRow from './../helpers/ActionsRow';
import FeedAvatar from './FeedAvatar';

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  addDetails: {
    id: 'detailsWall.addDetails',
    defaultMessage: 'add details'
  },
  addDetailsToLesson: {
    id: 'detailsWall.addDetailsToLesson',
    defaultMessage: 'add details to lesson'
  },
  newTest: {
    id: 'detailsWall.newDetails',
    defaultMessage: 'New details'
  },
  viewLesson: {
    id: 'detailsWall.viewLesson',
    defaultMessage: 'View lesson'
  }
})

const DetailsWall = ({intl, details, onGoToClick}) =>{
  
  
  let headerText;
  if(details.extra_data.date){
    headerText = <span>{details.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.addDetailsToLesson)}</span> {details.extra_data.date}</span>
  }else{
    headerText = <span>{details.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.addDetails)}</span></span>
  }
  
  const bodyText = <span>{intl.formatMessage(messages.newTest)}: <span onClick={onGoToClick.bind(this, 'classDetails/'+details.extra_data.class_id)} className="text-important">{details.extra_data.group}</span> {details.extra_data.date}</span>
  const iconLeft = details.extra_data.teacher ? <FeedAvatar name={details.extra_data.teacher} /> : null
  return(
      <FeedItem
        className={details.is_fetched ? "feed-details old" : "feed-details new"}
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
DetailsWall.propTypes = {
  details: React.PropTypes.object.isRequired
}
export default injectIntl(DetailsWall)