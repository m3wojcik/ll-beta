import React, { Component } from 'react';
import { connect } from "react-redux";
import { setHasTabs } from "../actions/AppActions";
import { fetchClassDetails } from "../actions/ClassDetailsActions";

import ClassDetails from '../components/ClassDetails'
import Loader from '../components/helpers/Loader'

@connect((store) => {
   return {
    routing: store.routing,
    classDetails: store.classDetails.classDetails,
    fetched: store.classDetails.fetched,
    fetching: store.classes.fetching
  };
})
export default class ClassDetailsContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setHasTabs(false));
    this.props.dispatch(fetchClassDetails(this.props.params.classId));
  }
  render(){
    const { classDetails ,fetched } = this.props;
    if(!fetched){
      return(
        <Loader center key="loader" />
      )
    }
    return(
      <div className="content-no-padding">
        <ClassDetails clas={classDetails} />
      </div>
    )
  }
}
