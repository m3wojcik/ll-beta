import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setHasTabs, setAppHeader } from "../actions/AppActions";
import { fetchViewTest } from "../actions/TestViewActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import TestView from '../components/TestView';



import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import SquareLabel from '../components/helpers/SquareLabel';

@connect((store) => {
   return {
     routing: store.routing,
     test: store.testView.test,
     fetched: store.testView.fetched,
     fetching: store.testView.fetching
  };
})
export default class TestViewContainer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchViewTest(this.props.params.testId));
    this.props.dispatch(setHasTabs(true));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetched !=this.props.fetched){
      this.props.dispatch(setAppHeader(nextProps.test.name));
    }
  }
  render(){
    const { fetched, test } = this.props;

    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return <TestView test={test} />
  }
}
