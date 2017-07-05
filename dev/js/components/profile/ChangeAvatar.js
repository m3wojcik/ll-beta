import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Avatar from '../helpers/Avatar'
import Select from '../helpers/Select'
import Dropzone from 'react-dropzone'

export default class ChangeAvatar extends Component {

  render(){
    const { avatars, selectedAvatar, avatarType, onCancelClick, onSaveClick, onChangeAvatar, onDrop } = this.props
    const mappedAvatars = []
    let avatarSrc;
    if(selectedAvatar != null){
      if(avatarType == "prepared"){
        avatarSrc = avatars[selectedAvatar].src
      }else{
        avatarSrc = selectedAvatar.preview
      }

    }
    avatars.forEach(function(avatar){
      mappedAvatars.push(
          {
            value: avatar.id,
            object: <Avatar key={avatar.id} w={60} h={60} src={avatar.src} />
          }
        )
      }
    )
    return(
      <div className="">
        <div className="md-grid">
          <div className="md-cell md-cell--6">
            <Avatar w={200} h={200} src={avatarSrc} />
          </div>
          <div className="md-cell md-cell--6">
            <Dropzone
              accept="image/jpeg, image/png"
              className="dropzone"
              activeClassName="dropzone-active"
              rejectClassName="dropzone-reject"
              multiple={false}
              onDrop={onDrop.bind(this)} >
              Click or drop file
            </Dropzone>
            <div  className="label-center">or select from existing</div>
            <Select type="radio" objects={mappedAvatars} onChange={onChangeAvatar} />
          </div>
        </div>
        <div className="flex-center flex-wrap">
          <div className="width-100 text-center with-padding">
              <Button onClick={onCancelClick} raised label="Cancel" />
              <Button onClick={onSaveClick} primary raised label="Save" />
          </div>
        </div>
      </div>
    )
  }
}
