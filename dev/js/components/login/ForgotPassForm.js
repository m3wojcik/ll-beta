import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons/Button';

class ForgotPassForm extends Component {
  render(){
    const { handleSubmit, onSignInClick  } = this.props;
    return(
      <form className="ui form login-form" onSubmit={handleSubmit}>
        <div className="md-grid">
            <div className="md-cell md-cell--12">
              <div className="field">
                  <label htmlFor="login">E-mail</label>
                  <Field name="E-mail" component="input" type="text"/>
              </div>
            </div>
            <div className="md-cell md-cell--50">
                <a onClick={onSignInClick}>Sign in</a>
            </div>
            <div className="md-cell md-cell--50 text-right">
                <Button raised primary label="Send" type="submit" />
            </div>
        </div>
      </form>
    )
  }
}
// Decorate the form component
ForgotPassForm = reduxForm({
  form: 'ForgotPassForm' // a unique name for this form
})(ForgotPassForm);

export default ForgotPassForm;
