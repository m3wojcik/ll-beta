import React, { Component } from 'react';


export default class IconText extends Component {

  render(){
    const { icon, text } = this.props;
    return(
      <div className="icon-text">
        <div className="icon-text-icon">
          {icon}
        </div>
        <div className="icon-text-text">
          {text}
        </div>
      </div>
    )
  }
}
