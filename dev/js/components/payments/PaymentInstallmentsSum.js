import React, { Component } from 'react';

const PaymentInstallmentsSum = ({ label,  value}) => {
   
    return(
      <div className="box-sumup">
          <div className="box-sumup-label">
            {label}
          </div>
          <div className="box-sumup-value">
            {value}
          </div>
        
      </div>
    )
}
PaymentInstallmentsSum.propTypes = {
  label: React.PropTypes.string.isRequired
}
export default PaymentInstallmentsSum
