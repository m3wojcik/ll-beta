import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import { fetchMarksClassAverage } from "../../actions/MarksActions";
import Loader from '../../components/helpers/Loader'
import MarksClassByColumn from '../../components/marks/MarksClassByColumn'

@connect((store) => {
   return {
    marksClassAverage: store.marks.marksClassAverage
  };
})
export default class MarksClassAverageContainer extends Component {
  componentDidMount(){
    const { groupId } = this.props;
    this.props.dispatch(fetchMarksClassAverage(groupId));
  }
  render(){
    const { marksClassAverage, groupId, title } = this.props;
    if(marksClassAverage[groupId] && marksClassAverage[groupId].fetched){
      return(<MarksClassByColumn
          average
          gradeType={marksClassAverage[groupId].gradeType}
          marks={marksClassAverage[groupId].averages}
          title={title}
        />)
    }else{
      return(<Loader key="loader" centerPadding />)
    }
  }
}
