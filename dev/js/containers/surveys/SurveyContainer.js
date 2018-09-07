import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { showSnack } from 'react-redux-snackbar'
import { setHasTabs, setAppHeader } from "../../actions/AppActions";
import { fetchSurvey, addSurveyAnswer, sendSurvey } from "../../actions/SurveysActions";
import Loader from '../../components/helpers/Loader'
import Survey from '../../components/surveys/Survey';
import TestInfo from '../../components/tests/TestInfo';
import ToolbarExpander from '../../components/helpers/ToolbarExpander';


@connect((store) => {
   return {
     routing: store.routing,
     survey: store.survey.survey,
     sendSurvey: store.survey.sendSurvey,
     userAnswers: store.survey.userAnswers,
     fetched: store.survey.fetched,
     fetching: store.survey.fetching
  };
})

export default class SurveyContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchSurvey({id: this.props.params.surveyId}));
  }
  componentWillReceiveProps(nextProps){
    const {sendSurvey} = this.props
    if(nextProps.fetched !=this.props.fetched){
      console.log(nextProps.survey.survey.name)
      this.props.dispatch(setAppHeader(nextProps.survey.survey.name));
    }
    if(!sendSurvey.saved && nextProps.sendSurvey.saved){
      this.props.dispatch(showSnack('survey_send', {label: 'Thank you for completing survey', timeout: 3000}));
      this.props.dispatch(push('surveys'));
    }
  }
  handleAnswerClick = (questionId, type, value) => {
    let answer, params;
    switch(type){
      case 'radio':
        answer = {element_id: value, type: type}
      break;
      case 'checkbox':
        answer = {element_id: value.substr(1), type: type}
      break;
      case 'open':
        answer = {element_id: questionId, data: value, type: type}
      break;
      case 'slider':
        answer = {element_id: questionId, data: value, type: type}
      break;
    }
    params = {
      questionId: questionId,
      data: answer
    }
    this.props.dispatch(addSurveyAnswer(params));
  }
  handleFinishSurvey = () => {
    const {userAnswers} = this.props
    let answersToSend = []  
    for(var prop in userAnswers){
      switch(userAnswers[prop].type){
        case "radio":
          answersToSend.push({element_id: userAnswers[prop].element_id})
        break;
        case "checkbox":
          if(userAnswers[prop].element_id){
            const splitAnswers = userAnswers[prop].element_id.split(",")
            splitAnswers.forEach(function(element) {
              answersToSend.push({element_id: element})
            }.bind(this));
          }
        break;
        case "open":
          answersToSend.push({element_id: userAnswers[prop].element_id, data: userAnswers[prop].data, element_type: "open"})
        break;
        case "slider":
          answersToSend.push({element_id: userAnswers[prop].element_id, data: userAnswers[prop].data, element_type: "slider"})
        break;
      }
    }
    let params ={
      id: this.props.params.surveyId,
      answers: answersToSend
    }
    console.log('finish', params)
    this.props.dispatch(sendSurvey(params));
  }
  render(){
    const { fetched, survey, userAnswers, sendSurvey } = this.props;
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
          <Survey survey={survey} userAnswers={userAnswers} saving={sendSurvey.saving} onFinishClick={this.handleFinishSurvey} onAnswerClick={this.handleAnswerClick} />
      </div>

    )
  }
}
