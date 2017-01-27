import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import SquareLabel from './helpers/SquareLabel';
export default class QuestionOpenView extends Component {
  render(){
    const { text, userAnswer, userPoints, maxPoints } = this.props;
    const percent = userPoints / maxPoints * 100;
    const display = userPoints + "/" + maxPoints;
    return(
      <div className="question">
      {  userPoints ?
          <SquareLabel className="pull-right" displayValue={display} value={percent} /> : null}
          <div className="question-text">{text}</div>
          <div className="md-cell md-cell--12" dangerouslySetInnerHTML={{__html:userAnswer}} />
      </div>
    )
  }
}
