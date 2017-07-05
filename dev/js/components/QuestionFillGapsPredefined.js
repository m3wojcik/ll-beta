import React, { Component } from 'react';
import FillGapSelect from './helpers/FillGapSelect';

export default class QuestionFillGapsList extends Component {
  render(){
    const { text, onChange, html } = this.props;
    // //correct
    // const regex2 = /<c:([^>]+?)>/ig
    // let correct = text.match(regex2)

    // //Answers

    const regex = /<w:([^>]+?)><c:([^>]+?)>/ig
    var matches, globalAnswers = [], textSplit, output = []
    while (matches = regex.exec(text)) {
        let obj = {
          replace: matches[0],
          answers: matches[1],
          correct: matches[2]
        }
        globalAnswers.push(obj);
    }
    const regexSplit = /<w:[^>]+?><c:[^>]+?>/ig
    textSplit = text.split(regexSplit)
    textSplit.forEach(function(el, i){
      output.push(el)
      if(globalAnswers.length > i){
        let ansArr = globalAnswers[i].answers.split('|')
        output.push(<FillGapSelect className="fill-gap-select" key={i} value={i} menuItems={ansArr} onChange={onChange} />)
      }
    }.bind(this))
    return(
      <div className="question-fill-gaps">
        {output}
      </div>
    )
  }
}
