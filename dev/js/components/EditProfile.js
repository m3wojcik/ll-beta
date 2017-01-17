import React, { Component } from 'react';
import FakeFormControl from './helpers/FakeFormControl';
import TextField from 'react-md/lib/TextFields';
import UserPhoto from './helpers/UserPhoto';
import Button from 'react-md/lib/Buttons/Button';

export default class EditProfile extends Component {
  render(){
     const { userData, onFormChange } = this.props;
    return(
      <div className="fake-form">
        <div className="md-grid">
          <div className="md-cell md-cell--6">
            <FakeFormControl label="First Name"
              value={<TextField id="firstName" disabled placeholder="First Name" defaultValue={userData.firstName} />}
              />
            <FakeFormControl label="Last Nname"
              value={<TextField id="lastName" disabled placeholder="Last Nname" defaultValue={userData.lastName} />}
              />
            <FakeFormControl label="Login"
              value={<TextField id="login" disabled placeholder="Login" defaultValue={userData.login} />}
              />
            <FakeFormControl label="Phone"
              value={<TextField id="phone" placeholder="Phone" defaultValue={userData.phone} onChange={onFormChange.bind(this,"phone")} />}
              />
            <FakeFormControl label="E-mail"
              value={<TextField id="email" placeholder="E-mail" defaultValue={userData.email} onChange={onFormChange.bind(this,"email")} />}
              />
          </div>
          <div className="md-cell md-cell--6">
            <FakeFormControl label="Avatar"
              value={<UserPhoto large src={userData.avatar} />} />
              <Button raised label="Change avatar" />
          </div>
        </div>
        <div className="fake-form-actions">
          <Button raised primary label="Save" />
          <Button raised label="Cancel" />
        </div>
      </div>
    )
  }
}
