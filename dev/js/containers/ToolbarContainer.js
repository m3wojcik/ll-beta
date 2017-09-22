import React, { Component } from 'react';
import { connect } from "react-redux";
import {push, goBack} from 'react-router-redux';
import Button from 'react-md/lib/Buttons/Button';
import Dialog from 'react-md/lib/Dialogs'
import ToolbarSearch from '../components/helpers/ToolbarSearch';
import ToolbarMenu from '../components/helpers/ToolbarMenu';
import ToolbarHeader from '../components/helpers/ToolbarHeader';
import ChangeLanguage from '../components/helpers/ChangeLanguage';
import { setSearching, setSearchValue, toggleLanguageDialog, changeLanguage } from "../actions/AppActions";
import {logoutUser} from "../actions/index";

@connect((store) => {
  return {
    toolbar: store.app.toolbar,
    view: store.app.view
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
  handleDialogToggle = (visible) => {
    this.props.dispatch(toggleLanguageDialog(visible))
  }
  handleDialogClose = () =>{
    this.handleDialogToggle(false)
  }
  handleLogoutClick = () => {
    this.props.dispatch(logoutUser());
  }
  handleLanguageClick = () => {
    this.handleDialogToggle(true)
  }
  handleProfileClick = () => {
      this.props.dispatch(push('/profile'));
  }
  handleBackClick = () => {
    if(toolbar.backPath){
      this.props.dispatch(push(toolbar.backPath));
    }else{
      this.props.dispatch(goBack());
    }
  }
  handleLanguageChange = (language) =>{
    this.props.dispatch(changeLanguage({code: language}))
    this.handleDialogClose()
  }
  render(){
    const {toolbar, view, appData} = this.props;
    let toolbarActions = [], toolbarChildren, backBtnOutput;
    let language = appData ? appData.user.language : "en_EN"
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
    toolbarActions.push(<ToolbarMenu key="toolbar-menu-btn" onLanguageClick={this.handleLanguageClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick} />)
    return(
      <div className="toolbar-children">
        {backBtnOutput}
        {toolbarChildren}
        <div className="md-cell--right md-toolbar--action-right">{toolbarActions}</div>
        <Dialog
            id="changeLanguageDialog"
            visible={view.dialogVisible}
            title="Change language"
            focusOnMount={false}
            onHide={this.handleDialogClose}
            actions={[{
              onClick: this.handleDialogClose,
              primary: false,
              label: 'Close',
            }]}
          >
            <ChangeLanguage selected={language} onLanguageChange={this.handleLanguageChange} />
          </Dialog>
      </div>
    )
  }
}
