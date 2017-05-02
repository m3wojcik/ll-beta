import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from '../../components/login/LoginForm'
import Divider from '../../components/helpers/Divider'
import Alert from '../../components/helpers/Alert'
import {loginUser} from '../../actions/index'
import {errorMessage} from '../../actions/config'

@connect((store) => {
  return {
    error: store.auth.error
  };
})
export default class LoginFormContainer extends Component {
  handleSubmit = (values) =>{
      console.log('login',values);
    const login = values.login;
    const password = values.password;
    this.props.dispatch(loginUser(login,password));
  }
  render(){
    const { error, onForgotClick } = this.props;
    return(
      <div>
        <Alert text={errorMessage[error]} type="danger" />
        <span>{errorMessage[error]}</span>
        <LoginForm onSubmit={this.handleSubmit} onForgotClick={onForgotClick} />
        <Divider text="or" />
      </div>
    )
  }
}
