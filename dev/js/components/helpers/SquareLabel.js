import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class SquareLabel extends Component {

  render(){
    const { value, displayValue } = this.props;
    let output;
    if(displayValue){
      output = displayValue;
    }else{
      output = value;
    }
    return(
      <div className="square-label" data-percent={value}>
        {output}
      </div>
    )
  }
}
