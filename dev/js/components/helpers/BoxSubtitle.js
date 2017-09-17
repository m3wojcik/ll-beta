import React, { Component } from 'react';

const BoxSubtitle = ({text})=> {
    return(
      <div className="box-subtitle">{text}</div>
    )
}
BoxSubtitle.propTypes = {
  text: React.PropTypes.string.isRequired
}
export default BoxSubtitle