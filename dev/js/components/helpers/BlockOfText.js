import React, { Component } from 'react';

export default class BlockOfText extends Component {

  render(){
    const { text } = this.props;
    return(
      <div className="block-of-text" dangerouslySetInnerHTML={{__html:text}} />
    )
  }
}
