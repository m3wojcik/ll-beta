import React from 'react';
import CustomTabs from '../../components/helpers/CustomTabs';
import FontIcon from 'react-md/lib/FontIcons';
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
    {"label": intl.formatMessage(messages.profile), "icon": <FontIcon>person</FontIcon>, "link": "profile", "active": activeIndex == 0 ? true : false},
    {"label": intl.formatMessage(messages.changePassword), "icon": <FontIcon>vpn_key</FontIcon>, "link": "profile/changePassword", "active": activeIndex == 1 ? true : false},
    {"label": intl.formatMessage(messages.loginHistory), "icon": <FontIcon>how_to_reg</FontIcon>, "link": "profile/loginHistory", "active": activeIndex == 2 ? true : false},
    {"label": intl.formatMessage(messages.studentHistory), "icon": <FontIcon>history</FontIcon>, "link": "profile/studentHistory", "active": activeIndex == 3 ? true : false}
  ]
    return(
      <CustomTabs tabs={tabs} />
    )
}
export default injectIntl(ProfileTabMenu)