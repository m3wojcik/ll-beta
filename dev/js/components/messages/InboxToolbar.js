import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class Inboxtoolbar extends Component {
  render(){
    return(
      <ul className="card-list">
        <li>
          <Button raised primary onClick={this.props.onCreateClick}>
            create
          </Button>
        </li>
        <li>
          <Button flat className="text-muted" onClick={this.props.onSendClick}>
            send
          </Button>
        </li>
        <li>
          <Button flat className="text-muted" onClick={this.props.onTrashClick}>
            delete
          </Button>
        </li>
      </ul>
    )
  }
}
