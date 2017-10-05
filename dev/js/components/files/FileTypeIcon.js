import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

const FileTypeIcon = ({ext}) => {
  let icon;
  switch (ext) {
    case "jpg":
    case "png":
      icon = <FontIcon className="icon-red">photo</FontIcon>
      break;
    case "pdf":
      icon = <FontIcon className="icon-red">picture_as_pdf</FontIcon>
      break;
    case "doc":
    case "docx":
      icon = <FontIcon className="icon-blue">description</FontIcon>
      break;
    case "xls":
    case "xlsx":
      icon = <FontIcon className="icon-green">poll</FontIcon>
      break;
    case "ppt":
    case "pps":
    case "pptx":
      icon = <FontIcon className="icon-orange">burst_mode</FontIcon>
      break;
    case "mp3":
      icon = <FontIcon className="icon-orange">library_music</FontIcon>
      break;
    case "mp4":
    case "avi":
    case "wmv":
      icon = <FontIcon className="icon-red">movie</FontIcon>
      break;
    default:
      icon = <FontIcon className="icon-grey">insert_drive_file</FontIcon>
  }
  return(
    <div>{icon}</div>
  )
}
export default FileTypeIcon