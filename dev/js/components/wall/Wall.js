import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import IconHeader from '../helpers/IconHeader';
import WeekDayIcon from './../helpers/WeekDayIcon';
import FontIcon from 'react-md/lib/FontIcons';
import MessageWall from './MessageWall';
import FileWall from './FileWall';
import MarkWall from './MarkWall';
import NewsWall from './NewsWall';
import AttendanceWall from './AttendanceWall'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Wall = ({ wall, fetched }) => {
    let output = [], sortedClasses = [], tmpClass = null

    const mappedWall = wall.map(function(obj,i){
      switch(obj.type) {
        case "new_message":
          return (<MessageWall key={i} message={obj}  />)
        break;
        case "new_mark":
          return (<MarkWall key={i} mark={obj} />)
        break;
        case "new_file":
          return (<FileWall key={i} file={obj} />)
        break;
        case "new_news":
          return (<NewsWall key={i} news={obj} />)
        break;
        case "new_attendance":
          return (<AttendanceWall key={i} att={obj} />)
        break;
        
      }
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push( <div key="feed" className="feed">{mappedWall}</div>)
    }
    return(
      <div>
        <IconHeader header="Feed" icon={<FontIcon className="icon-blue">notifications</FontIcon>} />
        {output}
      </div>
    )
}
Wall.propTypes = {
  wall: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
export default Wall 