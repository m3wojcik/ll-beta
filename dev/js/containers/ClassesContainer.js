import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader, setPageLoaded } from "../actions/AppActions"

@connect((store) => {
   return {
    page: store.app.page,
    tabs: store.app.tabs
  };
})
export default class ClassesContainer extends Component {
  componentWillMount() {
      this.props.dispatch(setPageLoaded(false));
    this.props.dispatch(setAppHeader('Classes'));
  }
  componentDidMount(){
    this.props.dispatch(setPageLoaded(true));
  }
  render(){
    if(this.props.page.isLoading){
      return(
        <div>loading</div>
      )
    }
    return(
      <div>Classes</div>
    )
  }
}
