import React from 'react';
import QuestionOpen from '../components/QuestionOpen';
import QuestionOpenView from '../components/QuestionOpenView';


const QuestionOpenContainer= ({ text, id, userAnswer, userPoints, maxPoints, onAnswerClick, view }) =>{
  let output;
  if(view){
    output = <QuestionOpenView text={text} userAnswer={userAnswer} userPoints={userPoints} maxPoints={maxPoints} />
  }else{
    output = <QuestionOpen id={id}  text={text} onChange={onAnswerClick.bind(this, id, "open")} />
  }
  return(
    <div>{output}</div>
  )
}
export default QuestionOpenContainer