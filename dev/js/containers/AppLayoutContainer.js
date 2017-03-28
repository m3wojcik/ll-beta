import React, { Component } from 'react';
import { connect } from "react-redux";
import LayoutContainer from './LayoutContainer';
import Loader from '../components/helpers/Loader'
import {getAppSettings, getCleanPath} from '../actions/Functions';
import { fetchAppData, setAppSettings } from "../actions/AppActions";

@connect((store) => {
  return {
    routing: store.routing,
    appData: store.app.appData,
    toolbar: store.app.toolbar,
    hasTabs: store.app.toolbar.hasTabs,
    header: store.app.toolbar.header
  };
})
export default class AppLayoutContainer extends Component {
    componentDidMount(){
      console.log('fetch app data');
      const { routing } = this.props;
      const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
      this.props.dispatch(fetchAppData());
      let settings = getAppSettings(currentPath);
      this.props.dispatch(setAppSettings(settings));
    }
    componentWillReceiveProps(nextProps){
      const { routing } = this.props;
      const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
      const nextPath = getCleanPath(nextProps.routing.locationBeforeTransitions.pathname);
      if(currentPath != nextPath){
        let settings = getAppSettings(nextPath);
        this.props.dispatch(setAppSettings(settings));
      }
    }
    render(){
      const { hasTabs, appData, header, toasts } = this.props;
      if(!appData.fetched){
        return(
            <Loader fullPage />
        )
      }
      return(
          <LayoutContainer
            header={header}
            content={this.props.children}
            hasTabs={hasTabs}
            appData={appData}
            />
      )
    }

}
