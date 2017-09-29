import React, { Component } from 'react';
import Collapse from 'react-md/lib/Helpers/Collapse';
//import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons';

export default class FeedItem extends Component {
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
    const {header, subHeader, body, bottom, className, expander, onClick, iconLeft} = this.props
    const {active, collapsed} = this.state 
    let onClickProp, headerOutput, subHeaderOutput, bodyOutput, bottomOutput, expanderOutput, headerActionsOutput, iconLeftOutput;
    let cssClass = "feed-item " 

    cssClass += className ? className : null

    if(active) cssClass += " feed-active"
    if(!collapsed) cssClass += " feed-expanded"
    if(expander){
      onClickProp = {
        onClick: this.handleCollapseClick
      }
      expanderOutput = <Collapse collapsed={this.state.collapsed}><div className="feed-expander">{expander}</div></Collapse>
      headerActionsOutput = <div className="feed-header-actions"><Button icon className={this.state.collapsed ? "md-collapser" : "md-collapser md-collapser--flipped"}>keyboard_arrow_down</Button></div>
    }else if(onClick){
      onClickProp = {
        onClick: onClick
      }
    }
    //HEADER
    if(iconLeft) iconLeftOutput = <div className="feed-header-icon">{iconLeft}</div>
    if(subHeader) subHeaderOutput = <div className="feed-subheader-text">{subHeader}</div>
    if(header) headerOutput = <div className="feed-header">{iconLeftOutput}<div className="feed-header-main"><div className="feed-header-text">{header}</div>{subHeaderOutput}</div>{headerActionsOutput}</div>
    //BODY
    if(body) bodyOutput = <div className="feed-body">{body}</div>
    //Bottom
    if(bottom) bottomOutput = <div class="feed-bottom">{bottom}</div>
    return(
      <div {...onClickProp} className={cssClass} onMouseOver={this.handleMouseOver} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
          {headerOutput}
          {bodyOutput}
          {bottomOutput}
          {expanderOutput}
      </div>
    )
  }
}
FeedItem.propTypes = {
  header: React.PropTypes.object
}