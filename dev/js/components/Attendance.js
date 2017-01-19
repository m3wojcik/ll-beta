import React, { Component } from 'react';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import FontIcon from 'react-md/lib/FontIcons';
import AttendanceRows from './AttendanceRows'
import ProgressBar from './ProgressBar'

import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class Attendance extends Component {
  render(){
    const { attendance } = this.props;
    const attendanceGroupsRows = attendance.map(
      (group) =>
      <li key={group.groupId}>
        <Card>
          <CardTitle title={group.groupName}  />
          <ProgressBar title={group.attendance + "%"} subtitle="Percent result"  value={group.attendance} />
          <DataTable plain>
            <TableHeader>
              <TableRow>
                <TableColumn>Status</TableColumn>
                <TableColumn>Date</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AttendanceRows attendance={group.statuses} />
            </TableBody>   
          </DataTable>
        </Card>
      </li>
    );
    return(
      <ul className="clean-list">
        {attendanceGroupsRows}
      </ul>
    )
  }
}
