import React, { Component } from 'react';
import { connect } from "react-redux";
import { avatars } from "../../actions/config"
import Loader from '../../components/helpers/Loader'
import ChangeAvatar from '../../components/profile/ChangeAvatar';

export default class ChangeAvatarContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedAvatar: null,
      avatarType: null,
      files: []
    }
  }
  handleChangeAvatar = ( index, value) =>{
    console.log( value);
    this.setState({
      selectedAvatar: index,
      avatarType: "prepared"
    })
  }
  handleSaveClick = () =>{

  }
  handleDrop = (files) =>{
    console.log('files', files);
    this.setState({
      selectedAvatar: files[0],
      avatarType: "custom"
    })
  }
  render(){
    const { onCancelClick,  } = this.props;
    const {selectedAvatar, avatarType} = this.state
    return(
          <ChangeAvatar
            selectedAvatar={selectedAvatar}
            avatarType={avatarType}
            avatars={avatars}
            onDrop={this.handleDrop}
            onCancelClick={onCancelClick}
            onSaveClick={this.handleSaveClick}
            onChangeAvatar={this.handleChangeAvatar} />
    )
  }
}
