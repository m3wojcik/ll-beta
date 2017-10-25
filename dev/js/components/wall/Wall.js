import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import IconHeader from '../helpers/IconHeader';
import WeekDayIcon from './../helpers/WeekDayIcon';
import FontIcon from 'react-md/lib/FontIcons';
import MessageWall from './MessageWall';
import FileWall from './FileWall';
import TestWall from './TestWall';
import SurveyWall from './SurveyWall';
import MarkWall from './MarkWall';
import NewsWall from './NewsWall';
import DetailsWall from './DetailsWall'
import HomeworkWall from './HomeworkWall'
import AttendanceWall from './AttendanceWall'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Wall = ({ wall, fetched, onGoToClick, onDownloadClick }) => {
    let output = [], sortedClasses = [], tmpClass = null

    const mappedWall = wall.map(function(obj,i){
      switch(obj.type) {
        case "new_message":
          return (<MessageWall key={i} message={obj} onGoToClick={onGoToClick}  />)
        break;
        case "new_mark":
          return (<MarkWall key={i} mark={obj} />)
        break;
        case "new_file":
          return (<FileWall key={i} file={obj} onGoToClick={onGoToClick} onDownloadClick={onDownloadClick}/>)
        break;
        case "new_test":
          return (<TestWall key={i} test={obj} onGoToClick={onGoToClick}/>)
        break;
        case "new_survey":
          return (<SurveyWall key={i} survey={obj} onGoToClick={onGoToClick}/>)
        break;
        case "new_news":
          return (<NewsWall key={i} news={obj} />)
        break;
        case "new_attendance":
          return (<AttendanceWall key={i} att={obj} />)
        break;
        case "new_details":
          return (<DetailsWall key={i} details={obj} onGoToClick={onGoToClick}/>)
        break;
        case "new_homework":
          return (<HomeworkWall key={i} details={obj} onGoToClick={onGoToClick}/>)
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