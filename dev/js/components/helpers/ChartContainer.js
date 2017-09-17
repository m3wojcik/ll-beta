import React from 'react';

const ChartContainer = ({title}) => {

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
ChartContainer.propTypes = {
  title: React.PropTypes.string
}
export default ChartContainer