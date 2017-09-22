import React from 'react';

const FileSize = ({size}) =>{
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    const humanSize =  (size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    return(
       <span>{humanSize}</span>
    )
}
FileSize.propTypes = {
  size: React.PropTypes.number.isRequired
}
export default FileSize