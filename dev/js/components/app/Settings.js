import React, { Component } from 'react';
import ListWithHeader from "../helpers/ListWithHeader"
import FontIcon from 'react-md/lib/FontIcons';
import TabPaneTitle from '../helpers/TabPaneTitle';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  notifications: {
    id: 'settings.notifications',
    defaultMessage: 'Notifications'
  }
})

const Settings = ({ intl, notifications })=> {
  console.log("notifications",notifications)
    return(
      <section className="tab-pane">
        <TabPaneTitle
          title={intl.formatMessage(messages.notifications)} 
          titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
        />
      </section>
    )
  }
export default injectIntl(Settings)