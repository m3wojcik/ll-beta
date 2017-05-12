import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import FakeFormControl from './helpers/FakeFormControl';
import TextField from 'react-md/lib/TextFields';
import UserPhoto from './helpers/UserPhoto';
import Button from 'react-md/lib/Buttons/Button';
import Alert from './helpers/Alert'
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={touched ? "field error":"field"}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

class EditProfile extends Component {
  render(){
     const { userData, handleSubmit, formError } = this.props;
     console.log('error', formError);
    return(
      <div className="fake-form">
        <Alert text={formError ? formError.error : null} type="danger" />
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
                component={renderField} label="Email"
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
            <Button raised primary label="Save" type="submit" />
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
