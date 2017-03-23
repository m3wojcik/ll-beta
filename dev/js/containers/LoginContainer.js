import React, { Component } from 'react';
import { connect } from "react-redux";
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';
import Content from '../components/helpers/Content'


@connect((store) => {
  return {
    appData: store.app.appData,
    fetched: store.app.appData.fetched,
    notifications : store.app.appData.notifications
  };
})

export default class LoginContainer extends Component {
  render(){
    const { appData, notifications } = this.props;

    return(
      <Content>
      <TextField
        id="login"
        label="Login"
        type="text"
        leftIcon={<FontIcon>phone</FontIcon>}
        className="md-cell md-cell--top"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        leftIcon={<FontIcon>phone</FontIcon>}
        className="md-cell md-cell--top"
      />
      </Content>
    )
  }
}
