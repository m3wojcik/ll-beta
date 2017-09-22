import React from 'react';

const SquareLabel = ({ value, displayValue, className }) => {

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
export default SquareLabel