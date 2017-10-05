import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import {FormattedRelative} from 'react-intl';
import CustomCardTitle from '../CustomCardTitle';
import IconText from './../helpers/IconText';
import FontIcon from 'react-md/lib/FontIcons';

export default class TestInfo extends Component {

  render(){
    const { test} = this.props;
    let cardInfo = [];
    if(test.checkingTeacher){
      cardInfo.push(
        <li key="checkingTeacher">
          <IconText icon={<FontIcon className="icon-blue">face</FontIcon>} text={test.checkingTeacher} />
        </li>
      )
    }else{
      cardInfo.push(
        <li key="sharedBy">
          <IconText icon={<FontIcon className="icon-blue">face</FontIcon>} text={test.sharedBy} />
        </li>
      )
    }
    if(test.duration && test.duration > 0){
      let duration = test.duration + "'";
      cardInfo.push(
        <li key="duration">
          <IconText icon={<FontIcon className="icon-yellow">access_time</FontIcon>} text={duration} />
        </li>
      )
    }
    if(test.multipleSolving){
      cardInfo.push(
        <li key="multipleSolving">
          <IconText icon={<FontIcon className="icon-green">replay</FontIcon>} text="Multiple solving" />
        </li>
      )
    }
    return(
        <ul className="card-list">
          {cardInfo}
        </ul>
    )
  }
}
