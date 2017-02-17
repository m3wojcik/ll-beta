import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchMarks } from "../../actions/MarksActions";
import Loader from '../../components/helpers/Loader'
import Content from '../../components/helpers/Content'
import Marks from '../../components/marks/Marks'

@connect((store) => {
   return {
    marks: store.marks.marks,
    fetched: store.marks.fetched,
    fetching: store.marks.fetching
  };
})
export default class MarksContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchMarks());
  }
  render(){
    const { fetched, marks } = this.props;
    if(!fetched){
      return(<Loader full />)
    }
    return(
      <Content >
          <Marks marks={marks} />
      </Content>
    )
  }
}
