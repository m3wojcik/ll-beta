import React, { Component } from 'react';
import CustomListItem from './helpers/CustomListItem';
import CustomDate from './helpers/CustomDate';
import Label from './helpers/Label';
import PaymentInstallmentDetails from './PaymentInstallmentDetails';
import PaymentInstallmentStatus from './PaymentInstallmentStatus';
import { getDaysDiference } from '../actions/Functions'

export default class PaymentInstallment extends Component {

  render(){
    const { installment } = this.props;
    const today = new Date();
    const amountPaid = installment.paid_value
    const leftToPay = installment.value - installment.paid_value
    const amountToPay = installment.value

    let props;
    if(leftToPay <= 0){
      props = {
        primaryText: "Amount paid: " + amountPaid
      }
    }else if(amountPaid < amountToPay){
      props = {
        primaryText: "Amount left pay: " + leftToPay
      }
    }else{
      props = {
        primaryText: "Amount to pay: " + amountToPay
      }
    }
    const expander = <PaymentInstallmentDetails installment={installment} />
    return(
      <CustomListItem
        {...props}
        status ={<PaymentInstallmentStatus installment={installment} />}
        clickable
        expander={expander}
        secondaryText={<CustomDate date={installment.paid_at} format="day" />}
      />
    )
  }
}
PaymentInstallment.propTypes = {
  installment: React.PropTypes.object.isRequired
}
