import React, { Component } from 'react';

export default class ToolbarExpander extends Component {

  render(){
    const { left, right } = this.props;
    let output = [];
    if(left){
      output.push(<div key="left" className="toolbar-expander-left">{left}</div>);
    }
    if(right){
      output.push(<div key="right" className="toolbar-expander-right">{right}</div>);
    }
    return(
      <div className="md-paper md-paper--1 md-tabs-fixed-container toolbar-expander toolbar-expander-padding">
        {output}
      </div>
    )
  }
}
