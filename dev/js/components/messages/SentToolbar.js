import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class SentToolbar extends Component {
  render(){
    return(
      <ul className="card-list">
        <li>
          <Button raised primary label="Create" onClick={this.props.onCreateClick}>
            create
          </Button>
        </li>
        <li>
          <Button flat label="Inbox" className="text-muted" onClick={this.props.onInboxClick}>
            inbox
          </Button>
        </li>
        <li>
          <Button flat label="Trash" className="text-muted" onClick={this.props.onTrashClick}>
            delete
          </Button>
        </li>
      </ul>
    )
  }
}
