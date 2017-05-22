import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import CustomListItem from './../helpers/CustomListItem';
import CustomDate from './../helpers/CustomDate';
import ListHorizontal from './../helpers/ListHorizontal';
import ClassDetailsStatus from './ClassDetailsStatus';
import {getShortDayName} from './../../actions/Functions'
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';


export default class ClassItem extends Component {
  render(){
    const { clas, inactive, onClassClick } = this.props;
    const d = new Date(clas.date +" "+ clas.time);
    const listHorizontalElements = [
      <div><FormattedTime value={d} /> - <FormattedTime value={(new Date(d)).getTime() + (clas.length * 1000 * 60) }  /></div>
    ]
    return(
        <CustomListItem
          inactive={inactive}
          key={clas.id}
          onClick={onClassClick.bind(this,clas.id,clas.name)}
          leftIcon={<Avatar className="avatar-weekdays" icon={getShortDayName(d)} />}
          primaryText={<ListHorizontal elements={listHorizontalElements} />}
          secondaryText={<FormattedDate value={d} year='numeric' month='long' day='2-digit' />}
          status={<ClassDetailsStatus status={clas.status} details={clas.details} />}
          clickable
        />
    )
  }
}
