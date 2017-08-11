import React, { Component } from 'react';
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import Alert from '../helpers/Alert';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Files from '../files/Files'

export default class ClassFiles extends Component {

  render(){
    const { id, classFiles, onFileClick } = this.props;
    return(
      <Box
        className="no-flex no-padding"
        title="Files"
        titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {classFiles[id].files.length > 0 ?
          <Files
            files={classFiles[id].files}
            path={classFiles[id].path}
            onClick={onFileClick} /> :
          <Alert text="No files attached" type="transparent"/>
          }
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
ClassFiles.propTypes = {
  classFiles: React.PropTypes.object.isRequired
}
