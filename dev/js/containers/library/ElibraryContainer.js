import React, { Component } from 'react';
import { connect } from "react-redux";
import Content from '../../components/helpers/Content'
import ElibraryListContainer from './ElibraryListContainer'
import ElibraryBookingsContainer from './ElibraryBookingsContainer'
import ElibraryReservationsContainer from './ElibraryReservationsContainer'


@connect((store) => {
   return {
     toolbar: store.app.toolbar
  };
})
export default class ElibraryContainer extends Component {
  render(){
    return(
      <Content noPadding>
        <ElibraryBookingsContainer />
        <ElibraryReservationsContainer />
        <ElibraryListContainer />
      </Content>
    )
  }
}
