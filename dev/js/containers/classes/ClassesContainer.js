import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import SelectField from 'react-md/lib/SelectFields';
import Loader from '../../components/helpers/Loader'
import Content from '../../components/helpers/Content'
import { setAppSettings, setAppHeader } from "../../actions/AppActions";
import ClassesListContainer from './ClassesListContainer'

@connect((store) => {
   return {
    groups: store.app.appData.groups,
    fetched: store.app.appData.fetched,
    fetching: store.app.appData.fetching
  };
})
export default class ClassesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {selectedGroupIndex: 0}
  }
  handleChange = (value, index, event) => {
    this.setState({selectedGroupIndex: index});
    //this.props.dispatch(push("classes/" + value));
  }
  componentDidMount(){
    const {groups} = this.props;
    const {selectedGroupIndex} = this.state;
    const groupsLength = groups.length;
    let toolbarHeader;
    if(groupsLength > 0){
      toolbarHeader = groups[selectedGroupIndex].name
      //check id header should be string or select
      if(groupsLength > 1){
          toolbarHeader = (<SelectField
            id="selectGroup"
            placeholder="Select group"
            position={SelectField.Positions.BELOW}
            menuItems={groups}
            itemLabel="name"
            itemValue="id"
            onChange={this.handleChange}
            defaultValue={groups[selectedGroupIndex].id}
            className="toolbar-select"
          />)
        }
        this.props.dispatch(setAppHeader(toolbarHeader));
    }
  }
  render(){
    const { selectedGroupIndex} = this.state;
    const { fetched, groups } = this.props;
    if(!fetched){
      return(<Loader />)
    }else{
      return(
        <ClassesListContainer
          groupId={groups[selectedGroupIndex].id}
          headers  />
      )
    }
  }
}
