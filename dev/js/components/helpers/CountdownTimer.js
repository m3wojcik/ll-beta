import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
export default class CountdownTimer extends Component {
  constructor(props){
    super(props);
    this.state = { secondsRemaining: 0};
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.setState({
      secondsRemaining: this.props.secondsRemaining
    });
    this.interval = setInterval(this.tick, 1000);
  }
  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      this.props.onEndTime();
      clearInterval(this.interval);
    }
  }
  getDisplayTime(sec){
    var hours   = Math.floor(sec / 3600);
    var minutes = Math.floor((sec - (hours * 3600)) / 60);
    var seconds = sec - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    if(hours == "00" && minutes == "00"){
      return seconds;
    }else if (hours == "00") {
      return minutes+':'+seconds;
    }else{
      return hours+':'+minutes+':'+seconds;
    }

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    const {secondsRemaining} = this.state;
    const {totalTime, icon} = this.props;
    let percent = 0;
    let output = [];
    if(totalTime){
      percent = secondsRemaining / totalTime * 100;
    }
    if(icon){
      output.push(<FontIcon key="icon">timer</FontIcon>)
    }
    const displayTime = this.getDisplayTime(secondsRemaining)
    output.push(displayTime);
    return(
      <div className="countdown-timer" data-percent={percent}>{output}</div>
    )
  }
}
