import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import {getWeek, getDaysDiference, addDays, getDay} from '../../actions/Functions'
import ClassItem from './ClassItem';
import ListHeader from './../helpers/ListHeader';

var headers ={
  first: false,
  lastWeek: false,
  thisWeek: false,
  nextWeek: false,
  next: false
}
export default class Classes extends Component {
  componentDidMount(){
    const mainToolbar = document.getElementsByClassName("main-toolbar")[0];
    const offsetHeight = mainToolbar.offsetHeight + 19;
    if(headers.thisWeek){
      let offsetTop = document.getElementById('this-week').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }else if(headers.nextWeek){
      let offsetTop = document.getElementById('next-week').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }else if(headers.next){
      let offsetTop = document.getElementById('next').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }else if(headers.lastWeek){
      let offsetTop = document.getElementById('last-week').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }
  }
  render(){
    const { classes } = this.props;
    const today = new Date();
    const weekStartDate = addDays(today, -getDay(today))
    console.log('weekStartDate',weekStartDate);
    const mappedClasses = []
    classes.forEach(function(clas, i){
      const dayDiff = getDaysDiference(weekStartDate,clas.date);

      if(0 > dayDiff && dayDiff >= -7 && !headers.lastWeek){
        console.log('last week');
        headers.lastWeek = true;
        mappedClasses.push(
            <ListHeader id='last-week' key='last-week' header='Last week' />
        )
      }else if(7 > dayDiff && dayDiff >= 0 && !headers.thisWeek){
        console.log('this week');
        headers.thisWeek = true;
        mappedClasses.push(
            <ListHeader id='this-week' key='this-week' header='This week' />
        )
      }else if(14 > dayDiff && dayDiff >= 7 && !headers.nextWeek){
        console.log('next week');
        headers.nextWeek = true;
        mappedClasses.push(
            <ListHeader id='next-week' key='next-week' header='Next week' />
        )
      }else if(dayDiff >= 14 && !headers.next){
        console.log('next',clas.date);
        headers.next = true;
        mappedClasses.push(
            <ListHeader id='next' key='next' header='Next' />
        )
      }else if(!headers.first){
        console.log('first',clas.date);
        headers.first = true;
        mappedClasses.push(
            <ListHeader id='first' key='first' header={<FormattedDate value={clas.date} day="numeric" month="long" year="numeric" />} />
        )
      }
      console.log(clas.date,dayDiff);
      mappedClasses.push(
        <li key={clas.id}>
          <ClassItem onCardClick={this.props.onCardClick} clas={clas} />
        </li>
      )
    }.bind(this))
    return(
      <ul className="clean-list">
        {mappedClasses}
      </ul>
    )
  }
}
