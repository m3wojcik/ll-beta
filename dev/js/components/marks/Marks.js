import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import MarksData from './MarksData'
import Box from '../helpers/Box';
import Header from '../helpers/Header';
import Alert from '../helpers/Alert';

import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class Marks extends Component {
  render(){
    const { marks } = this.props;
    const marksGroupsRows = marks.map(
      (group) =>
      <li key={group.group_id}>
          <Header header={group.group_name}  />
          {group.marks.length > 0 ?
          <Box className="no-flex no-padding">
            <MarksData groupId={group.group_id} gradeType={group.point_system_type} marks={group.marks} />
          </Box>
          : <Alert 
            text={<FormattedMessage 
              id="marks.noMarksInThisGroup"
              defaultMessage="No marks in this group" 
            />}
            type="info"/>}
      </li>
    );
    return(
      <ul className="clean-list">
        {marksGroupsRows}
      </ul>
    )
  }
}
