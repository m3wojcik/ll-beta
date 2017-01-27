import React, { Component } from 'react';
import Slider from 'react-md/lib/Sliders';

export default class RangeView extends Component {
  render(){
    const { value, onChangeValue, maxValue, minValue, label, id } = this.props;
    const range = maxValue - minValue;
    const defaultValue = value - minValue;
    return(
      <div className="question">
        <div className="question-text">{label}</div>
        <div className="range">
          <div className="range-slider">
            <Slider
              disabled
              defaultValue={defaultValue}
              max={range}
              id={"slider-" + id}
              />
          </div>
          <div className="range-value">
            {value}
          </div>
        </div>
      </div>
    )
  }
}
