import React, { Component } from 'react';

export default class BlockOfText extends Component {

  render(){
    const { appData } = this.props;
    return(
      <h3 className="welcome-header">Welcome, {appData.user.firstName}!</h3>
    )
  }
}
BlockOfText.propTypes = {
  appData: React.PropTypes.object.isRequired
}
