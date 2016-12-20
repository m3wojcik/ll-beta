import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader, setTabs } from "../actions/AppActions"

@connect((store) => {
   return {
    toolbar: store.app.toolbar,
    tabs: store.app.tabs
  };
})
export default class MarksContainer extends Component {
  componentWillMount() {
    this.props.dispatch(setAppHeader('Marks'));
    this.props.dispatch(setTabs([]));
  }
  render(){
    return(
      <div>Marks</div>
    )
  }
}
