import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPayments } from "../../actions/PaymentsActions";
import Loader from '../../components/helpers/Loader'
import Content from '../../components/helpers/Content'
import Payments from '../../components/payments/Payments'
import CircleProgressBar from '../../components/helpers/CircleProgressBar';
import Box from '../../components/helpers/Box';
import {FormattedMessage} from 'react-intl';

@connect((store) => {
   return {
     locales: store.app.appData.locales,
     groups: store.payments.groups,
     fetched: store.payments.fetched,
     fetching: store.payments.fetching,
     totalAmount: store.payments.totalAmount,
     amountPaid: store.payments.amountPaid,
  };
})
export default class PaymentsContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchPayments());
  }
  render(){
    const { fetched, groups, totalAmount, amountPaid, locales} = this.props;
    const paid = amountPaid ? amountPaid : 0
    const leftToPay = totalAmount - paid;
    const percentPaid = totalAmount != 0 ? (paid / totalAmount) * 100 : 0;
    const percentLeft = totalAmount != 0 ? ((totalAmount - paid )/ totalAmount) * 100 : 0;
    console.log('pay', totalAmount, percentLeft, percentPaid)
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
        <Content noPadding>

          <div className="expander-body">
            <div className="md-grid md-row">
              <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
                <Box
                  className="box-blue"
                  left={
                    <h2>   
                      <FormattedMessage 
                        id="PaymentsContainer.amountPaid"
                        defaultMessage="Amount paid"
                      />
                    </h2>
                  }
                  right={<CircleProgressBar
                    key="circleProgress"
                    strokeWidth={6}
                    size="large"
                    color="teal"
                    secondText={locales.currencyCode}
                    textForPercentage={(percentage) => `${paid}`}
                    percentage={percentPaid}
                    />}
                   />
              </div>
              <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
                <Box
                  className="box-yellow"
                  left={
                    <h2>
                      <FormattedMessage 
                        id="PaymentsContainer.amountLeftToPay"
                        defaultMessage="Amount left to pay"
                      />
                    </h2>
                  }
                  right={<CircleProgressBar
                    key="circleProgress"
                    strokeWidth={6}
                    size="large"
                    color="orange"
                    secondText={locales.currencyCode}
                    textForPercentage={(percentage) => `${leftToPay}`}
                    percentage={percentLeft}
                    />}
                   />
              </div>
            </div>
            <Payments groups={groups} totalAmount={totalAmount} leftToPay={leftToPay} locales={locales} />
          </div>
        </Content>
    )
  }
}
