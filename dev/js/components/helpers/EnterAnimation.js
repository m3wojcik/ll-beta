import React, { Component } from 'react';

export default class EnterAnimation extends Component {
  constructor(props){
    super(props);
    this.state = { animationClass: ""};
  }
  componentDidMount() {
    const {transitionName} = this.props
    this.setState({
      animationClass: transitionName+"-enter"
    });
  }
  render(){
    const {transitionName, children} = this.props
    let transitionEnterTimeout = 500, transitionLeaveTimeout = 500
    return(
      <div className={this.state.animationClass}>
        {children}
      </div>
    )
  }
}
