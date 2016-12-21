import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppHeader } from "../actions/AppActions";
import { fetchUpcomingClasses } from "../actions/ClassesActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

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
  componentWillMount() {

    this.props.dispatch(fetchUpcomingClasses());
  }
  componentDidMount(){
    this.props.onLoad();
  }
  render(){
    const { classes } = this.props;
    const mappedClasses = classes.map(cla => <li key={cla.id}>{cla.name}</li>)

    return(
      <div>

        Classes:
        <ul>
          {mappedClasses}
        </ul>


      </div>

    )
  }
}
