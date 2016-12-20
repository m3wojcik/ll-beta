import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../actions/AppActions"

// @connect((store) => {
//    return {
//     toolbar: store.app.toolbar
//   };
// })
export default class NotificationsContainer extends Component {
  // componentWillMount() {
  //   this.props.dispatch(setAppHeader('Notifications'));
  // }
  render(){
    return(
      <div>Notifications<br /> <br />sdada</div>
    )
  }
}
