import React, { Component } from 'react';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import Label from '../helpers/Label';
import PaymentInstallmentDetails from './PaymentInstallmentDetails';
import PaymentInstallmentStatus from './PaymentInstallmentStatus';
import { getDaysDiference } from '../../actions/Functions'

export default class PaymentLesson extends Component {

  render(){
    const { lesson } = this.props;
    const primaryText = lesson.date +" "+ lesson.time
    const secondaryText = <div>{lesson.price}</div>
    return(
      <CustomListItem
        primaryText={primaryText}
        status ={lesson.paid ? "paid" : null}
        clickable
        expander={<div>ssdsd</div>}
        secondaryText={secondaryText}
      />
    )
  }
}
PaymentLesson.propTypes = {
  lesson: React.PropTypes.object.isRequired
}
