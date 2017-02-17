import React, { Component } from 'react';
import {AreaChart} from 'react-easy-chart';
import Dimensions from 'react-dimensions';
import ChartTooltip from './ChartTooltip'

class AreaChartWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { tooltipTip: "", showTooltip: false, tooltipPosition: {x: 0, y: 0}};
  }
  mouseOverHandler = (d, e) =>{
    this.setState({
      tooltipTip: d.y,
      showTooltip: true,
      tooltipPosition:{x: e.offsetX, y:e.offsetY}
    });
  }
  mouseOutHandler = () => {
    this.setState({ showTooltip: false });
  }
  render(){
    const {label, labelsData} = this.props;
    let labelsItems, labels;
    if(label){
      labelsItems = labelsData.map(
        (label,i) =>
        <div key={i}>{label.label}</div>
      )
      labels = <div class="chart-labels">{labelsItems}</div>
    }
    return(
      <div className="area-chart">
        <ChartTooltip position={this.state.tooltipPosition} tip={this.state.tooltipTip} show={this.state.showTooltip} />
        <AreaChart
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}
          width={this.props.containerWidth}
          {...this.props}/>
        {labels}
      </div>

    )
  }
}
export default Dimensions()(AreaChartWrapper)
