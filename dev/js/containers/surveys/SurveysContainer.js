import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchSurveys } from "../../actions/SurveysActions";
import { setAppSettings } from "../../actions/AppActions";
import Loader from '../../components/helpers/Loader'
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Surveys from '../../components/surveys/Surveys'
import Breadcrumbs from '../../components/Breadcrumbs'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     toolbar: store.app.toolbar,
     surveys: store.surveys.surveys,
     fetched: store.surveys.fetched,
     fetching: store.surveys.fetching
  };
})
export default class SurveysContainer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchSurveys());
  }
  handleSolveClick = (survey) =>{
    this.props.dispatch(setAppSettings({header:survey.name}));
    this.props.dispatch(push('survey/' + survey.id));
  }
  handleShowClick = (survey) => {
    this.props.dispatch(setAppSettings({header:survey.name}));
    this.props.dispatch(push('surveyview/' + survey.id));
  }
  render(){
    const { fetched, surveys,toolbar } = this.props;
    console.log('ankiety',surveys);
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
      <Content noPadding>
        <Surveys
          surveys={surveys}
          searchValue={toolbar.searchValue}
          onSolveClick={this.handleSolveClick}
          onShowClick={this.handleShowClick}
          />
      </Content>
    )
  }
}
