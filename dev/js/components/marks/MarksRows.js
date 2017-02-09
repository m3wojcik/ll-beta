import React, { Component } from 'react';

import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import {FormattedDate} from 'react-intl';

export default class MarksRows extends Component {
  render(){
    const { marks } = this.props;
    const marksGroupsRows = marks.map(
      (mark , i) =>
            <TableRow key={i}>
              <TableColumn>
                <h4>{mark.name}</h4>
                {<FormattedDate value={mark.date} day="numeric" month="numeric" year="numeric" />}
              </TableColumn>
              <TableColumn>{mark.value}</TableColumn>
            </TableRow>
    );
    return(
      <TableBody>
        {marksGroupsRows}
      </TableBody>
    )
  }
}
