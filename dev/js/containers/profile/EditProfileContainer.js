import React, { Component } from 'react';
import { connect } from "react-redux";
import { SubmissionError } from 'redux-form'
import { fetchUserData, saveUserData, saveAvatar } from "../../actions/ProfileActions";
import Drawer from 'react-md/lib/Drawers';
import DrawerHeader from '../../components/helpers/DrawerHeader'
import DrawerBody from '../../components/helpers/DrawerBody'
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import EditProfile from '../../components/profile/EditProfile';
import ProfileTabMenu from '../../components/profile/ProfileTabMenu';
import ChangeAvatarContainer from './ChangeAvatarContainer'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

@connect((store) => {
   return {
    userData: store.profile.userData,
    saveUserData: store.profile.saveUserData,
    form: store.form.EditProfile,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
class EditProfileContainer extends Component {
  constructor(props){
    super(props);
    this.state = {drawerVisible: false}
  }
  componentDidMount(){
    this.props.dispatch(fetchUserData());
  }
  handleSubmit = (values) =>{
    const params = {
      email: values.email,
      phone: values.phone
    }
    // throw new SubmissionError({ email: 'Invalid email address', _error: 'Update profile failed!' })
    this.props.dispatch(saveUserData(params));
  }
  handleDrawerToggle = (visible) => {
    this.setState({ drawerVisible: visible });
  }
  handleChangeAvatarClick = ()=>{
    this.handleDrawerToggle(true)
  }
  handleCancelClick = ()=>{
    this.handleDrawerToggle(false)
  }
  handleCanvasUpdate = (img)=>{
    this.props.dispatch(saveAvatar({data: img}));
    console.log('img update')
  }
  render(){
    const { intl, fetched, userData, form, saveUserData } = this.props;
    const messages = defineMessages({
      changeAvatar: {
        id: 'EditProfileContainer.changeAvatar',
        defaultMessage: 'Change avatar'
      }
    })
    if(!fetched){
      return( <Loader full />)
    }
    return(
      <Content>
          <ProfileTabMenu activeIndex={1} />
          <section className="tab-pane">
            <EditProfile userData={userData} onSubmit={this.handleSubmit} saveUserData={saveUserData} onChangeAvatarClick={this.handleChangeAvatarClick} />
          </section>
          <Drawer
            visible={this.state.drawerVisible}
            onVisibilityChange={this.handleDrawerToggle}
            type={Drawer.DrawerTypes.TEMPORARY}
            header={<DrawerHeader>{intl.formatMessage(messages.changeAvatar)}</DrawerHeader>}
            className="drawer-bottom"
          >
            <DrawerBody><ChangeAvatarContainer onCancelClick={this.handleCancelClick} onCanvasUpdate={this.handleCanvasUpdate} /></DrawerBody>
          </Drawer>
      </Content>
    )
  }
}
export default injectIntl(EditProfileContainer)