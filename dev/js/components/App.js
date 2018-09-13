import React,{Component} from 'react';
import WebFontLoader from 'webfontloader';

require('../../scss/style.scss');
WebFontLoader.load({
  google: {
    families: ['Lato:300,400,500,700', 'Material Icons'],
  },
});

export default class App extends React.Component{

    render(){
      return(
          <div className="app-layout">
              {this.props.children}
          </div>
      )
    }
}
