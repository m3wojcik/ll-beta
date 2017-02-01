import React, { Component } from 'react';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class CustomDate extends Component {

  render(){
    const { date, collored, format } = this.props;
    const time = new Date(date).getTime();
    const now = new Date().getTime();
    const diffDays = Math.ceil(Math.abs(time - now) / (1000*60*60*24));
    let output;
    if(diffDays > 4){
      output = <FormattedDate value={time} day="numeric" month="long" year="numeric" />
    }else{
      let formatProps;
      if(format){
        formatProps = {
          units: format
        }
      }
      output = <FormattedRelative value={time} {...formatProps} />
    }
    return(
      <span>
        {output}
    </span>
    )
  }
}
