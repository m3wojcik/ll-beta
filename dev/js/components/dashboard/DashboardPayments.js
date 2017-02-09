import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import BoxSubtitle from './../helpers/BoxSubtitle'
import BoxSumUp from './../helpers/BoxSumUp'
import PaymentInstallments from '../PaymentInstallments'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class DashboardPayments extends Component {

  render(){
    const { groups, fetched, totalAmount, amountPaid } = this.props;
    let output = []
    const leftToPay = totalAmount - amountPaid;
    const percentPaid = (amountPaid / totalAmount) * 100;
    const percentLeft = ((totalAmount - amountPaid )/ totalAmount) * 100;
    const sumUp = [
      {"label":"Amount paid","value":amountPaid, "percent": percentPaid, "color": "teal"},
      {"label":"Amount left to pay","value":leftToPay, "percent": percentLeft, "color": "orange"}
    ]
    const mappedPayments = groups.map(function(group){
        return (
          <div key={group.id}>
            <BoxSubtitle text={group.name} />
            <PaymentInstallments installments={group.installments} />
          </div>
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(<div key="payments">{mappedPayments}</div>)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="Payments"
        titleIcon={<FontIcon className="icon-grey">payment</FontIcon>}
        bottom={<BoxSumUp withPercent sumUp={sumUp} />}
        >
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
DashboardPayments.propTypes = {
  groups: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
