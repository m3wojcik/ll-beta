import React, { Component } from 'react';
import WeekDayIcon from './../helpers/WeekDayIcon';
import CustomListItem from './../helpers/CustomListItem';
import CustomDate from './../helpers/CustomDate';
import ListHorizontal from './../helpers/ListHorizontal';
import ClassDetailsStatus from './ClassDetailsStatus';
import FontIcon from 'react-md/lib/FontIcons';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';


export default class ClassItem extends Component {
  render(){
    const { clas, inactive, onClassClick } = this.props;
    const d = new Date(clas.date +" "+ clas.time);
    const primaryText =  <div><FormattedTime value={d} /> - <FormattedTime value={(new Date(d)).getTime() + (clas.length * 1000 * 60) }  /></div>
    const secondaryTextElements = [
      <span>
        <FontIcon className="icon-grey">event</FontIcon>
        <FormattedDate value={d} year='numeric' month='long' day='2-digit' />
      </span>,
      <span>
        <FontIcon className="icon-grey">face</FontIcon>
        {clas.teacher}
      </span>
    ]
    return(
        <CustomListItem
          inactive={inactive}
          key={clas.id}
          className={"class-id-"+clas.id}
          onClick={onClassClick.bind(this,clas.id,clas.name)}
          leftIcon={<WeekDayIcon date={d} />}
          primaryText={primaryText}
          secondaryText={<ListHorizontal space="no-space" elements={secondaryTextElements} />}
          status={<ClassDetailsStatus status={clas.status} details={clas.details} />}
          clickable
        />
    )
  }
}
