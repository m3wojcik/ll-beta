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
import ClassDetailsList from'./ClassDetailsList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {injectIntl, formatDate, formatTime, defineMessages} from 'react-intl';

const messages = defineMessages({
  upcomingClasses: {id: "dashboardClasses.upcomingClasses", defaultMessage: "Upcoming classes"},
  view: {id: "dashboardClasses.view", defaultMessage: "View"}
})

const DashboardClasses = ({ dashboardClasses, fetched, intl, onViewClassClick }) => {

    let output = [], sortedClasses = [], tmpClass = null
    const today = new Date()
    dashboardClasses.forEach(function(clas){
      const classDate = new Date(clas.date + " " + clas.time)

      if(classDate > today){
        if(sortedClasses.length == 0 && tmpClass){
          tmpClass.inactive = true
          sortedClasses.push(tmpClass)
        }
        if(sortedClasses.length < 3){
          sortedClasses.push(clas)
        } 
      }
      tmpClass = clas
    })
    const mappedClasses = sortedClasses.map(function(clas){
      const classTime =  clas.date + " " + clas.time
      const time = intl.formatTime(classTime)+" - "+ intl.formatTime((new Date(classTime)).getTime() + (clas.length * 1000 * 60))
      const headerText = <span>{time} </span>
      const expanderText = (<div>
        <ClassDetailsList clas={clas} />
        <ActionsRow>
          <Button onClick={onViewClassClick.bind(this, clas.id)} primary flat>{intl.formatMessage(messages.view)}</Button>
        </ActionsRow>
      </div>)
      return (  
        <DashboardClassItem
          key={clas.id}
          className={clas.inactive ? "feed-class inactive" : "feed-class active"}
          header={headerText}
          subHeader={<ClassItemSubheader classItem={clas} />}
          iconLeft={<WeekDayIcon date={clas.date} />}
          body={<ClassDetailsIconStatus status={clas.status} details={clas.details} />}
          expander={expanderText}
        />
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(
        <div key="classes">
          <IconHeader header={intl.formatMessage(messages.upcomingClasses)} icon={<FontIcon className="icon-green">event</FontIcon>} />
          <div className="feed">
            {mappedClasses}
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