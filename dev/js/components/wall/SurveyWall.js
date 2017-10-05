import React from 'react';
import Button from 'react-md/lib/Buttons';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import Attachment from './../helpers/Attachment'
import ActionsRow from './../helpers/ActionsRow';
import FeedAvatar from './FeedAvatar';

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  addSurvey: {
    id: 'surveyWall.addSurvey',
    defaultMessage: 'add survey'
  },
  addSurveyToLesson: {
    id: 'surveyWall.addSurveyToLesson',
    defaultMessage: 'add survey to lesson'
  },
  newSurvey: {
    id: 'surveyWall.newSurvey',
    defaultMessage: 'New survey'
  },
  fill: {
    id: 'surveyWall.fill',
    defaultMessage: 'Fill out'
  }
})

const SurveyWall = ({intl, survey, onFillClick}) =>{
  
  
  let headerText = <span>{survey.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addSurvey)}</span></span>

  const bodyText = <span>{intl.formatMessage(messages.newSurvey)}: <span onClick={onFillClick.bind(this, survey.extra_data.survey_id)} className="text-important">{survey.extra_data.title}.{survey.extra_data.ext}</span></span>
    return(
      <FeedItem
        className={survey.is_fetched ? "feed-survey old" : "feed-survey new"}
        header={headerText}
        iconLeft={<FeedAvatar name={survey.extra_data.owner} />}
        subHeader={<WallNotificationHeader notification={survey} />}
        body={bodyText}
        expander={
          <ActionsRow>
            <Button onClick={onFillClick.bind(this, survey.extra_data.survey_id)} primary flat>{intl.formatMessage(messages.fill)}</Button>           
          </ActionsRow>
        }
    />
    )
}
SurveyWall.propTypes = {
  survey: React.PropTypes.object.isRequired
}
export default injectIntl(SurveyWall)