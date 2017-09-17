import React, { Component } from 'react';
import Logo from './../../img/logo.svg' // relative path to image

const MainLogo = () => {
    return(
      <div className="navigation-bottom">
           <div className="ll-logo" dangerouslySetInnerHTML={{__html: Logo}} />
      </div>
    )
}
export default MainLogo