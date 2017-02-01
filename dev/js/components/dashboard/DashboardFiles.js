import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Files from '../Files'
export default class DashboardFiles extends Component {

  render(){
    const { files, path, fetched, onClick } = this.props;
    let output = []

    if(fetched){
      output.push(
        <Files
          key="dashboard-files"
          files={files}
          path={path}
          onClick={onClick} />
      )
    }else{
      output.push(<Loader key="loader" centerPadding />)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="New files"
        titleIcon={<FontIcon className="icon-orange">folder</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
DashboardFiles.propTypes = {
  files: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
