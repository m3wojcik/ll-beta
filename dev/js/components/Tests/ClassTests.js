import React, { Component } from 'react';
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestsList from './TestsList'

export default class ClassTests extends Component {

  render(){
    const { tests, onSolveClick, boxTitle } = this.props;
    return(
      <Box
        className="no-flex no-padding"
        title={boxTitle}
        titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          <TestsList key="test-list" tests={tests} onSolveClick={onSolveClick} />
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
ClassTests.propTypes = {
  tests: React.PropTypes.array.isRequired
}
