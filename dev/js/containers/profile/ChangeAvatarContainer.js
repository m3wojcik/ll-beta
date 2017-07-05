import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAvatars } from "../../actions/ProfileActions";
import Loader from '../../components/helpers/Loader'
import ChangeAvatar from '../../components/profile/ChangeAvatar';

@connect((store) => {
   return {
    avatars: store.profile.avatars.avatars,
    fetched: store.profile.avatars.fetched,
    fetching: store.profile.avatars.fetching
  };
})
export default class ChangeAvatarContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedAvatar: null,
      avatarType: null,
      files: []
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchAvatars());
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
    const { fetched, avatars, onCancelClick,  } = this.props;
    const {selectedAvatar, avatarType} = this.state
    if(!fetched){
        return( <Loader center />)
    }
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
