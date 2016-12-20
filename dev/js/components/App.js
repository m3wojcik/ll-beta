import React,{Component} from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import WebFontLoader from 'webfontloader';
import LayoutContainer from '../containers/LayoutContainer';



require('../../scss/style.scss');
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});
@connect((store) => {
   return {
    toolbar: store.app.toolbar
  };
})
export default class App extends React.Component{
  render(){
    return(
      <LayoutContainer header={this.props.toolbar.header} content={this.props.children} />
    )
  }
}
