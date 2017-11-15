import React, { Component } from 'react';
import {Legend} from 'react-easy-chart';
import { dynamicSort } from "../../actions/Functions";
import CircleProgressBar from '../helpers/CircleProgressBar';
import ChartContainer from '../helpers/ChartContainer';
import BarChartWrapper from '../helpers/BarChartWrapper';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  yourScore: {
    id: 'marksClassByColumn.yourScore',
    defaultMessage: 'Your score'
  },
  others: {
    id: 'marksClassByColumn.others',
    defaultMessage: 'Others'
  },
  classAverage: {
    id: 'marksClassByColumn.classAverage',
    defaultMessage: 'Class average'
  }
})

const MarksClassByColumn = ({ intl, marks, gradeType, title, weight, userValue }) =>{
    const sortedMarks = marks.sort(dynamicSort("value"))
    const legend = [
      {key: intl.formatMessage(messages.yourScore), value:1},
      {key: intl.formatMessage(messages.others), value:2},
      {key: intl.formatMessage(messages.classAverage), value:3}
    ];
    const legendConfig = [
      {color: '#2185D0'},
      {color: '#eceff1'},
      {color: '#21BA45'}
    ];
    const mappedMarks = [], lineData = [];
    let yRange = [0,100], average = 0, averageNum = 0, averageDen = 0, averageLabel, findUser = false, myValue;
    if(gradeType!="percent") yRange = [0,6]
    sortedMarks.map(function(mark , i){
      let status, displayLabel;
      if(userValue) myValue = userValue
      else myValue = mark.my
      if(gradeType=="percent") displayLabel = mark.value.toFixed()+"%"
      else{
        if(mark.displayValue){
          displayLabel = mark.displayValue
        }else displayLabel = mark.value.toString()
      }
      if(myValue && !findUser){
        findUser = true;
        status = {x: i, y: mark.value, color: "#2185D0", label: displayLabel}
      }else{
        status = {x: i, y: mark.value, color: "#eceff1", label:""}
      }
      averageNum += mark.value
      averageDen++
      mappedMarks.push(status)
    }.bind(this));

    average = averageNum / averageDen
    if(gradeType=="percent"){
      averageLabel = average.toFixed() + "%";
    }else {
      averageLabel = average.toFixed();
    }
    mappedMarks.push({x: marks.length, y: average, color: "#21BA45", label: averageLabel})

    return(
      <ChartContainer title={title}>
        <BarChartWrapper
          label
          margin={{top: 0, right: 0, bottom: 0, left: 0}}
          height={150}
          yDomainRange={yRange}
          data={mappedMarks}
        />
      <Legend data={legend} dataId={'key'} horizontal config={legendConfig}  />
      </ChartContainer>
    )
}
MarksClassByColumn.propTypes = {
  marks: React.PropTypes.array.isRequired,
  gradeType: React.PropTypes.string
}
export default injectIntl(MarksClassByColumn)