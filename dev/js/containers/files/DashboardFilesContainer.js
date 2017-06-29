import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardFiles } from "../../actions/DashboardFilesActions";

import DashboardFiles from '../../components/files/DashboardFiles'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     files: store.dashboardFiles.files,
     path: store.dashboardFiles.path,
     currentFolderId : store.dashboardFiles.currentFolderId,
     fetched: store.dashboardFiles.fetched,
     fetching: store.dashboardFiles.fetching
  };
})
export default class DashboardFilesContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardFiles());
    }
  }
  handleFileClick = (file) =>{
    if(file.type == "folder"){
      this.props.dispatch(push("files/" + file.id));
    }else if (file.type =="file") {

    }
  }
  render(){
    const { fetched, files, path } = this.props;
    return(
      <DashboardFiles
        boxTitle="New files"
        fetched={fetched}
        files={files}
        path={path}
        onClick={this.handleFileClick}
        />
      )
  }
}
