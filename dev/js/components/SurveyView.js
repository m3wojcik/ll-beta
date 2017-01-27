import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import CustomCardTitle from './CustomCardTitle';
import IconText from './helpers/IconText';
import SquareLabel from './helpers/SquareLabel';
import BlockOfText from './helpers/BlockOfText';
import Youtube from './helpers/Youtube';
import ListFilesContainer from '../containers/ListFilesContainer';
import SurveyQuestionOpenContainer from '../containers/SurveyQuestionOpenContainer';
import SurveyQuestionContainer from '../containers/SurveyQuestionContainer';
import RangeContainer from '../containers/RangeContainer';

export default class Survey extends Component {

  render(){
    const { survey } = this.props;
    const surveyData = survey.surveyData;
    const mappedSurvey = surveyData.pages.map(function(page, i){
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
