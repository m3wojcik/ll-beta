import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
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
        title={<FormattedMessage 
          id="classFilles.files"
          defaultMessage="Files"
        />}
        titleIcon={<FontIcon className="icon-orange">folder</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {classFiles[id].files.length > 0 ?
          <Files
            files={classFiles[id].files}
            path={classFiles[id].path}
            onClick={onFileClick} /> :
          <Alert text={<FormattedMessage 
            id="classFilles.noFiles"
            defaultMessage="No files attached"
          />} type="transparent"/>
          }
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
ClassFiles.propTypes = {
  classFiles: React.PropTypes.object.isRequired
}
