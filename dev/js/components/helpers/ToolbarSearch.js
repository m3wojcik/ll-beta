import React, { Component } from 'react';
import FocusContainer from 'react-md/lib/Helpers/FocusContainer';

export default class ToolbarSearch extends Component {

  render(){
    const { onChange } = this.props;
    return(
      <div className="md-text-field-container md-full-width md-text-field-container--input md-text-field-container--input-block md-autocomplete toolbar-search-container" >
        <FocusContainer
          focusOnMount
          containFocus={true}
        >
          <input
            onChange={onChange}
            type="text"
            id="toolbar-search"
            placeholder="Search"
            className="md-text-field md-text md-full-width md-text-field--toolbar"
            />
        </FocusContainer>
      </div>
    )
  }
}
