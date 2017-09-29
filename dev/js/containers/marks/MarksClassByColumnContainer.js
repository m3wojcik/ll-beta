import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchMarksClassByColumn } from "../../actions/MarksActions";

import Loader from '../../components/helpers/Loader'
import MarksClassByColumn from '../../components/marks/MarksClassByColumn'

@connect((store) => {
   return {
    marksClassByColumn: store.marks.marksClassByColumn
  };
})
export default class MarksClassByColumnContainer extends Component {
  componentDidMount(){
    const { columnId } = this.props;
    this.props.dispatch(fetchMarksClassByColumn({"id": columnId}));
  }
  render(){
    const { marksClassByColumn, columnId, title, userValue } = this.props;
    if(marksClassByColumn[columnId] && marksClassByColumn[columnId].fetched){
      console.log('marks',marksClassByColumn[columnId], userValue)
      return(<MarksClassByColumn
          gradeType={marksClassByColumn[columnId].gradeType}
          weight={marksClassByColumn[columnId].weight}
          marks={marksClassByColumn[columnId].marks}
          userValue={userValue}
          title={title}
        />)
    }else{
      return(<Loader key="loader" centerPadding />)
    }
  }
}
