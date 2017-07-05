import React, { Component } from 'react';
import ContentEditable from './helpers/ContentEditable';
export default class QuestionFillGaps extends Component {

  render(){
    const { text, onChange, html } = this.props;
    let textSplit, output = []
    const regexSplit = /<w:[^>]+?>/ig
    textSplit = text.split(regexSplit)
    textSplit.forEach(function(el, i){
      output.push(el)
      if(i + 1 < textSplit.length){
        output.push(<ContentEditable id={i} className="fill-gap-gap" key={i} html={html[i]} onChange={onChange} />)
      }
    }.bind(this))
    return(
      <div className="question-fill-gaps">
        {output}
      </div>
    )
  }
}
