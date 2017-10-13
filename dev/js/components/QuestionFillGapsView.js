import React, { Component } from 'react';
import FillGapAnswer from './helpers/FillGapAnswer';
export default class QuestionFillGapsView extends Component {

  render(){
    const { text, answers, userAnswer } = this.props;
    let textSplit, output = [], cnt = 0
    const regexSplit = /<w:[^>]+?>(?:<c:(?:\d\|)*\d>|)/ig

    textSplit = text.split(regexSplit)
    textSplit.forEach(function(el, i){
      output.push(el)
      if(cnt < answers.length){
        output.push(
          <FillGapAnswer
            className="fill-gap-gap"
            key={cnt}
            userAnswer={userAnswer ? userAnswer[cnt] : null}
            answers={answers[cnt]}
          />
        )
        cnt++
      } 
    }.bind(this))
    return(
      <div className="question-fill-gaps">
        {output}
      </div>
    )
  }
}
