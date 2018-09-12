import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchStudentHistory } from "../../actions/ProfileActions";
import Loader from '../../components/helpers/Loader'
import ProfileTabMenu from '../../components/profile/ProfileTabMenu';
import StudentHistory from '../../components/profile/StudentHistory';

@connect((store) => {
   return {
    studentHistory: store.profile.studentHistory.history,
    fetched: store.profile.studentHistory.fetched,
    fetching: store.profile.studentHistory.fetching
  };
})
export default class StudentHistoryContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchStudentHistory());
  }
  render(){
    const { intl, fetched, studentHistory } = this.props;
    if(!fetched){
        return( <Loader full />)
    }
    return(
      <div className="content">
          <ProfileTabMenu activeIndex={3} />
          <section className="tab-pane">
          <StudentHistory studentHistory={studentHistory} /> 
          </section>
      </div>
    )
  }
}