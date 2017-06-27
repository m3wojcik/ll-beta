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
    if(alerts.length > 0){
      return(
        <Alert text={alerts[0].text} type={alerts[0].type} />
      )
    }else return null
  }
}
