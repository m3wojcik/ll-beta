import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../actions/AppActions"

@connect((store) => {
   return {
    page: store.app.page,
    tabs: store.app.tabs
  };
})
export default class NotificationsContainer extends Component {
  // componentWillMount() {
  //   this.props.dispatch(setAppHeader('Notifications'));
  // }
  componentDidMount(){
    this.props.onLoad();
  }
  render(){
    return(
      <div>Notifications<br /> <br />sdada</div>
    )
  }
}
