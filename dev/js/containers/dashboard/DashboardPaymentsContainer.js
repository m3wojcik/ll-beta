import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardPayments } from "../../actions/DashboardPaymentsActions";

import DashboardPayments from '../../components/dashboard/DashboardPayments'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     groups: store.dashboardPayments.groups,
     totalAmount: store.dashboardPayments.totalAmount,
     amountPaid: store.dashboardPayments.amountPaid,
     fetched: store.dashboardPayments.fetched,
     fetching: store.dashboardPayments.fetching
  };
})
export default class DashboardPaymentsContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardPayments());
    }
  }
  render(){
    const { fetched, groups, totalAmount, amountPaid } = this.props;

    return(
      <DashboardPayments fetched={fetched} groups={groups} totalAmount={totalAmount} amountPaid={amountPaid} />
      )
  }
}
