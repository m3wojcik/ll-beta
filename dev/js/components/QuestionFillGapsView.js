import React, { Component } from 'react';
import FillGapAnswer from './helpers/FillGapAnswer';
export default class QuestionFillGapsView extends Component {

  render(){
    const { textArray } = this.props;
    let j = 0;
    const mappedQuestion = textArray.map(function(obj, i){
      let output;
        if(obj.type == "text"){
          output = <span key={i} className="fill-gap-text">{obj.value}</span>
        }else{
          output = <FillGapAnswer
            className="fill-gap-gap"
            key={i}
            userAnswer={obj.userAnswer}
            correctAnswer={obj.correctAnswer}
            />;
          j++;
        }

      return output;
    })
    return(
      <div className="question-fill-gaps">
        {mappedQuestion}
      </div>
    )
  }
}
