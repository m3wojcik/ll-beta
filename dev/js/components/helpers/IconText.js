import React from 'react';

const IconText = ({icon, text}) => {

    return(
      <div className="icon-text">
        <div className="icon-text-icon">
          {icon}
        </div>
        <div className="icon-text-text">
          {text}
        </div>
      </div>
    )
}
export default IconText