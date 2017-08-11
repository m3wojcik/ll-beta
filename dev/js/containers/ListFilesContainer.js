import React, { Component } from 'react';
import { connect } from "react-redux";
import ListFiles from '../components/helpers/ListFiles'
import {BASE_URL} from "../middleware/api"

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class ListFilesContainer extends Component {

  handleClick = (file) =>{
    if(file.type == "directory"){
      this.props.dispatch(push("files/" + file.id));
    }else if (file.type =="file") {
      const fileId = file.id
      const accessToken = localStorage.getItem('access_token')
      const downloadString = BASE_URL + "fileDownload?access_token="+ accessToken +"&id="+fileId
      window.open(downloadString)
    }
  }
  render(){
    const { files } = this.props;
    console.log('files', files);
    return(
      <ListFiles files={files} onClick={this.handleClick} />
    )
  }
}
