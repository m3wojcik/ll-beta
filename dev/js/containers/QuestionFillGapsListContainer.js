import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionFillGapsList from '../components/QuestionFillGapsList';

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
        <QuestionFillGapsList
          id={id}
          answers={answers}
          textArray={textArray}
          onChange={this.handleChange} />
    )
  }
}
