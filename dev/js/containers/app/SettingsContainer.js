import React, { Component } from 'react';
import { connect } from "react-redux";
import { showSnack } from 'react-redux-snackbar'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';
import {fetchSettings, saveNotifications} from "../../actions/AppActions"
import Loader from '../../components/helpers/Loader'
import Content from "../../components/helpers/Content"
import Settings from "../../components/app/Settings"

@connect((store) => {
   return {
    notifications: store.app.settings.notifications,
    fetched: store.app.settings.fetched,
    fetching: store.app.settings.fetching,
  };
})
class SettingsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSettings())
  }

  componentWillReceiveProps(nextProps){
    const {intl, notifications} = this.props
    const messages = defineMessages({
      settingsUpdated: {
        id: 'SettingsContainer.settingsUpdated',
        defaultMessage: 'Settings updated'
      }
    })
    if(!notifications.saved && nextProps.notifications.saved){
      this.props.dispatch(showSnack('settings_updated', {label: intl.formatMessage(messages.settingsUpdated), timeout: 3000}));
    }
  }
  handleCheckboxBtnClick = (id, option) =>{
    const { notifications } = this.props;
    let newNotifications = notifications.settings[id]
    
    if(notifications.settings[id]){
      if(notifications.settings[id].indexOf(option) > -1) newNotifications = newNotifications.filter(item => item !== option)
      else newNotifications.push(option)
    }
    let params = {
      type: id,
      actions: newNotifications
    }
    this.props.dispatch(saveNotifications(params))
  }
  render(){
    const { notifications, fetched } = this.props;
    if(!fetched){
      return(<Loader full />)
    }
    return (
      <Content>
        
        <Settings notifications={notifications} onCheckboxBtnClick={this.handleCheckboxBtnClick} />
      </Content>
      
    )
  }
}
export default injectIntl(SettingsContainer)