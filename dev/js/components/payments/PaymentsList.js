import React, { Component } from 'react';
import Payment from './Payment';
export default class PaymentsList extends Component {

  render(){
    const { payments } = this.props;
    console.log("payments", payments[0])
    const mappedPayments = payments.map(
      (payment, i) =>
      <Payment
        key={i}
        payment={payment}
      />
    )
    return(
      <ul className="md-list md-list-divider">{mappedPayments}</ul>
    )
  }
}
PaymentsList.propTypes = {
  payments: React.PropTypes.array.isRequired
}
