import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

const AttachmentFileTypeIcon = ({ext}) => {
  let icon;
  switch (ext) {
    case "jpg":
      icon = <div className="icon-teal"><FontIcon>photo</FontIcon></div>
      break;
    case "pdf":
      icon = <div className="icon-red"><FontIcon>picture_as_pdf</FontIcon></div>
      break;
    case "doc":
    case "docx":
      icon = <div className="icon-blue"><FontIcon>description</FontIcon></div>
      break;
    case "xls":
    case "xlsx":
      icon = <div className="icon-green"><FontIcon>poll</FontIcon></div>
      break;
    case "ppt":
    case "pps":
    case "pptx":
      icon = <div className="icon-orange"><FontIcon>burst_mode</FontIcon></div>
      break;
    case "mp3":
      icon = <div className="icon-orange"><FontIcon>library_music</FontIcon></div>
      break;
    case "mp4":
    case "avi":
    case "wmv":
      icon = <div className="icon-red"><FontIcon>movie</FontIcon></div>
      break;
    default:
      icon = <div className="icon-grey"><FontIcon>insert_drive_file</FontIcon></div>
  }
  return(
    <div className="attachment-icon">{icon}{ext}</div>
  )
}
export default AttachmentFileTypeIcon