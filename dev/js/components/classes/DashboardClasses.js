import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import WeekDayIcon from './../helpers/WeekDayIcon';
import IconHeader from '../helpers/IconHeader';
import ListBox from '../helpers/ListBox';
import FontIcon from 'react-md/lib/FontIcons';
import DashboardClassItem from './DashboardClassItem';
import FeedDate from '../wall/FeedDate'
import ClassItemSubheader from './ClassItemSubheader';
import ClassDetailsIconStatus from './ClassDetailsIconStatus';
import DashboardClassDetails from'./DashboardClassDetails';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {injectIntl, formatDate, formatTime, defineMessages} from 'react-intl';

const messages = defineMessages({
  upcomingClasses: {id: "dashboardClasses.upcomingClasses", defaultMessage: "Upcoming classes"}
})

const DashboardClasses = ({ dashboardClasses, fetched, intl }) => {

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
      const time = intl.formatTime(clas.date)+" - "+ intl.formatTime((new Date(clas.date)).getTime() + (clas.length * 1000 * 60))
      const details = [
        {"icon":<FontIcon className="icon-green">event</FontIcon>,"name":clas.group},
        {"icon":<FontIcon className="icon-blue">face</FontIcon>,"name":clas.teacher}
      ]
      const secondaryTextElements = [
        <span>
          <FontIcon className="icon-grey">event</FontIcon>
          <FeedDate date={clas.date} />
        </span>,
        <span>
          <FontIcon className="icon-grey">face</FontIcon>
          {clas.teacher}
        </span>
      ]
      if(clas.room){
        details.push({"icon":<FontIcon className="icon-yellow">place</FontIcon>,"name":clas.room})
      }
      const headerText = <span>{time} </span>
    
      return (  
        <DashboardClassItem
          key={clas.id}
          className={clas.inactive ? "feed-class inactive" : "feed-class active"}
          header={headerText}
          subHeader={<ClassItemSubheader classItem={clas} />}
          iconLeft={<WeekDayIcon date={clas.date} />}
          body={<ClassDetailsIconStatus status={clas.status} details={clas.details} />}
          expander={<DashboardClassDetails details={details} />}
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