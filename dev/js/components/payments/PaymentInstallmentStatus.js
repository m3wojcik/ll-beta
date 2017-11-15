import React, { Component } from 'react';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import { getDays } from '../../actions/Functions'
import Label from '../helpers/Label';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  paid: {
    id: 'paymentInstallmentStatus.paid',
    defaultMessage: "Paid"
  },
  partlyPaid: {
    id: 'paymentInstallmentStatus.partlyPaid',
    defaultMessage: "Partly paid"
  },
  payToday: {
    id: 'paymentInstallmentStatus.payToday',
    defaultMessage: "Pay today"
  },
  paymentIsOutdated: {
    id: 'paymentInstallmentStatus.paymentIsOutdated',
    defaultMessage: "Payment is outdated"
  },
  payIn: {
    id: 'paymentInstallmentStatus.payIn',
    defaultMessage: "Pay in"
  },
  days: {
    id: 'paymentInstallmentStatus.days',
    defaultMessage: " days"
  }
})

const PaymentInstallmentStatus = ({ intl, installment }) => {

    const today = getDays(new Date());
    const paymentDate = getDays(new Date(installment.paymentDate));
    const dayDifference = paymentDate - today;
    let props;
    if(installment.status =="paid"){
      props = {
        green: true,
        label: intl.formatMessage(messages.paid)
      }
    }else if(installment.status =="partlyPaid"){
      props = {
        orange: true,
        label: intl.formatMessage(messages.partlyPaid)
      }
    }else if(installment.status =="notPaid"){
      if(0 < dayDifference){
        props = {
          blue: true,
          label: [intl.formatMessage(messages.payIn) + dayDifference + intl.formatMessage(messages.days)],
          value: dayDifference,
          colorValues: [{"values":[1],"color": "red"},{"range":[2,3],"color": "orange"}]
        }
      }else if(0 == dayDifference){
        props = {
          red: true,
          label: intl.formatMessage(messages.payToday)
        }
      }else if( 0 > dayDifference){
        props = {
          red: true,
          label: intl.formatMessage(messages.paymentIsOutdated)
        }
      }
    }
    return(<Label {...props} />)
}
PaymentInstallmentStatus.propTypes = {
  installment: React.PropTypes.object.isRequired
}
export default injectIntl(PaymentInstallmentStatus)
