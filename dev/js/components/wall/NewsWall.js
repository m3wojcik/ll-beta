import React from 'react';
import FeedItem from './FeedItem';
import FeedAttachments from './FeedAttachments';
import WallNotificationHeader from './WallNotificationHeader';
import ListHorizontal from './../helpers/ListHorizontal';
import FileSize from './../helpers/FileSize';
import FontIcon from 'react-md/lib/FontIcons';
import {BASE_URL} from "../../middleware/api"
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  secretaryAdd: {
    id: 'newsWall.secretaryAdd',
    defaultMessage: 'Secretary add news'
  },
  newStatus: {
    id: 'attendanceWall.newStatus',
    defaultMessage: 'New status'
  }
})

const NewsWall = ({intl, news}) =>{
  const handleDownloadClick = (attachmentId) =>{
    const accessToken = localStorage.getItem('access_token')
    const downloadString = BASE_URL + "/fileDownload?access_token="+ accessToken +"&id="+attachmentId
    window.open(downloadString)
  }

  const headerText = <span className="text-muted">{intl.formatMessage(messages.secretaryAdd)}</span>
  const attachments = news.extra_data.attachments ? <FeedAttachments onDownloadClick={handleDownloadClick} attachments={news.extra_data.attachments} /> : null
  const bodyText = <div><div className="feed-news-title">{news.extra_data.title}  </div><div className="feed-news-content"  dangerouslySetInnerHTML={{__html:news.extra_data.content}} />{attachments}</div>
  
  return(
    <FeedItem
      className={news.is_fetched ? "feed-news old" : "feed-news new"}
      header={headerText}
      subHeader={<WallNotificationHeader notification={news} />}
      body={bodyText}
  />
  )
}
NewsWall.propTypes = {
  news: React.PropTypes.object.isRequired
}
export default injectIntl(NewsWall)