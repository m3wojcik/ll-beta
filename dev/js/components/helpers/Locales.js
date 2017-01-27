import React, { Component } from 'react';
import { connect } from "react-redux";

@connect((store) => {
   return {
     locales: store.app.appData.locales
   };
})
export default class Locales extends Component {

  render(){
    const { type, locales } = this.props;
    let output;
    switch (type) {
      case "currency":
        output = locales.currency
        break;
      case "currencyCode":
        output = locales.currencyCode
        break;
    }
    return(
      <span>{output}</span>
    )
  }
}
Locales.propTypes = {
  type: React.PropTypes.string.isRequired
}
