import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextField from 'react-md/lib/TextFields';
import UserPhoto from './../helpers/UserPhoto';
import Button from 'react-md/lib/Buttons/Button';
import FakeFormControl from './../helpers/FakeFormControl';
import {RenderField} from './../helpers/RenderField'
import Avatar from './../helpers/Avatar'
import {email} from './../helpers/Validate'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';


const messages = defineMessages({
  oldPass: {
    id: 'changePassword.oldPass',
    defaultMessage: 'Old password'
  },
  newPass: {
    id: 'changePassword.newPass',
    defaultMessage: 'New password'
  },
  newPass2: {
    id: 'changePassword.newPass2',
    defaultMessage: 'Confirm new password'
  },
  save: {
    id: 'changePassword.save',
    defaultMessage: 'save'
  }
  
})

let ChangePassword= ({ intl, changePassword, handleSubmit }) => {
    let buttonProps = {
      raised: true,
      primary: true,
      type: "submit"
    }
    if(changePassword.fetching){
      buttonProps.disabled = true
    }
    return(
      <div className="fake-form">
        <form className="ui form login-form" onSubmit={handleSubmit}>
          <div className="md-grid">
            <div className="md-cell md-cell--6">
              <div className="field">
                <label>{intl.formatMessage(messages.oldPass)}</label>
                <Field placeholder={intl.formatMessage(messages.oldPass)} name="oldPass" component="input" type="password"/>
              </div>
              <div className="field">
                <label>{intl.formatMessage(messages.newPass)}</label>
                <Field placeholder={intl.formatMessage(messages.newPass)} name="newPass" component="input" type="password"/>
              </div>
              <div className="field">
                <label>{intl.formatMessage(messages.newPass2)}</label>
                <Field placeholder={intl.formatMessage(messages.newPass2)} name="newPass2" component="input" type="password"/>
              </div>
            </div>
          </div>
          <div className="fake-form-actions">
            <Button {...buttonProps} >{intl.formatMessage(messages.save)}</Button>
          </div>
        </form>
      </div>
    )
}
ChangePassword = reduxForm({
  form: 'ChangePassword' // a unique name for this form
})(ChangePassword);
// You have to connect() to any reducers that you wish to connect to yourself
ChangePassword = connect(
  store => ({
    initialValues: store.profile.changePassword // pull initial values from account reducer
  })              // bind account loading action creator
)(ChangePassword)

export default injectIntl(ChangePassword);
