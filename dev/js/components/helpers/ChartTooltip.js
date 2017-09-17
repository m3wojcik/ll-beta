import React from 'react';

const ChartTooltip = ( { tip, show, position }) => {

    let classProps = "chart-tooltip"
    if(show){
      classProps += " visible"
    }
    return(
      <div className={classProps} style={{left:position.x - 5,top:position.y - 25}}>
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
          {tip}
        </div>
      </div>
    )
}
ChartTooltip.propTypes = {
  tip: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
}
export default ChartTooltip