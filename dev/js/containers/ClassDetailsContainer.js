import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings } from "../actions/AppActions";
import { fetchClassDetails } from "../actions/ClassDetailsActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ClassDetails from '../components/ClassDetails'

@connect((store) => {
   return {
    routing: store.routing,
    classDetails: store.classDetails.classDetails,
    fetched: store.classDetails.fetched,
    fetching: store.classDetails.fetching
  };
})
export default class ClassDetailsContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setAppSettings({hasTabs: false}));
    this.props.dispatch(fetchClassDetails(this.props.params.classId));
  }
  render(){
    const { classDetails ,fetched } = this.props;
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes-details" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
        <ClassDetails clas={classDetails} />
      </div>
    )
  }
}
