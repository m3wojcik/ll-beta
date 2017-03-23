import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars'
import Box from './../helpers/Box';
import {getDayName, getShortDayName} from './../../actions/Functions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import ClassDetailsStatus from './ClassDetailsStatus';
import ListHorizontal from './../helpers/ListHorizontal';
import ClassLessonObjectsContainer from './../../containers/classes/ClassLessonObjectsContainer'
import ClassTestsContainer from './../../containers/classes/ClassTestsContainer'
import ClassFilesContainer from './../../containers/classes/ClassFilesContainer'

export default class ClassDetails extends Component {
  render(){
     const { classDetails } = this.props;
     console.log("class det render", classDetails);
     const date = new Date(classDetails.date)
     const listHorizontalElements = [
       <div><FormattedTime value={date} /> - <FormattedTime value={date.getTime() + (classDetails.length * 1000 * 60) }  /></div>
     ]
    return(
      <div className="">
        <div className="md-grid md-row">
          <div className="md-cell md-cell--12 md-cell--12-tablet md-cell--12-phone">
            <Box
              className="no-padding"
              title={<ListHorizontal elements={listHorizontalElements} />}
              subtitle={<FormattedDate value={classDetails.date} year='numeric' month='long' day='2-digit' />}
              titleIcon={<Avatar className="avatar-weekdays" icon={getShortDayName(date)} />}
              topRight={<ClassDetailsStatus status={classDetails.status} details={classDetails.details} />}
              >
              <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
                <div>sds</div>
              </ReactCSSTransitionGroup>
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
