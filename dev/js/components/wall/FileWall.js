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

const FileWall = ({intl, file, onViewLessonClick, onDownloadClick}) =>{
  
  
  let headerText;
  if(file.extra_data.lesson){
    headerText = <span>{file.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addFileToLesson)}</span> {file.extra_data.lesson.date}</span>
  }else{
    headerText = <span>{file.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addFile)}</span></span>
  }
  
  //TODO id pliku
  const bodyText = <span>{intl.formatMessage(messages.newFile)}: <span onClick={onDownloadClick.bind(this, file.extra_data.file_id)} className="text-important">{file.extra_data.filename}.{file.extra_data.ext}</span> <span className="text-filesize"><FileSize size={file.extra_data.size} /></span></span>
    console.log('file', file)
    return(
      <FeedItem
        className={file.is_fetched ? "feed-file old" : "feed-file new"}
        header={headerText}
        iconLeft={<FeedAvatar name={file.extra_data.owner} />}
        subHeader={<WallNotificationHeader notification={file} />}
        body={bodyText}
        expander={
          <ActionsRow>
            <Button onClick={onDownloadClick.bind(this, file.extra_data.file_id)} primary flat>{intl.formatMessage(messages.download)}</Button>
            {file.extra_data.lesson ? 
              <Button onClick={onViewLessonClick.bind(this, file.extra_data.lesson.id)} flat>{intl.formatMessage(messages.viewLesson)}</Button> : null
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