import React, { Component } from 'react';
import { connect } from "react-redux";
import Question from '../components/Question';
import QuestionView from '../components/QuestionView';

@connect((store) => {
   return {
     userAnswers: store.survey.userAnswers,
  };
})
export default class SurveyQuestionContainer extends Component {

  constructor(props) {
      super(props);
      this.state = { value: null };
  }
  handleChangeValue = (value) =>{
    const { id, userAnswers } = this.props;
    userAnswers[id] = value;
    console.log(userAnswers);
    this.setState({ value: value });
  }
  render(){
    const { type, text, answers, userAnswer, view } = this.props;
    let { value } = this.state;
    if(view){
      return(
        <QuestionView
          type={type}
          text={text}
          answers={answers}
          value={userAnswer} />
      )
    }else{
      return(
        <Question
          view ={view}
          type={type}
          text={text}
          answers={answers}
          onChangeValue={this.handleChangeValue}
        />
      )
    }

  }
}
