import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';
import { Chip } from 'react-md';
import TwoColumnTable from '../helpers/TwoColumnTable'

const messages = defineMessages({
  attendance: {
    id: 'StudentHistoryGroupDetails.attendance',
    defaultMessage: "Attendance"
  },
  teachers: {
    id: 'StudentHistoryGroupDetails.teachers',
    defaultMessage: "Teachers"
  },
  marks: {
    id: 'StudentHistoryGroupDetails.marks',
    defaultMessage: "Marks"
  },
  notes: {
    id: 'StudentHistoryGroupDetails.notes',
    defaultMessage: "Notes"
  }
})

const StudentHistoryGroupDetails = ({intl, group}) =>{
    let bookingDetails = []
    if(group.attendance){
      bookingDetails.push(
        {"label": intl.formatMessage(messages.attendance), "value": group.attendance}
      )
    }
    if(group.teachers){
      const teachers = group.teachers.map(
        (teacher, i) =>
        <Chip key={i} label={teacher.name} />
      )
      bookingDetails.push(
        {"label": intl.formatMessage(messages.teachers), "value": teachers}
      )
    }
    if(group.marks){
      const marks = group.marks.map(
        (mark, i) =>
        <Chip key={i} label={mark.name +" - "+mark.value} />
      )
      bookingDetails.push(
        {"label": intl.formatMessage(messages.marks), "value": marks}
      )
    }
    bookingDetails.push(
      {"label": intl.formatMessage(messages.notes), "value": null}
    )
    return(
      <TwoColumnTable details = {bookingDetails} />
    )
}
export default injectIntl(StudentHistoryGroupDetails)