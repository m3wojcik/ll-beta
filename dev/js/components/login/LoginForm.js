import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons/Button';

class LoginForm extends Component {
  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login</label>
          <Field name="login" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password"/>
        </div>
        <Button raised primary label="Login" type="submit" />
      </form>
    )
  }
}
// Decorate the form component
LoginForm = reduxForm({
  form: 'LoginForm' // a unique name for this form
})(LoginForm);

export default LoginForm;
