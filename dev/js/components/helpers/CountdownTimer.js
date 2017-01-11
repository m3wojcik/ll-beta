import React, { Component } from 'react';

export default class CountdownTimer extends Component {
  constructor(props){
    super(props);
    this.state = { secondsRemaining: 0 };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }
  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return(
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    )
  }
}
