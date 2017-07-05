import React, { Component } from 'react';
import FillGapSelect from './helpers/FillGapSelect';

export default class QuestionFillGapsList extends Component {
  render(){
    const { text, onChange, html } = this.props;
    var matches, globalAnswers = [], textSplit, output = []
    const regex = /<w:([^>]+?)>/ig
    while (matches = regex.exec(text)) {
        let str = matches[1].split('|')
        globalAnswers.push(str[0]);
    }
    const regexSplit = /<w:[^>]+?>/ig
    textSplit = text.split(regexSplit)
    textSplit.forEach(function(el, i){
      output.push(el)
      if(i + 1 < textSplit.length){
        output.push(<FillGapSelect className="fill-gap-select" key={i} value={i} menuItems={globalAnswers} onChange={onChange} />)
      }
    }.bind(this))
    return(
      <div className="question-fill-gaps">
        {output}
      </div>
    )
  }
}
