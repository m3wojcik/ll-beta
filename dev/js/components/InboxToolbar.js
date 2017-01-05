import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons/Button';

export default class Inboxtoolbar extends Component {
  render(){
    return(
      <div className="toolbar">
        <Button raised primary label="Create" onClick={this.props.onCreateClick}>
          <FontIcon>create</FontIcon>
        </Button>
        <Button flat label="Send" className="text-muted" onClick={this.props.onSendClick}>
          <FontIcon>send</FontIcon>
        </Button>
        <Button flat label="Trash" className="text-muted" onClick={this.props.onTrashClick}>
          <FontIcon>delete</FontIcon>
        </Button>
      </div>
    )
  }
}
