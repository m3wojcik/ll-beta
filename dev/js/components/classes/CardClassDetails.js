import React, { Component } from 'react';
import Label from './../helpers/Label'
export default class CardClassDetails extends Component {

  render(){
    const { status, details } = this.props;
    const mappedDetails = details.map(
      (detail, i) =>
      <li key={i}>
        <Label label={detail.name} className={detail.class} />
      </li>
    );
    const statusElement = (
      status ?
        <li>
            <Label label={status.name} customColor={status.color} />
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
