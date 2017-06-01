import React, { Component } from 'react';

export default class ListWithHeader extends Component {

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
        <div className="content-list">
          {this.props.children}
        </div>
      </div>
    )
  }
}
