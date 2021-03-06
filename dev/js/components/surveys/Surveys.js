import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import CustomCardTitle from '../CustomCardTitle';
import IconText from '../helpers/IconText';
import Label from '../helpers/Label';
import TestInfo from '../tests/TestInfo';
import CustomDate from '../helpers/CustomDate';

export default class Surveys extends Component {
  render(){
    const { surveys, searchValue } = this.props;
    const mappedSurveys = surveys.map(function(survey){
      let cardActions = [];
      let name = survey.name.toLowerCase();
      let sharedBy = survey.sharedBy.toLowerCase();
      let search = searchValue.toLowerCase();
      let surveyDate = new Date(survey.sharedDate)
      let surveyStatus = [];
      if(survey.completed){
        //cardActions.push(<Button key="show" flat onClick={this.props.onShowClick.bind(this, survey)} >Show</Button>)
        surveyStatus.push(<Label  key="status" blue label="Complete" />)
      }else if(!survey.completed){
        cardActions.push(<Button key="fill" flat onClick={this.props.onSolveClick.bind(this, survey)} >Fill out survey</Button>)
      }
      let output = [
      <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone" key={survey.id}>
        <Card>
          <CardTitle
            title={<CustomCardTitle left={survey.name}  right={surveyStatus} />}
            subtitle={<CustomDate date={surveyDate}/>}
            />
            <TestInfo test={survey} />
            {!survey.completed ?
                    <CardActions className="md-divider-border md-divider-border--top">
                      {cardActions}
                    </CardActions>
            :null }
        </Card>
      </div>]
      if(name.indexOf(search) != -1 || sharedBy.indexOf(search) != -1 ){
        return output;
      }
    }.bind(this));
    return(
      <div className="md-grid">
        {mappedSurveys}
      </div>
    )
  }
}
