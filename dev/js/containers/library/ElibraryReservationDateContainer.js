import React, { Component } from 'react';
import { connect } from "react-redux";

import ElibraryReservationDate from '../../components/elibrary/ElibraryReservationDate';
import { setResevedDateFrom } from "../../actions/ElibraryListActions";

@connect((store) => {
   return {
     reservation: store.elibrary.reservation
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
    const { onCancelClick , reservation, onReserveClick} = this.props;
    return(
        <ElibraryReservationDate
        value={reservation.dateFrom}
        onCancelClick={onCancelClick}
        onReserveClick={onReserveClick}
        inProgress={reservation.saving}
        onDateChange={this.handleDateChange} />
    )
  }
}
