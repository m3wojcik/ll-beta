import React from 'react';

const Box = ( {children, left, right, bottom, title, subtitle, titleIcon, className, isScrolled, topRight} ) => {

    let output=[], titleOutput = [], bottomOutput= [], topOutput, subtitleOutput;
    let classProps = "box md-paper--1";
    if(className){
      classProps += " "+className;
    }
    if(isScrolled){
      classProps += " box-scrolled";
    }
    if(title){
      let titleText = title;
      if(topRight){
        topOutput = <div className="box-top-right">{topRight}</div>
      }
      if(subtitle){
        subtitleOutput = <div className="box-title-subtitle">{subtitle}</div>
      }
      titleOutput.push(
        <div key="title" className={titleIcon ? "box-top box-top-icon" : "box-top"}>
          {titleIcon ? titleIcon : null} <div class="box-title">{titleText}{subtitleOutput}</div>
          {topOutput}
        </div>
      )
    }
    if(children){
      output.push(children)
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
        <div key="body" className="box-body">
          {output}
        </div>
        {bottomOutput}
      </div>
    )
}
Box.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
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
  ]),
  topRight: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}
export default Box