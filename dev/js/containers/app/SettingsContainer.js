import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchSettings} from "../../actions/AppActions"
import Content from "../../components/helpers/Content"
import Settings from "../../components/app/Settings"

@connect((store) => {
   return {
    notifications: store.app.settings.notifications
  };
})
export default class SettingsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSettings());
  }
  render(){
    const { notifications } = this.props;
    return (
      <Content>
        <Settings notifications={notifications} />
      </Content>
      
    )
  }
}
