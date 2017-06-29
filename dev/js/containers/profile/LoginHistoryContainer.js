import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchLoginHistory } from "../../actions/LoginHistoryActions";
import Loader from '../../components/helpers/Loader'
import CustomTabs from '../../components/helpers/CustomTabs';
import LoginHistory from '../../components/profile/LoginHistory';

@connect((store) => {
   return {
    loginHistory: store.loginHistory.loginHistory,
    fetched: store.loginHistory.fetched,
    fetching: store.loginHistory.fetching
  };
})
export default class LoginHistoryContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchLoginHistory());
  }
  render(){
    const { fetched, loginHistory } = this.props;
    const tabs = [
      {"label": "Profile", "link": "profile", "active": false},
      {"label": "Edit profile", "link": "profile/edit", "active": false},
      {"label": "Change password", "link": "profile/changePassword", "active": false},
      {"label": "Login history", "link": "profile/loginHistory", "active": true},
    ]
    if(!fetched){
        return( <Loader full />)
    }
    return(
      <div className="content">
          <CustomTabs tabs={tabs} />
          <section className="tab-pane">
            <LoginHistory loginHistory={loginHistory} />
          </section>
      </div>
    )
  }
}
