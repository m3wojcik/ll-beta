import React, { Component } from 'react';
import Media from 'react-md/lib/Media/Media';

export default class Youtube extends Component {

  render(){
    const { url } = this.props;
    const parseUrl = url.replace("watch?v=", "embed/");
    return(
      <Media>
        <iframe allowFullScreen src={parseUrl} />
      </Media>

    )
  }
}
