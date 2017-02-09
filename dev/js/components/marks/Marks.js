import React, { Component } from 'react';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import FontIcon from 'react-md/lib/FontIcons';
import MarksRows from './MarksRows'
import ProgressBar from '../helpers/ProgressBar'

import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class Marks extends Component {
  render(){
    const { marks } = this.props;
    const marksGroupsRows = marks.map(
      (group) =>
      <li key={group.groupId}>
        <Card>
          <CardTitle title={group.groupName}  />
          <ProgressBar title={group.percent + "%"} subtitle="Percent result"  value={group.percent} />
          <DataTable plain>
            <TableHeader>
              <TableRow>
                <TableColumn>Name</TableColumn>
                <TableColumn>Mark</TableColumn>
              </TableRow>
            </TableHeader>
              <MarksRows marks={group.marks} />
          </DataTable>
        </Card>
      </li>
    );
    return(
      <ul className="clean-list">
        {marksGroupsRows}
      </ul>
    )
  }
}
