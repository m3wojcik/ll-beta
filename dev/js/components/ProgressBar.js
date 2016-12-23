import React, { Component } from 'react';

import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import {FormattedDate} from 'react-intl';

export default class ProgressBar extends Component {
  render(){
    const { value , title, subtitle } = this.props;
    const progressSubtitle = (
      subtitle ?
        <div className="progress-subtitle">{subtitle}</div> : null
    )
    const progressTitle = (
      title ?
        <div className="progress-title">{title}</div> : null
    )
    return(
      <div className="progress-container">
        {progressSubtitle}
        {progressTitle}
        <div className="indicating progress-bar" data-percent={value}>
          <div className="bar" style={{width: value + '%'}}>
          </div>
          {value}
        </div>
      </div>

    )
  }
}
