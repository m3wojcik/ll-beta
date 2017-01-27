import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchElibraryDetails } from "../actions/ElibraryDetailsActions";
import Loader from '../components/helpers/Loader'
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
          <Loader center key="loader" />
      )
    }
    return(
      <MediaLibItemDetails item={elibraryDetails} />
    )
  }
}
