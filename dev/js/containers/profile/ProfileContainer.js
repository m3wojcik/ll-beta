import React, { Component } from 'react';
import { connect } from "react-redux";
import { showSnack } from 'react-redux-snackbar'
import { fetchUserData, saveUserData, saveAvatar, setCanvaRef } from "../../actions/ProfileActions";
import Drawer from 'react-md/lib/Drawers';
import DrawerHeader from '../../components/helpers/DrawerHeader'
import DrawerBody from '../../components/helpers/DrawerBody'
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import Profile from '../../components/profile/Profile';
import ProfileTabMenu from '../../components/profile/ProfileTabMenu';
import ChangeAvatarContainer from './ChangeAvatarContainer'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

@connect((store) => {
   return {
    userData: store.profile.userData,
    saveUserData: store.profile.saveUserData,
    avatar: store.profile.avatar,
    form: store.form.EditProfile,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
class ProfileContainer extends Component {
  constructor(props){
    super(props);
    this.state = {drawerVisible: false}
  }
  componentWillReceiveProps(nextProps){
    const {saveUserData, avatar} = this.props
    if(!saveUserData.saved && nextProps.saveUserData.saved){
      this.props.dispatch(showSnack('profile_updated', {label: 'Profile was successfully updated', timeout: 3000}));
    }
    if(!avatar.saved && nextProps.avatar.saved){
      this.props.dispatch(showSnack('avatar_updated', {label: 'Avatar was successfully updated', timeout: 3000}));
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchUserData());
  }
  handleSubmit = (values) =>{
    const params = {
      email: values.email,
      phone: values.phone
    }
    this.props.dispatch(saveUserData(params));
  }
  handleDrawerToggle = (visible) => {
    this.setState({ drawerVisible: visible });
  }
  handleChangeAvatarClick = ()=>{
    this.handleDrawerToggle(true)
  }
  handleSaveClick = () =>{
    const {avatar} = this.props
    const avatarBase64Data = avatar.canva.toDataURL("image/png")
    this.props.dispatch(saveAvatar({data:avatarBase64Data}));
    this.handleDrawerToggle(false); 
  }
  handleCancelClick = ()=>{
    this.handleDrawerToggle(false)
  }
  handleSetCanvaRef = (ref)=>{
    this.props.dispatch(setCanvaRef(ref));
  }
  handleBlur = ()=>{
    const {form} = this.props
    const params = {
      email: form.values.email,
      phone: form.values.phone
    }
    console.log('form', form)
    if(JSON.stringify(form.values) != JSON.stringify(form.initial) ){
      if(!form.syncErrors) this.props.dispatch(saveUserData(params));
    }
    
    
  }
  render(){
    const { intl, fetched, userData, avatar, saveUserData } = this.props;
    const messages = defineMessages({
      changeAvatar: {
        id: 'EditProfileContainer.changeAvatar',
        defaultMessage: 'Change avatar'
      }
    })
    if(!fetched){
      return( <Loader full />)
    }
    //console.log('avatar', avatar)
    return(
      <Content>
          <ProfileTabMenu activeIndex={0} />
          <section className="tab-pane">
            <Profile userData={userData} onBlur={this.handleBlur} onSubmit={this.handleSubmit} saveUserData={saveUserData} onChangeAvatarClick={this.handleChangeAvatarClick} />
          </section>
          <Drawer
            visible={this.state.drawerVisible}
            onVisibilityChange={this.handleDrawerToggle}
            type={Drawer.DrawerTypes.TEMPORARY}
            header={<DrawerHeader>{intl.formatMessage(messages.changeAvatar)}</DrawerHeader>}
            className="drawer-bottom"
          >
            <DrawerBody>
              <ChangeAvatarContainer 
                avatar={avatar.avatar} 
                onSaveClick={this.handleSaveClick} 
                onCancelClick={this.handleCancelClick} 
                onSetCanvaRef={this.handleSetCanvaRef}
              />
            </DrawerBody>
          </Drawer>
      </Content>
    )
  }
}
export default injectIntl(ProfileContainer)