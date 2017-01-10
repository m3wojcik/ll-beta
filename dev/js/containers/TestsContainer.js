import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setAppSettings } from "../actions/AppActions";
import { fetchTests } from "../actions/TestsActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Tests from '../components/Tests'
import Breadcrumbs from '../components/Breadcrumbs'
import {getParamFromPath, getCleanPath} from '../actions/Functions'

@connect((store) => {
   return {
     routing: store.routing,
     tests: store.tests.tests,
     fetched: store.tests.fetched,
     fetching: store.tests.fetching
  };
})
export default class FilesContainer extends Component {
  constructor(props){
    super(props);
    this.handleSolveClick = this.handleSolveClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
  }
  componentDidMount(){
    this.props.dispatch(setAppSettings({header:"Tests", hasTabs: false}));
    this.props.dispatch(fetchTests());
  }
  handleSolveClick(test){
    console.log('click', test.id);
  }
  handleShowClick(test){
    console.log('click', test.id);
  }
  render(){
    const { fetched, tests } = this.props;
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
        <Tests
          tests={tests}
          onSolveClick={this.handleSolveClick}
          onShowClick={this.handleShowClick} 
          />
      </div>
    )
  }
}
