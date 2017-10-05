import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import {BASE_URL} from "../../middleware/api"
import { fetchWall } from "../../actions/WallActions";
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
  handleViewLessonClick = (lessonId) =>{
    this.props.dispatch(push('classDetails/' + lessonId));
  }
  handleSolveClick = (testId) =>{
    this.props.dispatch(push('test/' + testId));
  }
  handleFillClick = (surveyId) =>{
    this.props.dispatch(push('survey/' + surveyId));
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
        onViewLessonClick={this.handleViewLessonClick} 
        onDownloadClick={this.handleDownloadClick} 
        onSolveClick={this.handleSolveClick} 
        onFillClick={this.handleFillClick}
      />
      )
  }
}
