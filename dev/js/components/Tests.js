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
import CardClassDetails from './CardClassDetails';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class Tests extends Component {
  render(){
    const { tests } = this.props;
    const mappedTests = tests.map(function(test){
      let cardActions= [];
      if(test.completed){
        cardActions.push(<Button key="show" flat label="Show" onClick={this.props.onShowClick.bind(this, test)} />)
      }
      if(test.multipleSolving && test.completed){
        cardActions.push(<Button key="resolve" flat label="Resolve" onClick={this.props.onSolveClick.bind(this, test)} />)
      }else if(!test.completed){
        cardActions.push(<Button key="solve" flat label="Solve" onClick={this.props.onSolveClick.bind(this, test)} />)
      }
      let output = [
      <li key={test.id}>
        <Card>
          <CardTitle
            title={<CustomCardTitle left={test.name} right={<div>sdsd</div>} />}
            subtitle={<div><FontIcon>share</FontIcon><FormattedRelative value={test.shareDate}/></div>}
            />
          <List className="md-divider-border md-divider-border--top">
            <ListItem disabled primaryText={test.checkingTeacher} leftIcon={<FontIcon>face</FontIcon>}  />
          </List>
          <CardActions className="md-divider-border ">
            {cardActions}
          </CardActions>
        </Card>
      </li>]
      return output;
    }.bind(this));
    return(
      <ul className="clean-list">
        {mappedTests}
      </ul>
    )
  }
}
