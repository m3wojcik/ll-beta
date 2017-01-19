import React, { Component } from 'react';

export default class CardWithHeader extends Component {

  render(){
    const { header } = this.props;
    return(
      <div>
        <div className="header">{header}</div>
        <div className="content-card">
          {this.props.children}
        </div>
      </div>
    )
  }
}
