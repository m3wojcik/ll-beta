import React, { Component } from 'react';

export default class Content extends Component {
  render(){
    const { noPadding, tabs, expander } = this.props;
    let classProps = "";
    if(noPadding && tabs){
      classProps = "content-no-padding content-tabs"
    }else if(noPadding && expander){
      classProps = "content-no-padding content-expander"
    }else if(noPadding){
      classProps = "content-no-padding"
    }else if(tabs){
      classProps = "content content-tabs"
    }else{
      classProps = "content";
    }
    return(
      <div className="content-container">
        <div className={classProps}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
