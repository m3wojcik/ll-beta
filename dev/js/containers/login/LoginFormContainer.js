import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from '../../components/login/LoginForm'
import {loginUser} from '../../actions/index'
import {errorMessage} from '../../actions/config'

@connect((store) => {
  return {
    error: store.auth.error
  };
})
export default class LoginFormContainer extends Component {
  handleSubmit = (values) =>{
    const login = values.login;
    const password = values.password;
    this.props.dispatch(loginUser(login,password));
  }
  render(){
    const { error } = this.props;
    return(
      <div>
        <span>{errorMessage[error]}</span>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
