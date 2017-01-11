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
import TestInfo from './helpers/TestInfo';
import {FormattedRelative} from 'react-intl';

export default class Tests extends Component {
  render(){
    const { tests } = this.props;
    const mappedTests = tests.map(function(test){
      let cardActions = [];
      if(test.completed){
        cardActions.push(<Button key="show" flat label="Show" onClick={this.props.onShowClick.bind(this, test)} />)
      }
      if(test.multipleSolving && test.completed){
        cardActions.push(<Button key="resolve" flat label="Resolve" onClick={this.props.onSolveClick.bind(this, test)} />)
      }else if(!test.completed){
        cardActions.push(<Button key="solve" flat label="Solve" onClick={this.props.onSolveClick.bind(this, test)} />)
      }
      let output = [
      <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" key={test.id}>
        <Card>
            <TestInfo test={test} />
          <CardActions className="md-divider-border md-divider-border--top">
            {cardActions}
          </CardActions>
        </Card>
      </div>]
      return output;
    }.bind(this));
    return(
      <div className="md-grid">
        {mappedTests}
      </div>
    )
  }
}
