import React from 'react';
import Tooltip from './Tooltip'
const IconLabel = ({icon, text}) => {

    return(
      <div className="icon-label">
        <div className="icon-label-icon">
        <Tooltip tooltipLabel={text} tooltipPosition="top">{icon}</Tooltip>  
        </div>
        <div className="icon-label-text">
          {text}
        </div>
      </div>
    )
}
export default IconLabel