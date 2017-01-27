import React, { Component } from 'react';
import { connect } from "react-redux";
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Button from 'react-md/lib/Buttons/Button';
import ElibraryReservationDate from '../components/ElibraryReservationDate';
import {setReserveElibraryObjectDates, postReserveElibraryObject } from "../actions/ElibraryListActions";
import {addDays} from '../actions/Functions'
import { addToast, removeToast } from "../actions/ToastsActions";

@connect((store) => {
   return {
     reservedObject:store.elibraryList.reservedObject
  };
})
export default class ElibraryReservationDateContainer extends Component {
  constructor(props){
    super(props);
    const today = new Date();
    this.state ={date: today};
  }
  componentDidMount(){
    const {reservedObject} = this.props;
    const dateTo = addDays(this.state.date, reservedObject.bookingPeriod);
    this.props.dispatch(setReserveElibraryObjectDates(this.state.date, dateTo));
  }
  handleReserveClick = () =>{
      const {reservedObject, onCancelClick} = this.props;
      //onCancelClick();
      this.props.dispatch(postReserveElibraryObject(reservedObject.id, reservedObject.dateFrom, reservedObject.dateTo, onCancelClick));
  }
  handleDateChange = (dateString, dateObject, event) =>{
    const {reservedObject} = this.props;
    const dateTo = addDays(dateObject, reservedObject.bookingPeriod);
    this.props.dispatch(setReserveElibraryObjectDates(dateObject, dateTo));
    this.setState({date: dateObject})
  }
  render(){
    const { onCancelClick , reservedObject} = this.props;
    return(
        <ElibraryReservationDate
        value={this.state.date}
        onCancelClick={onCancelClick}
        onReserveClick={this.handleReserveClick}
        inProgress={reservedObject.posting}
        onDateChange={this.handleDateChange} />
    )
  }
}
