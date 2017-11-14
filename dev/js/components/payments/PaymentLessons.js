import React, { Component } from 'react';
import PaymentLesson from './PaymentLesson'
export default class PaymentLessons extends Component {

  render(){
    const { lessons } = this.props;
    const mappedLessons = lessons.map(
      (lesson, i) =>
      <PaymentLesson key={i} lesson={lesson} />
    )
    return(
      <ul className="md-list md-list-divider">{mappedLessons}</ul>
    )
  }
}
PaymentLessons.propTypes = {
  lessons: React.PropTypes.array.isRequired
}
