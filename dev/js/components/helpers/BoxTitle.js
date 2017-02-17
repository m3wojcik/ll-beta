import React, { Component } from 'react';

export default class BoxTitle extends Component {

  render(){
    const {title, titleIcon, className} = this.props;
    let  titleOutput = []
    let classProps = "";
    if(className){
      classProps += " "+className;
    }

    return(
      <div key="title" className={classProps}>
        <div class="box-title">{titleIcon ? titleIcon : null}{title}</div>
      </div>
    )
  }
}
BoxTitle.propTypes = {
  title: React.PropTypes.string,
  className: React.PropTypes.string,
}
