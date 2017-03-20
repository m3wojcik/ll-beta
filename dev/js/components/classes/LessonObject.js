import React, { Component } from 'react';

export default class LessonObject extends Component {

  render(){
    const { label, content } = this.props;
    return(
      <div className="lesson-object">
        <div className="box-subtitle">{label}</div>
        <div className="box-text" dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}
LessonObject.propTypes = {
  label: React.PropTypes.string.isRequired,
  content: React.PropTypes.string
}
