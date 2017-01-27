import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPayments } from "../actions/PaymentsActions";
import Loader from '../components/helpers/Loader'
import Content from '../components/helpers/Content'
import Payments from '../components/Payments'
import TestInfo from '../components/helpers/TestInfo';
import CircleProgressBar from '../components/helpers/CircleProgressBar';
import Box from '../components/helpers/Box';
import Locales from '../components/helpers/Locales';

@connect((store) => {
   return {
     locales: store.app.appData.locales,
     toolbar: store.app.toolbar,
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
    const { fetched, groups, toolbar, totalAmount, amountPaid, locales} = this.props;
    const leftToPay = totalAmount - amountPaid;
    const percentPaid = (amountPaid / totalAmount) * 100;
    const percentLeft = ((totalAmount - amountPaid )/ totalAmount) * 100;
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
                  left={<h2>Amount paid</h2>}
                  right={<CircleProgressBar
                    key="circleProgress"
                    strokeWidth={4}
                    size="large"
                    color="green"
                    textForPercentage={(percentage) => `${amountPaid} ${locales.currencyCode}`}
                    percentage={percentPaid}
                    />}
                   />
              </div>
              <div className="md-cell md-cell--6 md-cell--12-tablet md-cell--12-phone">
                <Box
                  left={<h2>Amount left to pay</h2>}
                  right={<CircleProgressBar
                    key="circleProgress"
                    strokeWidth={4}
                    size="large"
                    color="orange"
                    textForPercentage={(percentage) => `${leftToPay} ${locales.currencyCode}`}
                    percentage={percentLeft}
                    />}
                   />
              </div>
            </div>
            <Payments groups={groups} leftToPay={totalAmount} />
          </div>
        </Content>
    )
  }
}
