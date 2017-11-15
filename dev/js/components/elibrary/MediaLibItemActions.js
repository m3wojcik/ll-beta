import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'react-md/lib/Buttons';
import ActionsRow from '../helpers/ActionsRow'
import Loader from '../helpers/Loader'
export default class MediaLibItemActions extends Component {
  render(){
    const { item, available, reserved, inProgress, onReserveClick, onCancelReservationClick, onDetailsClick } = this.props;
    let output = [];
    if(available){
      output.push(<Button key="Reserve" primary flat
          onClick={onReserveClick.bind(this, item)}
        >
        <FormattedMessage 
          id="mediaLibItemActions.reserve"
          defaultMessage="Reserve"
        />
        </Button>)
    }else if (reserved) {
      let progress;
      if(inProgress){
        progress = {"disabled":true}
        output.push(<Loader inline key="loader" />)
      }
      output.push(<Button {...progress}
        key="Cancel reservation"
        primary
        flat
        onClick={onCancelReservationClick.bind(this, item)}
        >
          <FormattedMessage 
            id="mediaLibItemActions.cancelReservation"
            defaultMessage="Cancel reservation"
          />
        </Button>)
    }
    output.push(<Button key="Details" primary flat
      onClick={onDetailsClick.bind(this, item)}
      >
        <FormattedMessage 
            id="mediaLibItemActions.details"
            defaultMessage="Details"
          />
      </Button>)
    return(
      <ActionsRow>{output}</ActionsRow>
    )
  }
}
