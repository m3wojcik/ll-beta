import React, { Component } from 'react';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

export default class CustomDate extends Component {

  render(){
    const { date, collored } = this.props;
    const time = new Date(date).getTime();
    const now = new Date().getTime();
    const diffDays = Math.ceil(Math.abs(time - now) / (1000*60*60*24));
    let output;
    if(diffDays > 4){
      output = <FormattedDate value={time} day="numeric" month="long" year="numeric" />
    }else{
      output = <FormattedRelative value={time} />
    }
    return(
      <div>
        {output}
    </div>
    )
  }
}
