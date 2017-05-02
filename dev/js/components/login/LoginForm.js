import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons/Button';

class LoginForm extends Component {
  render(){
    const { handleSubmit, onForgotClick } = this.props;
    return(
      <form className="ui form login-form" onSubmit={handleSubmit}>
        <div className="md-grid">
            <div className="md-cell md-cell--12">
              <label htmlFor="login">Login</label>
              <Field name="login" component="input" type="text"/>
            </div>
            <div className="md-cell md-cell--12">
              <label htmlFor="password">Password</label>
              <Field name="password" component="input" type="password"/>
            </div>
            <div className="md-cell md-cell--50">
                <a onClick={onForgotClick}>Forgot password?</a>
            </div>
            <div className="md-cell md-cell--50 text-right">
                <Button raised primary label="Login" type="submit" />
            </div>
        </div>
      </form>
    )
  }
}
// Decorate the form component
LoginForm = reduxForm({
  form: 'LoginForm' // a unique name for this form
})(LoginForm);

export default LoginForm;
