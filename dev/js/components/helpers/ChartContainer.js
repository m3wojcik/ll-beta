import React from 'react';

const ChartContainer = ({children, title}) => {

    let chartTitle;
    if(title){
      chartTitle = <div className="chart-title">{title}</div>
    }
    return(
      <div className="chart-container">
        {chartTitle}
        <div className="chart">
          {children}
        </div>
      </div>
    )
}
ChartContainer.propTypes = {
  title: React.PropTypes.string
}
export default ChartContainer