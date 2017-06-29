import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextField from 'react-md/lib/TextFields';
import UserPhoto from './../helpers/UserPhoto';
import Button from 'react-md/lib/Buttons/Button';
import FakeFormControl from './../helpers/FakeFormControl';
import {RenderField} from './../helpers/RenderField'
import {email} from './../helpers/Validate'


class EditProfile extends Component {
  render(){
    const { userData, saveUserData, handleSubmit } = this.props;
    let buttonProps = {
      raised: true,
      primary: true,
      label: "Save",
      type: "submit"
    }
    if(saveUserData.fetching){
      buttonProps.disabled = true
    }
    return(
      <div className="fake-form">
        <form className="ui form login-form" onSubmit={handleSubmit}>
          <div className="md-grid">
            <div className="md-cell md-cell--6">
              <div className="field">
                <label>Login</label>
                <Field placeholder="Login" disabled name="login" component="input" type="text"/>
              </div>
              <div className="field">
                <label>First name</label>
                <Field placeholder="First name" disabled name="firstname" component="input" type="text"/>
              </div>
              <div className="field">
                <label>Last name</label>
                <Field placeholder="Last name" disabled name="lastname" component="input" type="text"/>
              </div>
              <div className="field">
                <label>Phone</label>
                <Field placeholder="Phone" name="phone" component="input" type="text"/>
              </div>
              <Field name="email" type="email"
                component={RenderField} label="Email"
                validate={email}
              />
            </div>
            <div className="md-cell md-cell--6">
              <FakeFormControl label="Avatar"
                value={<UserPhoto large src={userData.avatar} />} />
                <Button raised label="Change avatar" />
            </div>
          </div>
          <div className="fake-form-actions">
            <Button {...buttonProps} />
          </div>
        </form>
      </div>
    )
  }
}
EditProfile = reduxForm({
  form: 'EditProfile' // a unique name for this form
})(EditProfile);
// You have to connect() to any reducers that you wish to connect to yourself
EditProfile = connect(
  store => ({
    initialValues: store.profile.userData // pull initial values from account reducer
  })              // bind account loading action creator
)(EditProfile)

export default EditProfile;
