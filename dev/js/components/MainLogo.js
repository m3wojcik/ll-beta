import React, { Component } from 'react';
import Logo from './../../img/logo.svg' // relative path to image

export default class MainLogo extends Component {
  render(){

    return(
      <div className="navigation-bottom">
           <div className="ll-logo" dangerouslySetInnerHTML={{__html: Logo}} />
      </div>
    )
  }
}
