import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { setHasTabs, setAppHeader } from "../actions/AppActions";
import { fetchTest } from "../actions/TestActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Test from '../components/Test';
import TestInfo from '../components/helpers/TestInfo';
import ToolbarExpander from '../components/helpers/ToolbarExpander';
import CountdownTimer from '../components/helpers/CountdownTimer';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';

@connect((store) => {
   return {
     routing: store.routing,
     test: store.test.test,
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
    this.props.dispatch(fetchTest(this.props.params.testId));
    this.props.dispatch(setHasTabs(true));
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
  };
  backToTests = () => {
    this.props.dispatch(push('tests'));
  };
  closeDialog = () => {
    this.setState({ dialogVisible: false });
  };
  finishTest = () => {
    //TODO Send Answers
    this.setState({
      dialogTitle: "Thank you",
      dialogDescription: "Thank you for completing the test"
    });
    this.openDialog();
  }
  render(){
    const { fetched, test } = this.props;
    const { dialogVisible, dialogTitle, dialogDescription } = this.state;
    let toolbarRight = [];
    if(!fetched){
      return(
        <div className="content content-tabs">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }else{
      if(test.duration != null){
        toolbarRight.push(<CountdownTimer key="timer" icon totalTime={test.duration} secondsRemaining={test.timeLeft} onEndTime={this.handleEndTime} />)
      }
    }
    return(
      <div>
        <div className="pie-timer">
          <div className="mask"></div>
        </div>
        <ToolbarExpander
          left={<TestInfo  test={test} />}
          right={toolbarRight}
        />
        <div className="content-no-padding content-tabs">
          <Test test={test} />
          <div className="test-bottom">
            <Button raised primary label="Finish" onClick={this.finishTest}></Button>
          </div>
        </div>
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
