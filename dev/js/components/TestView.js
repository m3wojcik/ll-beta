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
import ToolbarExpander from '../components/helpers/ToolbarExpander';
import BlockOfText from './helpers/BlockOfText';
import TestInfo from '../components/helpers/TestInfo';
import QuestionOpenContainer from '../containers/QuestionOpenContainer';
import QuestionContainer from '../containers/QuestionContainer';
import QuestionFillGapsContainer from '../containers/QuestionFillGapsContainer';
import QuestionFillGapsListContainer from '../containers/QuestionFillGapsListContainer';
import QuestionFillGapsPredefinedContainer from '../containers/QuestionFillGapsPredefinedContainer';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class TestView extends Component {
  render(){
    const { test } = this.props;
    const testData = test.testData;
    let toolbarRight = [];
    if(test.result != null){
      toolbarRight.push(  <SquareLabel key="result" value={test.result} displayValue={test.result + "%"} />)
    }
    const mappedTest = testData.pages.map(function(page, i){
      const mappedPages = page.blocks.map(function(block, j){
          let output;

          switch (block.type) {
            case "block-of-text":
              output = <BlockOfText id={block.id} key={block.id} text={block.text} />
              break;
            case "single":
              output = <QuestionContainer
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
              output = <QuestionContainer
                view
                id={block.id} key={block.id}
                type="checkbox"
                text={block.question}
                answers={block.answers}
                userAnswer={block.userAnswer}
                />
              break;
            case "open":
              output = <QuestionOpenContainer
                view
                id={block.id}
                key={block.id}
                text={block.text}
                userAnswer={block.userAnswer}
                userPoints={block.userPoints}
                maxPoints={block.maxPoints}
                />
              break;
            case "fill-gaps":
              output = <QuestionFillGapsContainer
                view
                id={block.id}
                key={block.id}
                textArray={block.textArray}
                />
              break;
            case "fill-gaps-list":
              output = <QuestionFillGapsListContainer
                view
                id={block.id}
                key={block.id}
                answers={block.answers}
                textArray={block.textArray}
                />
              break;
            case "fill-gaps-predefined":
              output = <QuestionFillGapsPredefinedContainer
                view
                id={block.id}
                key={block.id}
                textArray={block.textArray}
                />
              break;
          }
          let blockCorrect;
          if(block.type != "block-of-text" && block.type != "open"){
            blockCorrect = block.correct ? "block-correct" : "block-incorrect";
          }
          return <div key={j} className={"block " + blockCorrect}>{output}</div>;
        })
      return <li key={i} className="test-page">{mappedPages}</li>;
    })
    return(
      <div>
        <ToolbarExpander
          left={<TestInfo  test={test} />}
          right={toolbarRight}
        />
        <div className="content-no-padding content-tabs">
          <ul className="clean-list">
            {mappedTest}
          </ul>
        </div>
      </div>
    )
  }
}
