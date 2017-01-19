import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchElibraryDetails } from "../actions/ElibraryDetailsActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import MediaLibItemDetails from '../components/MediaLibItemDetails'

@connect((store) => {
   return {
    elibraryDetails: store.elibraryDetails.elibraryDetails,
    fetched: store.elibraryDetails.fetched,
    fetching: store.elibraryDetails.fetching
  };
})
export default class ElibraryDetailsContainer extends Component {
  componentDidMount(){
    const {id} = this.props.id;
    this.props.dispatch(fetchElibraryDetails());
  }
  render(){
    const { fetched,elibraryDetails } = this.props;
    if(!fetched){
      return(
          <CircularProgress id="loading-classes" key="loading"  />
      )
    }
    return(
      <MediaLibItemDetails item={elibraryDetails} />
    )
  }
}
