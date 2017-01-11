import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionFillGapsPredefined from '../components/QuestionFillGapsPredefined';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionFillGapsListContainer extends Component {
  constructor(props) {
      super(props);
      //this.state = { selectedValues: []}
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, index){
    const { id, userAnswers } = this.props;
    let tmp = []
    if(userAnswers.length > 0){
      tmp = userAnswers[id];
    }
    tmp[index] = value;
    userAnswers[id] = tmp;
    console.log(userAnswers);
    //this.setState({selectedValues: tmp});
  }
  render(){
    const { answers, textArray, id } = this.props;
    return(
        <QuestionFillGapsPredefined
          id={id}
          textArray={textArray}
          onChange={this.handleChange} />
    )
  }
}
