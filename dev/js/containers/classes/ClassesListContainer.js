import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import SelectField from 'react-md/lib/SelectFields';
import Loader from '../../components/helpers/Loader'
import Content from '../../components/helpers/Content'
import { setAppSettings, setAppHeader } from "../../actions/AppActions";
import { fetchClasses } from "../../actions/ClassesActions";
import Classes from '../../components/classes/Classes'


@connect((store) => {
   return {
    classes: store.classes.classes,
    fetched: store.classes.fetched,
    fetching: store.classes.fetching
  };
})
export default class ClassesListContainer extends Component {

  componentDidMount(){
    const {groupId} = this.props;
    this.props.dispatch(fetchClasses(groupId));
  }
  componentWillReceiveProps(nextProps){
    const {groupId} = this.props;
    if(groupId != nextProps.groupId){
      this.props.dispatch(fetchClasses(nextProps.groupId));
    }
  }
  handleClassClick = (classId, className) => {
     this.props.dispatch(setAppSettings({header:className, hasTabs: false}));
     this.props.dispatch(push('classDetails/' + classId));
  }
  render(){
    const { classes, fetched } = this.props;
    if(!fetched){
      return(<Loader full />)
    }
    return(
      <Content noPadding>
        <Classes
          classes={classes}
          onClassClick={this.handleClassClick}
          headers  />
      </Content>
    )
  }
}
