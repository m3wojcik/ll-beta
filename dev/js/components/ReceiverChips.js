import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Chip from 'react-md/lib/Chips';

export default class ReceiverChips extends Component {
  render(){
     const { receivers, remove } = this.props;
     const chips = receivers.map(
       (receiver, i) => (
         <li key={receiver.id}>
           <Chip
             label={receiver.name}
             onClick={remove.bind(this,i,receiver.id)}
             removable
             avatar={<Avatar random>{receiver.name.charAt(0)}</Avatar>}
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
