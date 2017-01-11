import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import {FormattedRelative} from 'react-intl';
import CustomCardTitle from '../CustomCardTitle';
import IconText from './IconText';
import FontIcon from 'react-md/lib/FontIcons';
import SquareLabel from './SquareLabel';
export default class TestInfo extends Component {

  render(){
    const { test} = this.props;
    let cardInfo = [];
    if(test.duration){
      cardInfo.push(
        <li key="duration">
          <IconText icon={<FontIcon>access_time</FontIcon>} text={test.duration} />
        </li>
      )
    }
    if(test.multipleSolving){
      cardInfo.push(
        <li key="multipleSolving">
          <IconText icon={<FontIcon>replay</FontIcon>} text="Multiple solving" />
        </li>
      )
    }
    let textResult = [];
    if(test.result){
      textResult.push(
          <SquareLabel key="result" value={test.result} displayValue={test.result + "%"} />
      )
    }
    return(
      <div>
        <CardTitle
          title={<CustomCardTitle left={test.name} right={textResult} />}
          subtitle={<FormattedRelative value={test.shareDate}/>}
          />
        <ul className="card-list">
          <li>
            <IconText icon={<FontIcon>face</FontIcon>} text={test.checkingTeacher} />
          </li>
          {cardInfo}
        </ul>
      </div>
    )
  }
}
