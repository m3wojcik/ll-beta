import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings} from "../actions/AppActions";
import { fetchUserData } from "../actions/ProfileActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import FontIcon from 'react-md/lib/FontIcons';
import Profile from '../components/Profile';
import CustomTabs from '../components/helpers/CustomTabs';

@connect((store) => {
   return {
    userData: store.profile.userData,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
export default class ProfileContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setAppSettings({header: 'Profile', hasTabs: false}));
    this.props.dispatch(fetchUserData());
  }
  render(){
    const { fetched, userData } = this.props;
    const tabs = [
      {"label": "Profile" , "link": "profile", "active": true},
      {"label": "Edit profile", "link": "profile/edit", "active": false},
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
            <Profile userData={userData} />
          </section>
      </div>
    )
  }
}
