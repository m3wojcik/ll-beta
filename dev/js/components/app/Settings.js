import React, { Component } from 'react';
import ListWithHeader from "../helpers/ListWithHeader"
import FontIcon from 'react-md/lib/FontIcons';
import TabPaneTitle from '../helpers/TabPaneTitle';
import ButtonCheckboxGroup from '../helpers/ButtonCheckboxGroup';
import {DataTable,  TableHeader,  TableBody,  TableRow,  TableColumn} from 'react-md';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  notifications: {
    id: 'settings.notifications',
    defaultMessage: 'Notifications'
  },
  name: {
    id: 'settings.name',
    defaultMessage: 'Name'
  },
  event: {
    id: 'settings.event',
    defaultMessage: 'Event'
  },
  addingSubstitutions:{
    id: 'settings.addingSubstitutions',
    defaultMessage: 'Adding substitutions'
  },
  cancellingSubstitutions:{
    id: 'settings.cancellingSubstitutions',
    defaultMessage: 'Cancelling substitutions'
  },
  system:{
    id: 'settings.system',
    defaultMessage: 'System message'
  },
  email:{
    id: 'settings.email',
    defaultMessage: 'E-mail'
  },
  sms:{
    id: 'settings.sms',
    defaultMessage: 'SMS'
  }
})

const Settings = ({ intl, notifications, onCheckboxBtnClick })=> {
  const mappedNotifications = notifications.map(function(notification, i){
    let btnOptions = []
    notification.options.forEach(function(option){  
      btnOptions.push({group: notification.name, id:option.name, label: intl.formatMessage(messages[option.name]), value: option.value})
    });
    return (
      <TableRow key={i}>
        <TableColumn>{intl.formatMessage(messages[notification.name])}</TableColumn>
        <TableColumn><ButtonCheckboxGroup values={btnOptions} onClick={onCheckboxBtnClick} /></TableColumn>
      </TableRow>
    )
  })
    return(
      <section className="tab-pane">
        <TabPaneTitle
          title={intl.formatMessage(messages.notifications)} 
          titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
        />
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>{intl.formatMessage(messages.name)} </TableColumn>
              <TableColumn>{intl.formatMessage(messages.event)} </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mappedNotifications}
          </TableBody>
        </DataTable>  
      </section>
    )
  }
export default injectIntl(Settings)