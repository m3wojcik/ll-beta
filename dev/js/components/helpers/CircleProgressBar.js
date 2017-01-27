import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
export default class CircleProgressBar extends Component {

  render(){
    const { percentage, strokeWidth, size, textForPercentage, color } = this.props;
    let propsClass, propsPercentage, propsClassForPercentage, propsColor;
    if(size){
      if(size =="tiny"){
        propsClass = {
          className : "progress-tiny"
        }
      }else if(size =="small"){
        propsClass = {
          className : "progress-small"
        }
      }else if(size =="large"){
        propsClass = {
          className : "progress-large"
        }
      }else if(size =="big"){
        propsClass = {
          className : "progress-big"
        }
      }
    }
    if(textForPercentage){
      propsPercentage = {
        textForPercentage: textForPercentage
      }
    }
    if(color){
      propsClass.className += " circular-"+ color
    }else{
      propsClassForPercentage = {
        classForPercentage: (percentage) => {
          if(percentage < 10) {
              return 'progress-0'
          }else if(percentage < 20) {
              return 'progress-10'
          }else if(percentage < 30) {
              return 'progress-20'
          }else if(percentage < 40) {
              return 'progress-30'
          }else if(percentage < 50) {
              return 'progress-40'
          }else if(percentage < 60) {
              return 'progress-50'
          }else if(percentage < 70) {
              return 'progress-60'
          }else if(percentage < 80) {
              return 'progress-70'
          }else if(percentage < 90) {
              return 'progress-80'
          }else if(percentage < 100) {
              return 'progress-90'
          }else if(percentage == 100) {
              return 'progress-100'
          }
        }
      }
    }
    return(
      <div {...propsClass} >
        <CircularProgressbar
          {...propsPercentage}
          key="CircularProgressbar"
          strokeWidth={strokeWidth}
          initialAnimatione
          percentage={percentage}
          {...propsClassForPercentage}
          />
      </div>
    )
  }
}
