import React, { Component } from 'react';

export default class UserPhoto extends Component {

  render(){
    let { src, className, small, medium, large } = this.props;
    let classProp ="user-photo ";
    if (className) {
      classProp += className
    }
    if (small) classProp += " small"
    else if (medium) classProp += " medium"
    else if (large) classProp += " large"

    let output;
    if (src) {
      output = <div className={classProp} style={{backgroundImage: "url('" + src + "')"}} />
    }else{
      <div className={classProp}/>
    }
    return(
      <div>{output}</div>
    )
  }
}
