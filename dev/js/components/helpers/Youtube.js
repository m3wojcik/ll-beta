import React, { Component } from 'react';
import Media from 'react-md/lib/Media/Media';

export default class Youtube extends Component {

  render(){
    const { url } = this.props;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return(
      <Media>
        <iframe allowFullScreen src={"//www.youtube.com/embed/"+match[2]} />
      </Media>

    )
  }
}
