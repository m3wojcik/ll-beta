import React from 'react';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import ListHorizontal from './../helpers/ListHorizontal';
import Label from './../helpers/Label'
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
  const headerText = <span>{att.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.checkedAttendance)}</span></span>
  const bodyText = (
  <span>{intl.formatMessage(messages.newStatus)+": "} 
    <Label label={att.extra_data.status_name} customColor={att.extra_data.status_color} />
    {" "+att.extra_data.date+" "}<span className="text-small">{att.extra_data.group}</span>
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