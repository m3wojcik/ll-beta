import React, { Component } from 'react';

import SquareLabel from './helpers/SquareLabel';
import ToolbarExpander from '../components/helpers/ToolbarExpander';
import BlockOfText from './helpers/BlockOfText';
import Youtube from './helpers/Youtube';
import TestInfo from '../components/tests/TestInfo';
import QuestionOpenContainer from '../containers/QuestionOpenContainer';
import QuestionContainer from '../containers/QuestionContainer';
import QuestionFillGapsContainer from '../containers/QuestionFillGapsContainer';
import QuestionFillGapsListContainer from '../containers/QuestionFillGapsListContainer';
import QuestionFillGapsPredefinedContainer from '../containers/QuestionFillGapsPredefinedContainer';
import ListFilesContainer from '../containers/ListFilesContainer';

export default class TestView extends Component {
  render(){
    const { test, test_attempts } = this.props;
    const testData = test_attempts[test_attempts.length - 1];
    let toolbarRight = [];
    if(test.result != null){
      toolbarRight.push(  <SquareLabel key="result" value={test.result} displayValue={test.result + "%"} />)
    }
    //const mappedTest = testData.pages.map(function(page, i){
      const mappedPages = testData.map(function(block, j){
          let output;

          switch (block.type) {
            case "text_block":
              output = <BlockOfText id={block.id} key={block.id} text={block.data} />
              break;
            case "question_one":
              output = <QuestionContainer
                view
                id={block.id}
                key={block.id}
                type="radio"
                text={block.data}
                answers={block.answers}
                userAnswer={block.userAnswer}
                />
              break;
            case "question_many":
              output = <QuestionContainer
                view
                id={block.id} key={block.id}
                type="checkbox"
                text={block.question}
                answers={block.answers}
                userAnswer={block.userAnswer}
                />
              break;
            case "question_open":
              output = <QuestionOpenContainer
                view
                id={block.id}
                key={block.id}
                text={block.data}
                userAnswer={block.userAnswer}
                userPoints={block.userPoints}
                maxPoints={block.maxPoints}
                />
              break;
            case "fill_in":
              output = <QuestionFillGapsContainer
                view
                id={block.id}
                key={block.id}
                answers={block.answers}
                userAnswer={block.userAnswer}
                text={block.data}
                />
              break;
            case "question_prefdef":
              output = <QuestionFillGapsListContainer
                view
                id={block.id}
                key={block.id}
                answers={block.answers}
                userAnswer={block.userAnswer}
                text={block.data}
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
            case "youtube":
              output = <Youtube id={block.id} key={block.id} url={block.data} />
              break;
            case "elearning":
              output = <ListFilesContainer id={block.id} key={block.id} files={block.data} />
              break;
          }
          let blockCorrect;
          const neutralBlocksArray = ["text_block","question_open","youtube", "elearning"];
          if(neutralBlocksArray.indexOf(block.type) == -1){
            blockCorrect = block.correct ? "block-correct" : "block-incorrect";
          }
          return <div key={j} className={"block " + blockCorrect}>{output}</div>;
        })
      //return <li key={i} className="test-page md-paper--1">{mappedPages}</li>;
    //})
    return(
      <div>
        <ToolbarExpander
          left={<TestInfo test={test} />}
          right={toolbarRight}
        />
        <div className="expander-body">
          <ul className="clean-list">
            <li className="test-page md-paper--1">{mappedPages}</li>
          </ul>
        </div>
      </div>
    )
  }
}
