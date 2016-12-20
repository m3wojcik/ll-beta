import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../actions/AppActions"

@connect((store) => {
   return {
    page: store.app.page,
    tabs: store.app.tabs
  };
})
export default class ClassesContainer extends Component {
  componentWillMount() {
    this.props.dispatch(setAppHeader('Classes'));
  }
  componentDidMount(){
    console.log(this.props.tabs.tabsContainer);
    if(this.props.tabs.tabsContainer != null){
      console.log('update');
      this.props.tabs.tabsContainer.forceUpdate();
    }
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
