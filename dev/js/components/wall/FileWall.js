import React from 'react';
import CustomListItem from '../helpers/CustomListItem';
import WallNotificationHeader from './WallNotificationHeader';
import ListHorizontal from './../helpers/ListHorizontal';
import FileSize from './../helpers/FileSize';
import FontIcon from 'react-md/lib/FontIcons';

const FileWall = ({file}) =>{
  const secondaryTextElements = [
    <span>
      <FontIcon className="icon-grey">save</FontIcon>
      <FileSize size={file.extra_data.size} />
    </span>,
    <span>
      <FontIcon className="icon-grey">face</FontIcon>
      {file.extra_data.owner}
    </span>
  ]
  const primaryText = <span>{file.extra_data.owner +" add file "}<strong>{file.extra_data.filename+"."+file.extra_data.ext}</strong></span>
    return(
      <CustomListItem
        clickable
        header={<WallNotificationHeader notification={file} />}
        primaryText={primaryText}
        secondaryText={<ListHorizontal space="no-space" elements={secondaryTextElements} />}
        expander={<div>sadas</div>}
    />
    )
}
FileWall.propTypes = {
  file: React.PropTypes.object.isRequired
}
export default FileWall