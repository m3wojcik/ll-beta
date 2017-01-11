import React, { Component } from 'react';
import { connect } from "react-redux";
import Question from '../components/Question';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionContainer extends Component {

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
    const { type, text, answers } = this.props;
    const {value} = this.state;
    return(
      <Question
        type={type}
        text={text}
        answers={answers}
        onChangeValue={this.handleChangeValue}
        value={value} />
    )
  }
}
