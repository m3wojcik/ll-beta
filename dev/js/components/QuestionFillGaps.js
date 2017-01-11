import React, { Component } from 'react';
import ContentEditable from './helpers/ContentEditable';
export default class QuestionFillGaps extends Component {

  render(){
    const { textArray, onChange, html } = this.props;
    let j = 0;
    const mappedQuestion = textArray.map(function(obj, i){
      let output;
        if(obj.type == "text"){
          output = <span key={i} className="fill-gap-text">{obj.value}</span>
        }else{
          output = <ContentEditable id={j} className="fill-gap-gap" key={i} html={html[j]} onChange={onChange} />;
          j++;
        }

      return output;
    })
    return(
      <div className="question-fill-gaps">
        {mappedQuestion}
      </div>
    )
  }
}
