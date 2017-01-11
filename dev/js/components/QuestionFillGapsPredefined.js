import React, { Component } from 'react';
import FillGapSelect from './helpers/FillGapSelect';

export default class QuestionFillGapsList extends Component {
  render(){
    const { textArray, onChange, html } = this.props;
    let j = 0;
    //const answersItems = [''].concat(answers);
    const mappedQuestion = textArray.map(function(obj, i){
      let output;
        if(obj.type == "text"){
          output = <span key={i} className="fill-gap-text">{obj.value}</span>
        }else{
          output = <FillGapSelect className="fill-gap-select" key={i} value={j} menuItems={obj.answers} onChange={onChange} />
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
