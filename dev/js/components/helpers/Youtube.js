import React from 'react';
import Media from 'react-md/lib/Media/Media';

const Youtube = ({url}) => {

    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return(
      <Media>
        <iframe allowFullScreen src={"//www.youtube.com/embed/"+match[2]} />
      </Media>

    )
}
export default Youtube