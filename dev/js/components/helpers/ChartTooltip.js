import React, { Component } from 'react';

export default class ChartTooltip extends Component {

  render(){
    const { tip, show, position } = this.props;
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
}
ChartTooltip.propTypes = {
  tip: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
}
