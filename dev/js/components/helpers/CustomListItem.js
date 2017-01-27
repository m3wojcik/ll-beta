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
  handleClick = () =>{
    const { collapsed} = this.state;
    if(collapsed) this.setState({collapsed: false});
    else this.setState({collapsed: true});
  }
  render(){
    const { primaryText,rightIcon,secondaryText, clickable, expander, status } = this.props;
    let output, right, className, liClassName, expanderOutput;
    className ="md-list-tile md-fake-button";
    liClassName = "md-list-item";
    if(clickable){
      className+=" clickable"
      if(this.state.active){
        className +=" md-list-tile--active"
      }
    }
    if(secondaryText){
      className += " md-list-tile--two-lines"
      output = <div className="md-tile-text--secondary md-text--secondary">{secondaryText}</div>
    }
    if(rightIcon && !expander){
      right = <div className="md-tile-addon md-tile-addon--icon">{rightIcon}</div>
    }
    if(expander){
      expanderOutput = <Collapse collapsed={this.state.collapsed}><div className=" list-expander">{expander}</div></Collapse>
      right = <div className="md-list-right"><div className="md-list-status">{status}</div><Button icon className={this.state.collapsed ? "md-collapser" : "md-collapser md-collapser--flipped"}>keyboard_arrow_down</Button></div>
    }else if(status){
      right = <div className="md-list-right"><div className="md-list-status">{status}</div></div>
    }else if(status){
    }
    return(
      <li className={liClassName}>
        <div onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}  className={className}>
          <div className="md-tile-content md-tile-content--right-padding">
            <div className="md-tile-text--primary md-text">
              {primaryText}
            </div>
            {output}
          </div>
          {right}
        </div>

          {expanderOutput}

      </li>
    )
  }
}
