import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Subheader from 'react-md/lib/Subheaders';
import CustomCardTitle from './CustomCardTitle';
import FileTypeIcon from './FileTypeIcon';

export default class Files extends Component {
  render(){
    const {path, files, goUpBtn, onBackClick, onClick} = this.props;
    const backId = path.length > 1 ? path[path.length - 2].id : null;
    let fileHeader = false;
    let mappedFiles= [];
    if(goUpBtn && path.length > 1){
      mappedFiles.push(<ListItem key="back-btn" onClick={onBackClick.bind(this, backId)} leftIcon={<FontIcon>keyboard_return</FontIcon>} primaryText=". . ." />)
    }
    files.forEach(function(file, i){
      if(file.type != 'folder' && !fileHeader){
        fileHeader = true;
        mappedFiles.push(<Subheader key="files" primaryText="Files" className="text-uppercase" />)
      }
       mappedFiles.push(
         <ListItem
           key={file.id}
           onClick={onClick.bind(this, file)}
           leftIcon={file.type == 'folder' ? <FontIcon>folder</FontIcon> : <FileTypeIcon ext={file.extension} />}
           secondaryText={file.type == 'folder' ? "" : file.size}
           primaryText={file.type == 'folder' ? file.name : file.name + '.' + file.extension} />
       )
    })
    return(
      <List className="list-nopadding list-white list-dividers list-big file-list">
      {mappedFiles}
      </List>

    )
  }
}
