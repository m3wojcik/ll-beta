import React, { Component } from 'react';

export default class BoxSubtitle extends Component {

  render(){
    const { text } = this.props;
    return(
      <div className="box-subtitle">{text}</div>
    )
  }
}
BoxSubtitle.propTypes = {
  text: React.PropTypes.string.isRequired
}
