import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../actions/AppActions";
import { fetchClassDetails } from "../actions/ClassesActions";
import ClassDetails from '../components/ClassDetails'

@connect((store) => {
   return {
    routing: store.routing,
    page: store.app.page,
    classDetails: store.classes.classDetails,
    fetched: store.classes.fetched,
    fetching: store.classes.fetching
  };
})
export default class ClassDetailsContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchClassDetails(this.props.params.classId, function(){
      this.props.dispatch(setAppHeader(this.props.classDetails.name + ' id:' + this.props.params.classId));
    }.bind(this)));
  }
  render(){
    const { classDetails } = this.props;
    return(
      <div className="content">
        <ClassDetails clas={classDetails} />
      </div>
    )
  }
}
