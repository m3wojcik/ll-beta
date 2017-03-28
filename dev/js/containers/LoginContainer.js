import React, { Component } from 'react';
import { connect } from "react-redux";
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons/Button';
import Content from '../components/helpers/Content'
import ErrorMessage from '../components/helpers/ErrorMessage'
import {loginUser} from '../actions/index'


@connect((store) => {
  return {
    error: store.auth.error
  };
})

export default class LoginContainer extends Component {
  handleLoginClick = (event) =>{
      const login = this.login.getField().value;
      const password = this.password.getField().value;
      this.props.dispatch(loginUser(login,password));

  }
  render(){
    const { error } = this.props;

    return(
      <Content>
      <ErrorMessage error={error} />
      <TextField
        id="login"
        label="Login"
        ref={field => this.login = field}
        type="text"
        leftIcon={<FontIcon>phone</FontIcon>}
        className="md-cell md-cell--top"
      />
      <TextField
        id="password"
        label="Password"
        ref={field => this.password = field}
        type="password"
        leftIcon={<FontIcon>phone</FontIcon>}
        className="md-cell md-cell--top"
      />
      <Button raised primary label="Login" onClick={this.handleLoginClick} />
      </Content>
    )
  }
}
