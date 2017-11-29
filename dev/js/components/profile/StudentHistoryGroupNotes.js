import React, { Component } from 'react';
import {FormattedDate} from 'react-intl';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';
import { Chip, Card, CardTitle, CardText } from 'react-md';
import TwoColumnTable from '../helpers/TwoColumnTable'

const messages = defineMessages({
  notes: {
    id: 'StudentHistoryGroupDetails.notes',
    defaultMessage: "Notes"
  }
})

const StudentHistoryGroupNotes = ({intl, group}) =>{
    let bookingDetails = [], notes
    if(group.notes){
      notes = group.notes.map(
        (note, i) =>
        <Card key={i} className="note">
          <CardTitle title={note.date} subtitle={note.tag} />
          <CardText>{note.note}</CardText>
        </Card>
      )
    }
    return(
      <div>{notes}</div>
    )
}
export default injectIntl(StudentHistoryGroupNotes)