import React, { Component } from 'react';

import {FormattedDate, FormattedRelative} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import Label from './helpers/Label';
import CustomListItem from './helpers/CustomListItem';
export default class MarksList extends Component {
  render(){
    const { marks } = this.props;
    const mappedMarks = marks.map(
      (mark , i) =>
      <CustomListItem
        key={i}
        primaryText={mark.name}
        status={<Label label={mark.value} blue />}
        secondaryText={<FormattedDate value={mark.date} day="numeric" month="numeric" year="numeric" />}
      />
    );
    return(
      <ul key="list" className="md-list md-list-divider">
        {mappedMarks}
      </ul>
    )
  }
}
