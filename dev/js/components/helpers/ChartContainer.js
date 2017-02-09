import React, { Component } from 'react';

export default class ChartContainer extends Component {

  render(){
    const { title } = this.props;
    let chartTitle;
    if(title){
      chartTitle = <div className="chart-title">{title}</div>
    }
    return(
      <div className="chart-container">
        {chartTitle}
        <div className="chart">
          {this.props.children}
        </div>
      </div>
    )
  }
}
ChartContainer.propTypes = {
  title: React.PropTypes.string
}
