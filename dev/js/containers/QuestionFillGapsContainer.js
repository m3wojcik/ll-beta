import React, { Component } from 'react';
import { connect } from "react-redux";
import QuestionFillGaps from '../components/QuestionFillGaps';

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class QuestionFillGapsContainer extends Component {
  constructor(props) {
      super(props);
      this.state = { html: []}
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, obj){
    const { id, userAnswers } = this.props;
    let tmp = this.state.html;
    tmp[obj.id] = value;
    userAnswers[id] = tmp;
    console.log(userAnswers);
    this.setState({html: tmp});
  }
  render(){
    const { textArray, id } = this.props;
    return(
        <QuestionFillGaps
          id={id}
          html={this.state.html}
          textArray={textArray}
          onChange={this.handleChange} />
    )
  }
}
