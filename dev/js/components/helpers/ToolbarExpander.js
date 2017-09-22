import React from 'react';

const ToolbarExpander = ({ left, right }) => {

    let output = [];
    if(left){
      output.push(<div key="left" className="toolbar-expander-left">{left}</div>);
    }
    if(right){
      output.push(<div key="right" className="toolbar-expander-right">{right}</div>);
    }
    return(
      <div className="md-paper md-paper--1 md-tabs-fixed-container toolbar-expander toolbar-expander-padding">
        <div className="toolbar-expander-body">
        {output}
        </div>
      </div>
    )
}
export default ToolbarExpander