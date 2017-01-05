import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setAppSettings } from "../actions/AppActions";
import { fetchFiles } from "../actions/FilesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Files from '../components/Files'
import Breadcrumbs from '../components/Breadcrumbs'
import {getParamFromPath, getCleanPath} from '../actions/Functions'

@connect((store) => {
   return {
     routing: store.routing,
     path: store.files.path,
     files: store.files.files,
     currentFolderId : store.files.currentFolderId,
     fetched: store.files.fetched,
     fetching: store.files.fetching
  };
})
export default class FilesContainer extends Component {
  constructor(props){
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(setAppSettings({header:"Files", hasTabs: false}));
    this.props.dispatch(fetchFiles(this.props.params.fileId));
  }
  componentWillReceiveProps(nextProps){
     let currentPath = getCleanPath(this.props.routing.locationBeforeTransitions.pathname);
     let nextPath = nextProps.routing.locationBeforeTransitions.pathname;
     let fileId = getParamFromPath(nextPath);
     nextPath = nextPath.replace(/^\/|\/$/g, '');
    if(currentPath != nextPath){
       this.props.dispatch(fetchFiles(fileId));
     }
  }
  handleClick(file){
    if(file.type == "folder"){
      this.props.dispatch(push("files/" + file.id));
    }else if (file.type =="file") {

    }
  }
  handleBackClick(folderId){
    this.props.dispatch(push("files/" + folderId));
  }
  render(){
    const { fetched, path, files, currentFolderId } = this.props;
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content-no-padding">
        <Breadcrumbs path={path} onClick={this.handleBackClick} />
        <Files
          files={files}
          path={path}
          goUpBtn
          onBackClick={this.handleBackClick}
          onClick={this.handleClick} />
      </div>
    )
  }
}