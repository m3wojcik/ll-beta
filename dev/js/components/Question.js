import React, { Component } from 'react';
import SelectionControlGroup from 'react-md/lib/SelectionControls/SelectionControlGroup';

export default class Question extends Component {

  render(){
    const { text, type, answers, value, onChangeValue } = this.props;
    let output;
    if(type=="radio"){
      output = <SelectionControlGroup
        name={"question-" + type}
        type={type}
        onChange={onChangeValue.bind(this)}
        controls={answers}
        value={value}
      />
    }else{
      output = <SelectionControlGroup
        name={"question-" + type}
        type={type}
        onChange={onChangeValue.bind(this)}
        controls={answers}
      />
    }
    return(
      <div className="question">
        <div className="question-text">{text}</div>
        {output}
      </div>
    )
  }
}
