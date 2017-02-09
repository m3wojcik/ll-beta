import React, { Component } from 'react';

import CircleProgressBar from '../helpers/CircleProgressBar';
import ChartContainer from '../helpers/ChartContainer';
import BarChartWrapper from '../helpers/BarChartWrapper';

export default class MarksClassByColumn extends Component {
  render(){
    const { marks, gradeType } = this.props;
    const mappedMarks = [];
    marks.map(function(mark , i){
      let status;
      // if(gradeType =="percent"){
      //   let percent = (mark.value / mark.maxValue) * 100;
      // }else{
      //
      // }
      if(mark.user){
        status = {x: i, y: mark.value, color: "#2185D0", label:"you"}
      }else{
        status = {x: i, y: mark.value, color: "#eceff1", label:""}
      }
      mappedMarks.push(status)
    });
    return(
      <ChartContainer title="Marks in class">
        <BarChartWrapper
          label
          margin={{top: 0, right: 0, bottom: 0, left: 0}}
          yTickNumber={6}
          height={150}
          data={mappedMarks}
        />
      </ChartContainer>
    )
  }
}
MarksClassByColumn.propTypes = {
  marks: React.PropTypes.array.isRequired,
  gradeType: React.PropTypes.string
}
