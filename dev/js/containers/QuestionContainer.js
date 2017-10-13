import React, { Component } from 'react';
import { connect } from "react-redux";
import Question from '../components/Question';
import QuestionView from '../components/QuestionView';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionContainer extends Component {

  constructor(props) {
      super(props);
      this.state = { value: null };
  }
  handleChangeValue = (value) =>{
    console.log('click', value);
    const { id, userAnswers } = this.props;
    userAnswers[id] = value;
    console.log(userAnswers);
    this.setState({ value: value });
  }
  render(){
    const { id, type, text, answers, userAnswer, view, onAnswerClick } = this.props;
    let { value } = this.state;

    if(view){
      return(
        <QuestionView
          type={type}
          text={text}
          answers={answers}
          userAnswers={userAnswer} />
      )
    }else{
      return(
        <Question
          view ={view}
          type={type}
          text={text}
          answers={answers}
          value={value}
          onChangeValue={onAnswerClick.bind(this, id, type)}
        />
      )
    }

  }
}
