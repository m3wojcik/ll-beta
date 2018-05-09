import React, { Component } from 'react';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import Label from '../helpers/Label';
import PaymentInstallmentDetails from './PaymentInstallmentDetails';
import ListHorizontal from './../helpers/ListHorizontal';
import FontIcon from 'react-md/lib/FontIcons';
import TwoColumnTable from '../helpers/TwoColumnTable'
import {injectIntl, formatMessage, defineMessages, formatDate, formatTime, FormattedDate} from 'react-intl';

const messages = defineMessages({
  grossValue: {
    id: 'payment.grossValue',
    defaultMessage: "Gross value"
  },
  netPrice: {
    id: 'payment.netPrice',
    defaultMessage: "Net price"
  },
  quantity: {
    id: 'payment.quantity',
    defaultMessage: "Quantity"
  }
})

const Payment = ({intl, payment, index}) => {
    const primaryText = <div>{payment.price_gross} <span className="text-muted">{payment.payment_form}</span></div>
    const secondaryTextElements = [
      <span>
        <FontIcon className="icon-grey">event</FontIcon>
        <FormattedDate value={payment.paid_at} year='numeric' month='long' day='2-digit' />
      </span>,
      <span>
        <FontIcon className="icon-grey">payment</FontIcon>
        {payment.name}
      </span>
    ]
    const details = [
      {"label": intl.formatMessage(messages.grossValue), "value": payment.price_gross},
      {"label": intl.formatMessage(messages.netPrice), "value": payment.price_net},
      {"label": intl.formatMessage(messages.quantity), "value": payment.qty}
    ]
    return(
      <CustomListItem
        primaryText={primaryText}
        secondaryText={<ListHorizontal space="no-space" elements={secondaryTextElements} />}
        expander={<TwoColumnTable details = {details} />}
        clickable
      />
    )
}
Payment.propTypes = {
  payment: React.PropTypes.object.isRequired
}
export default injectIntl(Payment)
