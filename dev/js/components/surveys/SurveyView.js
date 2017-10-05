import React, { Component } from 'react';
import BlockOfText from '../helpers/BlockOfText';
import Youtube from '../helpers/Youtube';
import ListFilesContainer from '../../containers/ListFilesContainer';
import SurveyQuestionOpenContainer from '../../containers/surveys/SurveyQuestionOpenContainer';
import SurveyQuestionContainer from '../../containers/surveys/SurveyQuestionContainer';
import RangeContainer from '../../containers/RangeContainer';

export default class Survey extends Component {

  render(){
    const { survey, surveyAttempts } = this.props;
    const surveyData = surveyAttempts;
    const mappedSurvey = surveyData.map(function(page, i){
      const mappedPages = page.blocks.map(function(block, j){
          let output;
          switch (block.type) {
            case "block-of-text":
              output = <BlockOfText id={block.id} key={block.id} text={block.text} />
              break;
            case "range":
              output = <RangeContainer
                 view
                 id={block.id}
                 key={block.id}
                 text={block.question}
                 answer={block.answer}
                 minValue={block.minValue}
                 maxValue={block.maxValue}
                />
              break;
            case "single":
              output = <SurveyQuestionContainer
                 view
                 id={block.id}
                 key={block.id}
                 type="radio"
                 text={block.question}
                 answers={block.answers}
                 userAnswer={block.userAnswer}
                 />
              break;
            case "multiple":
              output = <SurveyQuestionContainer
                view
                id={block.id}
                key={block.id}
                type="checkbox"
                text={block.question}
                answers={block.answers}
                userAnswer={block.userAnswer}
                />
              break;
            case "open":
              output = <SurveyQuestionOpenContainer
                view
                id={block.id}
                key={block.id}
                text={block.text}
                userAnswer={block.userAnswer}
                 />
              break;
            case "youtube":
              output = <Youtube id={block.id} key={block.id} url={block.url} />
              break;
            case "files":
              output = <ListFilesContainer id={block.id} key={block.id} files={block.files} />
              break;
          }
          return <div key={j} className="block">{output}</div>;
        })
      return <li key={i} className="test-page">{mappedPages}</li>;
    })
    return(
      <ul className="clean-list md-paper--1">
        {mappedSurvey}
      </ul>
    )
  }
}
