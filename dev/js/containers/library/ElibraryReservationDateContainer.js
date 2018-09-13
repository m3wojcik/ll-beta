import React, { Component } from 'react';
import { connect } from "react-redux";

import ElibraryReservationDate from '../../components/elibrary/ElibraryReservationDate';
import { setResevedDateFrom } from "../../actions/ElibraryListActions";

@connect((store) => {
   return {
     reservation: store.elibrary.reservation,
     locales: store.app.appData.locales
  };
})
export default class ElibraryReservationDateContainer extends Component {
  componentDidMount(){
    const today = new Date()
    this.props.dispatch(setResevedDateFrom(today))
  }
 
  handleDateChange = (dateString, dateObject, event) =>{
    this.props.dispatch(setResevedDateFrom(dateObject))
  }
  render(){
    const { locales, onCancelClick , reservation, onReserveClick} = this.props;
    return(
        <ElibraryReservationDate
        value={reservation.dateFrom}
        onCancelClick={onCancelClick}
        onReserveClick={onReserveClick}
        inProgress={reservation.saving}
        locales={locales}
        onDateChange={this.handleDateChange} />
    )
  }
}
