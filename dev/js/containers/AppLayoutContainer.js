import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import LayoutContainer from './LayoutContainer';
import Loader from '../components/helpers/Loader'
import Snackbar from 'react-md/lib/Snackbars';
import {getAppSettings, getCleanPath} from '../actions/Functions';
import { fetchAppData, setAppSettings } from "../actions/AppActions";
import { removeToast } from "../actions/ToastsActions";
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

addLocaleData([...en]);

@connect((store) => {
  return {
    routing: store.routing,
    appData: store.app.appData,
    toolbar: store.app.toolbar,
    hasTabs: store.app.toolbar.hasTabs,
    header: store.app.toolbar.header,
    toasts: store.toasts,
    error: store.error.errors
  };
})
export default class AppLayoutContainer extends Component {
    componentDidMount(){
      const { routing } = this.props;
      const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
      this.props.dispatch(fetchAppData());
      let settings = getAppSettings(currentPath);
      this.props.dispatch(setAppSettings(settings));
    }
    componentWillReceiveProps(nextProps){
      const { routing, error } = this.props;
      const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
      const nextPath = getCleanPath(nextProps.routing.locationBeforeTransitions.pathname);
      if(currentPath != nextPath){
        let settings = getAppSettings(nextPath);
        this.props.dispatch(setAppSettings(settings));
      }
    }
    handleRemoveToast = () => {
      this.props.dispatch(removeToast());
    }
    render(){
      const { hasTabs, appData, header, toasts, error } = this.props;
      if(!appData.fetched){
        return(
          <div>
            <Snackbar {...toasts} onDismiss={this.handleRemoveToast} />
            <Loader fullPage />
          </div>
        )
      }
      return(
        <IntlProvider locale="en">
        <div className={appData.locales.locale}>
          <Snackbar {...toasts} onDismiss={this.handleRemoveToast} />
          <LayoutContainer
            header={header}
            content={this.props.children}
            hasTabs={hasTabs}
            appData={appData}
            />
        </div>
        </IntlProvider>
      )
    }

}
