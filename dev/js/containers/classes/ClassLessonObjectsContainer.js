import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchClassLessonObjects } from "../../actions/ClassDetailsActions";

import ClassLessonObjects from './../../components/classes/ClassLessonObjects'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     classId: store.classDetails.lessonObjects.classId,
     lessonObjects: store.classDetails.lessonObjects.objects,
     fetched: store.classDetails.lessonObjects.fetched,
     fetching: store.classDetails.lessonObjects.fetching
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
    const { fetched, fetching, lessonObjects } = this.props;
    return(
      <ClassLessonObjects fetched={fetched} lessonObjects={lessonObjects} />
      )
  }
}
