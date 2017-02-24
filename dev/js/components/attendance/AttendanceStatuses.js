import React, { Component } from 'react';
import Subheader from 'react-md/lib/Subheaders';
import {FormattedDate, FormattedRelative} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import IconText from './../helpers/IconText';
import Label from './../helpers/Label';
import CustomListItem from './../helpers/CustomListItem';
export default class AttendanceStatuses extends Component {
  render(){
    const { attendance, header } = this.props;
    let listHeader;
    if(header){
      listHeader = <Subheader primaryText={header} className="text-uppercase" />
    }
    const attendanceGroupsRows = attendance.map(
      (status , i) =>
      <CustomListItem
        key={i}
        primaryText={<FormattedRelative value={status.date} />}
        status={<Label label={status.name} customColor={status.color} />}
        secondaryText={<FormattedDate value={status.date} day="numeric" month="numeric" year="numeric" />}
      />
    );
    return(
      <ul key="list" className="md-list list-dividers list-white">
        {listHeader}
        {attendanceGroupsRows}
      </ul>
    )
  }
}
