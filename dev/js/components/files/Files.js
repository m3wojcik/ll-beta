import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import FileTypeIcon from './FileTypeIcon';
import Subheader from 'react-md/lib/Subheaders';
import CustomCardTitle from './../CustomCardTitle';
import { humanFileSize } from '../../actions/Functions';


export default class Files extends Component {
  render(){
    const {path, files, filesHeader, goUpBtn, onBackClick, onClick, searchValue} = this.props;
    const backId = path && path.length > 1 ? path[path.length - 2].id : null;
    let fileHeader = false;
    let filesHeaderText = <FormattedMessage 
        id="files.files"
        defaultMessage="Files"
      />
    let search = "";
    if(searchValue){
      search = searchValue.toLowerCase();
    }
    if(filesHeader){
      filesHeaderText = filesHeader
    }
    let mappedFiles= [];
    if(goUpBtn && path){
      if(path.length > 0){
        mappedFiles.push(<ListItem key="back-btn" onClick={onBackClick.bind(this, backId)} leftIcon={<FontIcon>keyboard_return</FontIcon>} primaryText=". . ." />)
      }
    }
    files.forEach(function(file, i){
      let fileName = file.name.toLowerCase();
      if(file.type != 'directory' && !fileHeader){
        fileHeader = true;
        mappedFiles.push(<Subheader key="files" primaryText={filesHeaderText} className="text-uppercase" />)
      }
      if(fileName.indexOf(search) != -1){
         mappedFiles.push(
           <ListItem
             key={file.id}
             onClick={onClick.bind(this, file)}
             leftIcon={file.type == 'directory' ? <FontIcon className="icon-yellow">folder</FontIcon> : <FileTypeIcon ext={file.extension} />}
             secondaryText={file.type == 'directory' ? "" : humanFileSize(file.size)}
             primaryText={file.type == 'directory' ? file.name : file.name + '.' + file.extension} />
         )
       }
    })
    return(

        <List className="list-nopadding list-white list-dividers list-big file-list">
        {mappedFiles}
        </List>

    )
  }
}
