import React,{Component} from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import WebFontLoader from 'webfontloader';
import LayoutContainer from '../containers/LayoutContainer';
require('../../scss/style.scss');
WebFontLoader.load({
  google: {
    families: ['Lato:300,400,500,700', 'Material Icons'],
  },
});
export default class App extends React.Component{
  render(){
    const { header } = this.props;
    return(
        <LayoutContainer header={header} content={this.props.children} />
    )
  }
}
