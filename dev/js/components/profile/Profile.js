import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons/Button';
import FakeFormControl from './../helpers/FakeFormControl';
import FieldInputEditable from './../helpers/FieldInputEditable'
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

let Profile= ({ intl, userData, saveUserData, handleSubmit, onBlur, onChangeAvatarClick }) => {
    let buttonProps = {
      raised: true,
      primary: true,
      type: "submit"
    }
    if(saveUserData.saving){
      buttonProps.disabled = true
    }
    return(
      <div className="fake-form">
        <form className="" onSubmit={handleSubmit}>
          <div className="md-grid">
            <div className="md-cell md-cell--6 ">
              <FakeFormControl label={intl.formatMessage(messages.avatar)}
                value={<AvatarContainer w={200} h={200} id={userData.id} />} />
                  <Button onClick={onChangeAvatarClick}  flat primary swapTheming >{intl.formatMessage(messages.changeAvatar)}</Button>
            </div>
            <div className="md-cell md-cell--6">
                <Field component={FieldInputEditable} placeholder={intl.formatMessage(messages.login)} disabled name="login" type="text"/>
                <Field component={FieldInputEditable} placeholder={intl.formatMessage(messages.firstName)} disabled name="firstname"type="text"/>
                <Field component={FieldInputEditable} placeholder={intl.formatMessage(messages.lastName)} disabled name="lastname" type="text"/>
                <Field onBlur={onBlur} component={FieldInputEditable} placeholder={intl.formatMessage(messages.phone)} name="phone" type="tel"/>
                <Field onBlur={onBlur} component={FieldInputEditable} placeholder={intl.formatMessage(messages.email)} name="email" type="email" validate={email}/>
            </div>
          </div>
          
        </form>
      </div>
    )
}
Profile = reduxForm({
  form: 'EditProfile', // a unique name for this form
  enableReinitialize: true
})(Profile);
// You have to connect() to any reducers that you wish to connect to yourself
Profile = connect(
  store => ({
    initialValues: store.profile.userData // pull initial values from account reducer
  })              // bind account loading action creator
)(Profile)

export default injectIntl(Profile);
