import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import FeedDate from './../wall/FeedDate'
const ClassItemSubheader =({classItem})=> {
  const output = [
    <li key="group">
      <FontIcon className="icon-green">event</FontIcon> 
       <span class="icon-green">{classItem.group}</span>
    </li>,
    <li key="bullet" className="bullet">
      <FontIcon>lens</FontIcon>
    </li>,
    <li key="timestamp" className="timestamp md-text--secondary">
      <FeedDate date={classItem.date + " " + classItem.time} />
    </li>,
    <li key="bullet2" className="bullet">
      <FontIcon>lens</FontIcon>
    </li>,
    <li key="time">
      <FontIcon className="md-text--secondary">alarm</FontIcon> 
      <span className="md-text--secondary">{classItem.length}</span>
    </li>
  ]
  return <ul className="class-item-subheader">{output}</ul>
}
export default ClassItemSubheader