import React, { Component } from 'react';
import SelectionControlGroup from 'react-md/lib/SelectionControls/SelectionControlGroup';

export default class Question extends Component {

  render(){
    const { text, type, answers, value, onChangeValue, view } = this.props;
    let output;
    const mappedAnswers = answers.map(function(answer){
      return {
        id: answer.id,
        value: answer.id.toString(),
        label: answer.data
      }
    })
    if(type=="radio"){
      if(view){
        output = <SelectionControlGroup
          name={"question-" + type}
          type={type}
          controls={mappedAnswers}
          disabled
        />
      }else{
        output = <SelectionControlGroup
          name={"question-" + type}
          type={type}
          onChange={onChangeValue.bind(this)}
          controls={mappedAnswers}
        />
      }
    }else{
      if(view){
        output = <SelectionControlGroup
          name={"question-" + type}
          type={type}
          controls={mappedAnswers}
          defaultValue={value}
          disabled
        />
      }else{
        output = <SelectionControlGroup
          name={"question-" + type}
          type={type}
          onChange={onChangeValue.bind(this)}
          controls={mappedAnswers}
        />
      }
    }
    return(
      <div className="question">
        <div className="question-text">{text}</div>
        {output}
      </div>
    )
  }
}
