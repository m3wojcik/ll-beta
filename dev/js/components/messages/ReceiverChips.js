import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Chip from 'react-md/lib/Chips';
import Button from 'react-md/lib/Buttons';

export default class ReceiverChips extends Component {
  render(){
     const { receivers, removeChip, onSearchChange, search, toggleBook, searchRef, open } = this.props;
     let toggleBtn = <Button onClick={toggleBook} className="chips-list-toggle-btn" icon >book</Button>
     if(open) toggleBtn = <Button onClick={toggleBook} className="chips-list-toggle-btn" icon >close</Button>
     let searchWidth = search.length + 1 + "em"
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
      <div className="chips-list-wrapper">
        <ul className="list-horizontal chips-list" onClick={toggleBook.bind(this,'list')}>
          {chips}
          <li>
            <input
            ref={searchRef}
            className="search-input"
            onChange={onSearchChange}
            name="search"
            type="text"
            style={{"width":searchWidth}}
            value={search} />
        </li>
        </ul>
        {toggleBtn}
      </div>
    )
  }
}
