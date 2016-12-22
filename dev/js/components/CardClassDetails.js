import React, { Component } from 'react';

export default class CardClassDetails extends Component {

  render(){
    const { status, details } = this.props;
    const mappedDetails = details.map(
      (detail, i) =>
      <li key={i}>
        <span className={'label ' + detail.class}>{detail.name}</span>
      </li>
    );
    const statusElement = (
      status ?
        <li>
          <span className="label" style={{backgroundColor: status.color}}>
            {status.name}
          </span>
        </li>
      :null
    )
    return(
      <div className="card-section">
        <ul className="clean-list list-horizontal">
          {statusElement}
          {mappedDetails}
        </ul>
      </div>
    )
  }
}
