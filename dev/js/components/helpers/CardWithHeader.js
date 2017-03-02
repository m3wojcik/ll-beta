import React, { Component } from 'react';

export default class CardWithHeader extends Component {

  render(){
    const { header, id } = this.props;
    let props;
    if(id){
      props = {
        id: id
      }
    }
    return(
      <div>
        <div {...props} className="header">{header}</div>
        <div className="content-card">
          {this.props.children}
        </div>
      </div>
    )
  }
}
