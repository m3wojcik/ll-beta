import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionFillGapsPredefined from '../components/QuestionFillGapsPredefined';
import QuestionFillGapsView from '../components/QuestionFillGapsView';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionFillGapsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { stateAnswers: []}
  }
  handleChange = (index, value) =>{
    let { id, onAnswerClick } = this.props;
    let {stateAnswers} = this.state
    let tmp = stateAnswers
    tmp[index] = value
    this.setState({stateAnswers: tmp});
    onAnswerClick(id, "fill_in", stateAnswers)
  }
  render(){
    const { answers, userAnswer, text, id, view } = this.props;
    const {stateAnswers} = this.state
    if(view){
      return(
          <QuestionFillGapsView
            id={id}
            answers={answers}
            userAnswer={userAnswer}
            text={text}
          />
      )
    }
    return(
        <QuestionFillGapsPredefined
          id={id}
          text={text}
          answers={stateAnswers}
          onChange={this.handleChange} />
    )
  }
}
