import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';

import LayoutContainer from './LayoutContainer';
import Loader from '../components/helpers/Loader'
import Snackbar from 'react-md/lib/Snackbars';
import { showSnack } from 'react-redux-snackbar';
import {getAppSettings, getCleanPath} from '../actions/Functions';
import { fetchAppData, setAppSettings, fetchLocales } from "../actions/AppActions";
import { removeToast } from "../actions/ToastsActions";
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/pl';
import pl from 'react-intl/locale-data/pl';
import es from 'react-intl/locale-data/es';
import ru from 'react-intl/locale-data/ru';
import fr from 'react-intl/locale-data/fr';

import localeData from './../../locales/messages.json';
addLocaleData([...en, ...pl, ...es, ...ru, ...fr]);

@connect((store) => {
  return {
    routing: store.routing,
    appData: store.app.appData,
    hasTabs: store.app.toolbar.hasTabs,
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
      const { routing, error, appData } = this.props;
      const currentPath = getCleanPath(routing.locationBeforeTransitions.pathname);
      const nextPath = getCleanPath(nextProps.routing.locationBeforeTransitions.pathname);
      if(currentPath != nextPath){
        let settings = getAppSettings(nextPath);
        this.props.dispatch(setAppSettings(settings));
      } 
      if(nextProps.appData.error){
        if(nextProps.appData.error.response){
          if(appData.error != nextProps.appData.error){
            const code =  nextProps.appData.error.response.data.error
            if(code == 'invalid_token'){  
              this.props.dispatch(push('login'))
            }
          }
        }else{
          this.props.dispatch(showSnack('network_error', {
            label: 'Network error', 
            button:{label: "Reconnect", action: this.handleReconnect}
          }));
        }      
      }
    }
    handleReconnect = () => {
      this.props.dispatch(fetchAppData());
    }
    handleRemoveToast = () => {
      this.props.dispatch(removeToast());
    }
    render(){
      const { hasTabs, appData, toasts, error } = this.props;
      let language;
      if(!appData.fetched){
        return(
          <div>
            <Snackbar {...toasts} onDismiss={this.handleRemoveToast} />
            <Loader fullPage />
          </div>
        )
      }else{
        language = appData.user.language.split('_')[0]
      }
      return(  
        <IntlProvider locale={language} messages={localeData[language]}>
        <div className={language}>
          <Snackbar {...toasts} onDismiss={this.handleRemoveToast} />
          <LayoutContainer
            content={this.props.children}
            hasTabs={hasTabs}
            appData={appData}
            />
        </div>
        </IntlProvider>
      )
    }

}
