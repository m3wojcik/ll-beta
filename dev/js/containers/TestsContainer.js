import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchTests } from "../actions/TestsActions";
import { setAppSettings } from "../actions/AppActions";
import Loader from '../components/helpers/Loader'
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Tests from '../components/Tests'
import Breadcrumbs from '../components/Breadcrumbs'
import Content from '../components/helpers/Content'
import {getParamFromPath, getCleanPath} from '../actions/Functions'

@connect((store) => {
   return {
     toolbar: store.app.toolbar,
     tests: store.tests.tests,
     fetched: store.tests.fetched,
     fetching: store.tests.fetching
  };
})
export default class TestsContainer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchTests());
  }
  handleSolveClick = (test) =>{
    this.props.dispatch(setAppSettings({header:test.name, hasTabs: true}));
    this.props.dispatch(push('test/' + test.id));
  }
  handleShowClick = (test) => {
    this.props.dispatch(setAppSettings({header:test.name, hasTabs: true}));
    this.props.dispatch(push('testview/' + test.id));
  }
  render(){
    const { fetched, tests,toolbar } = this.props;
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
      <Content noPadding>
        <Tests
          tests={tests}
          searchValue={toolbar.searchValue}
          onSolveClick={this.handleSolveClick}
          onShowClick={this.handleShowClick}
          />
      </Content>
    )
  }
}
