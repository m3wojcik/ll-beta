import React, { Component } from 'react';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import Label from '../helpers/Label';
import PaymentInstallmentDetails from './PaymentInstallmentDetails';
import PaymentInstallmentStatus from './PaymentInstallmentStatus';
import { getDaysDiference } from '../../actions/Functions'

export default class PaymentLesson extends Component {

  render(){
    const { lesson} = this.props;
    const primaryText =lesson.date +" "+ lesson.time
    const secondaryText = <div>{lesson.price}</div>
    const status = (<div>
      {lesson.paid ? <Label label="paid" green /> : null }
      <Label label={lesson.attendance_status} customColor={"#"+lesson.attendance_color} />
    </div>)
    return(
      <CustomListItem
        primaryText={primaryText}
        status ={status}
        clickable
        secondaryText={secondaryText}
      />
    )
  }
}
PaymentLesson.propTypes = {
  lesson: React.PropTypes.object.isRequired
}
