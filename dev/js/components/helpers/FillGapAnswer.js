import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';

const FillGapAnswer = ({ userAnswer, answers, className }) => {

    let classProp = className;
    let output;
    let correct;
    
    if(userAnswer && answers.indexOf(userAnswer) > -1){
      classProp += " answer-correct";
      output = <Button flat>{userAnswer}</Button>
    }else{
      classProp += " answer-incorrect";
      if(answers.length > 1) correct = answers.join(", ");
      else correct = answers;
      output = <Button
        flat
        tooltipLabel={correct}
        tooltipPosition="top"
        >{userAnswer}</Button>
    }
    return(
      <span className={classProp}>
        {output}
      </span>
    )
}
export default FillGapAnswer