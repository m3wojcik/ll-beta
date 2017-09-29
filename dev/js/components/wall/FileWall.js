import React from 'react';
import Button from 'react-md/lib/Buttons';
import FeedItem from './FeedItem';
import WallNotificationHeader from './WallNotificationHeader';
import Attachment from './../helpers/Attachment'
import ActionsRow from './../helpers/ActionsRow';
import FileSize from './../helpers/FileSize';
import FeedAvatar from './FeedAvatar';
import {BASE_URL} from "../../middleware/api"
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  addFile: {
    id: 'fileWall.addFile',
    defaultMessage: 'add file'
  },
  newFile: {
    id: 'fileWall.newFile',
    defaultMessage: 'New file'
  },
  download: {
    id: 'fileWall.download',
    defaultMessage: 'Download'
  }
})

const FileWall = ({intl, file}) =>{
  const handleDownloadClick = (attachmentId) =>{
    const accessToken = localStorage.getItem('access_token')
    const downloadString = BASE_URL + "/fileDownload?access_token="+ accessToken +"&id="+attachmentId
    window.open(downloadString)
  }
  const headerText = <span>{file.extra_data.owner} <span className="text-muted">{intl.formatMessage(messages.addFile)}</span></span>
  //TODO id pliku
  const bodyText = <span>{intl.formatMessage(messages.newFile)}: <span onClick={handleDownloadClick.bind(this, file.extra_data.file_id)} className="text-important">{file.extra_data.filename}.{file.extra_data.ext}</span> <span className="text-filesize"><FileSize size={file.extra_data.size} /></span></span>
  
    return(
      <FeedItem
        className={file.is_fetched ? "feed-file old" : "feed-file new"}
        header={headerText}
        iconLeft={<FeedAvatar name={file.extra_data.owner} />}
        subHeader={<WallNotificationHeader notification={file} />}
        body={bodyText}
        bottom={
          <ActionsRow>
            <Button onClick={handleDownloadClick.bind(this, file.extra_data.file_id)} primary flat>{intl.formatMessage(messages.download)}</Button>
          </ActionsRow>
        }
    />
    )
}
FileWall.propTypes = {
  file: React.PropTypes.object.isRequired
}
export default injectIntl(FileWall)