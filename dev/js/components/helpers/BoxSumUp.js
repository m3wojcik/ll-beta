import React from 'react';
import CircleProgressBar from './CircleProgressBar';

const BoxSumUp = ({ sumUp }) =>{
    const mappedSumUp = sumUp.map(function(obj,i){
      let circleProgres;
      if(obj.percent){
        circleProgres = <div className="box-sum-percent">
          <CircleProgressBar
            key="circleProgress"
            strokeWidth={6}
            size="small"
            color={obj.color}
            percentage={obj.percent}
            />
        </div>
      }
      return (
        <div className="box-sum" key={i}>
          {circleProgres}
          <div className="box-sum-right">
            <div className="box-sum-label">{obj.label}</div>
            <div className="box-sum-value">{obj.value}</div>
          </div>
        </div>
      )
    })
    return(
      <div className="box-footer">
        {mappedSumUp}
      </div>
    )
}
BoxSumUp.propTypes = {
  sumUp: React.PropTypes.oneOfType([
      React.PropTypes.array.isRequired,
      React.PropTypes.object.isRequired
    ])
}
export default BoxSumUp