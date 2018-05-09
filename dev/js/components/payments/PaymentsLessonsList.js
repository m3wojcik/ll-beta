import React, { Component } from 'react';
import { Button } from 'react-md';
import PaymentLesson from './PaymentLesson'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  loadPrevious: {
    id: 'paymentsLessonsList.loadPrevious',
    defaultMessage: "Load previous"
  },
  loadNext: {
    id: 'paymentsLessonsList.loadNext',
    defaultMessage: "Load next"
  }
})

const PaymentsLessonsList = ({ intl, lessons, startIndex, endIndex, onPrevClick, onNextClick } ) => {
  let mappedLessons = [], prevDisabled = false, nextDisabled = false
  //prev disabled check
  if(startIndex == 0) prevDisabled = true
  //next disabled check
  if(endIndex >= lessons.length) nextDisabled = true


  for(let i = startIndex; i <  endIndex; i++){
    mappedLessons.push(<PaymentLesson key={i} index={i} lesson={lessons[i]} />)
  }
    return(
        <ul className="md-list md-list-divider">
          <li className="md-list-button">
            <Button flat onClick={onPrevClick} disabled={prevDisabled}>
              {intl.formatMessage(messages.loadPrevious)}
            </Button>   
          </li>
          {mappedLessons}
          <li className="md-list-button">
            <Button flat onClick={onNextClick} disabled={nextDisabled}>
              {intl.formatMessage(messages.loadNext)}
            </Button>   
          </li>
        </ul>

    )
}
PaymentsLessonsList.propTypes = {
  lessons: React.PropTypes.array.isRequired
}
export default injectIntl(PaymentsLessonsList)
