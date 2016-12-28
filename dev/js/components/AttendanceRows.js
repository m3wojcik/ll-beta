import React, { Component } from 'react';

import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import {FormattedDate} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';

export default class AttendanceRows extends Component {
  render(){
    const { attendance } = this.props;
    const attendanceGroupsRows = attendance.map(
      (status , i) =>
            <TableRow key={i}>
              <TableColumn>
                <FontIcon style={{color: status.color}}>
                  {status.function == 'absent' ? "sentiment_dissatisfied" :"label"}
                </FontIcon>{status.name}
              </TableColumn>
              <TableColumn>    {<FormattedDate value={status.date} day="numeric" month="numeric" year="numeric" />}</TableColumn>
            </TableRow>
    );
    return(
      <TableBody>
        {attendanceGroupsRows}
      </TableBody>
    )
  }
}
