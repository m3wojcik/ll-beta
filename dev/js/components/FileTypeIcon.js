import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class FileTypeIcon extends Component {
  render(){
    const {ext} = this.props;

    return(
      <div>{ext}</div>
    )
  }
}
