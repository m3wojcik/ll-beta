import React from 'react';
import { Link } from 'react-router';

const CustomTabs = ({tabs}) => {

    const mappedTabs = tabs.map(
      (tab, i) =>
      tab.active ?
      <Link key={i} to={tab.link} className="selected">{tab.icon}{tab.label}</Link>
      :
      <Link key={i} to={tab.link} >{tab.icon}{tab.label}</Link>
    )
    return(
      <div className="custom-tabs">
        {mappedTabs}
      </div>
    )
}
export default CustomTabs