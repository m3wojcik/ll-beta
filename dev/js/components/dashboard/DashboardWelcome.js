import React, { Component } from 'react';

export default class DashboardWelcome extends Component {

  render(){
    const { appData } = this.props;
    return(
      <h3 className="welcome-header">Welcome, {appData.user.firstName}!</h3>
    )
  }
}
DashboardWelcome.propTypes = {
  appData: React.PropTypes.object.isRequired
}
