import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import {injectIntl, formatDate} from 'react-intl';
const WeekDayIcon =({ date, intl })=> {
  return <Avatar className="avatar-weekdays" icon={intl.formatDate(date,{weekday: 'short'})} />
}
export default injectIntl(WeekDayIcon)