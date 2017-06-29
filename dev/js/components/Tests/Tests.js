import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import CustomCardTitle from './../CustomCardTitle';
import IconText from './../helpers/IconText';
import TestInfo from './TestInfo';
import CircleProgressBar from './../helpers/CircleProgressBar';
import {FormattedRelative} from 'react-intl';

export default class Tests extends Component {
  render(){
    const { tests, searchValue,onShowClick,onSolveClick } = this.props;
    const mappedTests = tests.map(function(test){
      let cardActions = [];
      let name = test.name.toLowerCase();
      let sharedBy = test.sharedBy.toLowerCase();
      let search = searchValue.toLowerCase();
      if(test.completed){
        cardActions.push(<Button key="show" flat label="Show" onClick={onShowClick.bind(this, test)} />)
      }
      if(test.multipleSolving && test.completed){
        cardActions.push(<Button key="resolve" flat label="Resolve" onClick={onSolveClick.bind(this, test)} />)
      }else if(!test.completed){
        cardActions.push(<Button key="solve" flat label="Solve" onClick={onSolveClick.bind(this, test)} />)
      }
      let textResult = [];
      if(test.result){
        textResult.push(
          <CircleProgressBar
            key="circleProgress"
            strokeWidth={4}
            percentage={test.result}
            />

        )
      }
      let output = [
      <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" key={test.id}>
        <Card>
          <div class="card-with-right">
            <CardTitle
              title={<CustomCardTitle left={test.name} />}
              subtitle={<FormattedRelative value={test.sharedDate}/>}
              />
            <div className="card-right">
              {textResult}
            </div>
          </div>
            <TestInfo test={test} />
          <CardActions className="md-divider-border md-divider-border--top">
            {cardActions}
          </CardActions>
        </Card>
      </div>]
      if(name.indexOf(search) != -1 || sharedBy.indexOf(search) != -1 ){
        return output;
      }
    }.bind(this));
    return(
      <div className="md-grid">
        {mappedTests}
      </div>
    )
  }
}
