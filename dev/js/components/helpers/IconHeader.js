import React from 'react';

const IconHeader = ({header, icon, className}) => {
  let cssClass = "icon-header "
  if(className) cssClass += className
    return(
      <div className={cssClass}>
          <div className="header-icon">{icon}</div>
          <div className="header-title">{header}</div>
      </div>
    )
}

export default IconHeader