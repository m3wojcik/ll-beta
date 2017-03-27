import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import MarksList from '../marks/MarksList'
import BoxSubtitle from './../helpers/BoxSubtitle'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestsList from './TestsList'
export default class DashboardTests extends Component {

  render(){
    const { dashboardTests, fetched, onSolveClick } = this.props;
    console.log('dashboardTests',dashboardTests);
    let output = []
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(<TestsList key="test-list" tests={dashboardTests} onSolveClick={onSolveClick} />)
    }
    return(
      <Box
        className="no-flex no-padding"
        title="New tests"
        titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>

      </Box>
    )
  }
}
DashboardTests.propTypes = {
  dashboardTests: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
