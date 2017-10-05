import React from 'react';
import Button from 'react-md/lib/Buttons';
import BlockOfText from './../helpers/BlockOfText';
import Youtube from './../helpers/Youtube';
import ListFilesContainer from '../../containers/ListFilesContainer';
import QuestionOpenContainer from '../../containers/QuestionOpenContainer';
import QuestionContainer from '../../containers/QuestionContainer';
import QuestionFillGapsContainer from '../../containers/QuestionFillGapsContainer';
import QuestionFillGapsListContainer from '../../containers/QuestionFillGapsListContainer';
import QuestionFillGapsPredefinedContainer from '../../containers/QuestionFillGapsPredefinedContainer';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  finish: {
    id: 'tests.finish',
    defaultMessage: 'Finish'
  }
})

const Test =({intl, test, pages, onFinishClick })=> {
    const mappedTest = pages.map(function(page, i){
      const mappedPages = page.map(function(block, j){
          let output;
          switch (block.type) {
            case "block-of-text":
              output = <BlockOfText id={block.id} key={block.id} text={block.data} />
              break;
            case "question_one":
              output = <QuestionContainer
                id={block.id}
                key={block.id}
                type="radio"
                text={block.data}
                answers={block.answers}
                />
              break;
            case "question_many":
              output = <QuestionContainer
                id={block.id}
                key={block.id}
                type="checkbox"
                text={block.data}
                answers={block.answers}
                />
              break;
            case "question_open":
              output = <QuestionOpenContainer
                id={block.id}
                key={block.id}
                text={JSON.parse(block.data).q} />
              break;
            case "fill_in":
              if(block.data == 0){
                output = <QuestionFillGapsContainer id={block.id} key={block.id} text={block.long_data} />
              }else if(block.data == 1){
                output = <QuestionFillGapsListContainer id={block.id} key={block.id} text={block.long_data} />
              }

              break;
            case "fill-gaps-list":
              output = <QuestionFillGapsListContainer id={block.id} key={block.id} answers={block.answers} textArray={block.textArray} />
              break;
            case "question_prefdef":
              output = <QuestionFillGapsPredefinedContainer id={block.id} key={block.id} text={block.long_data} />
              break;
            case "youtube":
              output = <Youtube id={block.id} key={block.id} url={block.data} />
              break;
            case "elearning":
              output = <ListFilesContainer id={block.id} key={block.id} files={block.data} />
              break;
          }
          return <div key={j} className="block">{output}</div>;
        })
      return <li key={i} className="test-page md-paper--1">{mappedPages}</li>;
    })
    return(
      <div className="content-no-padding content-tabs">
        <ul className="clean-list">
          {mappedTest}
        </ul>
        <div className="test-bottom">
          <Button raised primary  onClick={onFinishClick}>{intl.formatMessage(messages.finish)}</Button>
        </div>
      </div>  
    )
}
export default injectIntl(Test)