import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchClassTests } from "../../actions/ClassDetailsActions";
import Loader from './../../components/helpers/Loader'
import ClassTests from './../../components/tests/ClassTests'

@connect((store) => {
   return {
     classTests: store.classDetails.classTests
  };
})
export default class ClassTestsContainer extends Component {
  componentDidMount(){
    const { fetched, id } = this.props;
      this.props.dispatch(fetchClassTests(id));
  }
  handleSolveClick = (test) =>{
    this.props.dispatch(push('test/' + test.id));
  }
  render(){
    const { classTests, id } = this.props;

    if(classTests[id] && classTests[id].fetched){
      return(
        <ClassTests tests={classTests[id].tests} onSolveClick={this.handleSolveClick} boxTitle="Tests" />
        )
    }else{
      return(<Loader key="loader" centerPadding />)
    }
  }
}
