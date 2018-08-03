import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import WeekDayIcon from './../helpers/WeekDayIcon';
import IconHeader from '../helpers/IconHeader';
import ListBox from '../helpers/ListBox';
import ActionsRow from '../helpers/ActionsRow';
import FontIcon from 'react-md/lib/FontIcons';
import DashboardClassItem from './DashboardClassItem';
import FeedDate from '../wall/FeedDate'
import ClassItemSubheader from './ClassItemSubheader';
import ClassDetailsIconStatus from './ClassDetailsIconStatus';
import ClassDetailsList from './ClassDetailsList';
import DashboardClass from './DashboardClass';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {injectIntl, formatDate, formatTime, defineMessages} from 'react-intl';

const messages = defineMessages({
  upcomingClasses: {id: "dashboardClasses.upcomingClasses", defaultMessage: "Upcoming classes"},
  previousClass: {id: "dashboardClasses.previousClass", defaultMessage: "Previous class"},
  nextClass: {id: "dashboardClasses.nextClass", defaultMessage: "Next class"}
})

const DashboardClasses = ({ dashboardClasses, fetched, intl, onViewClassClick, onJoinClassClick }) => {

    let output = [], sortedClasses = [], tmpClass = null
    const today = new Date()
    dashboardClasses.forEach(function(clas){
      const classDate = new Date(clas.date + " " + clas.time)

      if(classDate > today){
        if(sortedClasses.length == 0 && tmpClass){
          tmpClass.inactive = true
          sortedClasses.push(tmpClass)
        }
        if(sortedClasses.length < 2){
          sortedClasses.push(clas)
        } 
      }
      tmpClass = clas
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(
        <div key="classes"> 
          <div className="feed">
            <div className="md-grid">
                <DashboardClass 
                  className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" 
                  header={intl.formatMessage(messages.previousClass)}
                  icon={<FontIcon className="icon-grey">event</FontIcon>} 
                  clas={sortedClasses[0]} 
                  onViewClassClick={onViewClassClick}
                  onJoinClassClick={onJoinClassClick}
                />
                <DashboardClass 
                  className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" 
                  header={intl.formatMessage(messages.nextClass)}
                  icon={<FontIcon className="icon-green">event</FontIcon>} 
                  clas={sortedClasses[1]} 
                  onViewClassClick={onViewClassClick}
                  onJoinClassClick={onJoinClassClick}
                />
            </div>       
          </div>
        </div>
      )
    }

    return( <div>{output}</div>)
}
DashboardClasses.propTypes = {
  dashboardClasses: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
export default injectIntl(DashboardClasses)