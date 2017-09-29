import React from 'react';
import FileSize from './../helpers/FileSize';
import AttachmentFileTypeIcon from './../helpers/AttachmentFileTypeIcon'

const Attachment = ({name, size, ext, onClick}) => {
    return(
      <div onClick={onClick} className="attachment">
        <AttachmentFileTypeIcon ext={ext} />
        <div className="attachment-content">
          <div className="attachment-name">{name+"."+ext}</div>
          <div className="attachment-filesize"><FileSize size={size} /></div>
        </div> 
      </div>
    )
}
Attachment.propTypes = {
  name: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
  ext: React.PropTypes.string.isRequired
}
export default Attachment