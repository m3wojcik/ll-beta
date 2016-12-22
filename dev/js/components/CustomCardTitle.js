import React, { Component } from 'react';

export default class CustomCardTitle extends Component {
  render(){
    return(
      <div className="card-title">
        <div className="card-left">
          {this.props.left}
        </div>
        <div className="card-right md-text--secondary md-card-title--title">
          {this.props.right}
        </div>
      </div>
    )
  }
}
