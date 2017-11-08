import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import TwoColumnTable from '../helpers/TwoColumnTable'
export default class PaymentInstallmentDetails extends Component {
  render(){
    const { installment } = this.props;
    const amountPaid = installment.paid_value
    const leftToPay = installment.value - installment.paid_value
    const amountToPay = installment.value
    let paymentDetails = [];
    if(installment.date_to){
      paymentDetails.push({"label": "Payment date","value": <FormattedDate value={installment.date_to} day="numeric" month="numeric" year="numeric" />})
    }
    if(installment.paid_at){
      paymentDetails.push({"label": "Date of payment","value": <FormattedDate value={installment.paid_at} day="numeric" month="numeric" year="numeric" />})
    }
    if(installment.value){
      paymentDetails.push({"label": "Amount to pay","value": amountToPay})
    }
    if(installment.paid_value){
      paymentDetails.push({"label": "Amount paid","value": amountPaid})
    }
    if(installment.value){
      paymentDetails.push({"label": "Left to pay","value": leftToPay})
    }
    return(
      <TwoColumnTable details = {paymentDetails} />
    )
  }
}
