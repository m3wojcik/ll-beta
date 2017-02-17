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
    this.props.dispatch(fetchMarksClassByColumn(columnId));
  }
  render(){
    const { marksClassByColumn, columnId, title } = this.props;
    if(marksClassByColumn[columnId] && marksClassByColumn[columnId].fetched){
      return(<MarksClassByColumn
          gradeType={marksClassByColumn[columnId].gradeType}
          marks={marksClassByColumn[columnId].marks}
          title={title}
        />)
    }else{
      return(<Loader key="loader" centerPadding />)
    }
  }
}
