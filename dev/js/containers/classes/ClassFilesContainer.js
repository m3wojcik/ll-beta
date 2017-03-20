import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchClassFiles } from "../../actions/ClassDetailsActions";
import DashboardFiles from '../../components/dashboard/DashboardFiles'

@connect((store) => {
   return {
     classFiles: store.classDetails.classFiles.files,
     path: store.classDetails.classFiles.path,
     fetched: store.classDetails.classFiles.fetched,
     fetching: store.classDetails.classFiles.fetching
  };
})
export default class ClassFilesContainer extends Component {

  componentDidMount(){
    const { fetched, id } = this.props;
    if(!fetched){
      this.props.dispatch(fetchClassFiles(id));
    }
  }
  handleFileClick = (file) =>{
    if(file.type == "folder"){
      this.props.dispatch(push("files/" + file.id));
    }else if (file.type =="file") {

    }
  }
  render(){
    const { fetched, fetching, classFiles, path } = this.props;
    return(
      <DashboardFiles
        boxTitle="Files"
        fetched={fetched}
        files={classFiles}
        path={path}
        onClick={this.handleFileClick}
        />
      )
  }
}
