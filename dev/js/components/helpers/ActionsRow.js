import React, { Component } from 'react';

export default class ActionsRow extends Component {

  render(){
    return(
      <div className="actions-row">
        {this.props.children}
      </div>
    )
  }
}
