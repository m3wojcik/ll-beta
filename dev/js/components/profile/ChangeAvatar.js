import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Avatar from '../helpers/Avatar'
import Select from '../helpers/Select'
import ImageEditor from '../helpers/ImageEditor'
import WebcamCapture from '../helpers/WebcamCapture'
import Dropzone from 'react-dropzone'
import {FormattedMessage} from 'react-intl';

export default class ChangeAvatar extends Component {

  render(){
    const { avatar, avatars, onSetCanvaRef, onCaptureScreen, onCancelClick, onSaveClick, onChangeAvatar, onDrop } = this.props
    const mappedAvatars = []
    
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
            <ImageEditor w={200} h={200} src={avatar} onSetCanvaRef={onSetCanvaRef} />
            <WebcamCapture w={200} h={200}  onCaptureScreen={onCaptureScreen} />
          </div> 
          <div className="md-cell md-cell--6">
            <Dropzone
              accept="image/jpeg, image/png"
              className="dropzone"
              activeClassName="dropzone-active"
              rejectClassName="dropzone-reject"
              multiple={false}
              onDrop={onDrop.bind(this)} >
              <FormattedMessage 
                id="changeAvatar.clickOrDropFile"
                defaultMessage="Click or drop file"
              />
            </Dropzone>
            <div  className="label-center">
            <FormattedMessage 
                id="changeAvatar.orSelectExisting"
                defaultMessage="or select from existing"
              />
            </div>
            <Select type="radio" objects={mappedAvatars} onChange={onChangeAvatar} />
          </div>
        </div>
        <div className="flex-center flex-wrap">
          <div className="width-100 text-center with-padding">
              <Button onClick={onCancelClick} raised >
                <FormattedMessage 
                  id="changeAvatar.cancel"
                  defaultMessage="Cancel"
                />
              </Button>
              <Button onClick={onSaveClick} primary raised >
                <FormattedMessage 
                  id="changeAvatar.save"
                  defaultMessage="Save"
                />
              </Button>
          </div>
        </div>
      </div>
    )
  }
}
