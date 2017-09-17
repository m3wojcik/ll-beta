import React, { Component } from 'react';
 
const Divider = ({text}) =>{

    return(
      <div className="divider">{text}</div>
    )
}
Divider.propTypes = {
  text: React.PropTypes.string.isRequired
}
export default Divider