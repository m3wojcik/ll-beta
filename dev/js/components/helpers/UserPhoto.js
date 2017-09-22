import React, { Component } from 'react';

const UserPhoto = ({ src, className, small, medium, large }) => {

    let classProp ="user-photo ";
    if (className) {
      classProp += className
    }
    if (small) classProp += " small"
    else if (medium) classProp += " medium"
    else if (large) classProp += " large"

    let output;
    if (src) {
      output = <div className={classProp} style={{backgroundImage: "url('" + src + "')"}} />
    }else{
      <div className={classProp}/>
    }
    return(
      <div>{output}</div>
    )
}
export default UserPhoto