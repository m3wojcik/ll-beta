import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionOpen from '../components/QuestionOpen';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionOpenContainer extends Component {

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
    const { text, id } = this.props;
    return(
      <QuestionOpen id={id}  text={text} onChange={this.handleChangeValue} />
    )
  }
}
