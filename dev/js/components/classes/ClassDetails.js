import React, { Component } from 'react';

import Button from 'react-md/lib/Buttons';
import Box from './../helpers/Box';
import WeekDayIcon from './../helpers/WeekDayIcon';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import ActionsRow from '../helpers/ActionsRow';
import ClassDetailsStatus from './ClassDetailsStatus';
import ClassDetailsList from'./ClassDetailsList';
import ClassLessonObjectsContainer from './../../containers/classes/ClassLessonObjectsContainer'
import ClassTestsContainer from './../../containers/classes/ClassTestsContainer'
import ClassFilesContainer from './../../containers/classes/ClassFilesContainer'
import {injectIntl, formatDate, formatTime, defineMessages} from 'react-intl';

const messages = defineMessages({
  join: {id: "dashboardClass.join", defaultMessage: "Join"}
})

class ClassDetails extends Component {
  render(){
    
    const { classDetails, intl, onJoinClassClick } = this.props;
    const date = new Date(classDetails.date)
    const classTime =  classDetails.date + " " + classDetails.time
    const time = intl.formatTime(classTime)+" - "+ intl.formatTime((new Date(classTime)).getTime() + (classDetails.length * 1000 * 60))
    const headerText = <span>{time} </span>
    const joinActions = classDetails.details.online ? <ActionsRow><Button onClick={onJoinClassClick.bind(this, classDetails.details.online.url)} primary raised>{intl.formatMessage(messages.join)}</Button></ActionsRow> : null
    return(
      <div className="">
        <div className="md-grid md-row">
          <div className="md-cell md-cell--12 md-cell--12-tablet md-cell--12-phone">
            <Box
              className="no-padding"
              title={headerText}
              subtitle={<FormattedDate value={classDetails.date} year='numeric' month='long' day='2-digit' />}
              titleIcon={<WeekDayIcon date={classDetails.date} />}
              topRight={<ClassDetailsStatus status={classDetails.status} />}
              bottom={joinActions}
              >
              <div>
                <ClassDetailsStatus details={classDetails.details} />  
                <ClassDetailsList clas={classDetails} />
              </div>
            </Box>
          </div>
          <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
            <ClassLessonObjectsContainer id={classDetails.id} />
          </div>
          <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
            <ClassTestsContainer id={classDetails.id} />
            <ClassFilesContainer id={classDetails.id} />
          </div>
        </div>
      </div>
    )
  }
}
export default injectIntl(ClassDetails)