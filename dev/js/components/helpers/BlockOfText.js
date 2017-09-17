import React, { Component } from 'react';

const BlockOfText = ({text}) => {
    return(
      <div className="block-of-text" dangerouslySetInnerHTML={{__html:text}} />
    )
}
BlockOfText.propTypes = {
  text: React.PropTypes.string.isRequired
}
export default BlockOfText