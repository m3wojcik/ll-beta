import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchMarks } from "../actions/MarksActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Marks from '../components/Marks'

@connect((store) => {
   return {
    marks: store.marks.marks,
    fetched: store.marks.fetched,
    fetching: store.marks.fetching
  };
})
export default class MarksContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchMarks());
  }
  render(){
    const { fetched, marks } = this.props;
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
          <Marks marks={marks} />
      </div>
    )
  }
}
