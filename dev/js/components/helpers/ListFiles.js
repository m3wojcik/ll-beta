import React, { Component } from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import FileTypeIcon from '../files/FileTypeIcon';

export default class ListFiles extends Component {

  render(){
    const { files, onClick } = this.props;
    const imgFileTypes = ["jpg","png","gif","jpeg"];
    const mappedFiles = [];
    const mappedImages = [];
    files.forEach(function(file, i){
      if(imgFileTypes.indexOf(file.extension) > -1){
        mappedImages.push(
          <li key={file.id} className="md-list-item">
            <img src={file.src} role="presentation" className="img-responsive" />
          </li>
        )
      }else if(file.extension == "mp3"){
        mappedImages.push(
          <li key={file.id} className="md-list-item">
            <audio controls>
              <source src={file.src} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </li>
        )
      }else{
        mappedFiles.push(
          <ListItem
            key={file.id}
            onClick={onClick.bind(this, file)}
            leftIcon={file.type == 'folder' ? <FontIcon className="icon-yellow">folder</FontIcon> : <FileTypeIcon ext={file.extension} />}
            secondaryText={file.type == 'folder' ? "" : file.size}
            primaryText={file.type == 'folder' ? file.name : file.name + '.' + file.extension} />
        )
      }

    })
    return(
      <List className="list-nopadding list-white list-dividers list-big file-list">
        {mappedImages}
        {mappedFiles}
      </List>
    )
  }
}
