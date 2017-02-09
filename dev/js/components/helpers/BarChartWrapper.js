import React, { Component } from 'react';
import {BarChart} from 'react-easy-chart';
import Dimensions from 'react-dimensions';

class BarChartWrapper extends Component {

  render(){
    const {label, data} = this.props;
    let labelsData, labels;
    if(label){
      labelsData = data.map(
        (label,i) =>
        <div key={i}>{label.label}</div>
      )
      labels = <div class="chart-labels">{labelsData}</div>
    }
    return(
      <div className="bar-chart">
        <BarChart width={this.props.containerWidth} {...this.props}/>
        {labels}
      </div>

    )
  }
}
export default Dimensions()(BarChartWrapper)
