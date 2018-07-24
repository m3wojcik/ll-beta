import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';

class LoginForm extends Component {
  render(){
    const { handleSubmit, onForgotClick } = this.props;
    return(
      <form className="ui form login-form" onSubmit={handleSubmit}>
        <div className="md-grid md-grid-no-padding md-grid-cell-no-padding">
            <div className="md-cell md-cell--12">
              <div className="field">
                <div className="input-group">
                  <div className="input-group-addon"><FontIcon>person</FontIcon></div>
                  <Field placeholder="Login" name="login" component="input" type="text"/>
                </div>
              </div>
            </div>
            <div className="md-cell md-cell--12">
              <div className="field">
                <div className="input-group">
                  <div className="input-group-addon"><FontIcon>lock</FontIcon></div>
                  <Field placeholder="Password" name="password" component="input" type="password"/>
                </div>
              </div>
            </div>
            <div className="md-cell md-cell--50">
                <a href="javascript:void(0)" onClick={onForgotClick}>Forgot password?</a>
            </div>
            <div className="md-cell md-cell--50 text-right">
                <Button raised primary type="submit">Login</Button>
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
