import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings } from "../actions/AppActions";
import { fetchTest } from "../actions/TestActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Test from '../components/Test';
import TestInfo from '../components/helpers/TestInfo';
import CountdownTimer from '../components/helpers/CountdownTimer';

@connect((store) => {
   return {
     routing: store.routing,
     test: store.test.test,
     fetched: store.test.fetched,
     fetching: store.test.fetching
  };
})
export default class TestContainer extends Component {

  componentDidMount(){
    this.props.dispatch(setAppSettings({header:"Tests", hasTabs: false}));
    this.props.dispatch(fetchTest(this.props.params.testId));
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
    return(
      <div className="content-no-padding">
        <div className="test-info">
          <CountdownTimer secondsRemaining={10} />
          <TestInfo test={test} />
        </div>
        <Test test={test} />
      </div>
    )
  }
}
