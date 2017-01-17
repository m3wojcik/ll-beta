import React, { Component } from 'react';

import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import FontIcon from 'react-md/lib/FontIcons';
import Label from '../components/helpers/Label';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class LoginHistory extends Component {
  render(){
    const { loginHistory } = this.props;
    const mappedLoginHistory = loginHistory.map(
      (login, i) =>
      <TableRow key={i}>
        <TableColumn>{login.date}</TableColumn>
        <TableColumn>{login.ip}</TableColumn>
        <TableColumn>
          {login.logSuccessfully ? <Label green label="Logged in successfully"/> : <Label orange label="Login error"/> }
        </TableColumn>
      </TableRow>
    );
    return(
      <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Date</TableColumn>
              <TableColumn>Ip</TableColumn>
              <TableColumn>status</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>{mappedLoginHistory}</TableBody>
      </DataTable>
    )
  }
}
