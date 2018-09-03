import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchInvoices } from "../../actions/PaymentsActions";
import PaymentsInvoices from '../../components/payments/PaymentsInvoices'
import Loader from '../../components/helpers/Loader'

@connect((store) => {
   return {
    locales: store.app.appData.locales, 
    invoices: store.payments.invoices.invoices,
    fetched: store.payments.invoices.fetched,
    fetching: store.payments.invoices.fetching
  };
})
class PaymentsInvoicesContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchInvoices());
  }
  handleDownloadClick = (id) =>{
    console.log('download', id);
  }
  render(){
    const { fetched, invoices, locales } = this.props;
  
    if(!fetched){
        return( <Loader centerPadding />)
    }
    return(
      <div>
          <PaymentsInvoices invoices={invoices} locales={locales} onDownloadClick={this.handleDownloadClick}  />
      </div>
    )
  }
}
export default PaymentsInvoicesContainer