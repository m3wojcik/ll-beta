import React, { Component } from 'react';

import {FormattedDate, FormattedRelative} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import Label from '../helpers/Label';
import ListHorizontal from '../helpers/ListHorizontal';
import IconText from '../helpers/IconText';
import CircleProgressBar from '../helpers/CircleProgressBar';
import CustomListItem from '../helpers/CustomListItem';
import MarksClassByColumnContainer from '../../containers/marks/MarksClassByColumnContainer';
export default class MarksList extends Component {
  render(){
    const { marks,gradeType } = this.props;
    let usingWeight = false;
    marks.forEach(function(mark, i){
      if(mark.weight != 1) usingWeight = true
    })
    const mappedMarks = marks.map(function(mark , i){
      let secondaryText, statusProps;
      if(gradeType =="percent"){
        let percent = (mark.value / mark.maxValue) * 100;
        statusProps = {
          blue: true,
          label: mark.value +"/"+mark.maxValue,
          value: percent
        }
      }else{
          statusProps = {
            blue: true,
            label: mark.displayValue
          }
      }
      if(usingWeight){
        const listHorizontalElements = [
          <FormattedDate value={mark.date} day="numeric" month="numeric" year="numeric" />,
          <div>weight: {mark.weight}</div>
        ]
        secondaryText = <ListHorizontal elements={listHorizontalElements} />
      }else{
        secondaryText = <FormattedDate value={mark.date} day="numeric" month="numeric" year="numeric" />
      }
      return (<CustomListItem
        key={mark.columnId}
        primaryText={mark.name}
        status={<Label {...statusProps}/>}
        expander={<MarksClassByColumnContainer columnId={mark.columnId} title="Your score in class" />}
        secondaryText={secondaryText}
      />)
    });
    return(
      <ul key="list" className="md-list md-list-divider">
        {mappedMarks}
      </ul>
    )
  }
}
