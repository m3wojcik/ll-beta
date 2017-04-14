import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from '../../components/login/LoginForm'
import ErrorMessage from '../../components/helpers/ErrorMessage'
import {loginUser} from '../../actions/index'

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
        <ErrorMessage error={error} />
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
