import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import TwoColumnTable from './helpers/TwoColumnTable'
export default class PaymentInstallmentDetails extends Component {
  render(){
    const { installment } = this.props;
    let paymentDetails = [];
    if(installment.paymentDate){
      paymentDetails.push({"label": "Payment date","value": <FormattedDate value={installment.paymentDate} day="numeric" month="numeric" year="numeric" />})
    }
    if(installment.dateOfPayment){
      paymentDetails.push({"label": "Date of payment","value": <FormattedDate value={installment.dateOfPayment} day="numeric" month="numeric" year="numeric" />})
    }
    if(installment.amountToPay){
      paymentDetails.push({"label": "Amount to pay","value": installment.amountToPay})
    }
    if(installment.amountPaid){
      paymentDetails.push({"label": "Amount paid","value": installment.amountPaid})
    }
    if(installment.leftToPay){
      paymentDetails.push({"label": "Left to pay","value": installment.leftToPay})
    }
    return(
      <TwoColumnTable details = {paymentDetails} />
    )
  }
}
