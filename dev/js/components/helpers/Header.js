import React, { Component } from 'react';

export default class Header extends Component {

  render(){
    const { header } = this.props;
    return(
      <h3 className="content-header">{header}</h3>
    )
  }
}
Header.propTypes = {
  header: React.PropTypes.string.isRequired
}
