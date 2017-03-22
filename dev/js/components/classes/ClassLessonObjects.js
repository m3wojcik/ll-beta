import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import LessonObject from './LessonObject';
import FontIcon from 'react-md/lib/FontIcons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class ClassLessonObjects extends Component {

  render(){
    const { id, lessonObjects } = this.props;
    const lessonObjectsMapped = lessonObjects[id].objects.map(
      (object,i) =>
        <LessonObject key={i} label={object.label} content={object.content} />
    )
    return(
      <Box
        className="no-flex no-padding"
        title="Class details"
        titleIcon={<FontIcon className="icon-green">event</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          <div key="lessonObjectsMapped" className="lesson-objects">{lessonObjectsMapped}</div>
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
ClassLessonObjects.propTypes = {
  lessonObjects: React.PropTypes.array.isRequired,
  id: React.PropTypes.number.isRequired
}
