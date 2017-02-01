import React, { Component } from 'react';
import CustomListItem from './helpers/CustomListItem';
import CustomDate from './helpers/CustomDate';
import { getDays } from '../actions/Functions'
import Label from './helpers/Label';
import { FormattedPlural } from 'react-intl';

export default class PaymentInstallmentStatus extends Component {

  render(){
    const { installment } = this.props;
    const today = getDays(new Date());
    const paymentDate = getDays(new Date(installment.paymentDate));
    const dayDifference = paymentDate - today;
    let props;
    if(installment.status =="paid"){
      props = {
        green: true,
        label: "Paid"
      }
    }else if(installment.status =="partlyPaid"){
      props = {
        orange: true,
        label: "Partly paid"
      }
    }else if(installment.status =="notPaid"){
      if(0 < dayDifference){
        props = {
          blue: true,
          label: ["Pay in " + dayDifference + " ", <FormattedPlural key="plural" value={dayDifference} one='day' other='days' />],
          value: dayDifference,
          colorValues: [{"values":[1],"color": "red"},{"range":[2,3],"color": "orange"}]
        }
      }else if(0 == dayDifference){
        props = {
          red: true,
          label: "Pay today"
        }
      }else if( 0 > dayDifference){
        props = {
          red: true,
          label: "Payment is outdated"
        }
      }
    }
    return(<Label {...props} />)
  }
}
PaymentInstallmentStatus.propTypes = {
  installment: React.PropTypes.object.isRequired
}
