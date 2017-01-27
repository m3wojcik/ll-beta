import React, { Component } from 'react';
import PaymentInstallment from '../components/PaymentInstallment'
export default class PaymentInstallments extends Component {

  render(){
    const { installments } = this.props;
    const mappedInstallments = installments.map(
      installment =>
      <PaymentInstallment key={installment.id} installment={installment} />
    )
    return(
      <ul className="md-list md-list-divider">{mappedInstallments}</ul>
    )
  }
}
PaymentInstallments.propTypes = {
  installments: React.PropTypes.array.isRequired
}
