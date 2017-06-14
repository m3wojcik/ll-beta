import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Chip from 'react-md/lib/Chips';

export default class ReceiverChips extends Component {
  render(){
     const { receivers, removeChip } = this.props;
     const chips = receivers.reverse().map(
       (receiver, i) => (
         <li key={receiver.id}>
           <Chip
             label={receiver.label}
             onClick={removeChip.bind(this, receiver)}
             removable
             avatar={<Avatar >{receiver.label.charAt(0)}</Avatar>}
           />
         </li>
     ));
    return(
      <ul class="list-horizontal">
        {chips}
      </ul>
    )
  }
}
