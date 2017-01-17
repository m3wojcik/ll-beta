import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchElibraryList } from "../actions/ElibraryListActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ElibraryList from '../components/ElibraryList'


@connect((store) => {
   return {
     toolbar: store.app.toolbar,
     elibraryList: store.elibraryList.elibraryList,
     fetched: store.elibraryList.fetched,
     fetching: store.elibraryList.fetching
  };
})
export default class ElibraryListContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchElibraryList());
  }
  componentWillReceiveProps(nextProps){
    const { fetched, onLoad } = this.props;
    if(fetched != nextProps.fetched){
      onLoad();
    }
  }
  render(){
    const { fetched, elibraryList,toolbar } = this.props;
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content-no-padding">
          <ElibraryList searchValue={toolbar.searchValue} elibraryList={elibraryList}/>
      </div>
    )
  }
}
