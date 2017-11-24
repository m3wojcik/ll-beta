import React, { Component } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import FontIcon from 'react-md/lib/FontIcons';
import Label from './../helpers/Label';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  loggedSuccessfully: {
    id: 'loginHistory.loggedSuccessfully',
    defaultMessage: 'Logged successfully'
  },
  loginError: {
    id: 'loginHistory.loginError',
    defaultMessage: 'Login error'
  },
  date: {
    id: 'loginHistory.date',
    defaultMessage: 'Date'
  },
  ip: {
    id: 'loginHistory.ip',
    defaultMessage: 'Ip'
  },
  status: {
    id: 'loginHistory.status',
    defaultMessage: 'Status'
  }
})

const LoginHistory = ({ intl, loginHistory })=> {

    const mappedLoginHistory = loginHistory.reverse().map(
      (login, i) =>
      <TableRow key={i}>
        <TableColumn>{login.date}</TableColumn>
        <TableColumn>{login.ip}</TableColumn>
        <TableColumn>
          {login.login_success ? <Label green label={intl.formatMessage(messages.loggedSuccessfully)}/> : <Label orange label={intl.formatMessage(messages.loginError)}/> }
        </TableColumn>
      </TableRow>
    );
    return(
      <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>{intl.formatMessage(messages.date)}</TableColumn>
              <TableColumn>{intl.formatMessage(messages.ip)}</TableColumn>
              <TableColumn>{intl.formatMessage(messages.status)}</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>{mappedLoginHistory}</TableBody>
      </DataTable>
    )
}
export default injectIntl(LoginHistory)