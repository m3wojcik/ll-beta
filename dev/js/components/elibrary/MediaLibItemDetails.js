import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';
import TwoColumnTable from '../helpers/TwoColumnTable'

const messages = defineMessages({
  reservationFrom: {
    id: 'mediaLibItemDetails.reservationFrom',
    defaultMessage: "Reservation from"
  },
  reservationTo: {
    id: 'mediaLibItemDetails.reservationTo',
    defaultMessage: "Reservation to"
  },
  borrowedFrom: {
    id: 'mediaLibItemDetails.borrowedFrom',
    defaultMessage: "Borrowed from"
  },
  returnDate: {
    id: 'mediaLibItemDetails.returnDate',
    defaultMessage: "Return date"
  },
  availableUnits: {
    id: 'mediaLibItemDetails.availableUnits',
    defaultMessage: "Available units"
  },
  department: {
    id: 'mediaLibItemDetails.department',
    defaultMessage: "Department"
  },
  deposit: {
    id: 'mediaLibItemDetails.deposit',
    defaultMessage: "deposit"
  },
  bookingPeriod: {
    id: 'mediaLibItemDetails.bookingPeriod',
    defaultMessage: "Booking period"
  }
})

const MediaLibItemDetails = ({intl, item, available, borrowed, reserved}) =>{
    let bookingDetails = [];

    if(item.date_from && reserved){
      bookingDetails.push({"label": intl.formatMessage(messages.reservationFrom),"value": <FormattedDate value={item.date_from} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.date_to && reserved){

      bookingDetails.push({"label": intl.formatMessage(messages.reservationTo),"value": <FormattedDate value={item.date_to} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.from && borrowed){
      bookingDetails.push({"label": intl.formatMessage(messages.borrowedFrom),"value": <FormattedDate value={item.from} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.to && borrowed){
      let dateTo = new Date(item.to);
      bookingDetails.push({"label": intl.formatMessage(messages.returnDate),"value": <FormattedDate value={dateTo} day="numeric" month="numeric" year="numeric" />})
    }
    if(item.quantity_available){
      bookingDetails.push({"label": intl.formatMessage(messages.availableUnits),"value": item.quantity_available})
    }
    if(item.school){
      bookingDetails.push({"label": intl.formatMessage(messages.department),"value": item.school})
    }if(item.deposit){
      bookingDetails.push({"label": intl.formatMessage(messages.deposit),"value": item.deposit})
    }
    if(item.reservation_days && !borrowed){
      bookingDetails.push({"label": intl.formatMessage(messages.bookingPeriod),"value": item.reservation_days+" days"})
    }
    return(
      <TwoColumnTable details = {bookingDetails} />
    )
}
export default injectIntl(MediaLibItemDetails)