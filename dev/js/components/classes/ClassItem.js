import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import CustomListItem from './../helpers/CustomListItem';
import CustomDate from './../helpers/CustomDate';
import ListHorizontal from './../helpers/ListHorizontal';
import CardClassDetails from './CardClassDetails';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';


export default class ClassItem extends Component {
  render(){
    const { clas, inactive, onClassClick } = this.props;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(clas.date);
    const listHorizontalElements = [
      <div><FormattedTime value={clas.date} /> - <FormattedTime value={(new Date(clas.date)).getTime() + (clas.length * 1000 * 60) }  /></div>
    ]
    return(
        <CustomListItem
          inactive={inactive}
          key={clas.id}
          onClick={onClassClick.bind(this,clas.id,clas.name)}
          leftIcon={<Avatar className="avatar-weekdays" icon={days[d.getDay()]} />}
          primaryText={<ListHorizontal elements={listHorizontalElements} />}
          secondaryText={<FormattedDate value={clas.date} year='numeric' month='long' day='2-digit' />}
          status={<CardClassDetails status={clas.status} details={clas.details} />}
          clickable
        />
    )
  }
}
