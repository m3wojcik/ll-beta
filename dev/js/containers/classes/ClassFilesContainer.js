import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import Loader from './../../components/helpers/Loader'
import { fetchClassFiles } from "../../actions/ClassDetailsActions";
import ClassFiles from '../../components/classes/ClassFiles'

@connect((store) => {
   return {
     classFiles: store.classDetails.classFiles
  };
})
export default class ClassFilesContainer extends Component {

  componentDidMount(){
    const { fetched, id } = this.props;
    if(!fetched){
      this.props.dispatch(fetchClassFiles({lesson_id: id}));
    }
  }
  handleFileClick = (file) =>{
    if(file.type == "folder"){
      this.props.dispatch(push("files/" + file.id));
    }else if (file.type =="file") {

    }
  }
  render(){
    const { id, classFiles } = this.props;

    if(classFiles[id] && classFiles[id].fetched){
      return(
        <ClassFiles
          id={id}
          classFiles={classFiles}
          onFileClick={this.handleFileClick}
          />
        )
    }else{
      return(<Loader key="loader" centerPadding />)
    }
  }
}
