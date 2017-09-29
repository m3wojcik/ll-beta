import React from 'react';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import { getDaysDiference} from '../../actions/Functions'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  today: {
    id: 'feedDate.today',
    defaultMessage: 'today'
  },
  yesterday: {
    id: 'feedDate.yesterday',
    defaultMessage: 'yesterday'
  }
})

const FeedDate = ({intl, date}) =>{
  const today = new Date()
  const propDate = new Date(date)
  const dayDiff = getDaysDiference(propDate, today);
  let dateOutput;
  switch(dayDiff){
    case 0:
      dateOutput = intl.formatMessage(messages.today)
    break;
    case 1:
      dateOutput = intl.formatMessage(messages.yesterday)
    break;
    default:
      dateOutput = <FormattedDate value={date} />
    break;
  }
  return(
      <span>
        <FormattedTime value={date}  hour='numeric' minute="numeric" /> 
        , {dateOutput}
      </span>
  )
}
FeedDate.propTypes = {
  date: React.PropTypes.string.isRequired
}
export default injectIntl(FeedDate)