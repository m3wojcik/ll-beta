import React, { Component } from 'react';
import { Link } from 'react-router';
import UserPhoto from '../components/helpers/UserPhoto';
export default class NavigationUserContainer extends Component {

  render(){
    const { userData } = this.props;
    let avatar;
    if(userData.photo != null){
      avatar = <UserPhoto src={userData.photo} />
    }else {
      avatar = <UserPhoto />
    }
    return(
      <div className="navigation-user">
        <div className="navigation-user-avatar">
          {avatar}
        </div>
        <div className="navigation-user-data">
          <div className="navigation-user-name">
            <Link to="profile">
              {userData.firstname} {userData.lastname}
            </Link>
          </div>
          <div className="navigation-user-login">
            <Link to="profile">
              {userData.login}
            </Link>
          </div>
        </div>
      </div>

    )
  }
}
