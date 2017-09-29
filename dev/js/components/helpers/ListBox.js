import React from 'react';

const ListBox = ({header, headerIcon, className, children}) => {
  let cssClass = "md-list list-box "
  if(className) cssClass += className
    return(
      <ul key="list" className={cssClass}>
        <li className="md-list-header">
          <div className="header-icon">{headerIcon}</div>
          <div className="header-title">{header}</div>
        </li>
        {children}
      </ul>
    )
}

export default ListBox