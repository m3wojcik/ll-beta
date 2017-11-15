import React, { Component } from 'react';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import Label from '../helpers/Label';
import PaymentInstallmentDetails from './PaymentInstallmentDetails';
import PaymentInstallmentStatus from './PaymentInstallmentStatus';
import { getDaysDiference } from '../../actions/Functions'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';


const messages = defineMessages({
  amoutPaid: {
    id: 'paymentInstallment.amoutPaid',
    defaultMessage: "Amount paid: "
  },
  amountLeftToPay: {
    id: 'paymentInstallment.amountLeftToPay',
    defaultMessage:"Amount left pay: "
  },
  amountToPay: {
    id: 'paymentInstallment.amountToPay',
    defaultMessage: "Amount to pay: "
  }
})

const PaymentInstallment = ({ intl, installment }) =>{

    const today = new Date();
    const amountPaid = installment.paid_value
    const leftToPay = installment.value - installment.paid_value
    const amountToPay = installment.value
    let secondaryText = installment.date_to ? <CustomDate date={installment.date_to} format="day" /> : null
    let props;
    if(leftToPay <= 0 && installment.value > 0){
      props = {
        primaryText: intl.formatMessage(messages.amountPaid) + amountPaid
      }
      secondaryText = <CustomDate date={installment.paid_at} format="day" />
    }else if(amountPaid < amountToPay){
      props = {
        primaryText: intl.formatMessage(messages.amountLeftToPay) + leftToPay
      }
    }else{
      props = {
        primaryText: intl.formatMessage(messages.amountToPay) + amountToPay
      }
      
    }
    const expander = <PaymentInstallmentDetails installment={installment} />
    return(
      <CustomListItem
        {...props}
        status ={<PaymentInstallmentStatus installment={installment} />}
        clickable
        expander={expander}
        secondaryText={secondaryText}
      />
    )
}
PaymentInstallment.propTypes = {
  installment: React.PropTypes.object.isRequired
}
export default injectIntl(PaymentInstallment)
