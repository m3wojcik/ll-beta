import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings} from "../actions/AppActions";
import { fetchUserData } from "../actions/ProfileActions";
import Content from '../components/helpers/Content'
import Loader from '../components/helpers/Loader'
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
      return(<Loader full />)
    }
    return(
      <Content>
          <CustomTabs tabs={tabs} />
          <section className="tab-pane">
            <Profile userData={userData} />
          </section>
      </Content>
    )
  }
}
