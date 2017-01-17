import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';

export default class FillGapAnswer extends Component {

  render(){
    const { userAnswer,correctAnswer, className } = this.props;
    let classProp = className;
    let output;
    let correct;
    if(correctAnswer.indexOf(userAnswer) > -1){
      classProp += " answer-correct";
      output = <Button flat label={userAnswer} />
    }else{
      classProp += " answer-incorrect";
      if(correctAnswer.length > 1) correct = correctAnswer.join(", ");
      else correct = correctAnswer;
      output = <Button
        flat
        tooltipLabel={correct}
        label={userAnswer}
        tooltipPosition="top"
        />
    }
    return(
      <span className={classProp}>
        {output}
      </span>
    )
  }
}
