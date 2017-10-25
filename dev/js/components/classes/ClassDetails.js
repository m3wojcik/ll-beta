import React, { Component } from 'react';

import Box from './../helpers/Box';
import WeekDayIcon from './../helpers/WeekDayIcon';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import ClassDetailsStatus from './ClassDetailsStatus';
import ClassDetailsIconStatus from './ClassDetailsIconStatus';
import ClassDetailsList from'./ClassDetailsList';
import ClassLessonObjectsContainer from './../../containers/classes/ClassLessonObjectsContainer'
import ClassTestsContainer from './../../containers/classes/ClassTestsContainer'
import ClassFilesContainer from './../../containers/classes/ClassFilesContainer'
import {injectIntl, formatDate, formatTime, defineMessages} from 'react-intl';

class ClassDetails extends Component {
  render(){
     const { classDetails, intl } = this.props;
     const date = new Date(classDetails.date)
     const classTime =  classDetails.date + " " + classDetails.time
     const time = intl.formatTime(classTime)+" - "+ intl.formatTime((new Date(classTime)).getTime() + (classDetails.length * 1000 * 60))
     const headerText = <span>{time} </span>
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
              >
              <div>
                <ClassDetailsIconStatus  details={classDetails.details} />
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