import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import FileTypeIcon from './FileTypeIcon';
import Subheader from 'react-md/lib/Subheaders';
import CustomCardTitle from './CustomCardTitle';


export default class Files extends Component {
  render(){
    const {path, files, filesHeader, goUpBtn, onBackClick, onClick, searchValue} = this.props;
    const backId = path && path.length > 1 ? path[path.length - 2].id : null;
    let fileHeader = false;
    let filesHeaderText = "Files"
    let search = "";
    if(searchValue){
      search = searchValue.toLowerCase();
    }
    if(filesHeader){
      filesHeaderText = filesHeader
    }
    let mappedFiles= [];
    if(goUpBtn && path){
      if(path.length > 1){
        mappedFiles.push(<ListItem key="back-btn" onClick={onBackClick.bind(this, backId)} leftIcon={<FontIcon>keyboard_return</FontIcon>} primaryText=". . ." />)
      }
    }
    files.forEach(function(file, i){
      let fileName = file.name.toLowerCase();
      if(file.type != 'folder' && !fileHeader){
        fileHeader = true;
        mappedFiles.push(<Subheader key="files" primaryText={filesHeaderText} className="text-uppercase" />)
      }
      if(fileName.indexOf(search) != -1){
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
        {mappedFiles}
        </List>

    )
  }
}
