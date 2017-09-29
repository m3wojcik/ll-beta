import React, { Component } from 'react';
import Collapse from 'react-md/lib/Helpers/Collapse';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons';
export default class CustomListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false, collapsed: true}
  }
  handleMouseOver = () =>{
    const {active} = this.state;
    if(!active)this.setState({active: true});
  }
  handleMouseLeave = () =>{
    const {active} = this.state;
    if(active)this.setState({active: false});
  }
  handleCollapseClick = () =>{
    const { collapsed} = this.state;
    if(collapsed) this.setState({collapsed: false});
    else this.setState({collapsed: true});
  }
  render(){
    const { header, primaryText, rightIcon, secondaryText, bottomText, clickable, expander, expanderBreaks, status, leftIcon, leftPrimaryIcon, inactive, onClick, className } = this.props;
    let output, right, left, cName, liClassName, expanderOutput, bottomOutput, onClickProp, headerOutput, leftPrimary;
    cName ="";
    liClassName = expanderBreaks ? "md-list-item custom-list-item" : "md-list-item"
    if(clickable){
      cName+=" clickable"
      if(this.state.active){
        cName +=" md-list-tile--active"
      }
    }
    if(inactive){
      liClassName += " inactive";
    }
    if(leftIcon){
      left = <div className="md-tile-addon md-tile-left">{leftIcon}</div>
    }
    if(leftPrimaryIcon){
      leftPrimary = <div className="md-tile-addon md-tile-left-primary">{leftPrimaryIcon}</div>
    }
    if(bottomText){
      cName += " md-list-tile--bottom-lines"
      output = <div className="md-tile-text--secondary md-text--secondary">{secondaryText}</div>
      bottomOutput = <div className="md-list-bottom">{bottomText}</div>
    }else if(header){
      cName += " md-list-tile--header-lines"
      output = <div className="md-tile-text--secondary md-text--secondary">{secondaryText}</div>
      headerOutput = <div className="md-tile-header">{header}</div>
    }else{
      cName += " md-list-tile--two-lines"
      output = <div className="md-tile-text--secondary md-text--secondary">{secondaryText}</div>
    }
    if(rightIcon && !expander){
      right = <div className="md-list-right">{rightIcon}</div>
    }
    if(expander){
      onClickProp = {
        onClick: this.handleCollapseClick
      }
      expanderOutput = <Collapse collapsed={this.state.collapsed}><div className=" list-expander">{expander}</div></Collapse>
      right = <div className="md-list-right"><div className="md-list-status">{status}</div><Button icon className={this.state.collapsed ? "md-collapser" : "md-collapser md-collapser--flipped"}>keyboard_arrow_down</Button></div>
    }else if(status){
      right = <div className="md-list-right">{status}</div>
    }
    if(onClick){
      onClickProp = {
        onClick: onClick
      }
    }
    if(!this.state.collapsed) liClassName += " md-expansion-panel--expanded"
    if(className) liClassName += " "+className
    return(
      <li className={liClassName}>
        <div {...onClickProp} onMouseOver={this.handleMouseOver} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}  className={cName}>
        
          <div className="md-list-body md-list-tile md-fake-button">  
            {left}
            <div className="md-tile-content">
              {headerOutput}
              {leftPrimary}
              <div className="md-tile-text--primary md-text">
                {primaryText}
              </div>
              {output}
            </div>
            {right}
          </div>
          {bottomOutput}
        </div>
          {expanderOutput}
      </li>
    )
  }
}
