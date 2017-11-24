import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUserData } from "../../actions/ProfileActions";
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import FontIcon from 'react-md/lib/FontIcons';
import Profile from '../../components/profile/Profile';
import ProfileTabMenu from '../../components/profile/ProfileTabMenu';

@connect((store) => {
   return {
    userData: store.profile.userData,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
class ProfileContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchUserData());
  }
  render(){
    const { fetched, userData } = this.props;
    if(!fetched){
      return(<Loader full />)
    }
    return(
      <Content>
          <ProfileTabMenu activeIndex={0} />
          <section className="tab-pane">
            <Profile userData={userData} />
          </section>
      </Content>
    )
  }
}
export default ProfileContainer