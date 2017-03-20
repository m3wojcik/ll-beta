import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../../actions/AppActions";
import { fetchClassDetails } from "../../actions/ClassDetailsActions";
import Content from '../../components/helpers/Content'
import ClassDetails from '../../components/classes/ClassDetails'
import Loader from '../../components/helpers/Loader'

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
    this.props.dispatch(fetchClassDetails(this.props.params.classId));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetched && !this.props.fetched){
      this.props.dispatch(setAppHeader(nextProps.classDetails.name));
    }
  }
  render(){
    const { classDetails ,fetched } = this.props;
    if(!fetched){
      return(
        <Loader full key="loader" />
      )
    }
    return(
      <Content noPadding>
        <ClassDetails classDetails={classDetails} />
      </Content>
    )
  }
}
