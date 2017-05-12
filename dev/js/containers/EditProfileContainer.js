import React, { Component } from 'react';
import { connect } from "react-redux";
import { SubmissionError } from 'redux-form'
import { setAppSettings} from "../actions/AppActions";
import { fetchUserData, saveUserData } from "../actions/ProfileActions";
import Content from '../components/helpers/Content'
import Loader from '../components/helpers/Loader'
import EditProfile from '../components/EditProfile';
import CustomTabs from '../components/helpers/CustomTabs';

@connect((store) => {
   return {
    userData: store.profile.userData,
    form: store.form.EditProfile,
    fetched: store.profile.fetched,
    fetching: store.profile.fetching
  };
})
export default class EditProfileContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchUserData());
  }
  handleSubmit = (values) =>{
    console.log(values);
    const params = {
      email: values.email,
      phone: values.phone
    }
    throw new SubmissionError({ email: 'Invalid email address', _error: 'Update profile failed!' })
    //this.props.dispatch(saveUserData(params));
  }
  render(){
    const { fetched, userData, form } = this.props;
    let formError = {};
    if(form){
      if(form.error){
        formError = {
          error: form.error,
          submitErrors: form.submitErrors
        }
      }
    }
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
            <EditProfile userData={userData} onSubmit={this.handleSubmit} formError={formError} />
          </section>
      </Content>
    )
  }
}
