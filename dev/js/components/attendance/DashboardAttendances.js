import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FontIcon from 'react-md/lib/FontIcons';
import AttendanceStatuses from './AttendanceStatuses'
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import BoxSubtitle from './../helpers/BoxSubtitle'

export default class DashboardAttendances extends Component {

  render(){
    const { dashboardAttendances, fetched } = this.props;
    let output = []
    const mappedAttendances = dashboardAttendances.map(function(group){
        return (
          <div key={group.groupId}>
            <BoxSubtitle text={group.groupName} />
            <AttendanceStatuses attendance={group.statuses} />
          </div>
      )
    })
    if(fetched){
      output.push(<div key="attendances">{mappedAttendances}</div>)
    }else{
      output.push(<Loader key="loader" centerPadding />)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="New Attendances"
        titleIcon={<FontIcon className="icon-olive">done_all</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
DashboardAttendances.propTypes = {
  dashboardAttendances: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
