import React from 'react';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import ListHorizontal from './../helpers/ListHorizontal';
import FeedAvatar from './FeedAvatar';
import FontIcon from 'react-md/lib/FontIcons';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  checkedAttendance: {
    id: 'attendanceWall.checkedAttendance',
    defaultMessage: 'checked attendance'
  },
  newStatus: {
    id: 'attendanceWall.newStatus',
    defaultMessage: 'New status'
  }
})

const AttendanceWall = ({intl, att}) =>{
  const secondaryTextElements = [
    <span>
      <FontIcon>event</FontIcon>
      {att.extra_data.date}
    </span>,
    <span>
      <FontIcon>event_available</FontIcon>
      {att.extra_data.group}
    </span>
  ]
  const headerText = <span>{att.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.checkedAttendance)}</span></span>
  const bodyText = (
  <span>{intl.formatMessage(messages.newStatus)}: <span className="text-important">{att.extra_data.group}</span> - {att.extra_data.status}
  <ListHorizontal space="no-space" elements={secondaryTextElements} />
  </span>)
  return(
    <FeedItem
      className={att.is_fetched ? "feed-attendance old" : "feed-attendance new"}
      header={headerText}
      subHeader={<WallNotificationHeader notification={att} />}
      iconLeft={<FeedAvatar name={att.extra_data.teacher} />}
      body={bodyText}
  />
  )
}
AttendanceWall.propTypes = {
  att: React.PropTypes.object.isRequired
}
export default injectIntl(AttendanceWall)