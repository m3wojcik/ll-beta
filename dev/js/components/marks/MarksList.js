import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
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
      if(mark.importance != 1) usingWeight = true
    })
    const mappedMarks = marks.map(function(mark , i){
      let secondaryText, statusProps;
      if(gradeType =="percent"){
        let percent = (mark.value / mark.max) * 100;
        statusProps = {
          blue: true,
          label: mark.value +"/"+mark.max,
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
          <FormattedDate key="mark.date" value={mark.date} day="numeric" month="numeric" year="numeric" />,
          <div>weight: {mark.importance}</div>
        ]
        secondaryText = <ListHorizontal elements={listHorizontalElements} />
      }else{
        secondaryText = <FormattedDate value={mark.date} day="numeric" month="numeric" year="numeric" />
      }
      return (<CustomListItem
        key={mark.mark_group_id}
        primaryText={mark.name}
        status={<Label {...statusProps}/>}
        expander={
          <MarksClassByColumnContainer 
            userValue={mark.value} 
            columnId={mark.mark_group_id} 
            title="Your score in class"
            title={<FormattedMessage 
              id="MarksList.yourScoreInClass"
              defaultMessage="Your score in class"
            />} 
          />
          }
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
