import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchDashboardMessages } from "../../actions/DashboardMessagesActions";

import DashboardMessages from '../../components/dashboard/DashboardMessages'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     dashboardMessages: store.dashboardMessages.dashboardMessages,
     fetched: store.dashboardMessages.fetched,
     fetching: store.dashboardMessages.fetching
  };
})
export default class DashboardMessagesContainer extends Component {

  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchDashboardMessages());
    }
  }
  handleMessageClick = (messageId) =>{

  }
  render(){
    const { fetched, dashboardMessages } = this.props;
    return(
      <DashboardMessages onMessageClick={this.handleMessageClick} fetched={fetched} dashboardMessages={dashboardMessages} />
      )
  }
}
