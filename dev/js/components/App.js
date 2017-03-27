import React,{Component} from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import WebFontLoader from 'webfontloader';
import LayoutContainer from '../containers/LayoutContainer';
import Loader from './helpers/Loader'
import {getAppSettings, getCleanPath} from '../actions/Functions';
import { fetchAppData, setAppSettings } from "../actions/AppActions";
require('../../scss/style.scss');
WebFontLoader.load({
  google: {
    families: ['Lato:300,400,500,700', 'Material Icons'],
  },
});
@connect((store) => {
  return {
    routing: store.routing,
    appData: store.app.appData,
    toolbar: store.app.toolbar,
    hasTabs: store.app.toolbar.hasTabs,
    header: store.app.toolbar.header
  };
})
export default class App extends React.Component{
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
