import React, { Component } from 'react';
export default class Label extends Component {

  getColor = () => {
    const { red, orange, yellow, olive, green, teal, blue, violet, pink, brown, grey, black } = this.props;
    let colorClass = "";
    if(red)colorClass += "label-red";
    else if(orange)colorClass += "label-orange";
    else if(yellow)colorClass += "label-yellow";
    else if(olive)colorClass += "label-olive";
    else if(green)colorClass += "label-green";
    else if(teal)colorClass += "label-teal";
    else if(blue)colorClass += "label-blue";
    else if(violet)colorClass += "label-violet";
    else if(pink)colorClass += "label-pink";
    else if(brown)colorClass += "label-brown";
    else if(grey)colorClass += "label-grey";
    else if(black)colorClass += "label-black";
    return colorClass;
  }
  render(){
    const { label, tooltip, value, colorValues, className, customColor, red, orange, yellow, olive, green, teal, blue, violet, pink, brown, grey, black } = this.props;
    let classProp = "label ";
    let colorValueClass = "";
    let colorClass = "";
    let dataValue = {}
    if (className) {
      classProp += className;
    }
    if (customColor) {
       return <span className={classProp} style={{backgroundColor: customColor}}>{label}</span>
    }else if(colorValues){
       for(let item of colorValues){
         if(item.values){
           if(item.values.indexOf(value) != -1){
             colorClass = "label-" + item.color;
             break;
           }else{;
             colorClass = this.getColor();
           }
         }else if(item.range){
           if(item.range[0] <= value && value <= item.range[1]){
             colorClass = "label-" + item.color;
           }else{
             colorClass = this.getColor();
           }
         }else{
           dataValue = {
             "data-percent":value
           }
         }
       }
     }else{
       colorClass = this.getColor();
     }
     classProp += " " + colorClass;
     return <span className={classProp} {...dataValue}>{label}</span>

  }
}
