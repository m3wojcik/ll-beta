import React, { Component } from 'react';
import { connect } from "react-redux";
import { setAppSettings} from "../actions/AppActions";
import { fetchLoginHistory } from "../actions/LoginHistoryActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import CustomTabs from '../components/helpers/CustomTabs';
import LoginHistory from '../components/LoginHistory';

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
      return(
        <div className="content">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
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
