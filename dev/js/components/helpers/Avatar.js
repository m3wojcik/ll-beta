import React, { Component } from 'react';

export default class Avatar extends Component {

  render(){
    const { blob, src, w, h } = this.props;
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
}
