import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class SquareLabel extends Component {

  render(){
    const { value, displayValue, className } = this.props;
    let output;
    let classProp = "square-label ";
    if(displayValue){
      output = displayValue;
    }else{
      output = value;
    }
    if(className){
      classProp += className;
    }
    return(
      <div className={classProp} data-percent={value}>
        {output}
      </div>
    )
  }
}
