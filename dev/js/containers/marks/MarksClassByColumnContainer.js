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
  componentWillMount(){
    const { columnId } = this.props;
    this.props.dispatch(fetchMarksClassByColumn(columnId));
  }
  render(){
    const { marksClassByColumn, columnId } = this.props;
    console.log(marksClassByColumn[columnId].fetched);
    if(!marksClassByColumn[columnId].fetched){
      return(<Loader key="loader" centerPadding />)
    }else{
      return(<MarksClassByColumn
          gradeType={marksClassByColumn[columnId].gradeType}
          marks={marksClassByColumn[columnId].marks}
        />)
    }
  }
}
