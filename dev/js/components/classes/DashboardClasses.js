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
  firstClass: {id: "dashboardClasses.firstClass", defaultMessage: "First class"},
  previousClass: {id: "dashboardClasses.previousClass", defaultMessage: "Previous class"},
  nextClass: {id: "dashboardClasses.nextClass", defaultMessage: "Next class"},
  lastClass: {id: "dashboardClasses.lastClass", defaultMessage: "Last class"}
})

const DashboardClasses = ({ dashboardClasses, fetched, intl, onViewClassClick, onJoinClassClick }) => {

    let output = [], sortedClasses = [], tmpClass = null
    const today = new Date()
    const firstClass = dashboardClasses.length > 0 ? dashboardClasses[0] : null
    const lastClass = dashboardClasses.length > 1 ? dashboardClasses[dashboardClasses.length - 1] : null
    const firstClassDate = firstClass ? new Date(firstClass.date + " " + firstClass.time) : null
    const lastClassDate = lastClass ? new Date(lastClass.date + " " + lastClass.time) : null

    let dashboardClass1 = null, dashboardClass2 = null

    if(firstClass && (today < firstClassDate)){
      console.log("1")
      dashboardClass1 = {
        header: intl.formatMessage(messages.firstClass),
        clas: firstClass,
        icon: <FontIcon className="icon-green">event</FontIcon>
      }
      if(lastClass){
        dashboardClass2 = {
          header: intl.formatMessage(messages.nextClass),
          clas: dashboardClasses[1],
          icon: <FontIcon className="icon-grey">event</FontIcon>
        }
      } 
    }else if(lastClass && (lastClassDate < today)){
      console.log("2")
      lastClass.inactive = true
      dashboardClass2 = {
        header: intl.formatMessage(messages.lastClass),
        clas: lastClass,
        icon: <FontIcon className="icon-grey">event</FontIcon>
      }
    }else{
      console.log("3")
      dashboardClasses.forEach(function(clas, i){
        const classDate = new Date(clas.date + " " + clas.time)
        if(today < classDate){
          if(!dashboardClass1 && tmpClass){
            tmpClass.inactive = true
            dashboardClass1 ={
              header: intl.formatMessage(messages.previousClass),
              clas: tmpClass,
              icon: <FontIcon className="icon-grey">event</FontIcon>
            }
          }
          if(!dashboardClass2){
            dashboardClass2 ={
              header: intl.formatMessage(messages.nextClass),
              clas: clas,
              icon: <FontIcon className="icon-green">event</FontIcon>
            }
          } 
        }
        tmpClass = clas
      })
    }

    
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(
        <div key="classes"> 
          <div className="feed">
            <div className="md-grid">
              {dashboardClass1 ?
                <DashboardClass 
                  className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" 
                  header={dashboardClass1.header}
                  icon={dashboardClass1.icon} 
                  clas={dashboardClass1.clas} 
                  onViewClassClick={onViewClassClick}
                  onJoinClassClick={onJoinClassClick}
                /> : null}
              {dashboardClass2 ?
                <DashboardClass 
                  className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" 
                  header={dashboardClass2.header}
                  icon={dashboardClass2.icon} 
                  clas={dashboardClass2.clas} 
                  onViewClassClick={onViewClassClick}
                  onJoinClassClick={onJoinClassClick}
                /> : null}
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