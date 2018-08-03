import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import IconHeader from '../helpers/IconHeader';
import ActionsRow from '../helpers/ActionsRow';
import WeekDayIcon from './../helpers/WeekDayIcon';
import DashboardClassItem from './DashboardClassItem';
import ClassDetailsList from'./ClassDetailsList';;
import ClassDetailsStatus from './ClassDetailsStatus';
import ClassItemSubheader from './ClassItemSubheader';
import {injectIntl, formatDate, formatTime, defineMessages} from 'react-intl';

const messages = defineMessages({
  view: {id: "dashboardClass.view", defaultMessage: "View"},
  join: {id: "dashboardClass.join", defaultMessage: "Join"}
})

const  DashboardClass = ({ intl, className, header, icon, clas, onViewClassClick, onJoinClassClick }) => {
  console.log('sdsd', )
  const classTime =  clas.date + " " + clas.time
  const time = intl.formatTime(classTime)+" - "+ intl.formatTime((new Date(classTime)).getTime() + (clas.length * 1000 * 60))
  const headerText = <span>{time} </span>
  const expanderText = (<div>
      <ClassDetailsList clas={clas} />
      <ActionsRow>
        {clas.details.online ? <Button onClick={onJoinClassClick.bind(this, clas.details.online.url)} primary raised>{intl.formatMessage(messages.join)}</Button> : null}
        <Button onClick={onViewClassClick.bind(this, clas.id)} primary flat>{intl.formatMessage(messages.view)}</Button>  
      </ActionsRow>
    </div>)
  return(
    <div className={className}>
      <IconHeader header={header} icon={icon} />
      <DashboardClassItem  
          className={clas.inactive ? "feed-class inactive" : "feed-class active"}
          header={headerText}
          subHeader={<ClassItemSubheader classItem={clas} />}
          iconLeft={<WeekDayIcon date={clas.date} />}
          body={<ClassDetailsStatus status={clas.status} details={clas.details} />}
          expander={expanderText}
      />
    </div>
  )
}
DashboardClass.propTypes = {
  clas: React.PropTypes.object.isRequired,
  header: React.PropTypes.string
}
export default injectIntl(DashboardClass)