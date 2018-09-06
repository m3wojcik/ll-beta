import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons/Button';
import FakeFormControl from './../helpers/FakeFormControl';
import {RenderField} from './../helpers/RenderField'
import AvatarContainer from './../../containers/profile/AvatarContainer'
import {email} from './../helpers/Validate'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';


const messages = defineMessages({
  firstName: {
    id: 'editProfile.firstName',
    defaultMessage: 'First name'
  },
  lastName: {
    id: 'editProfile.lastName',
    defaultMessage: 'Last Name'
  },
  login: {
    id: 'editProfile.login',
    defaultMessage: 'Login'
  },
  phone: {
    id: 'editProfile.phone',
    defaultMessage: 'Phone'
  },
  email: {
    id: 'editProfile.email',
    defaultMessage: 'E-mail'
  },
  avatar: {
    id: 'editProfile.avatar',
    defaultMessage: 'Avatar'
  },
  changeAvatar: {
    id: 'editProfile.changeAvatar',
    defaultMessage: 'Change avatar'
  },
  save: {
    id: 'editProfile.save',
    defaultMessage: 'save'
  }
  
})

let EditProfile= ({ intl, userData, saveUserData, handleSubmit, onChangeAvatarClick }) => {
    let buttonProps = {
      raised: true,
      primary: true,
      type: "submit"
    }
    if(saveUserData.fetching){
      buttonProps.disabled = true
    }
    return(
      <div className="fake-form">
        <form className="ui form login-form" onSubmit={handleSubmit}>
          <div className="md-grid">
            <div className="md-cell md-cell--6">
              <FakeFormControl label={intl.formatMessage(messages.avatar)}
                value={<AvatarContainer w={200} h={200} id={userData.id} />} />
              <Button onClick={onChangeAvatarClick} raised >{intl.formatMessage(messages.changeAvatar)}</Button>
            </div>
            <div className="md-cell md-cell--6">
              <div className="field">
                <label>{intl.formatMessage(messages.login)}</label>
                <Field placeholder={intl.formatMessage(messages.login)} disabled name="login" component="input" type="text"/>
              </div>
              <div className="field">
                <label>{intl.formatMessage(messages.firstName)}</label>
                <Field placeholder={intl.formatMessage(messages.firstName)} disabled name="firstname" component="input" type="text"/>
              </div>
              <div className="field">
                <label>{intl.formatMessage(messages.lastName)}</label>
                <Field placeholder={intl.formatMessage(messages.lastName)} disabled name="lastname" component="input" type="text"/>
              </div>
              <div className="field">
                <label>{intl.formatMessage(messages.phone)}</label>
                <Field placeholder={intl.formatMessage(messages.phone)} name="phone" component="input" type="text"/>
              </div>
              <Field name="email" type="email"
                component={RenderField} label={intl.formatMessage(messages.email)}
                validate={email}
              />
            </div>
            
          </div>
          <div className="fake-form-actions">
            <Button {...buttonProps} >{intl.formatMessage(messages.save)}</Button>
          </div>
        </form>
      </div>
    )
}
EditProfile = reduxForm({
  form: 'EditProfile' // a unique name for this form
})(EditProfile);
// You have to connect() to any reducers that you wish to connect to yourself
EditProfile = connect(
  store => ({
    initialValues: store.profile.userData // pull initial values from account reducer
  })              // bind account loading action creator
)(EditProfile)

export default injectIntl(EditProfile);
