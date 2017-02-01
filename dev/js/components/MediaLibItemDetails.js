import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import TwoColumnTable from './helpers/TwoColumnTable'
export default class MediaLibItemDetails extends Component {
  render(){
    const { item } = this.props;
    let bookingDetails = [];
    if(item.dateFrom && item.status == "reserved"){
      bookingDetails.push({"label": "Reservation from","value": <FormattedDate value={item.dateFrom} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.dateTo && item.status == "reserved"){
      bookingDetails.push({"label": "Reservation to","value": <FormattedDate value={item.dateTo} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.dateFrom && item.status == "borrowed"){
      bookingDetails.push({"label": "Borrowed from","value": <FormattedDate value={item.dateFrom} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.dateReturn && item.status == "borrowed"){
      bookingDetails.push({"label": "Return date","value": <FormattedDate value={item.dateReturn} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.availableUnits && item.status == "available"){
      bookingDetails.push({"label": "Available units","value": item.availableUnits})
    }
    if(item.department){
      bookingDetails.push({"label": "Department","value": item.department})
    }if(item.deposit){
      bookingDetails.push({"label": "deposit","value": item.deposit})
    }
    if(item.bookingPeriod && item.status != "borrowed"){
      bookingDetails.push({"label": "Booking period","value": item.bookingPeriod})
    }
    return(
      <TwoColumnTable details = {bookingDetails} />
    )
  }
}
