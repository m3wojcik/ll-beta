import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import TwoColumnTable from '../helpers/TwoColumnTable'
export default class MediaLibItemDetails extends Component {
  render(){
    const { item, available, borrowed, reserved } = this.props;
    let bookingDetails = [];

    if(item.date_from && reserved){
      bookingDetails.push({"label": "Reservation from","value": <FormattedDate value={item.date_from} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.date_to && reserved){

      bookingDetails.push({"label": "Reservation to","value": <FormattedDate value={item.date_to} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.from && borrowed){
      bookingDetails.push({"label": "Borrowed from","value": <FormattedDate value={item.from} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.to && borrowed){
      let dateTo = new Date(item.to);
      console.log('dateTo',item.to,dateTo);
      bookingDetails.push({"label": "Return date","value": <FormattedDate value={dateTo} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.quantity_available){
      bookingDetails.push({"label": "Available units","value": item.quantity_available})
    }
    if(item.school){
      bookingDetails.push({"label": "Department","value": item.school})
    }if(item.deposit){
      bookingDetails.push({"label": "deposit","value": item.deposit})
    }
    if(item.reservation_days && !borrowed){
      bookingDetails.push({"label": "Booking period","value": item.reservation_days+" days"})
    }
    return(
      <TwoColumnTable details = {bookingDetails} />
    )
  }
}
