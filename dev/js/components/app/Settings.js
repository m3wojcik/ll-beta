import React from 'react';
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
  let mappedNotifications = [], options = []
  if(notifications.available){
    notifications.available.forEach(function(value){
      options.push({
        label: intl.formatMessage(messages[value]),
        value: value
      })
    })
  }
  if(notifications.settings){
    Object.keys(notifications.settings).forEach(function(key, i){
       mappedNotifications.push(
        <TableRow key={i}>
          <TableColumn>{key}</TableColumn>
          <TableColumn><ButtonCheckboxGroup id={key} options={options} checked={notifications.settings[key]} onClick={onCheckboxBtnClick} /></TableColumn>
        </TableRow>
      )
    })
  }
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