import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setHasTabs, setAppHeader } from "../actions/AppActions";
import { fetchViewSurvey } from "../actions/SurveyViewActions";
import Loader from '../components/helpers/Loader'
import SurveyView from '../components/SurveyView';
import TestInfo from '../components/helpers/TestInfo';
import ToolbarExpander from '../components/helpers/ToolbarExpander';
import CountdownTimer from '../components/helpers/CountdownTimer';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import Content from '../components/helpers/Content'

@connect((store) => {
   return {
     routing: store.routing,
     surveyView: store.surveyView.survey,
     fetched: store.surveyView.fetched,
     fetching: store.surveyView.fetching
  };
})

export default class SurveyViewContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchViewSurvey(this.props.params.surveyId));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetched !=this.props.fetched){
      this.props.dispatch(setAppHeader(nextProps.surveyView.name));
    }
  }

  render(){
    const { fetched, surveyView } = this.props;
    if(!fetched){
      return <Loader full />
    }
    return(
      <Content noPadding expander>
        <ToolbarExpander
          left={<TestInfo test={surveyView} />}
        />
        <div className="expander-body">
          <SurveyView survey={surveyView} />
        </div>
      </Content>

    )
  }
}
