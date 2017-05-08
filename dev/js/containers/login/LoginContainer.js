import React, { Component } from 'react';
import LoginFormContainer from './LoginFormContainer'
import ForgotPassFormContainer from './ForgotPassFormContainer'

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }
  handleForgotClick = () =>{
      console.log('forgot');
      this.setState({collapsed: false });
  }
  handleSignInClick  = () =>{
      console.log('back');
      this.setState({collapsed: true });
  }
  render(){
    const {collapsed} = this.state;
    let output = <LoginFormContainer onForgotClick={this.handleForgotClick} />
    if(!collapsed) output = <ForgotPassFormContainer onSignInClick={this.handleSignInClick} />
    return(
          <div className="login-page">
            <div className="login-page-left">
              <div className="login-page-content">
                {output}
              </div>
            </div>
            <div className="login-page-right"></div>
          </div>
    )
  }
}
