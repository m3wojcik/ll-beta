import React from 'react';
import { Link } from 'react-router';

const CustomTabs = ({tabs}) => {

    const mappedTabs = tabs.map(
      (tab, i) =>
      tab.active ?
      <Link key={i} to={tab.link} className="selected">{tab.icon}<span className="tab-label">{tab.label}</span></Link>
      :
      <Link key={i} to={tab.link} >{tab.icon}<span className="tab-label">{tab.label}</span></Link>
    )
    return(
      <div className="custom-tabs">
        {mappedTabs}
      </div>
    )
}
export default CustomTabs