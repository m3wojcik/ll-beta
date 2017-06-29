import React, { Component } from 'react';
import { connect } from "react-redux";
import Alert from '../components/helpers/Alert';

@connect((store) => {
   return {
    alerts: store.alert.alerts
  };
})
export default class AlertContainer extends Component {
  render(){
    const { alerts } = this.props;
    const length = alerts.length
    if(alerts.length > 0){
      return(
        <Alert text={alerts[length - 1].text} type={alerts[length - 1].type} />
      )
    }else return null
  }
}
