import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import WeekDayIcon from './../helpers/WeekDayIcon';
import FontIcon from 'react-md/lib/FontIcons';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import ListHorizontal from './../helpers/ListHorizontal';
import ClassDetailsStatus from './ClassDetailsStatus';
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
          {intl.formatDate(clas.date, {year:'numeric', month:'long', day:'2-digit'})}
        </span>,
        <span>
          <FontIcon className="icon-grey">face</FontIcon>
          {clas.teacher}
        </span>
      ]
      if(clas.room){
        details.push({"icon":<FontIcon className="icon-yellow">place</FontIcon>,"name":clas.room})
      }
      return (
         <CustomListItem
           inactive={clas.inactive}
           key={clas.id}
           primaryText={time}
           clickable
           leftIcon={<WeekDayIcon date={clas.date} />}
           status={<ClassDetailsStatus status={clas.status} details={clas.details} />}
           secondaryText={<ListHorizontal space="no-space" elements={secondaryTextElements} />}
           expander={<DashboardClassDetails details={details} />}
        />
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(
        <ul key="list" className="md-list md-list-divider class-list">
          {mappedClasses}
        </ul>
      )
    }

    return(
      <Box
        className="no-flex no-padding"
        title={intl.formatMessage(messages.upcomingClasses)}
        titleIcon={<FontIcon className="icon-green">event</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
}
DashboardClasses.propTypes = {
  dashboardClasses: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
export default injectIntl(DashboardClasses)