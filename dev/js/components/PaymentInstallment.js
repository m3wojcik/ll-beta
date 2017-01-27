import React, { Component } from 'react';
import CustomListItem from './helpers/CustomListItem';
import CustomDate from './helpers/CustomDate';
import Label from './helpers/Label';
import PaymentInstallmentDetails from './PaymentInstallmentDetails';

export default class PaymentInstallment extends Component {

  render(){
    const { installment } = this.props;
    let props;
    if(installment.status =="paid"){
      props = {
        status: <Label green label="Paid"  />,
      primaryText: "Amount paid: " + installment.amountPaid
      }
    }else if(installment.status =="partlyPaid"){
      props = {
        status: <Label orange label="Partly paid"  />,
        primaryText: "Amount left pay: " + installment.leftToPay
      }
    }else{
      props = {
        primaryText: "Amount to pay: " + installment.amountToPay
      }
    }
    const expander = <PaymentInstallmentDetails installment={installment} />
    return(
      <CustomListItem
        {...props}
        clickable
        expander={expander}
        secondaryText={<CustomDate date={installment.paymentDate} />}
      />
    )
  }
}
PaymentInstallment.propTypes = {
  installment: React.PropTypes.object.isRequired
}
