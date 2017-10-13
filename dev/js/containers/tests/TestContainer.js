import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setHasTabs, setAppHeader } from "../../actions/AppActions";
import { fetchTest, addTestAnswer, sendTest } from "../../actions/TestsActions";
import Dialog from 'react-md/lib/Dialogs';
import qs  from "qs";
import Loader from '../../components/helpers/Loader'
import Test from '../../components/tests/Test';
import TestInfo from '../../components/tests/TestInfo';
import ToolbarExpander from '../../components/helpers/ToolbarExpander';
import CountdownTimer from '../../components/helpers/CountdownTimer';


@connect((store) => {
   return {
     routing: store.routing,
     test: store.test.test,
     userAnswers: store.test.userAnswers,
     pages: store.test.pages,
     fetched: store.test.fetched,
     fetching: store.test.fetching
  };
})

export default class TestContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dialogVisible: false, dialogTitle: "", dialogDescription: "", dialogActions:[]}
  }
  componentDidMount(){
    this.props.dispatch(fetchTest({id: this.props.params.testId}));
    //this.props.dispatch(setHasTabs(true));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.fetched !=this.props.fetched){
      this.props.dispatch(setAppHeader(nextProps.test.name));
    }
  }
  handleEndTime = () =>{
    //TODO Send Answers
    this.setState({
      dialogTitle: "Time's up! :(",
      dialogDescription: "Don't worry. Your answers will be sent automatically"
    });
    this.openDialog();
  }
  openDialog = () => {
    this.setState({ dialogVisible: true });
  }
  backToTests = () => {
    this.props.dispatch(push('tests'));
  }
  closeDialog = () => {
    this.setState({ dialogVisible: false });
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
      case 'fill_in':
        answer = {element_id: questionId, data: value, type: type}
      break;
    }
    params = {
      questionId: questionId,
      data: answer
    }
    this.props.dispatch(addTestAnswer(params))
  }

  handleFinishClick = () => {
    const {userAnswers} = this.props
    let answersToSend = []  
    for(var prop in userAnswers){
      switch(userAnswers[prop].type){
        case "radio":
          answersToSend.push({element_id: userAnswers[prop].element_id})
        break;
        case "checkbox":
          const splitAnswers = userAnswers[prop].element_id.split(",")
          splitAnswers.forEach(function(element) {
            answersToSend.push({element_id: element})
          }.bind(this));
        break;
        case "open":
          answersToSend.push({element_id: userAnswers[prop].element_id, data: userAnswers[prop].data})
        break;
        case "fill_in":
          answersToSend.push({element_id: userAnswers[prop].element_id, data: userAnswers[prop].data})
        break;
      }
    }
    let params ={
      id: this.props.params.testId,
      answers: answersToSend
    }
    //console.log(qs.stringify({...params}))
    this.props.dispatch(sendTest(params))
    console.log('finish', params)
    //TODO Send Answers
    // this.setState({
    //   dialogTitle: "Thank you",
    //   dialogDescription: "Thank you for completing the test"
    // });
    // this.openDialog();
  }

  render(){
    const { fetched, test, pages } = this.props;
    const { dialogVisible, dialogTitle, dialogDescription } = this.state;
    let toolbarRight = [];
    if(!fetched){
      return(
        <Loader full />
      )
    }else{
      if(test.duration != null && test.duration > 0){
        toolbarRight.push(<CountdownTimer key="timer" icon totalTime={test.duration} secondsRemaining={test.timeLeft} onEndTime={this.handleEndTime} />)
      }
    }
    return(
      <div>
        <div className="pie-timer">
          <div className="mask"></div>
        </div>
        <ToolbarExpander
          left={<TestInfo test={test} />}
          right={toolbarRight}
        />
          <Test test={test} pages={pages} onAnswerClick={this.handleAnswerClick} onFinishClick={this.handleFinishClick} />
        <Dialog
          id="testDialog"
          visible={this.state.dialogVisible}
          title={dialogTitle}
          onHide={this.closeDialog}
          aria-labelledby="testDialog"
          modal
          actions={[{
            onClick: this.backToTests,
            primary: true,
            label: 'Back to tests',
          }]}
        >
          <p className="md-color--secondary-text">
            {dialogDescription}
          </p>
        </Dialog>
      </div>

    )
  }
}
