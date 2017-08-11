import React, { Component } from 'react';

export default class Alert extends Component {

  render(){
    const { text, type } = this.props;
    let classProps = 'alert';
    if(type == "info"){
        classProps +=' info'
    }else if(type == "danger"){
        classProps +=' danger'
    }else if(type == "warning"){
        classProps +=' warning'
    }else if(type == "success"){
        classProps +=' success'
    }else if(type == "transparent"){
        classProps +=' transparent'
    }
    return(
        text ?
      <div className={classProps} dangerouslySetInnerHTML={{__html:text}} /> : null
    )
  }
}
Alert.propTypes = {
  type: React.PropTypes.string.isRequired,
  text: React.PropTypes.string
}
