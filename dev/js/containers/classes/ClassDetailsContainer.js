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
    classDetails: store.classDetails.classDetails
  };
})
export default class ClassDetailsContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchClassDetails({id: this.props.params.classId}));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.classDetails[this.props.params.classId].name && !this.props.classDetails[this.props.params.classId].name){
      this.props.dispatch(setAppHeader(nextProps.classDetails[this.props.params.classId].name));
    }
  }
  render(){
    const { classDetails } = this.props;
    if(classDetails[this.props.params.classId] && classDetails[this.props.params.classId].fetched){
      return(
        <Content noPadding>
          <ClassDetails classDetails={classDetails[this.props.params.classId]} />
        </Content>
        )
    }else{
      return(<Loader full key="loader" />)
    }
  }
}
