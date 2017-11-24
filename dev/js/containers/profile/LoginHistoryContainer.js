import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchLoginHistory } from "../../actions/LoginHistoryActions";
import Loader from '../../components/helpers/Loader'
import ProfileTabMenu from '../../components/profile/ProfileTabMenu';
import LoginHistory from '../../components/profile/LoginHistory';

@connect((store) => {
   return {
    loginHistory: store.loginHistory.loginHistory,
    fetched: store.loginHistory.fetched,
    fetching: store.loginHistory.fetching
  };
})
class LoginHistoryContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchLoginHistory());
  }
  render(){
    const { fetched, loginHistory } = this.props;
  
    if(!fetched){
        return( <Loader full />)
    }
    return(
      <div className="content">
          <ProfileTabMenu activeIndex={3} />
          <section className="tab-pane">
            <LoginHistory loginHistory={loginHistory} />
          </section>
      </div>
    )
  }
}
export default LoginHistoryContainer