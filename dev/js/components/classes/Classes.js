import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import {getWeek, getDaysDiference, addDays, getDay, isDateLowerThanToday} from '../../actions/Functions'
import CardWithHeader from './../helpers/CardWithHeader'
import ClassItem from './ClassItem';
import ListHeader from './../helpers/ListHeader';


export default class Classes extends Component {
  componentDidMount(){
    const mainToolbar = document.getElementsByClassName("main-toolbar")[0];
    const offsetHeight = mainToolbar.offsetHeight + 39;
    if(document.getElementById('this-week')){
      let offsetTop = document.getElementById('this-week').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }else if(document.getElementById('next-week')){
      let offsetTop = document.getElementById('next-week').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }else if(document.getElementById('next')){
      let offsetTop = document.getElementById('next').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }else if(document.getElementById('last-week')){
      let offsetTop = document.getElementById('last-week').offsetTop - offsetHeight
      window.scrollTo( 0, offsetTop );
    }
  }
  render(){
    const { classes, onClassClick } = this.props;
    const today = new Date();
    const weekStartDate = addDays(today, -getDay(today))
    const outputClasses = [], firstClasses=[], lastWeekClasses = [], thisWeekClasses = [], nextWeekClasses = [], nextClasses = [];
    classes.forEach(function(clas, i){
      const dayDiff = getDaysDiference(weekStartDate,clas.date);

      if(0 > dayDiff && dayDiff >= -7 ){
        lastWeekClasses.push(
            <ClassItem inactive key={clas.id} onClassClick={onClassClick} clas={clas} />
        )
      }else if(7 > dayDiff && dayDiff >= 0){
        if(isDateLowerThanToday(clas.date)){
          thisWeekClasses.push(
              <ClassItem inactive key={clas.id} onClassClick={onClassClick} clas={clas} />
          )
        }else{
          thisWeekClasses.push(
              <ClassItem key={clas.id} onClassClick={onClassClick} clas={clas} />
          )
        }
      }else if(14 > dayDiff && dayDiff >= 7){
        nextWeekClasses.push(
            <ClassItem key={clas.id} onClassClick={onClassClick} clas={clas} />
        )
      }else if(dayDiff >= 14){
        nextClasses.push(
            <ClassItem key={clas.id} onClassClick={onClassClick} clas={clas} />
        )
      }else {
        firstClasses.push(
            <ClassItem inactive key={clas.id} onClassClick={onClassClick} clas={clas} />
        )
      }
    }.bind(this))
    if(firstClasses.length > 0){
      outputClasses.push(
        <CardWithHeader id="first" key="firstClasses" header={<FormattedDate value={classes[0].date} day="numeric" month="long" year="numeric" />}>
          <ul className="md-list md-list-divider">
            {firstClasses}
          </ul>
        </CardWithHeader>
      )
    }
    if(lastWeekClasses.length > 0){
      outputClasses.push(
        <CardWithHeader id="last-week" key="lastWeekClasses" header="Last week">
          <ul className="md-list md-list-divider">
            {lastWeekClasses}
          </ul>
        </CardWithHeader>
      )
    }
    if(thisWeekClasses.length > 0){
      outputClasses.push(
        <CardWithHeader id="this-week" key="thisWeekClasses" header="This week">
          <ul className="md-list md-list-divider">
            {thisWeekClasses}
          </ul>
        </CardWithHeader>
      )
    }
    if(nextWeekClasses.length > 0){
      outputClasses.push(
        <CardWithHeader id="next-week" key="nextWeekClasses" header="Next week">
          <ul className="md-list md-list-divider">
            {nextWeekClasses}
          </ul>
        </CardWithHeader>
      )
    }
    if(nextClasses.length > 0){
      outputClasses.push(
        <CardWithHeader id="next" key="nextClasses" header="Next">
          <ul className="md-list md-list-divider">
            {nextClasses}
          </ul>
        </CardWithHeader>
      )
    }
    return(
      <div>
          {outputClasses}
      </div>
    )
  }
}
