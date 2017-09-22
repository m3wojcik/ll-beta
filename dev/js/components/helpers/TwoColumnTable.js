import React, { Component } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';

const TwoColumnTable = ( { details }) =>{

    const mappedDetails = details.map(
      (item,i) =>
      <TableRow key={i}>
        <TableColumn>{item.label}</TableColumn>
        <TableColumn>{item.value}</TableColumn>
      </TableRow>
    )
    return(
      <DataTable plain>
        <TableBody>
          {mappedDetails}
        </TableBody>
      </DataTable>
    )
}
TwoColumnTable.propTypes = {
  details: React.PropTypes.array.isRequired,
}
export default TwoColumnTable