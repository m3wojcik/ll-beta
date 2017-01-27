import React, { Component } from 'react';
import SelectionControlGroup from 'react-md/lib/SelectionControls/SelectionControlGroup';

export default class QuestionView extends Component {

  render(){
    const { text, type, answers, value } = this.props;
    let output;
    if(type=="radio"){
        output = <SelectionControlGroup
          name={"question-" + type}
          type={type}
          controls={answers}
          defaultValue={value}
          disabled
        />
    }else{
        output = <SelectionControlGroup
          name={"question-" + type}
          type={type}
          controls={answers}
          defaultValue={value}
          disabled
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
