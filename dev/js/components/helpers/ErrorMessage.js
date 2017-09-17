import React from 'react';

const ErrorMessage = ({error}) => {

    let output = ""
    switch (error) {
        case "invalid_grant":
            output = "Invalid user or password"
            break;
        default:
    }
    return(<span>{output}</span>)
}
ErrorMessage.propTypes = {
  error: React.PropTypes.string
}
export default ErrorMessage 