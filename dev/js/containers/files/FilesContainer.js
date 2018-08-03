import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchFiles } from "../../actions/FilesActions";
import {getParamFromPath, getCleanPath} from '../../actions/Functions'
import {BASE_URL} from "../../middleware/api"
import Loader from '../../components/helpers/Loader'
import Files from '../../components/files/Files'
import Breadcrumbs from '../../components/Breadcrumbs'
import Content from '../../components/helpers/Content'


@connect((store) => {
   return {
     routing: store.routing,
     toolbar: store.app.toolbar,
     path: store.files.path,
     files: store.files.files,
     currentFolderId : store.files.currentFolderId,
     fetched: store.files.fetched,
     fetching: store.files.fetching
  };
})
export default class FilesContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchFiles({parent_path_id: this.props.params.fileId}));
  }
  componentWillReceiveProps(nextProps){
     let currentPath = getCleanPath(this.props.routing.locationBeforeTransitions.pathname);
     let nextPath = nextProps.routing.locationBeforeTransitions.pathname;
     let fileId = getParamFromPath(nextPath);
     nextPath = nextPath.replace(/^\/|\/$/g, '');
    if(currentPath != nextPath){
       this.props.dispatch(fetchFiles({parent_path_id: fileId}));
     }
  }
  handleClick = (file)=>{
    if(file.type == "directory"){
      this.props.dispatch(push("files/" + file.id));
    }else if (file.type =="file") {
      const fileId = file.id
      const accessToken = localStorage.getItem('access_token')
      const downloadString = BASE_URL + "fileDownload?access_token="+ accessToken +"&id="+fileId
      window.open(downloadString)
    }
  }
  handleBackClick = (folderId) =>{
    let path = folderId ? "files/" + folderId : "files"
    this.props.dispatch(push(path));
  }
  render(){
    const { fetched, path, files, currentFolderId, toolbar } = this.props;
    if(!fetched){
      return(
          <Loader full />
      )
    }
    return(
      <Content noPadding>
        <Breadcrumbs path={path} onClick={this.handleBackClick} />
        <div className="content-card">
          <Files
            files={files}
            path={path}
            searchValue={toolbar.searchValue}
            goUpBtn
            onBackClick={this.handleBackClick}
            onClick={this.handleClick} />
        </div>
      </Content>
    )
  }
}
