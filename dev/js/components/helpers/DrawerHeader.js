import React, { Component } from 'react';

export default class DrawerHeader extends Component {

  render(){
    const { className } = this.props;
    let classProps = "drawer-header";
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
