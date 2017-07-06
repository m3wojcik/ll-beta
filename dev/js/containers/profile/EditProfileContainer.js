import React, { Component } from 'react';
import { connect } from "react-redux";
import { SubmissionError } from 'redux-form'
import { fetchUserData, saveUserData } from "../../actions/ProfileActions";
import Drawer from 'react-md/lib/Drawers';
import DrawerHeader from '../../components/helpers/DrawerHeader'
import DrawerBody from '../../components/helpers/DrawerBody'
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import EditProfile from '../../components/profile/EditProfile';
import CustomTabs from '../../components/helpers/CustomTabs';
import ChangeAvatarContainer from './ChangeAvatarContainer'

@connect((store) => {
   return {
    userData: store.profile.userData,
    saveUserData: store.profile.saveUserData,
    form: store.form.EditProfile,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
export default class EditProfileContainer extends Component {
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
  render(){
    const { fetched, userData, form, saveUserData } = this.props;
    const tabs = [
      {"label": "Profile", "link": "profile", "active": false},
      {"label": "Edit profile", "link": "profile/edit", "active": true},
      {"label": "Change password", "link": "profile/changePassword", "active": false},
      {"label": "Login history", "link": "profile/loginHistory", "active": false},
    ]
    if(!fetched){
      return( <Loader full />)
    }
    return(
      <Content>
          <CustomTabs tabs={tabs} />
          <section className="tab-pane">
            <EditProfile userData={userData} onSubmit={this.handleSubmit} saveUserData={saveUserData} onChangeAvatarClick={this.handleChangeAvatarClick} />
          </section>
          <Drawer
            visible={true}
            onVisibilityToggle={this.handleDrawerToggle}
            type={Drawer.DrawerTypes.TEMPORARY}
            header={<DrawerHeader>Change avatar</DrawerHeader>}
            className="drawer-bottom"
          >
            <DrawerBody><ChangeAvatarContainer onCancelClick={this.handleCancelClick} /></DrawerBody>
          </Drawer>
      </Content>
    )
  }
}
