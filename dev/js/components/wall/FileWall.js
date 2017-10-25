import React from 'react';
import Button from 'react-md/lib/Buttons';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import Attachment from './../helpers/Attachment'
import ActionsRow from './../helpers/ActionsRow';
import FileSize from './../helpers/FileSize';
import FeedAvatar from './FeedAvatar';

import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  addFile: {
    id: 'fileWall.addFile',
    defaultMessage: 'add file'
  },
  addFileToLesson: {
    id: 'fileWall.addFileToLesson',
    defaultMessage: 'add file to lesson'
  },
  newFile: {
    id: 'fileWall.newFile',
    defaultMessage: 'New file'
  },
  download: {
    id: 'fileWall.download',
    defaultMessage: 'Download'
  },
  viewLesson: {
    id: 'fileWall.viewLesson',
    defaultMessage: 'View lesson'
  }
})

const FileWall = ({intl, file, onGoToClick, onDownloadClick}) =>{
  
  let onClickAction;
  if(file.extra_data.ext){
    onClickAction = {
      onClick: onDownloadClick.bind(this, file.extra_data.file_id)
    }
  }else{

    onClickAction = {
      onClick: onGoToClick.bind(this, 'files/'+file.extra_data.file_id)
    }
  }
  let headerText;
  if(file.extra_data.lesson){
    headerText = <span>{file.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addFileToLesson)}</span> {file.extra_data.lesson.date}</span>
  }else{
    headerText = <span>{file.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addFile)}</span></span>
  }
  const bodyText = <span>{intl.formatMessage(messages.newFile)}: <span {...onClickAction} className="text-important">{file.extra_data.filename}{file.extra_data.ext ? "." + file.extra_data.ext : null}</span> <span className="text-filesize">{file.extra_data.ext ? <FileSize size={file.extra_data.size} />: null}</span></span>
    return(
      <FeedItem
        className={file.is_fetched ? "feed-file old" : "feed-file new"}
        header={headerText}
        iconLeft={<FeedAvatar name={file.extra_data.owner} />}
        subHeader={<WallNotificationHeader notification={file} />}
        body={bodyText}
        expander={
          <ActionsRow>
            <Button {...onClickAction} primary flat>{intl.formatMessage(messages.download)}</Button>
            {file.extra_data.lesson ? 
              <Button onClick={onGoToClick.bind(this, 'classDetails/'+file.extra_data.lesson.id)} flat>{intl.formatMessage(messages.viewLesson)}</Button> : null
            }
          </ActionsRow>
        }
    />
    )
}
FileWall.propTypes = {
  file: React.PropTypes.object.isRequired
}
export default injectIntl(FileWall)