import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionOpen from '../../components/QuestionOpen';
import QuestionOpenView from '../../components/QuestionOpenView';

@connect((store) => {
   return {
     userAnswers: store.survey.userAnswers,
  };
})
export default class SurveyQuestionOpenContainer extends Component {

  constructor(props) {
      super(props);
      this.state = { value: null };
      this.handleChangeValue = this.handleChangeValue.bind(this);
  }
  handleChangeValue(value){
    const { id, userAnswers } = this.props;
    userAnswers[id] = value;
    console.log(userAnswers);
    this.setState({ value: value });

  }
  render(){
    const { text, id, userAnswer, userPoints, maxPoints, onAnswerClick } = this.props;
    let output;
    if(userAnswer){
      output = <QuestionOpenView text={text} userAnswer={userAnswer} />
    }else{
      output = <QuestionOpen id={id}  text={text}  onChange={onAnswerClick.bind(this, id, "open")} />
    }
    return(
      <div>{output}</div>
    )
  }
}
