import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';

import SquareLabel from '../helpers/SquareLabel';
import BlockOfText from '../helpers/BlockOfText';
import Youtube from '../helpers/Youtube';
import ListFilesContainer from '../../containers/ListFilesContainer';
import SurveyQuestionOpenContainer from '../../containers/surveys/SurveyQuestionOpenContainer';
import SurveyQuestionContainer from '../../containers/surveys/SurveyQuestionContainer';
import RangeContainer from '../../containers/RangeContainer';

export default class Survey extends Component {

  render(){
    const { survey, onFinishClick } = this.props;
    console.log('survey', survey)
    const mappedSurvey = survey.pages.map(function(page, i){
      const mappedPages = page.map(function(block, j){
          let output;
          switch (block.type) {
            case "text_block":
              output = <BlockOfText id={block.id} key={block.id} text={block.data} />
              break;
            case "slider":
              let sliderData = JSON.parse(block.data)
              output = <RangeContainer
                id={block.id}
                key={block.id}
                text={sliderData.q}
                answers={block.answers}
                minValue={sliderData.min}
                maxValue={sliderData.max}
                />
              break;
            case "question_one":
              output = <SurveyQuestionContainer id={block.id} key={block.id} type="radio" text={block.data} answers={block.answers} />
              break;
            case "question_many":
              output = <SurveyQuestionContainer
                id={block.id}
                key={block.id}
                type="checkbox"
                text={block.data}
                answers={block.answers}
                />
              break;
            case "question_open":
              output = <SurveyQuestionOpenContainer id={block.id} key={block.id} text={JSON.parse(block.data).q} />
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
      <div className="content-no-padding content-tabs">
        <ul className="clean-list md-paper--1">
          {mappedSurvey}
        </ul>
        <div className="test-bottom">
          <Button raised primary onClick={onFinishClick}>Finish</Button>
        </div>
      </div>
    )
  }
}
