import React, { Component } from 'react';
import { connect } from "react-redux";
import {push, goBack} from 'react-router-redux';
import Button from 'react-md/lib/Buttons/Button';
import ToolbarSearch from '../components/helpers/ToolbarSearch';
import ToolbarMenu from '../components/helpers/ToolbarMenu';
import ToolbarHeader from '../components/helpers/ToolbarHeader';
import { setSearching, setSearchValue } from "../actions/AppActions";
import {logoutUser} from "../actions/index";

@connect((store) => {
  return {
    toolbar: store.app.toolbar

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
  handleLogoutClick = () => {
    this.props.dispatch(logoutUser());
  }
  handleBackClick = () => {
    if(toolbar.backPath){
      this.props.dispatch(push(toolbar.backPath));
    }else{
      this.props.dispatch(goBack());
    }

  }
  render(){
    const {toolbar} = this.props;
    let toolbarActions = [], toolbarChildren, backBtnOutput;
    if(toolbar.backBtn){
      backBtnOutput = <Button onClick={this.handleBackClick} className="md-btn--toolbar  md-toolbar--action-left" icon>keyboard_arrow_left</Button>
    }
    if(toolbar.searchBtn){
      toolbarActions.push(<Button key="search-btn" className="md-btn--toolbar" onClick={this.showSearch}  icon>search</Button>)
      if(toolbar.searching){
        toolbarActions =[];
        toolbarActions.push(<Button key="close-search-btn" className="md-btn--toolbar" onClick={this.closeSearch} icon>close</Button>);
        toolbarChildren = <ToolbarSearch onChange={this.handleChange} />
      }else{
        toolbarChildren = <ToolbarHeader header={toolbar.header} />
      }
    }else{
      toolbarChildren = <ToolbarHeader header={toolbar.header} />
    }
    toolbarActions.push(<ToolbarMenu key="toolbar-menu-btn" onLogoutClick={this.handleLogoutClick} />)
    return(
      <div className="toolbar-children">
        {backBtnOutput}
        {toolbarChildren}
        <div className="md-cell--right md-toolbar--action-right">{toolbarActions}</div>
      </div>
    )
  }
}
