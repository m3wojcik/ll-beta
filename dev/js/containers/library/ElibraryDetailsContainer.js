import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchElibraryDetails } from "../../actions/ElibraryDetailsActions";
import Loader from '../../components/helpers/Loader'
import MediaLibItemDetails from '../../components/elibrary/MediaLibItemDetails'

@connect((store) => {
   return {
    elibraryDetails: store.elibraryDetails.elibraryDetails.details,
    fetched: store.elibraryDetails.elibraryDetails.fetched,
    fetching: store.elibraryDetails.elibraryDetails.fetching
  };
})
export default class ElibraryDetailsContainer extends Component {
  componentDidMount(){
    const {id} = this.props;
    this.props.dispatch(fetchElibraryDetails({group_id: id}));
  }
  render(){
    const { fetched,elibraryDetails, id } = this.props;
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
