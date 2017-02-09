import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import MarksList from '../marks/MarksList'
import BoxSubtitle from './../helpers/BoxSubtitle'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class DashboardMarks extends Component {

  render(){
    const { dashboardMarks, fetched } = this.props;
    let output = []
    const mappedMarks = dashboardMarks.map(function(group){
        return (
          <div key={group.groupId}>
            <BoxSubtitle text={group.groupName} />
            <MarksList gradeType={group.gradeType} marks={group.marks} />
          </div>
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(<div key="marks">{mappedMarks}</div>)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="New marks"
        titleIcon={<FontIcon className="icon-teal">assessment</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>

      </Box>
    )
  }
}
DashboardMarks.propTypes = {
  dashboardMarks: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
