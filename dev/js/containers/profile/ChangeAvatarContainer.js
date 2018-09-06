import React, { Component } from 'react';
import { avatars } from "../../actions/config"
import ChangeAvatar from '../../components/profile/ChangeAvatar';

export default class ChangeAvatarContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedAvatar: null,
      avatarSrc: null,
      files: []
    }
  }
  componentWillReceiveProps(next){
    const {avatar} = this.props
    if(avatar != next.avatar){
      this.setState({
        avatarSrc: next.avatar
      })
    }
  }
  handleChangeAvatar = ( index, value) =>{
    this.setState({
      avatarSrc: avatars[index].src
    })
  }
  
  handleDrop = (files) =>{
    this.setState({
      avatarSrc: files[0].preview
    })
  }
  render(){
    const {  avatar, onCancelClick, onCanvasUpdate, onSetCanvaRef, onSaveClick } = this.props;
    const {avatarSrc} = this.state
    return(
          <ChangeAvatar
            avatar={avatarSrc}
            avatars={avatars}
            onDrop={this.handleDrop}
            onSetCanvaRef={onSetCanvaRef}
            onCanvasUpdate={onCanvasUpdate}
            onCancelClick={onCancelClick}
            onSaveClick={onSaveClick}
            onChangeAvatar={this.handleChangeAvatar} />
    )
  }
}
