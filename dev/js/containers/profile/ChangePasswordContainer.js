import React, { Component } from 'react';
import { connect } from "react-redux";
import { SubmissionError } from 'redux-form'
import { showSnack } from 'react-redux-snackbar'
import { fetchUserData, changePassword } from "../../actions/ProfileActions";
import Content from '../../components/helpers/Content'
import Loader from '../../components/helpers/Loader'
import ChangePassword from '../../components/profile/ChangePassword';
import ProfileTabMenu from '../../components/profile/ProfileTabMenu';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

@connect((store) => {
   return {
    changePassword: store.profile.changePassword,
  };
})
class ChangePasswordContainer extends Component {
  componentWillReceiveProps(nextProps){
    const { intl, changePassword} = this.props;

    const messages = defineMessages({
      wrongPassword: {
        id: 'changePasswordContainer.wrongPassword',
        defaultMessage: 'Wrong old password'
      },
      passwordsMustMatch: {
        id: 'changePasswordContainer.passwordsMustMatch',
        defaultMessage: "Passwords don't match"
      },
      samePassword: {
        id: 'changePasswordContainer.samePassword',
        defaultMessage: "New password can't be the same as old"
      }
    })
    
    if(nextProps.changePassword.error && nextProps.changePassword.error.response){
      if(changePassword.error != nextProps.changePassword.error){
        const code =  nextProps.changePassword.error.response.data.error.code
        if(code == 'wrong_password'){
          this.props.dispatch(showSnack(code, {label: intl.formatMessage(messages.wrongPassword), timeout: 3000}));
        }else if(code == 'passwords_must_match'){
          this.props.dispatch(showSnack(code, {label: intl.formatMessage(messages.passwordsMustMatch), timeout: 3000}));
        }else if(code == 'same_password'){
          this.props.dispatch(showSnack(code, {label: intl.formatMessage(messages.samePassword), timeout: 3000}));
        }
      }
    }
  }
  handleSubmit = (values) =>{
    const params = {
      old_password: values.oldPass,
      new_password: values.newPass,
      new_password2: values.newPass2,
    }
    console.log('params', params);
    // throw new SubmissionError({ email: 'Invalid email address', _error: 'Update profile failed!' })
    this.props.dispatch(changePassword(params));
  }
  render(){
    const { changePassword } = this.props;
    return(
      <Content>
          <ProfileTabMenu activeIndex={2} />
          <section className="tab-pane">
            <ChangePassword changePassword={changePassword} onSubmit={this.handleSubmit} />
          </section>
      </Content>
    )
  }
}
export default injectIntl(ChangePasswordContainer)
