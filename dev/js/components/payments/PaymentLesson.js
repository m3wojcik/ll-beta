import React, { Component } from 'react';
import CustomListItem from '../helpers/CustomListItem';
import Label from '../helpers/Label';
import ListHorizontal from './../helpers/ListHorizontal';
import FontIcon from 'react-md/lib/FontIcons';
import {injectIntl, formatMessage, defineMessages, formatDate, formatTime, FormattedDate} from 'react-intl';

const messages = defineMessages({
  paid: {
    id: 'paymentLesson.paid',
    defaultMessage: "paid"
  }
})

const PaymentLesson = ({intl, lesson, index}) => {
    const primaryText = <div>{intl.formatTime(lesson.dateTime)} - {intl.formatTime((new Date(lesson.dateTime)).getTime() + (lesson.length * 1000 * 60))}</div>
    const secondaryText = <div>{lesson.price}</div>

    const secondaryTextElements = [
      <span>
        <FontIcon className="icon-grey">event</FontIcon>
        <FormattedDate value={lesson.dateTime} year='numeric' month='long' day='2-digit' />
      </span>,
      <span>
        <FontIcon className="icon-grey">payment</FontIcon>
        {lesson.price}
      </span>
    ]
    const status = (<div>
      {lesson.paid ? <Label label={intl.formatMessage(messages.paid)} green /> : null }
      <Label label={lesson.attendance_status} customColor={"#"+lesson.attendance_color} />
    </div>)
    return(
      <CustomListItem
        primaryText={primaryText}
        secondaryText={<ListHorizontal space="no-space" elements={secondaryTextElements} />}
        status ={status}
        clickable
      />
    )
}
PaymentLesson.propTypes = {
  lesson: React.PropTypes.object.isRequired
}
export default injectIntl(PaymentLesson)
