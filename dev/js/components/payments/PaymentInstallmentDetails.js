import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import TwoColumnTable from '../helpers/TwoColumnTable'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  amoutPaid: {
    id: 'paymentInstallmentDetails.amoutPaid',
    defaultMessage: "Amount paid: "
  },
  leftToPay: {
    id: 'paymentInstallmentDetails.leftToPay',
    defaultMessage:"Left to pay:  "
  },
  amountToPay: {
    id: 'paymentInstallmentDetails.amountToPay',
    defaultMessage: "Amount to pay: "
  },
  paymentDate: {
    id: 'paymentInstallmentDetails.paymentDate',
    defaultMessage: "Payment date"
  },
  paymentDate: {
    id: 'paymentInstallmentDetails.dateOfPayment',
    defaultMessage: "Date of payment"
  }
})

const PaymentInstallmentDetails = ({ intl, installment }) => {
    const amountPaid = installment.paid_value
    const leftToPay = installment.value - installment.paid_value
    const amountToPay = installment.value
    let paymentDetails = [];
    if(installment.date_to){
      paymentDetails.push({"label": intl.formatMessage(messages.paymentDate),"value": <FormattedDate value={installment.date_to} day="numeric" month="numeric" year="numeric" />})
    }
    if(installment.paid_at){
      paymentDetails.push({"label": intl.formatMessage(messages.dateOfPayment),"value": <FormattedDate value={installment.paid_at} day="numeric" month="numeric" year="numeric" />})
    }
    if(installment.value){
      paymentDetails.push({"label": intl.formatMessage(messages.amountToPay),"value": amountToPay})
    }
    if(installment.paid_value){
      paymentDetails.push({"label": intl.formatMessage(messages.amountPaid),"value": amountPaid})
    }
    if(installment.value){
      paymentDetails.push({"label": intl.formatMessage(messages.leftToPay),"value": leftToPay})
    }
    return(
      <TwoColumnTable details = {paymentDetails} />
    )
}
export default injectIntl(PaymentInstallmentDetails)