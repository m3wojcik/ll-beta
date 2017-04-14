import React, { Component } from 'react';
import Content from '../../components/helpers/Content'
import LoginFormContainer from './LoginFormContainer'

export default class LoginContainer extends Component {
  render(){
    return(
      <Content>
        <LoginFormContainer />
      </Content>
    )
  }
}
