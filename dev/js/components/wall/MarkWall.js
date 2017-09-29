import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import CustomListItem from '../helpers/CustomListItem';
import WallNotificationHeader from './WallNotificationHeader';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import ListHorizontal from './../helpers/ListHorizontal';
import FeedItem from './FeedItem';
import FeedAvatar from './FeedAvatar';
import MarksClassByColumnContainer from '../../containers/marks/MarksClassByColumnContainer';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  scoreInClass: {
    id: 'markWall.scoreInClass',
    defaultMessage: 'Your score in class'
  },
  addNewMark: {
    id: 'markWall.addNewMark',
    defaultMessage: 'add new mark'
  },
  newMark: {
    id: 'markWall.newMark',
    defaultMessage: 'New mark'
  }
})
const MarkWall = ({intl, mark}) =>{

  const headerText = <span>{mark.extra_data.teacher} <span className="text-muted">{intl.formatMessage(messages.addNewMark)}</span></span>
  const bodyText = <span>{intl.formatMessage(messages.newMark)}: <span className="text-important">{mark.extra_data.value} - {mark.extra_data.column}</span></span>

  return(
    <FeedItem
      className={mark.is_fetched ? "feed-mark old" : "feed-mark new"}
      header={headerText}
      subHeader={<WallNotificationHeader notification={mark} />}
      iconLeft={<FeedAvatar name={mark.extra_data.teacher} />}
      body={bodyText}

      expander={<MarksClassByColumnContainer 
        userValue={mark.extra_data.value} 
        columnId={mark.extra_data.column_id} 
        title={intl.formatMessage(messages.scoreInClass)} />
      }
    />
  )
}
MarkWall.propTypes = {
  mark: React.PropTypes.object.isRequired
}
export default injectIntl(MarkWall)