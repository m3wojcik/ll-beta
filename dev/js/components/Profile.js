import React, { Component } from 'react';
import FakeFormControl from './helpers/FakeFormControl';
import UserPhoto from './helpers/UserPhoto';

export default class Profile extends Component {
  render(){
    const { userData } = this.props;
    return(
      <div className="fake-form">
        <div className="md-grid">
          <div className="md-cell md-cell--6">
            <FakeFormControl label="First Name" value={userData.firstname} />
            <FakeFormControl label="Last Nname" value={userData.lastname} />
            <FakeFormControl label="Login" value={userData.login} />
            <FakeFormControl label="Phone" value={userData.phone} />
            <FakeFormControl label="E-mail" value={userData.email} />
          </div>
          <div className="md-cell md-cell--6">
            <FakeFormControl label="Avatar" value={<UserPhoto large src={userData.avatar} />} />
          </div>
        </div>
      </div>
    )
  }
}
