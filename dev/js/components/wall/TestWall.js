import React from 'react';
import Button from 'react-md/lib/Buttons';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import Attachment from './../helpers/Attachment'
import ActionsRow from './../helpers/ActionsRow';
import FeedAvatar from './FeedAvatar';

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  addTest: {
    id: 'testWall.addTest',
    defaultMessage: 'add test'
  },
  addTestToLesson: {
    id: 'testWall.addTestToLesson',
    defaultMessage: 'add test to lesson'
  },
  newTest: {
    id: 'testWall.newTest',
    defaultMessage: 'New test'
  },
  solve: {
    id: 'testWall.solve',
    defaultMessage: 'Solve'
  },
  viewLesson: {
    id: 'testWall.viewLesson',
    defaultMessage: 'View lesson'
  }
})

const TestWall = ({intl, test, onViewLessonClick, onSolveClick}) =>{
  
  
  let headerText;
  if(test.extra_data.lesson){
    headerText = <span>{test.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addTestToLesson)}</span> {test.extra_data.lesson.date}</span>
  }else{
    headerText = <span>{test.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addTest)}</span></span>
  }
  
  //TODO id pliku
  const bodyText = <span>{intl.formatMessage(messages.newTest)}: <span onClick={onSolveClick.bind(this, test.extra_data.test_bind_id)} className="text-important">{test.extra_data.title}.{test.extra_data.ext}</span></span>
    return(
      <FeedItem
        className={test.is_fetched ? "feed-test old" : "feed-test new"}
        header={headerText}
        iconLeft={<FeedAvatar name={test.extra_data.owner} />}
        subHeader={<WallNotificationHeader notification={test} />}
        body={bodyText}
        expander={
          <ActionsRow>
            <Button onClick={onSolveClick.bind(this, test.extra_data.test_bind_id)} primary flat>{intl.formatMessage(messages.solve)}</Button>
            {test.extra_data.lesson ? 
              <Button onClick={onViewLessonClick.bind(this, test.extra_data.lesson.id)} flat>{intl.formatMessage(messages.viewLesson)}</Button> : null
            }
          </ActionsRow>
        }
    />
    )
}
TestWall.propTypes = {
  test: React.PropTypes.object.isRequired
}
export default injectIntl(TestWall)