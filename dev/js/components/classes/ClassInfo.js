import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import {FormattedDate} from 'react-intl';
import CustomCardTitle from '../CustomCardTitle';
import IconText from './../helpers/IconText';
import FontIcon from 'react-md/lib/FontIcons';

export default class ClassInfo extends Component {

  render(){
    const { info } = this.props;
    const today = new Date();
    const startDate = info[0].date
    const endDate = info[info.length - 1].date
    let classCompleted = 0,
        classTotal = info.length,
        cardInfo = []
    if(info.length > 0){
      info.forEach(function(clas, i){
        const classDate = new Date(clas.date +" "+clas.time)
        if(classDate < today) classCompleted++
      })
      cardInfo.push(
        <li key="dates">
          <IconText
            icon={<FontIcon className="icon-grey">date_range</FontIcon>}
            text={<span><FormattedDate value={startDate}/> - <FormattedDate value={endDate}/></span>}
            />
        </li>
      )
      cardInfo.push(
        <li key="lessons">
          <IconText
            icon={<FontIcon className="icon-grey">event</FontIcon>}
            text={"Lessons completed: " + classCompleted +" / "+ classTotal}
            />
        </li>
      )
    }
    // if(test.duration && test.duration > 0){
    //   let duration = test.duration / 60;
    //   cardInfo.push(
    //     <li key="duration">
    //       <IconText icon={<FontIcon className="icon-yellow">access_time</FontIcon>} text={duration} />
    //     </li>
    //   )
    // }
    // if(test.multipleSolving){
    //   cardInfo.push(
    //     <li key="multipleSolving">
    //       <IconText icon={<FontIcon className="icon-green">replay</FontIcon>} text="Multiple solving" />
    //     </li>
    //   )
    // }
    return(
        <ul className="card-list">
          {cardInfo}
        </ul>
    )
  }
}
