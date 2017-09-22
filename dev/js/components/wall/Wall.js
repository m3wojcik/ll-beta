import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import WeekDayIcon from './../helpers/WeekDayIcon';
import FontIcon from 'react-md/lib/FontIcons';
import MessageWall from './MessageWall';
import FileWall from './FileWall';
import MarkWall from './MarkWall';
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
        
      }
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(
        <ul key="list" className="md-list md-list-divider">
          {mappedWall}
        </ul>
      )
    }

    return(
      <Box
        className="no-flex no-padding"
        title="Feed"
        titleIcon={<FontIcon className="icon-blue">notifications</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
}
Wall.propTypes = {
  wall: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
export default Wall 