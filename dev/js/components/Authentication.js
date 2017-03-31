import React, { Component } from 'react';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if(!this.props.authenticated) {
          this.props.dispatch(push('/login'));
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
          this.props.dispatch(push('/login'));
      }
    }
    render() {
      if(this.props.authenticated) {
        return <ComposedComponent {...this.props} />
      }else{
        return null
      }
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(Authentication);
}
