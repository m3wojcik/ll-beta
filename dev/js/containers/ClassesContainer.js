import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../actions/AppActions";
import { fetchUpcomingClasses } from "../actions/ClassesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Classes from '../components/Classes'


@connect((store) => {
   return {

    page: store.app.page,
    tabs: store.app.tabs,
    classes: store.classes.classes,
    fetched: store.classes.fetched,
    fetching: store.classes.fetching
  };
})
export default class ClassesContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchUpcomingClasses(function () {
      this.props.onLoad();
    }.bind(this)));
  }
  render(){
    const { classes } = this.props;
    return(
      <div className="content content-tabs">
        <Classes classes={classes} />
      </div>
    )
  }
}
