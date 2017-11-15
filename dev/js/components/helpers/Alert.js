import React from 'react';

const Alert = ({text, type}) =>{
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
      <div className={classProps}>{text}</div> : null
    )
}
Alert.propTypes = {
  type: React.PropTypes.string.isRequired
}
export default Alert