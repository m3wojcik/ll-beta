import React, { Component } from 'react';
import { connect } from "react-redux";
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Button from 'react-md/lib/Buttons/Button';
import ElibraryReservationDate from '../../components/elibrary/ElibraryReservationDate';
import {setReserveElibraryObjectDates, postReserveElibraryObject } from "../../actions/ElibraryListActions";
import {addDays} from '../../actions/Functions'
import { addToast, removeToast } from "../../actions/ToastsActions";

// @connect((store) => {
//    return {
//      reservedObject:store.elibraryList.reservedObject
//   };
// })
export default class ElibraryReservationDateContainer extends Component {
  constructor(props){
    super(props);
    const today = new Date();
    this.state ={
      dateFrom: today
    };
  }
  componentDidMount(){
    const {reservedObject} = this.props;
    const dateTo = addDays(this.state.dateFrom, reservedObject.reservation_days);
    //this.props.dispatch(setReserveElibraryObjectDates(this.state.dateFrom, dateTo));
  }
  handleReserveClick = () =>{
      const {reservedObject, onCancelClick} = this.props;

      this.props.dispatch(postReserveElibraryObject(reservedObject.id, reservedObject.dateFrom, reservedObject.dateTo, onCancelClick));
  }
  handleDateChange = (dateString, dateObject, event) =>{
    const {reservedObject} = this.props;
    const dateTo = addDays(dateObject, reservedObject.bookingPeriod);
    //this.props.dispatch(setReserveElibraryObjectDates(dateObject, dateTo));
    this.setState({dateFrom: dateObject})
  }
  render(){
    const { onCancelClick , reservedObject} = this.props;
    return(
        <ElibraryReservationDate
        value={this.state.dateFrom}
        onCancelClick={onCancelClick}
        onReserveClick={this.handleReserveClick}
        inProgress={reservedObject.posting}
        onDateChange={this.handleDateChange} />
    )
  }
}
