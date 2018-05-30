import React, { Component } from 'react';
import PaymentsLessonsList from './PaymentsLessonsList'
import {isDateLowerThanToday, addMinutes} from '../../actions/Functions'
export default class PaymentLessons extends Component {
  constructor(props) {
    super(props);
    this.state = {startIndex: 0, endIndex: 10, step: 10}
  }
  componentWillMount(){
    let {lessons} = this.props
    const {endIndex, step} = this.state
    let newStartIndex = 0, newEndIndex = endIndex, i = 0, foundIndex = false
    const firstLessonDate =  new Date(lessons[0].date)
    const lastLessonDate =  new Date(lessons[lessons.length-1].date)

    if(!isDateLowerThanToday(firstLessonDate)){
      foundIndex = true
    }else if(isDateLowerThanToday(lastLessonDate)){
      foundIndex = true
      newStartIndex = lessons.length - endIndex
      newEndIndex = lessons.length - 1
    }
    lessons.forEach(lesson => {
      let hoursMinutes = lesson.time.split(":")
      let lessonDate = new Date(lesson.date)
      lessonDate.setHours(hoursMinutes[0])
      lessonDate.setMinutes(hoursMinutes[1])
      lesson.dateTime = lessonDate
      if(!isDateLowerThanToday(lessonDate) && !foundIndex){
        foundIndex = true
        newStartIndex = i
        newEndIndex = Math.min(i + step, lessons.length);
        console.log('lesson',lesson, i , i+ step);
      }
      i++
    })
    this.setState({
      startIndex: newStartIndex,
      endIndex: newEndIndex
    })
  }
  handlePrevClick = () =>{
    const {startIndex, step} = this.state

    let newStartIndex = 0
    if(startIndex > step){
      newStartIndex = startIndex - step
    }
    this.setState({
      startIndex: newStartIndex
    })  
  }
  handleNextClick = () =>{
    const {endIndex, step} = this.state
    const {lessons} = this.props
    let newEndIndex = lessons.length
    if(endIndex + step < lessons.length){
      newEndIndex = endIndex + step
    }
    this.setState({
      endIndex: newEndIndex
    })  
  }
  render(){
    const { lessons } = this.props;
    const {endIndex, startIndex} = this.state
    console.log("PaymentLessons", startIndex, endIndex, lessons.length)
    return(
      <PaymentsLessonsList 
        lessons={lessons} 
        startIndex={startIndex}
        endIndex={endIndex} 
        onPrevClick={this.handlePrevClick}
        onNextClick={this.handleNextClick}
      />
    )
  }
}
PaymentLessons.propTypes = {
  lessons: React.PropTypes.array.isRequired
}
