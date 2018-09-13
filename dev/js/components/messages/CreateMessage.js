import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import AddressBookContainer from '../../containers/messages/AddressBookContainer'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';


const messages = defineMessages({
  receivers: {
    id: 'createMessage.receivers',
    defaultMessage: 'Receivers'
  },
  subject: {
    id: 'createMessage.subject',
    defaultMessage: 'Subject'
  },
  message: {
    id: 'createMessage.message',
    defaultMessage: 'Message'
  },
  send: {
    id: 'createMessage.send',
    defaultMessage: 'Send'
  }
})
const CreateMessage =({intl, subject, text, onSubjectChange, onTextChange, onSendClick}) =>{
    return(
      <form class="ui form">
          <div className="field">
            <label>{intl.formatMessage(messages.receivers)}</label>
            <AddressBookContainer />
          </div>
          <div className="field">
            <label>{intl.formatMessage(messages.subject)}</label>
            <input value={subject} onChange={onSubjectChange} name="subject" type="text"/>
          </div>
          <div className="field">
            <label>{intl.formatMessage(messages.message)}</label>
            <textarea value={text} onChange={onTextChange} ></textarea>
          </div>
          <Button raised primary onClick={onSendClick}>{intl.formatMessage(messages.send)}</Button>
        </form>
    )
}
export default injectIntl(CreateMessage)
