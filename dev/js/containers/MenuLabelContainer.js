import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchMenuNofitications} from '../actions/AppActions'
import Label from './../components/helpers/Label';
import Loader from './../components/helpers/Loader';

@connect((store) => {
  return {
    menu: store.app.menu
  };
})
export default class MenuLabelContainer extends Component {
  componentDidMount(){
    const {type} = this.props
    this.props.dispatch(fetchMenuNofitications({type: type}));
  }
  render(){
    const {type, menu} = this.props
    if(menu[type].fetched){
      
      return menu[type].new > 0 ? <Label red label={menu[type].new} /> : null
    }
    return(<Loader inline />)  
  }
}
