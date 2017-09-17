import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

const DashboardWelcome = ({appData}) =>{
    return(
      <h3 className="welcome-header">
        <FormattedMessage 
          id="dashboardWelcome.welcome"
          defaultMessage="Welcome, {name}!"
          values={{
            name: appData.user.firstname
          }}
        />
      </h3>
    )
}
DashboardWelcome.propTypes = {
  appData: React.PropTypes.object.isRequired
}
export default DashboardWelcome