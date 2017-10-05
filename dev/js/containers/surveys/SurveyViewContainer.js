import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setHasTabs, setAppHeader } from "../../actions/AppActions";
import { fetchViewSurvey } from "../../actions/SurveysActions";
import Loader from '../../components/helpers/Loader'
import SurveyView from '../../components/surveys/SurveyView';
import TestInfo from '../../components/tests/TestInfo';
import ToolbarExpander from '../../components/helpers/ToolbarExpander';
import CountdownTimer from '../../components/helpers/CountdownTimer';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     routing: store.routing,
     survey: store.surveyView.survey,
     surveyAttempts: store.surveyView.surveyAttempts,
     fetched: store.surveyView.fetched,
     fetching: store.surveyView.fetching
  };
})

export default class SurveyViewContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchViewSurvey({id:this.props.params.surveyId}));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetched !=this.props.fetched){
      this.props.dispatch(setAppHeader(nextProps.survey.name));
    }
  }

  render(){
    const { fetched, survey, surveyAttempts } = this.props;
    if(!fetched){
      return <Loader full />
    }
    return(
      <Content noPadding expander>
        <ToolbarExpander
          left={<TestInfo test={survey} />}
        />
        <div className="expander-body">
          <SurveyView survey={survey} surveyAttempts={surveyAttempts} />
        </div>
      </Content>

    )
  }
}
