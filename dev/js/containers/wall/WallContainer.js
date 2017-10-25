import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import {BASE_URL} from "../../middleware/api"
import { fetchWall, wallFetched } from "../../actions/WallActions";
import Wall from '../../components/wall/Wall'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     wall: store.wall.wall,
     fetched: store.wall.fetched,
     fetching: store.wall.fetching
  };
})
export default class WallContainer extends Component {
  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchWall());
    }
  }
  componentWillReceiveProps(nextProps){
    const {fetched} = this.props
    if(!fetched && nextProps.fetched){
      this.props.dispatch(wallFetched());
    }

  }
  handleGoToClick = (path) =>{
    this.props.dispatch(push(path))
  }
  handleDownloadClick = (attachmentId) =>{
    const accessToken = localStorage.getItem('access_token')
    const downloadString = BASE_URL + "/fileDownload?access_token="+ accessToken +"&id="+attachmentId
    window.open(downloadString)
  }
  render(){
    const { fetched, wall } = this.props;
    return(
      <Wall 
        fetched={fetched} 
        wall={wall} 
        onGoToClick={this.handleGoToClick}
        onViewLessonClick={this.handleViewLessonClick} 
        onDownloadClick={this.handleDownloadClick} 
        onSolveClick={this.handleSolveClick} 
        onFillClick={this.handleFillClick}
      />
      )
  }
}
