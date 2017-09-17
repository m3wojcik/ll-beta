import React from 'react';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

const CustomDate = ( { date, collored, format, className }) => {
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
      <span className={className}>
        {output}
      </span>
    )
}
export default CustomDate
