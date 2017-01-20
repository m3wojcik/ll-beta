import React, { Component } from 'react';

export default class DrawerBody extends Component {

  render(){
    const { className } = this.props;
    let classProps = "drawer-body";
    if(className){
        classProps += " "+{className}
    }
    return(
      <div className={classProps}>
        {this.props.children}
      </div>
    )
  }
}
