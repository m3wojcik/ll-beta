import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setHasTabs, setAppHeader } from "../../actions/AppActions";
import { fetchSurvey } from "../../actions/SurveysActions";
import Loader from '../../components/helpers/Loader'
import Survey from '../../components/surveys/Survey';
import TestInfo from '../../components/tests/TestInfo';
import ToolbarExpander from '../../components/helpers/ToolbarExpander';
import CountdownTimer from '../../components/helpers/CountdownTimer';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';

@connect((store) => {
   return {
     routing: store.routing,
     survey: store.survey.survey,
     fetched: store.survey.fetched,
     fetching: store.survey.fetching
  };
})

export default class SurveyContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchSurvey({id: this.props.params.surveyId}));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetched !=this.props.fetched){
      console.log(nextProps.survey.survey.name)
      this.props.dispatch(setAppHeader(nextProps.survey.survey.name));
    }
  }
  handleFinishSurvey = () => {
    console.log('finish');
  }
  render(){
    const { fetched, survey } = this.props;
    if(!fetched){
      return <Loader full />
    }
    return(
      <div>
        <div className="pie-timer">
          <div className="mask"></div>
        </div>
        <ToolbarExpander
          left={<TestInfo test={survey.survey} />}
        />
          <Survey survey={survey} onFinishClick={this.handleFinishSurvey} />
      </div>

    )
  }
}
