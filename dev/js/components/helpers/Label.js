import React, { Component } from 'react';

export default class Label extends Component {

  render(){
    const { label, className, customColor, red, orange, yellow, olive, green, teal, blue, violet, pink, brown, grey, black } = this.props;
    let classProp = "label ";
    if (className) {
      classProp += className;
    }
     if (customColor) {
       return <span className={classProp} style={{backgroundColor: customColor}}>{label}</span>
     }else if(red)classProp += " label-red";
     else if(orange)classProp += " label-orange";
     else if(yellow)classProp += " label-yellow";
     else if(olive)classProp += " label-olive";
     else if(green)classProp += " label-green";
     else if(teal)classProp += " label-teal";
     else if(blue)classProp += " label-blue";
     else if(violet)classProp += " label-violet";
     else if(pink)classProp += " label-pink";
     else if(brown)classProp += " label-brown";
     else if(grey)classProp += " label-grey";
     else if(black)classProp += " label-black";
     return <span className={classProp}>{label}</span>
  }
}
