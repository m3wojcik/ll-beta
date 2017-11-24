import React, { Component } from 'react';
import FakeFormControl from './../helpers/FakeFormControl';
import Avatar from './../helpers/Avatar'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';


const messages = defineMessages({
  firstName: {
    id: 'profile.firstName',
    defaultMessage: 'First name'
  },
  lastName: {
    id: 'profile.lastName',
    defaultMessage: 'Last Name'
  },
  login: {
    id: 'profile.login',
    defaultMessage: 'Login'
  },
  phone: {
    id: 'profile.phone',
    defaultMessage: 'Phone'
  },
  email: {
    id: 'profile.email',
    defaultMessage: 'E-mail'
  },
  avatar: {
    id: 'profile.avatar',
    defaultMessage: 'Avatar'
  }
  
})


const Profile = ({ intl, userData }) => {

    return(
      <div className="fake-form">
        <div className="md-grid">
          <div className="md-cell md-cell--6">
            <FakeFormControl label={intl.formatMessage(messages.firstName)} value={userData.firstname} />
            <FakeFormControl label={intl.formatMessage(messages.lastName)} value={userData.lastname} />
            <FakeFormControl label={intl.formatMessage(messages.login)} value={userData.login} />
            <FakeFormControl label={intl.formatMessage(messages.phone)} value={userData.phone} />
            <FakeFormControl label={intl.formatMessage(messages.email)} value={userData.email} />
          </div>
          <div className="md-cell md-cell--6">
            <FakeFormControl label={intl.formatMessage(messages.avatar)}
              value={<Avatar w={200} h={200} src={userData.avatar} />} />
          </div>
        </div>
      </div>
    )
}
export default injectIntl(Profile)