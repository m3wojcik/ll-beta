import React, { Component } from 'react';
import { connect } from "react-redux";
import {push, goBack} from 'react-router-redux';
import Button from 'react-md/lib/Buttons/Button';
import ToolbarSearch from '../components/helpers/ToolbarSearch';
import { setSearching, setSearchValue } from "../actions/AppActions";

@connect((store) => {
  return {
    toolbar: store.app.toolbar,
    header: store.app.toolbar.header,
    backBtn: store.app.toolbar.backBtn,
    backPath: store.app.toolbar.backPath
  };
})
export default class ToolbarContainer extends Component {
  showSearch = () => {
    this.props.dispatch(setSearching(true));
  }
  closeSearch = () => {
    this.props.dispatch(setSearching(false));
    this.props.dispatch(setSearchValue(''));
  }
  handleChange = (event) => {
    this.props.dispatch(setSearchValue(event.target.value));
  }
  handleBackClick = () => {
    const {backPath} = this.props;
    if(backPath){
      this.props.dispatch(push(backPath));
    }else{
      this.props.dispatch(goBack());
    }

  }
  render(){
    const {toolbar, header, backBtn} = this.props;
    let toolbarActions, toolbarChildren, backBtnOutput;
    if(backBtn){
      backBtnOutput = <Button onClick={this.handleBackClick} className="md-btn--toolbar  md-toolbar--action-left" icon>keyboard_arrow_left</Button>
    }
    if(toolbar.searchBtn){
      toolbarActions = <Button className="md-btn--toolbar" onClick={this.showSearch}  icon>search</Button>
      if(toolbar.searching){
        toolbarActions = <Button className="md-btn--toolbar" onClick={this.closeSearch} icon>close</Button>;
        toolbarChildren = <ToolbarSearch onChange={this.handleChange} />
      }else{
        toolbarChildren = <h2 className="md-title md-title--toolbar toolbar-title">{header}</h2>
      }
    }else{
      toolbarChildren = <h2 className="md-title md-title--toolbar toolbar-title">{header}</h2>
    }
    return(
      <div className="toolbar-children">
        {backBtnOutput}
        {toolbarChildren}
        <div className="md-cell--right md-toolbar--action-right">{toolbarActions}</div>
      </div>
    )
  }
}
