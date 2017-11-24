import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import SurveyWall from './../wall/SurveyWall'

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  fillOut: {
    id: 'surveyDashboardDrawer.fillOut',
    defaultMessage: 'Fill out'
  }
})

const SurveyDashboardDrawer = ({intl, survey, onFillOutClick}) =>{

  return(
    
  <div className="flex-center flex-wrap">
    <div className="feed">
      <SurveyWall survey={survey} onGoToClick={onFillOutClick.bind(this, 'survey/'+survey.extra_data.survey_id)}/>
    </div>
    <div className="width-100 with-padding text-center">
        <Button onClick={onFillOutClick.bind(this, 'survey/'+survey.extra_data.survey_id)} primary raised >
          {intl.formatMessage(messages.fillOut)}
        </Button>
    </div>
  </div>
  )
}
SurveyDashboardDrawer.propTypes = {
  survey: React.PropTypes.object
}
export default injectIntl(SurveyDashboardDrawer)