import React, { Component } from 'react';
import { connect } from "react-redux";
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Button from 'react-md/lib/Buttons/Button';
import ElibraryReservationDate from '../components/ElibraryReservationDate';
import {setReserveElibraryObjectDateFrom, postReserveElibraryObject } from "../actions/ElibraryListActions";

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
    this.props.dispatch(setReserveElibraryObjectDateFrom(this.state.date));
  }
  handleReserveClick = () =>{
      const {reservedObject} = this.props;
      console.log('reserve',reservedObject.id, reservedObject.dateFrom);
      this.props.dispatch(postReserveElibraryObject(reservedObject.id, reservedObject.dateFrom));
  }
  handleDateChange = (dateString, dateObject, event) =>{
      this.props.dispatch(setReserveElibraryObjectDateFrom(dateObject));
      this.setState({date: dateObject})
  }
  render(){
     const { onCancelClick , reservedObject} = this.props;
    return(
        <ElibraryReservationDate
        value={this.state.date}
        onCancelClick={onCancelClick}
        onReserveClick={this.handleReserveClick}
        onDateChange={this.handleDateChange} />
    )
  }
}
