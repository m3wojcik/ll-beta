import React, { Component } from 'react';
import { connect } from "react-redux";
import Range from "../components/Range"
import RangeView from "../components/RangeView"

@connect((store) => {
   return {
     userAnswers: store.survey.userAnswers,
  };
})
export default class RangeContainer extends Component {
  render(){
    const {id, value, text, answer, view, minValue, maxValue, onAnswerClick } = this.props;
    let rangeProps ;
    if(view){
      return(
        <RangeView
          value={answer}
          maxValue={maxValue}
          minValue={minValue}
          label={text}
          id={id}
          />
      )
    }else{
      return(
        <Range
          onChangeValue={onAnswerClick.bind(this, id, "slider")}
          value={value}
          maxValue={maxValue}
          minValue={minValue}
          label={text}
          id={id}
          />
      )
    }

  }
}
