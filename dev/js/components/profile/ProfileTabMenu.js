import React from 'react';
import CustomTabs from '../../components/helpers/CustomTabs';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  profile: {
    id: 'ProfileTabMenu.profile',
    defaultMessage: 'Profile'
  },
  editProfile: {
    id: 'ProfileTabMenu.editProfile',
    defaultMessage: 'Edit profile'
  },
  changePassword: {
    id: 'ProfileTabMenu.changePassword',
    defaultMessage: 'Change password'
  },
  loginHistory: {
    id: 'ProfileTabMenu.loginHistory',
    defaultMessage: 'Login history'
  },
  studentHistory: {
    id: 'ProfileTabMenu.studentHistory',
    defaultMessage: 'Student history'
  }   
})

const ProfileTabMenu = ({intl,activeIndex}) => {
  var tabs = [
    {"label": intl.formatMessage(messages.profile), "link": "profile", "active": activeIndex == 0 ? true : false},
    {"label": intl.formatMessage(messages.editProfile), "link": "profile/edit", "active": activeIndex == 1 ? true : false},
    {"label": intl.formatMessage(messages.changePassword), "link": "profile/changePassword", "active": activeIndex == 2 ? true : false},
    {"label": intl.formatMessage(messages.loginHistory), "link": "profile/loginHistory", "active": activeIndex == 3 ? true : false},
    {"label": intl.formatMessage(messages.studentHistory), "link": "profile/studentHistory", "active": activeIndex == 4 ? true : false}
  ]
    return(
      <CustomTabs tabs={tabs} />
    )
}
export default injectIntl(ProfileTabMenu)