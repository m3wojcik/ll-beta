import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchClassLessonObjects } from "../../actions/ClassDetailsActions";
import Loader from './../../components/helpers/Loader'
import ClassLessonObjects from './../../components/classes/ClassLessonObjects'

@connect((store) => {
   return {
     lessonObjects: store.classDetails.lessonObjects
  };
})
export default class ClassLessonObjectsContainer extends Component {

  componentDidMount(){
    const { fetched, id } = this.props;
    if(!fetched){
      this.props.dispatch(fetchClassLessonObjects(id));
    }
  }

  render(){
    const { id, lessonObjects } = this.props;
    if(lessonObjects[id] && lessonObjects[id].fetched){
      return(
        <ClassLessonObjects id={id} lessonObjects={lessonObjects} />
        )
    }else{
      return(<Loader key="loader" centerPadding />)
    }
  }
}
