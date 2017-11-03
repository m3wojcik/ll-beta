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
  constructor(props) {
      super(props);
      this.state = { value: 0 };
  }
  componentDidMount(){
     const { id, userAnswers, minValue } = this.props;
     if(userAnswers){
       userAnswers[id] = minValue;
     }
  }
  handleChangeValue = (value) =>{
    const { id, userAnswers, minValue } = this.props;
    userAnswers[id] = value + minValue;
    console.log(userAnswers);
    this.setState({ value: value });
  }
  render(){
    const {id, text, answer, view, minValue, maxValue, onAnswerClick } = this.props;
    let { value } = this.state;
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
