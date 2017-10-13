import React, { Component } from 'react';
import QuestionFillGapsList from '../components/QuestionFillGapsList';
import QuestionFillGapsView from '../components/QuestionFillGapsView';

export default class QuestionFillGapsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { stateAnswers: []}
  }
  handleChange = (index, value) =>{
    let { id, userAnswers, onAnswerClick } = this.props;
    let {stateAnswers} = this.state
    let tmp = stateAnswers
    tmp[index] = value
    this.setState({stateAnswers: tmp});
    onAnswerClick(id, "fill_in", stateAnswers)
  }
  render(){
    const { answers, userAnswer, text, id ,view } = this.props;
    const {stateAnswers} = this.state
    if(view){
      return(
          <QuestionFillGapsView
            id={id}
            text={text}
            answers={answers}
            userAnswer={userAnswer}
          />
      )
    }
    return(
        <QuestionFillGapsList
          id={id}
          text={text}
          answers={stateAnswers}
          onChange={this.handleChange} />
    )
  }
}
