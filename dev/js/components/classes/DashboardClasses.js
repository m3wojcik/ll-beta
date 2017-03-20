import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import ClassDetailsStatus from './ClassDetailsStatus';
import DashboardClassDetails from'./DashboardClassDetails';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {getWeek} from '../../actions/Functions';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
export default class DashboardClasses extends Component {

  render(){
    const { dashboardClasses, fetched } = this.props;
    let output = []
    const mappedClasses = dashboardClasses.map(function(clas){
      let details = [
        {"icon":<FontIcon className="icon-green">event</FontIcon>,"name":clas.name},
        {"icon":<FontIcon className="icon-blue">face</FontIcon>,"name":clas.teacher}
      ]
      if(clas.room){
        details.push({"icon":<FontIcon className="icon-yellow">place</FontIcon>,"name":clas.room})
      }
      return (
        <CustomListItem
          key={clas.id}
          primaryText={<div><FormattedTime value={clas.date} /> - <FormattedTime value={(new Date(clas.date)).getTime() + (clas.length * 1000 * 60) }  /></div>}
          clickable
          status={<ClassDetailsStatus status={clas.status} details={clas.details} />}
          secondaryText={<CustomDate date={clas.date} />}
          expander={<DashboardClassDetails details={details} />}
        />
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(
        <ul key="list" className="md-list md-list-divider">
          {mappedClasses}
        </ul>
      )
    }

    return(
      <Box
        className="no-flex no-padding"
        title="Upcoming classes"
        titleIcon={<FontIcon className="icon-green">event</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
DashboardClasses.propTypes = {
  dashboardClasses: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
