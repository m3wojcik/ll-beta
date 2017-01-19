import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings} from "../actions/AppActions";
import { fetchUserData, setUserData } from "../actions/ProfileActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import EditProfile from '../components/EditProfile';
import CustomTabs from '../components/helpers/CustomTabs';

@connect((store) => {
   return {
    userData: store.profile.userData,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
export default class EditProfileContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchUserData());
  }
  handleFormChange = (type, value, object) => {
    let {userData} = this.props;
    switch (type) {
      case "phone":
        userData.phone = value;
      break;
      case "email":
        userData.email = value;
      break;
    }
  }
  validateForm = (type, value) => {
    switch (type) {
      case "phone":
        userData.phone = value;
      break;
      case "email":
        userData.email = value;
      break;
    }
  }
  render(){
    const { fetched, userData } = this.props;
    const tabs = [
      {"label": "Profile", "link": "profile", "active": false},
      {"label": "Edit profile", "link": "profile/edit", "active": true},
      {"label": "Change password", "link": "profile/changePassword", "active": false},
      {"label": "Login history", "link": "profile/loginHistory", "active": false},
    ]
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
      <div className="content">
          <CustomTabs tabs={tabs} />
          <section className="tab-pane">
            <EditProfile userData={userData} onFormChange={this.handleFormChange} />
          </section>
      </div>
    )
  }
}
