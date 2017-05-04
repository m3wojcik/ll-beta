import React, { Component } from 'react';
import Collapse from 'react-md/lib/Helpers/Collapse';
import Content from '../../components/helpers/Content'
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
      <Content noPadding>
          <div className="login-page">
            <div className="login-page-left">{output}</div>
            <div className="login-page-right"></div>
          </div>

      </Content>
    )
  }
}
