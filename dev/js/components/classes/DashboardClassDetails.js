import React, { Component } from 'react';

export default class DashboardClassDetails extends Component {

  render(){
    const { details } = this.props;
    const mappedDetails = details.map(
      (detail, i) =>
      <div key={i} className="detail">{detail.icon}{detail.name}</div>
    )
    return(
      <div className="icons-details">
        {mappedDetails}
      </div>
    )
  }
}
DashboardClassDetails.propTypes = {
  details: React.PropTypes.array.isRequired
}
