import React, { Component } from 'react';
import { connect } from "react-redux";
import { setHasTabs } from "../actions/AppActions";
import { fetchClassDetails } from "../actions/ClassesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ClassDetails from '../components/ClassDetails'

@connect((store) => {
   return {
    routing: store.routing,
    toolbar: store.app.toolbar,
    classes: store.classes.classes,
    classDetails: store.classes.classDetails,
    fetched: store.classes.fetched,
    fetching: store.classes.fetching
  };
})
export default class ClassDetailsContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setHasTabs(false));
    this.props.dispatch(fetchClassDetails());
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
