import React, { Component } from 'react';

export default class ContentEditable extends Component {
  constructor(props) {
      super(props);
      this.emitChange = this.emitChange.bind(this);
      this.setContentEditableContainer = this.setContentEditableContainer.bind(this);
  }
  setContentEditableContainer(contentEditableContainer) {
    this.contentEditableContainer = contentEditableContainer;
  }
  shouldComponentUpdate(nextProps){
    return nextProps.html !== this.contentEditableContainer.innerHTML;
  }
  emitChange(){
    var html = this.contentEditableContainer.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange(html, this.contentEditableContainer);
    }
    this.lastHtml = html;
  }
  render(){
    const {id, html, className} = this.props;
    return(
        <span
            id={id}
            className={className}
            onInput={this.emitChange}
            onBlur={this.emitChange}
            contentEditable
            ref={this.setContentEditableContainer}
            dangerouslySetInnerHTML={{__html: html}}>
        </span>
    )
  }
}
