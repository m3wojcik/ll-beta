import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import TwoColumnTable from '../helpers/TwoColumnTable'
export default class MediaLibItemDetails extends Component {
  render(){
    const { item } = this.props;
    let bookingDetails = [];
    if(item.from && item.status == "reserved"){
      bookingDetails.push({"label": "Reservation from","value": <FormattedDate value={item.from} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.to && item.status == "reserved"){
      bookingDetails.push({"label": "Reservation to","value": <FormattedDate value={item.to} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.from && item.status == "borrowed"){
      bookingDetails.push({"label": "Borrowed from","value": <FormattedDate value={item.from} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.dateReturn && item.status == "borrowed"){
      bookingDetails.push({"label": "Return date","value": <FormattedDate value={item.dateReturn} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.quantity_available && item.status == "available"){
      bookingDetails.push({"label": "Available units","value": item.quantity_available})
    }
    if(item.department){
      bookingDetails.push({"label": "Department","value": item.department})
    }if(item.deposit){
      bookingDetails.push({"label": "deposit","value": item.deposit})
    }
    if(item.reservation_days && item.status != "borrowed"){
      bookingDetails.push({"label": "Booking period","value": item.reservation_days})
    }
    return(
      <TwoColumnTable details = {bookingDetails} />
    )
  }
}
