import React, { Component } from 'react';
import MarksData from './MarksData'
import Box from '../helpers/Box';
import Header from '../helpers/Header';

import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class Marks extends Component {
  render(){
    const { marks } = this.props;
    const marksGroupsRows = marks.map(
      (group) =>
      <li key={group.groupId}>
          <Header header={group.groupName}  />
          <Box className="no-flex no-padding">
            <MarksData groupId={group.groupId} gradeType={group.gradeType} marks={group.marks} />
          </Box>
      </li>
    );
    return(
      <ul className="clean-list">
        {marksGroupsRows}
      </ul>
    )
  }
}
