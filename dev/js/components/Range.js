import React, { Component } from 'react';
import Slider from 'react-md/lib/Sliders';

export default class Range extends Component {
  render(){
    const { value, onChangeValue, maxValue, minValue, label, id } = this.props;
    const range = Number(maxValue) - Number(minValue);
    const displayValue = Number(value) + Number(minValue);
    return(
      <div className="question">
        <div className="question-text">{label}</div>
        <div className="range">
          <div className="range-slider">
            <Slider
              value={Number(value)}
              onChange={onChangeValue}
              max={range}
              id={"slider-" + id}
              />
          </div>
          <div className="range-value">
            {displayValue}
          </div>
        </div>
      </div>


    )
  }
}
