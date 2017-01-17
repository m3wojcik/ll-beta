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
  handleChange = (value, index) =>{
    let { id, userAnswers } = this.props;
    if(!userAnswers[id]) {
      userAnswers[id] = [];
    }
    userAnswers[id][index] = value;
    console.log(userAnswers);
  }
  render(){
    const { answers, textArray, id, view } = this.props;
    if(view){
      return(
          <QuestionFillGapsView
            id={id}
            textArray={textArray}
          />
      )
    }
    return(
        <QuestionFillGapsPredefined
          id={id}
          textArray={textArray}
          onChange={this.handleChange} />
    )
  }
}
