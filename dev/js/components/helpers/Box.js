import React, { Component } from 'react';

export default class Box extends Component {

  render(){
    const { left, right, bottom, title, titleIcon, className, isScrolled } = this.props;
    let output=[], titleOutput = [], bottomOutput= [];
    let classProps = "box md-paper--1";
    if(className){
      classProps += " "+className;
    }
    if(isScrolled){
      classProps += " box-scrolled";
    }
    if(title){
      let titleText = title;
      titleOutput.push(
        <div key="title" className="box-top">
          <div class="box-title">{titleIcon ? titleIcon : null}{titleText}</div>
        </div>
      )
    }
    if(this.props.children){
      output.push(
        <div key="body" className="box-body">
          {this.props.children}
        </div>
      )
    }
    if(left){
      output.push(
        <div key="left" className="box-left">
          {left}
        </div>
      )
    }
    if(right){
      output.push(
        <div key="right" className="box-right">
          {right}
        </div>
      )
    }
    if(bottom){
      bottomOutput.push(
        <div key="bottom" className="box-bottom">
          {bottom}
        </div>
      )
    }
    return(
      <div className={classProps}>
        {titleOutput}
          {output}
        {bottomOutput}
      </div>
    )
  }
}
Box.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string,
  left: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  right: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  bottom: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}
