import React, { Component } from 'react';
import { connect } from "react-redux";
import ListFiles from '../components/helpers/ListFiles'

@connect((store) => {
   return {
     userAnswers: store.test.userAnswers,
  };
})
export default class ListFilesContainer extends Component {

  handleClick = () =>{

  }
  render(){
    const { files } = this.props;
    return(
      <ListFiles files={files} onClick={this.handleClick} />
    )
  }
}
