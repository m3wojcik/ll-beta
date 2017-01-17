import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionFillGaps from '../components/QuestionFillGaps';
import QuestionFillGapsView from '../components/QuestionFillGapsView';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionFillGapsContainer extends Component {
  constructor(props) {
      super(props);
      this.state = { html: []}
  }
  handleChange = (value, obj) =>{
    const { id, userAnswers } = this.props;
    let tmp = this.state.html;
    tmp[obj.id] = value;
    userAnswers[id] = tmp;
    console.log(userAnswers);
    this.setState({html: tmp});
  }
  render(){
    const { textArray, id, view } = this.props;
    if(view){
      return(
          <QuestionFillGapsView
            id={id}
            textArray={textArray}
          />
      )
    }
    return(
        <QuestionFillGaps
          id={id}
          html={this.state.html}
          textArray={textArray}
          onChange={this.handleChange} />
    )
  }
}
