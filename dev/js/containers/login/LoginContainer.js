import React, { Component } from 'react';
import Collapse from 'react-md/lib/Helpers/Collapse';
import Content from '../../components/helpers/Content'
import LoginFormContainer from './LoginFormContainer'
import ForgotPassFormContainer from './ForgotPassFormContainer'

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }
  handleForgotClick = () =>{
      console.log('forgot');
      this.setState({collapsed: true });
  }
  handleSignInClick  = () =>{
      console.log('back');
      this.setState({collapsed: false });
  }
  render(){
      const {collapsed} = this.state;
    return(
      <Content>
        <Collapse collapsed={collapsed}>
           <LoginFormContainer onForgotClick={this.handleForgotClick} />
        </Collapse>
        <Collapse collapsed={!collapsed}>
            <ForgotPassFormContainer onSignInClick={this.handleSignInClick} />
        </Collapse>
      </Content>
    )
  }
}
