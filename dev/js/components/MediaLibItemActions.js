import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import ActionsRow from './helpers/ActionsRow'
import Loader from './helpers/Loader'
export default class MediaLibItemActions extends Component {
  render(){
    const { item, available, reserved, inProgress, onReserveClick, onCancelReservationClick, onDetailsClick } = this.props;
    let output = [];
    if(available){
      output.push(<Button key="Reserve" primary flat label="Reserve"
          onClick={onReserveClick.bind(this, item)}
        />)
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
        label="Cancel reservation"
        onClick={onCancelReservationClick.bind(this, item)}
        />)
    }
    output.push(<Button key="Details" primary flat label="Details"
      onClick={onDetailsClick.bind(this, item)}
      />)
    return(
      <ActionsRow>{output}</ActionsRow>
    )
  }
}
