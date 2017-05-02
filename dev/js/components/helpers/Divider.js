import React, { Component } from 'react';

export default class Divider extends Component {

  render(){
    const { text } = this.props;
    return(
      <div className="divider">{text}</div>
    )
  }
}
Divider.propTypes = {
  text: React.PropTypes.string.isRequired
}
