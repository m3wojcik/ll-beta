import React from 'react';

const Avatar =({ blob, src, w, h })=> {
    let styles;
    if(src){
      styles = {
        backgroundImage: "url('" + src + "')",
        width: w+"px",
        height:h+"px"
      }
    }else if(blob){

    }else{
      styles = {
        width: w+"px",
        height:h+"px"
      }
    }
    return <div className="avatar" style={styles}/>
}
export default Avatar