import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import ClassDetailsRow from './ClassDetailsRow';
import { FormattedMessage } from 'react-intl';

export default class ClassDetailsList extends Component {

  render(){
    const { clas } = this.props;
    let classDetails = []
    if(clas.group) classDetails.push(
      <li key="group">
        <ClassDetailsRow         
          icon={<FontIcon className="icon-grey">event</FontIcon>}
          data={clas.group}
        />
      </li>  
    )
    if(clas.teacher) classDetails.push(
      <li  key="teacher">
        <ClassDetailsRow
          icon={<FontIcon className="icon-grey">face</FontIcon>}
          data={clas.teacher}
        />
      </li>  
    )
    if(clas.room) classDetails.push(
      <li  key="room">
        <ClassDetailsRow
          icon={<FontIcon className="icon-grey">location_on</FontIcon>}
          data={clas.room}
        />
      </li>  
    )
    return(
      <div className="class-details">
        <div class="header">
          <FormattedMessage id="dashboardClasssDetails.details"defaultMessage="Details" />
        </div>
        <ul>
          {classDetails}
        </ul>
      </div>
    )
  }
}
ClassDetailsList.propTypes = {
  clas: React.PropTypes.object.isRequired
}
