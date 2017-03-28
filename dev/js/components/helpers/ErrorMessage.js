import React, { Component } from 'react';

export default class ErrorMessage extends Component {

  render(){
    const { error } = this.props;
    let output = ""
    switch (error) {
        case "invalid_grant":
            output = "Invalid user or password"
            break;
        default:
    }
    return(<span>{output}</span>)
  }
}
ErrorMessage.propTypes = {
  error: React.PropTypes.string
}
