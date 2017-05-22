import React, { Component } from 'react';
import Label from './../helpers/Label'
import {groupStatus} from '../../actions/config'

export default class ClassDetailsStatus extends Component {

  render(){
    const { status, details } = this.props;
    let classDetails = []
    if(details.attendance_checked){
      classDetails.push(
        <li key="attendance_checked">
          <Label label={groupStatus["attendance_checked"].label} className={groupStatus["attendance_checked"].class} />
        </li>
      )
    }
    if(details.homework_checked){
      classDetails.push(
        <li key="homework_checked">
          <Label label={groupStatus["homework_checked"].label} className={groupStatus["homework_checked"].class} />
        </li>
      )
    }
    if(details.lesson_object_added){
      classDetails.push(
        <li key="lesson_object_added">
          <Label label={groupStatus["lesson_object_added"].label} className={groupStatus["lesson_object_added"].class} />
        </li>
      )
    }
    if(details.online){
      classDetails.push(
        <li key="online">
          <Label label={groupStatus["online"].label} className={groupStatus["online"].class} />
        </li>
      )
    }
    if(details.files_added){
      classDetails.push(
        <li key="files_added">
          <Label label={groupStatus["files_added"].label} className={groupStatus["files_added"].class} />
        </li>
      )
    }
    if(details.tests_added){
      classDetails.push(
        <li key="tests_added">
          <Label label={groupStatus["tests_added"].label} className={groupStatus["tests_added"].class} />
        </li>
      )
    }
    const statusElement = (
      status ?
        <li>
            <Label label={status.label} customColor={status.color} />
        </li>
      :null
    )
    return(
      <div className="card-section">
        <ul className="clean-list list-horizontal">
          {statusElement}
          {classDetails}
        </ul>
      </div>
    )
  }
}
