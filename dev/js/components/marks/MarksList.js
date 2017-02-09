import React, { Component } from 'react';

import {FormattedDate, FormattedRelative} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import Label from '../helpers/Label';
import CircleProgressBar from '../helpers/CircleProgressBar';
import CustomListItem from '../helpers/CustomListItem';
import MarksClassByColumnContainer from '../../containers/marks/MarksClassByColumnContainer';
export default class MarksList extends Component {
  render(){
    const { marks,gradeType } = this.props;
    const mappedMarks = marks.map(function(mark , i){
      let status;
      if(gradeType =="percent"){
        let percent = (mark.value / mark.maxValue) * 100;
        status = <Label blue label={mark.value +"/"+mark.maxValue} value={percent} />
      }else{
        status = <Label blue label={mark.displayValue}/>
      }
      return (<CustomListItem
        key={mark.columnId}
        primaryText={mark.name}
        status={status}
        expander={<MarksClassByColumnContainer columnId={mark.columnId} />}
        secondaryText={<FormattedDate value={mark.date} day="numeric" month="numeric" year="numeric" />}
      />)
    });
    return(
      <ul key="list" className="md-list md-list-divider">
        {mappedMarks}
      </ul>
    )
  }
}
